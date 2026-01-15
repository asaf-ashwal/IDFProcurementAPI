import { EntitySchema } from 'typeorm';
import { Item } from './item.entity';

export const ItemSchema = new EntitySchema<Item>({
  name: 'Item',
  target: Item,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      unique: true,
    },
    type: { type: String },
    name: { type: String },
    quantity: { type: Number },
    pricePerUnit: { type: Number },
    hasImage: { type: Boolean, default: false },
    img: { type: String, nullable: true },
  },
});
