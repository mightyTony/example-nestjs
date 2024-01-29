import { Body, Controller, Get, HttpCode, Param, Post, Redirect } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/request/CreateCatDto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createCatDto: CreateCatDto){
    return 'this action adds a new cat';
  }

  @Get('/red')
  @Redirect(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
  redirect() {

  }
  
  @Get()
  @HttpCode(300)
  helloworld(): string {
    return this.catsService.getHello();
  }
  
  @Get(':id')
  findOneCat(@Param() params: any): string {
    console.log(params.id);
    return `this is a #${params.id } cat`;
  }
}
