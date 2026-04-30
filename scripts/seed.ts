import { config as loadEnv } from 'dotenv';
import { createClient } from '@libsql/client';

loadEnv({ path: '.env.local' });
loadEnv();
import { REVIEWS_SEED } from '../lib/reviews-seed';

async function main() {
  if (!process.env.TURSO_DATABASE_URL) {
    throw new Error('TURSO_DATABASE_URL not set. Configure .env.local first.');
  }

  const db = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  console.log('• Creating tables…');
  await db.execute(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      author TEXT NOT NULL,
      location TEXT NOT NULL,
      rating INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
      body TEXT NOT NULL,
      service TEXT,
      approved INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      surname TEXT,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT NOT NULL,
      service_interest TEXT,
      consent INTEGER NOT NULL,
      ip_hash TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.execute(
    'CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(approved, created_at DESC);'
  );

  const existing = await db.execute('SELECT COUNT(*) as c FROM reviews');
  const count = Number(existing.rows[0]?.c ?? 0);
  if (count > 0) {
    console.log(`• Reviews table already has ${count} rows. Skipping seed.`);
    return;
  }

  console.log('• Seeding initial reviews…');
  for (const r of REVIEWS_SEED) {
    await db.execute({
      sql: 'INSERT INTO reviews (author, location, rating, body, service, approved, created_at) VALUES (?, ?, ?, ?, ?, 1, ?)',
      args: [r.author, r.location, r.rating, r.body, r.service, r.created_at],
    });
  }

  console.log(`✔ Inserted ${REVIEWS_SEED.length} demo reviews (approved = 1).`);
  console.log('✔ Done.');
}

main().catch((err) => {
  console.error('✗ Seed failed:', err);
  process.exit(1);
});
