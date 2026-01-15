import { empty } from 'rxjs';
import { Column, Entity, IsNull, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  quantity: number;

  @Column()
  pricePerUnit: number;

  @Column({ default: false })
  hasImage: boolean;

  @Column({default:'empty'})
  //   @Image()
  img?: String;
}
