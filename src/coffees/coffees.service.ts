import {Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { COFFEE_BRAND } from './coffees.constants';

// this scope bubbles up, so despite the controller being singleton, it will still also turn into a REQUEST scope
@Injectable({scope: Scope.REQUEST})
export class CoffeesService {
  constructor(
    @Inject(COFFEE_BRAND) coffeeBrands: string[]
  ){
    console.log('coffee service instanciated');
  }
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Espresso',
      brand: 'Starbrew',
      flavors: ['strong', 'bitter', 'chocolate'],
    },
    {
      id: 2,
      name: 'Cappuccino',
      brand: 'CoffeeHouse',
      flavors: ['creamy', 'mild', 'vanilla'],
    },
    {
      id: 3,
      name: 'Latte',
      brand: 'Daily Brew',
      flavors: ['smooth', 'sweet', 'caramel'],
    },
    {
      id: 4,
      name: 'Mocha',
      brand: 'Dark Beans',
      flavors: ['chocolate', 'milky', 'hazelnut'],
    },
  ];

  findAll(){
    return this.coffees;
  }

  findOne(id: string){
    let coffee =  this.coffees.find((item)=>item.id === Number(id))
    if(!coffee){
        throw new NotFoundException(`Coffee with ${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any){
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto
  }

  update(id: string, updateCoffeeDto: any){
    const existingCoffee = this.findOne(id);
    if(existingCoffee){
        // update the existing entity
    }
  }

  remove(id: string){
    const coffeeIndex = this.coffees.findIndex(item => item.id === Number(id));
    if(coffeeIndex >=0){
        this.coffees.splice(coffeeIndex, 1);
    }
  }
}
