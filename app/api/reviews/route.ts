import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';

export const revalidate = 60;

const RATE = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 3;

function getIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0]!.trim();
  return req.headers.get('x-real-ip') ?? '0.0.0.0';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = RATE.get(ip);
  if (!entry || now > entry.reset) {
    RATE.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_PER_WINDOW) return true;
  entry.count += 1;
  return false;
}

const ReviewSchema = z.object({
  author: z.string().min(2).max(60),
  location: z.string().min(2).max(60),
  rating: z.number().int().min(1).max(5),
  body: z.string().min(20).max(600),
  service: z.string().max(40).optional(),
});

export async function GET() {
  try {
    const result = await db.execute(
      'SELECT id, author, location, rating, body, service, created_at FROM reviews WHERE approved = 1 ORDER BY created_at DESC'
    );
    return NextResponse.json({ reviews: result.rows });
  } catch (err) {
    return NextResponse.json({ error: 'database_error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const ip = getIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const parsed = ReviewSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid_input', issues: parsed.error.issues },
      { status: 400 }
    );
  }

  try {
    await db.execute({
      sql: 'INSERT INTO reviews (author, location, rating, body, service, approved) VALUES (?, ?, ?, ?, ?, 0)',
      args: [
        parsed.data.author,
        parsed.data.location,
        parsed.data.rating,
        parsed.data.body,
        parsed.data.service ?? null,
      ],
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'database_error' }, { status: 500 });
  }
}
