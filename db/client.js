import pg from 'pg';

const db = new pg.Client(process.env.DATABASE_URL);
await db.connect();

export default db;