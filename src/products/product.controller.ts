import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Res() response: Response, @Body() product: Product) {
    try {
      const newProduct = await this.productService.create(product);
      return response.status(201).json(newProduct);
    } catch (error) {
      response.status(500).json({ message: `Error: ${error}` });
    }
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findProductById(id);
  }
}
