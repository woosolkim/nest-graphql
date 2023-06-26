import { Resolver, Query, Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Resolver('Item')
export class ItemsResolver {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  @Query(() => [Item])
  async getItems(@Args('id') id: number): Promise<Item[]> {
    const a = await this.itemsRepository.find({
      where: {
        id,
      },
    });
    return a;
  }
}
