import { DataSource } from 'typeorm';
import 'dotenv/config'
import 'reflect-metadata'

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(`${process.env.POSTGRES_PORT}`),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,

    entities: ['src/core/entities/*.ts'],
    migrations: ['migrations/*.ts'],
})


export default AppDataSource;