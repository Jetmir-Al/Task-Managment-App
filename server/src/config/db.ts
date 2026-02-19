import mysql from 'mysql2/promise';
import { env } from './env';

// for performance
export const db = mysql.createPool({
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    port: Number(env.MYSQL_PORT),
    ssl: { rejectUnauthorized: false },
    waitForConnections: true,
    connectionLimit: 10,
});

