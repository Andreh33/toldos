'use client';

import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SERVICES } from '@/lib/services';
import { cn } from '@/lib/utils';

const schema = z.object({
  author: z.string().min(2).max(60),
  location: z.string().min(2).max(60),
  rating: z.number().int().min(1).max(5),
  body: z.string().min(20).max(600),
  service: z.string().optional(),
});

export function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      author: String(fd.get('author') ?? ''),
      location: String(fd.get('location') ?? ''),
      rating,
      body: String(fd.get('body') ?? ''),
      service: String(fd.get('service') ?? '') || undefined,
    };
    const r = schema.safeParse(raw);
    if (!r.success) {
      toast.error('Revisa los campos', {
        description: r.error.issues[0]?.message ?? 'Datos no válidos',
      });
      return;
    }
    setPending(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(r.data),
      });
      if (!res.ok) throw new Error();
      toast.success('¡Gracias!', {
        description: 'Tu reseña queda pendiente de revisión y se publicará pronto.',
      });
      (e.target as HTMLFormElement).reset();
      setRating(5);
    } catch {
      toast.error('No se pudo enviar', {
        description: 'Inténtalo de nuevo en unos minutos.',
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-sand-50 p-7 shadow-card lg:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="author">Tu nombre</Label>
          <Input id="author" name="author" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="location">Localidad</Label>
          <Input id="location" name="location" required placeholder="Ej. Tarragona" className="mt-2" />
        </div>
      </div>

      <div>
        <Label htmlFor="service">Servicio</Label>
        <select
          id="service"
          name="service"
          className="mt-2 flex h-11 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-2 text-sm text-ink-900"
        >
          <option value="">Sin especificar</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label>Tu valoración</Label>
        <div className="mt-2 flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`${n} estrellas`}
              onClick={() => setRating(n)}
              className="rounded-full p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-400"
            >
              <Star
                className={cn(
                  'h-7 w-7 transition-all',
                  n <= rating ? 'fill-sun-400 stroke-sun-500' : 'stroke-sand-200'
                )}
                strokeWidth={1.5}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="body">Tu reseña</Label>
        <Textarea
          id="body"
          name="body"
          rows={5}
          required
          minLength={20}
          maxLength={600}
          placeholder="Cuéntanos cómo fue tu experiencia (mín. 20 caracteres)…"
          className="mt-2"
        />
      </div>

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? 'Enviando…' : 'Enviar reseña'}
      </Button>
      <p className="text-xs text-ink-600">
        Las reseñas se publican tras una revisión manual para evitar spam.
      </p>
    </form>
  );
}
