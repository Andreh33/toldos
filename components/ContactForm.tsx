'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { SERVICES } from '@/lib/services';

const schema = z.object({
  name: z.string().min(2, 'Nombre demasiado corto').max(60),
  surname: z.string().max(60).optional().or(z.literal('')),
  email: z.string().email('Email no válido').max(120),
  phone: z
    .string()
    .min(6, 'Teléfono demasiado corto')
    .max(20)
    .optional()
    .or(z.literal('')),
  message: z.string().min(10, 'Cuéntanos un poco más').max(1500),
  serviceInterest: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
  website: z.string().max(0).optional().or(z.literal('')), // honeypot
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const params = useSearchParams();
  const initialService = params.get('servicio') ?? '';

  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: String(formData.get('name') ?? ''),
      surname: String(formData.get('surname') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      message: String(formData.get('message') ?? ''),
      serviceInterest: String(formData.get('serviceInterest') ?? ''),
      consent: formData.get('consent') === 'on',
      website: String(formData.get('website') ?? ''),
    };

    const result = schema.safeParse(raw);
    if (!result.success) {
      const fe: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fe[key]) fe[key] = issue.message;
      }
      setErrors(fe);
      return;
    }

    setPending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error('Network error');
      toast.success('Mensaje enviado', {
        description: 'Te respondemos lo antes posible.',
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error('No se pudo enviar', {
        description: 'Inténtalo de nuevo o escríbenos por WhatsApp.',
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            autoComplete="given-name"
            aria-required="true"
            aria-invalid={!!errors.name}
            className="mt-2"
          />
          {errors.name && (
            <p role="alert" aria-live="polite" className="mt-1 text-xs text-terracotta-500">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="surname">Apellidos</Label>
          <Input id="surname" name="surname" autoComplete="family-name" className="mt-2" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            className="mt-2"
          />
          {errors.email && (
            <p role="alert" aria-live="polite" className="mt-1 text-xs text-terracotta-500">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Opcional"
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="serviceInterest">Servicio de interés</Label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          defaultValue={initialService}
          className="mt-2 flex h-11 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-2 text-sm text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-400 focus-visible:ring-offset-2"
        >
          <option value="">Sin preferencia</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="message">¿En qué te ayudamos?</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          aria-required="true"
          aria-invalid={!!errors.message}
          placeholder="Cuéntanos qué tipo de espacio quieres cubrir, medidas aproximadas y cualquier detalle que nos ayude…"
          className="mt-2"
        />
        {errors.message && (
          <p role="alert" aria-live="polite" className="mt-1 text-xs text-terracotta-500">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — invisible para humanos */}
      <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">No rellenar</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="consent" name="consent" aria-required="true" />
        <Label htmlFor="consent" className="text-sm leading-snug text-ink-700">
          He leído y acepto la{' '}
          <a href="/privacidad" className="text-sun-500 underline-offset-2 hover:underline">
            política de privacidad
          </a>
          .
        </Label>
      </div>
      {errors.consent && (
        <p role="alert" aria-live="polite" className="-mt-3 text-xs text-terracotta-500">
          {errors.consent}
        </p>
      )}

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? 'Enviando…' : 'Enviar mensaje'}
      </Button>
    </form>
  );
}
