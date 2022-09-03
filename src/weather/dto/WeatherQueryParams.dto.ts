import { PartialType } from '@nestjs/mapped-types';
import { Weather } from '../entities/weather.entity';

export class WeatherQueryParams extends PartialType(Weather) {}
