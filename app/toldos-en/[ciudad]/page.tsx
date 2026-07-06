import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ZoneLanding } from '@/components/ZoneLanding';
import { ZONES, getZone } from '@/lib/zones';
import { SITE } from '@/lib/constants';

type Params = { ciudad: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return ZONES.map((z) => ({ ciudad: z.ciudad }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { ciudad } = await params;
  const zone = getZone(ciudad);
  if (!zone) return {};
  return {
    title: zone.metaTitle,
    description: zone.metaDescription,
    alternates: { canonical: `/toldos-en/${zone.ciudad}` },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      siteName: 'Toldos Noa',
      title: `${zone.metaTitle} | Toldos Noa`,
      description: zone.metaDescription,
      url: `${SITE.url}/toldos-en/${zone.ciudad}`,
    },
  };
}

export default async function ZonaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { ciudad } = await params;
  const zone = getZone(ciudad);
  if (!zone) notFound();
  return <ZoneLanding data={zone} />;
}
