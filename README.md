This App uses https://www.weatherapi.com/ , a key will have to be generated

This App uses a local connection to SSMS, the repository contains a SQL file for creating the PostcodeWeather Table, however any table could be used by changing the name in the weather.entity class 

### Environment Variables

Config Values are store in a .env file using these defaults:

DB_HOST=<servername>

DB_PORT=<port>

DB_USERNAME=<database username>

DB_PASSWORD=<database password>

API_KEY=<API_KEY for weatherapi.com>

**A .env.example file is held in the repository**

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

```

## Test

```bash
# unit tests
$ npm run test
```
