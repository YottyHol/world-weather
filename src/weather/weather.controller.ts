import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CreateWeatherDto } from './dto/create-weather.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post('collectData')
  collectData() {
    return this.weatherService.collectData();
  }

  @Get()
  findAll() {
    return this.weatherService.findAll();
  }
}
