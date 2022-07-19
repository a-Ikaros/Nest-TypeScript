import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndexController } from './index/index.controller';
import { IndexModule } from './index/index.module';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { IndexService } from './index/index.service';

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'admin123',
  database: 'Ikaros',
  entities: [__dirname + '/./**/*.entity.{js,ts}'],
  synchronize: true,
  logging: false,
})
  .then((connection) => {
    // 这里可以写实体操作相关的代码
  })
  .catch((error) => console.log(error));
@Module({
  imports: [IndexModule],
  controllers: [AppController, IndexController],
  providers: [AppService,IndexService],
})
export class AppModule {}
