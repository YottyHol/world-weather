import { Injectable } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';
import { readFileSync } from 'fs';
import axios from 'axios';
const postcodes = JSON.parse(readFileSync('./postcodes.json', 'utf-8'));
const params = {
  key: 'c15d39fbe5c5459e991181840220209',
  channelId: '',
  dt: '2010-01-01',
  q: 'SW1',
};
@Injectable()
export class WeatherService {
  create(createWeatherDto: CreateWeatherDto) {
    return 'This action adds a new weather';
  }

  async collectData() {
    const response = await axios.get(
      'http://api.weatherapi.com/v1/history.json',
      {
        params,
      },
    );
    console.log(response.data);
    return postcodes.postcodes;
  }
  findAll() {
    return `This action returns all weather`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weather`;
  }

  update(id: number, updateWeatherDto: UpdateWeatherDto) {
    return `This action updates a #${id} weather`;
  }

  remove(id: number) {
    return `This action removes a #${id} weather`;
  }
}
