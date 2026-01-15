import { Injectable } from '@nestjs/common';
import { reed_file, write_file } from './utils/functions';

@Injectable()
export class BudgetService {
  async getBuget(): Promise<number> {
    let budget = await getBuget();
    return budget.currentBudget;
  }

  async isInTheBuget(cost: number): Promise<boolean> {
    const budget = await this.getBuget();
    return budget < cost ? false : true;
  }

  async reduceBuget(cost: number): Promise<boolean> {
    const budget = await this.getBuget();
    const inBuget = await this.isInTheBuget(cost);
    console.log(inBuget);
    
    if (!inBuget || budget < cost) {
      console.log('Not enough money');
      return false;
    }
    await this.updateBudget(cost);
    return true;
  }

  async updateBudget(cost: number) {
    const budget = await this.getBuget();
    const newB = {
      currentBudget: budget - cost,
    };

    await write_file(newB);
  }
}
function getBuget() {
  try {
    let budget = reed_file();
    return budget;
  } catch (error) {
    console.log(error);
  }
}
