import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { COFFEE_BRAND } from './coffees.constants';

// dummy injectable
@Injectable()
class CoffeeBrandsFactory {
  async create() {
    // simulate fetching data from db here
    let result = await Promise.resolve(['brew buddy', 'nescafe'])
    return result;
  }
}

@Module({
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: COFFEE_BRAND,
      useFactory: async (brandFactory: CoffeeBrandsFactory) => await brandFactory.create(),
      inject: [CoffeeBrandsFactory],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
