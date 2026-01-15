import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemFromUser } from './dto/item';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async getById(itemId: number): Promise<Item | null> {
    const item = await this.itemRepository.findOne({ where: { id: itemId } });
    return item;
  }

  async createItem({
    name,
    type,
    pricePerUnit,
    quantity,
    hasImage,
  }: ItemFromUser) {
    console.log({
    name,
    type,
    pricePerUnit,
    quantity,
    hasImage,
  });
    
    const result = await this.itemRepository.save({
      name,
      type,
      pricePerUnit,
      quantity,
    });
    return result;
  }
  async buyItem(id: number, quantity: number) {
    const item = await this.getById(Number(id));
    if (!item) {
      console.log('no item');
      return false;
    }
    const result = await this.itemRepository.save({
      ...item,
      quantity,
    });
    return result;
  }

  addImg(id: number, img: string) {
    //adding img to item from the id
  }
}
