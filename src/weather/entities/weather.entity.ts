import { Entity, Column } from 'typeorm';
import {
  IsDate,
  MinLength,
  MaxLength,
  IsString,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

@Entity({ name: 'dbo.PostcodeWeather' })
export class Weather {
  @Column({ nullable: false })
  @IsString()
  @MinLength(5)
  @MaxLength(7)
  @Type(() => String)
  postcode: string;

  @Column({ nullable: true })
  @IsString()
  @Type(() => String)
  condition: string;

  @Column('decimal', { precision: 5, scale: 5, nullable: true })
  @IsNumber()
  @Type(() => Number)
  averageTempC: number;

  @Column('decimal', { precision: 5, scale: 5, nullable: true })
  @IsNumber()
  @Type(() => Number)
  maxTempC: number;

  @Column('decimal', { precision: 5, scale: 5, nullable: true })
  @IsNumber()
  @Type(() => Number)
  minTempC: number;

  @Column({ nullable: false })
  @IsDate()
  @Type(() => Date)
  date: Date;
}
