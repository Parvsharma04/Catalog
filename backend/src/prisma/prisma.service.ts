import { Injectable, Global } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client'

@Global()
@Injectable()
export class PrismaService extends PrismaClient{
  constructor(){
    super({
      datasources:{
        db:{
          url: "postgresql://admin:1234@localhost:5432/catalog?schema=public"
        }
      }
    })
  }
}

