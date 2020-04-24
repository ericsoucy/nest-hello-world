import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

interface ILocationDto {
  locations: string[];
}
@Controller()
export class AppController {
  @Get()
  @Render('list.hbs')
  listLocations(): ILocationDto {
    return {
      locations: ['location1', 'location2', 'location3'],
    };
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
