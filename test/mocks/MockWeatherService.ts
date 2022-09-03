import { Weather } from '../../src/weather/entities/weather.entity';
import { WeatherService } from '../../src/weather/weather.service';

export class MockWeatherService extends WeatherService {
  weathers: Weather[] = [];

  constructor() {
    super(null, null);
  }

  async findAll(
    query: Partial<Weather>,
  ): Promise<{ data: Weather[]; count: number }> {
    return Promise.resolve({
      data: this.weathers,
      count: this.weathers.length,
    });
  }
}
