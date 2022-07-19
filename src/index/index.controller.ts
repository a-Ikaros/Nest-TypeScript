import { Controller, Get, Param, Post, Request } from '@nestjs/common';
import { IndexService } from './index.service';
@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}
  @Get()
  getList() {
    const res=this.indexService.getIndexList()
    return res
  }
  // @Post('addList')
  // postList(){
  //     return [1,1,1]
  // }
  @Get(':id')
  getParams(@Param() param) {
    return param;
  }
//   @Get()
//   getQuery(@Request() req) {
//     return req.query;
//   }
}
