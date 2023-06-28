import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  seq: number;

  @Field(() => String)
  @Column({ type: 'varchar', length: '20', nullable: false })
  name: string;

  @Field(() => Int)
  @Column({ type: 'smallint', nullable: false })
  age: number;
}
