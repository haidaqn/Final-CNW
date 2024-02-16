import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './Books/Book.module';

@Module({
  imports: [BookModule,ConfigModule.forRoot(), MongooseModule.forRoot('mongodb://localhost:27017/asmweb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
