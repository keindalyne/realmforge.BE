import pg from 'pg';

const db = new pg.Client({ connectionString: process.env.DATABASE_URL, });
await db.connect();
console.log('✅ Connected to PostgresSQL');

export default db;