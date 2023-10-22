import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(product: Product) {
    return await this.productModel.create(product);
  }

  async findAll() {
    return await this.productModel.find({});
  }

  async findProductById(id: string) {
    return await this.productModel.findById({ _id: id });
  }
}
