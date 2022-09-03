import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { weather } from '../../test/data/weather.data';
import { MockWeatherService } from '../../test/mocks/MockWeatherService';

import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { DataSource } from 'typeorm';

describe('Weather Tests', () => {
  let app: INestApplication;
  const weatherService = new MockWeatherService();

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DataSource],
      controllers: [WeatherController],
      providers: [WeatherService, DataSource],
    })
      .overrideProvider(WeatherService)
      .useValue(weatherService)
      .compile();

    weatherService.weathers.push(weather);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Assert Weather findAll gets all weathers', async () => {
    const response = await weatherService.findAll(null);
    return request(app.getHttpServer())
      .get('/weather')
      .expect(200)
      .expect({ data: response.data, count: response.count });
  });
});
