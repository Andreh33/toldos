import Image from 'next/image';
import Link from 'next/link';
import { EMAIL, PHONE } from '@/lib/constants';
import { ZONES } from '@/lib/zones';

export function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-sand-50 py-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[auto,1fr,1fr,1fr]">
          <div className="flex items-start gap-3">
            <Image
              src="/logo/logo.jpg"
              alt="Toldos Noa"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-xl tracking-display text-ink-900">Toldos Noa</p>
              <p className="text-sm text-ink-600">Toldos a medida</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-ink-600">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              <li>
                <a href={`tel:${PHONE.e164}`} className="hover:text-sun-500">
                  Tel. {PHONE.display}
                </a>
              </li>
              <li>
                {/* TODO: reemplazar por el email real del cliente */}
                <a href={`mailto:${EMAIL}`} className="hover:text-sun-500">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-ink-600">Zonas</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              {ZONES.map((z) => (
                <li key={z.ciudad}>
                  <Link href={`/toldos-en/${z.ciudad}`} className="hover:text-sun-500">
                    Toldos en {z.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-ink-600">
              Enlaces
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink-700">
              <li>
                <Link href="/" className="hover:text-sun-500">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-sun-500">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/resenas" className="hover:text-sun-500">
                  Reseñas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-sun-500">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/consejos" className="hover:text-sun-500">
                  Consejos
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="hover:text-sun-500">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-sun-500">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-sun-500">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-sand-200 pt-6 text-xs text-ink-600 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Toldos Noa. Todos los derechos reservados.</p>
          <p className="font-display italic tracking-display text-ink-700">
            Protege tu espacio con estilo y calidad
          </p>
        </div>
      </div>
    </footer>
  );
}
