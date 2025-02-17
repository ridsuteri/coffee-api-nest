import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return ['mocha', 'laate'].toString();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return `Returning coffee with id: ${id}`;
  }
}
