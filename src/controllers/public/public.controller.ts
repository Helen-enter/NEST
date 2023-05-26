import { Controller, Get, Param, Res } from "@nestjs/common";

@Controller('public')
export class PublicController {


  @Get(':filename')
  getImages(@Param('filename') img, @Res() res) {
    return res.sendfile(img, { root: '/public'})
  }
}
