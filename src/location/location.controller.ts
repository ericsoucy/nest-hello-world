import { Controller, Get, Render } from '@nestjs/common';

interface ILocationDto {
  locations: string[];
}
@Controller()
export class LocationController {
  @Get()
  @Render('list.hbs')
  listLocations(): ILocationDto {
    return {
      locations: ['location1', 'location2', 'location3'],
    };
  }
}
