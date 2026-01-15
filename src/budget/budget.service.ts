import { Injectable } from '@nestjs/common';

@Injectable()
export class BudgetService {
  getBuget() {
    // aweit
    let budget = getBuget();
    return budget;
  }
  isInTheBuget(cost: number) {
    // aweit
    const budget = this.getBuget();
    return budget < cost ? false : true;
  }
  reduceBuget(cost: number): boolean {
    // aweit
    const inBuget = this.isInTheBuget(cost);
    if (!inBuget) {
      console.log('Not enough money');
      return false;
    }
    // aweit
    this.reduceBuget(cost);
    return true;
  }
}
function getBuget(): number {
  let budget = 1000;
  return budget;
}
