import { Body, Controller, Param, Post } from '@nestjs/common';
import { BudgetService } from 'src/budget/budget.service';
import { ArrFromUser, ItemFromUser } from './dto/item';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(
    private budgetService: BudgetService,
    private itemService: ItemService,
  ) {}
  @Post()
  async buyItem(@Body() body: ArrFromUser) {
    const result: any = [];
    body.purchases.forEach(async (item) => {
      let newiItem: any = { ...item, id: 0 };
      if (!item.id) {
        newiItem = await this.itemService.createItem({
          name: item.name,
          type: item.type,
          hasImage: item.hasImage,
          pricePerUnit: item.pricePerUnit,
          quantity: item.quantity,
        });
        return;
      }
      const cost = item.pricePerUnit * item.quantity;
      const isEnoughMoney = this.budgetService.reduceBuget(cost);
      if (!isEnoughMoney) return false;
      newiItem = await this.itemService.buyItem(newiItem.id, newiItem.quantity);
      result.push({
        id: newiItem.id,
        newQuantity: newiItem.quantity,
        spent: cost,
      });
    });
    return result;
  }
}
