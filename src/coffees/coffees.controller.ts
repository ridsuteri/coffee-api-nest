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
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  //   trying status codes here
  //   @HttpCode(HttpStatus.BAD_REQUEST)
  create(@Body('name') body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: 'string', @Body() body) {
    return this.coffeesService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: 'string') {
    return this.coffeesService.remove(id);
  }
}
