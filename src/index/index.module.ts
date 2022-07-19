import { Module } from '@nestjs/common';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';
import { Index } from './index.entity';
@Module({
  imports: [Index],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
