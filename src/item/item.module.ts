import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemsResolver } from './item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemsResolver, ItemService],
})
export class ItemModule {}
