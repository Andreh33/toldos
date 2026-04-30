import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  href?: string;
  label?: string;
};

export function BackLink({ href = '/', label = 'Volver' }: Props) {
  return (
    <header className="container flex items-center justify-between py-6 lg:py-8">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm font-medium text-ink-700 transition-colors hover:text-sun-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-400 focus-visible:ring-offset-2 rounded-full"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 bg-sand-50 transition-all group-hover:-translate-x-0.5 group-hover:border-sun-400">
          <ArrowLeft className="h-4 w-4" />
        </span>
        {label}
      </Link>

      <Link href="/" aria-label="Ir al inicio" className="flex items-center gap-2">
        <Image
          src="/logo/logo.jpg"
          alt="Toldos Noa"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="hidden font-display text-base tracking-display text-ink-900 sm:inline">
          Toldos Noa
        </span>
      </Link>
    </header>
  );
}
