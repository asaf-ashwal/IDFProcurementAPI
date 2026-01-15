import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { BudgetModule } from 'src/budget/budget.module';
import { BudgetService } from 'src/budget/budget.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemSchema } from './item.schema';

@Module({
  imports:[BudgetModule,TypeOrmModule.forFeature([ItemSchema])],
  providers: [ItemService,BudgetService],
  controllers: [ItemController]
})
export class ItemModule {}
