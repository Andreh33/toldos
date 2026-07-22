import { createClient, type Client } from '@libsql/client';

let _client: Client | null = null;

function makeClient(): Client {
  const url = process.env.TURSO_DATABASE_URL;
  if (!url) {
    // Stub client used when env vars aren't configured (e.g. during a first
    // build before secrets are wired). Anything that touches the DB throws so
    // callers can fall back to seed data.
    return {
      execute: async () => {
        throw new Error('TURSO_DATABASE_URL not configured');
      },
    } as unknown as Client;
  }
  return createClient({ url, authToken: process.env.TURSO_AUTH_TOKEN });
}

export const db: Client = new Proxy({} as Client, {
  get(_t, prop) {
    if (!_client) _client = makeClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (_client as any)[prop];
  },
});
