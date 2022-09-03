import { Injectable } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { Weather } from './entities/weather.entity';
import { readFileSync } from 'fs';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const postcodes = JSON.parse(readFileSync('./postcodes.json', 'utf-8'));
import { DataSource } from 'typeorm';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private weatherRepository: Repository<Weather>,
    private dataSource: DataSource,
  ) {}

  async collectData() {
    const weathers: CreateWeatherDto[] = [];

    //Currently just gets todays weather, would look to use moment to collect the last 3 months
    for (const pc of postcodes.postcodes) {
      const params = {
        key: process.env.API_KEY,
        dt: new Date(),
        q: pc,
      };

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
    }
    const saveWeather = weathers.map((data) => {
      const w = new Weather();
      Object.assign(w, data);
      return w;
    });

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const w of saveWeather) {
        await queryRunner.manager.save(w);
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
  async findAll() {
    const data = await this.weatherRepository.find();
    return data;
  }
}
