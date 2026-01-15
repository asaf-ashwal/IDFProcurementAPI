import { Controller, Get, Post } from '@nestjs/common';
import { BudgetService } from './budget.service';

@Controller('budget')
export class BudgetController {
  constructor(private budgetService: BudgetService) {}

  @Get()
  async getb() {
    console.log('start');
    return await this.budgetService.getBuget();
  }
  @Post()
  async cr() {
    return await this.budgetService.updateBudget(1000);
  }
}
