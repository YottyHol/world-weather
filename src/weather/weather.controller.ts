import { Controller, Get, Post } from '@nestjs/common';
import { WeatherService } from './weather.service';

import { readFileSync } from 'fs';
import { Weather } from './entities/weather.entity';
import { CreateWeatherDto } from './dto/create-weather.dto';
import axios from 'axios';
const postcodes = JSON.parse(readFileSync('./postcodes.json', 'utf-8'));

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post('collectData')
  async collectData() {
    const weathers: CreateWeatherDto[] = [];

    //Currently just gets todays weather, would look to use moment to collect the last 3 months
    for (const pc of postcodes.postcodes) {
      const params = {
        key: process.env.API_KEY,
        dt: new Date(),
        q: pc,
      };

      try {
        const response = await axios.get(
          'http://api.weatherapi.com/v1/history.json',
          {
            params,
          },
        );
        const weatherObject: CreateWeatherDto = {
          postcode: params.q,
          condition: response.data.forecast.forecastday[0].day.condition.text,
          minTempC: response.data.forecast.forecastday[0].day.mintemp_c,
          averageTempC: response.data.forecast.forecastday[0].day.avgtemp_c,
          maxTempC: response.data.forecast.forecastday[0].day.maxtemp_c,
          date: params.dt,
        };
        weathers.push(weatherObject);
      } catch (err) {
        return 500;
      }
    }
    const saveWeather = weathers.map((data) => {
      const w = new Weather();
      Object.assign(w, data);
      return w;
    });
    return this.weatherService.collectData(saveWeather);
  }

  @Get()
  findAll() {
    return this.weatherService.findAll();
  }
}
