import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createHash } from 'node:crypto';
import { db } from '@/lib/db';

const ContactSchema = z.object({
  name: z.string().min(2).max(60),
  surname: z.string().max(60).optional().or(z.literal('')),
  email: z.string().email().max(120),
  phone: z.string().max(20).optional().or(z.literal('')),
  message: z.string().min(10).max(1500),
  serviceInterest: z.string().max(40).optional().or(z.literal('')),
  consent: z.literal(true),
  website: z.string().max(0).optional().or(z.literal('')), // honeypot
});

function getIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0]!.trim();
  return req.headers.get('x-real-ip') ?? '0.0.0.0';
}

function hashIp(ip: string): string {
  return createHash('sha256').update(ip).digest('hex').slice(0, 32);
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid_input', issues: parsed.error.issues },
      { status: 400 }
    );
  }

  // Honeypot — silently accept and discard
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    await db.execute({
      sql: 'INSERT INTO contact_messages (name, surname, email, phone, message, service_interest, consent, ip_hash) VALUES (?, ?, ?, ?, ?, ?, 1, ?)',
      args: [
        parsed.data.name,
        parsed.data.surname || null,
        parsed.data.email,
        parsed.data.phone || null,
        parsed.data.message,
        parsed.data.serviceInterest || null,
        hashIp(getIp(req)),
      ],
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'database_error' }, { status: 500 });
  }
}
