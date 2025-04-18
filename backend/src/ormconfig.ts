import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'etl_app',
  synchronize: false, // migrations will manage schema
  logging: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'migrations',
});
