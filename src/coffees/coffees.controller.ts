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

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll(@Response() response, @Query() paginatedQuery) {
    // return ['mocha', 'laate'].toString();
    let { limit, offset } = paginatedQuery;
    return response
      .status(200)
      .send(
        `Will return all coffees in paginated manner, limit: ${limit} offset: ${offset}`,
      );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Returning coffee with id: ${id}`;
  }

  @Post()
  //   trying status codes here
  //   @HttpCode(HttpStatus.BAD_REQUEST)
  create(@Body('name') body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: 'string', @Body() body) {
    return `This action requires ${id} to be updated with ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  delete(@Param('id') id: 'string') {
    return `This action will delete the record with ${id}`;
  }
}
