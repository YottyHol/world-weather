import { Injectable } from '@nestjs/common';

import { Weather } from './entities/weather.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, DataSource } from 'typeorm';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private weatherRepository: Repository<Weather>,
    private dataSource: DataSource,
  ) {}

  async collectData(saveWeather: Weather[]) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const w of saveWeather) {
        await queryRunner.manager.save(w);
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
  async findAll(query: Partial<Weather>) {
    const [data, count] = await this.weatherRepository.findAndCount({
      where: { postcode: Like(query.postcode), date: query.date },
    });

    return { data, count };
  }
}
