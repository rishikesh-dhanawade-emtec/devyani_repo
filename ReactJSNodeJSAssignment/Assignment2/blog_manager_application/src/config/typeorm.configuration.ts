import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeORMConfiguration: TypeOrmModuleOptions = {
  username: 'root',
  password: 'root',
  port: 3306,
  database: 'blogManagerGraphql',
  type: 'mysql',
  host: 'localhost',

  // find any class that has .entity.ts or .entity.js in the file name
  entities: [__dirname + '/../**/*.entity.{ts,js}'],

  // when you want to create the tables using Entity classes, set it to true
  // not recommended for production
  synchronize: false,
};
