import { Weather } from 'src/weather/entities/weather.entity';

export const weather: Weather = {
  id: 1,
  postcode: 'PE1',
  condition: 'Rainy',
  averageTempC: 10,
  maxTempC: 18.4,
  minTempC: 13.2,
  date: new Date('2022-09-03'),
};
