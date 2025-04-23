import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    const products = await this.prisma.product.findMany();
    return products;
  }

  async create(dto: ProductDto, userId: number) {
    console.log(dto, userId);
    const product = await this.prisma.product.create({
      data: {
        name: dto.name,
        category: dto.category,
        description: dto.description,
        Price: dto.Price,
        image: dto.image,
        qty: dto.qty,
        postedBy: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return product;
  }
}
