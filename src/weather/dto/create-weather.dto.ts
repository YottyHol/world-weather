import { Weather } from '../entities/weather.entity';
import { OmitType } from '@nestjs/mapped-types';
export class CreateWeatherDto extends OmitType(Weather, ['id']) {}
