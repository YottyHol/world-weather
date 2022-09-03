import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';
import { Weather } from './weather/entities/weather.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      port: parseInt(process.env.DB_PORT, 10) || 1433,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'world-weather',
      extra: { trustServerCertificate: true },
      entities: [Weather],
      logging: true,
    }),
    WeatherModule,
  ],
})
export class AppModule {}
