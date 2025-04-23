import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CustomRequest } from 'src/user/user.controller';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Req() req: CustomRequest) {
    return this.productService.create(req.body, req.user.sub);
  }
}
