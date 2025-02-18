import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Response,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
@Controller('coffees')
export class CoffeesController {

  constructor(private readonly coffeesService: CoffeesService){}
    
  @Get('flavors')
  findAll(@Query() paginatedQuery) {
    // return ['mocha', 'laate'].toString();
    // let { limit, offset } = paginatedQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeesService.findOne(String(id));
  }

  @Post()
  //   trying status codes here
  //   @HttpCode(HttpStatus.BAD_REQUEST)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    // turns out the createCoffeeDto is in shape of 
    console.log(createCoffeeDto instanceof CreateCoffeeDto)
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: 'string', @Body() updateCoffeeDto:UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto)
  }

  @Delete(':id')
  delete(@Param('id') id: 'string') {
    return this.coffeesService.remove(id);
  }
}
