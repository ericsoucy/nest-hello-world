import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';

describe('LocationController', () => {
  let locationController: LocationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
    }).compile();

    locationController = app.get<LocationController>(LocationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations: ['location1', 'location2', 'location3'],
      });
    });
  });
});
