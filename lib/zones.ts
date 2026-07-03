import type { ZoneData } from '@/lib/zone-types';
import { madrid } from '@/lib/zones/madrid';
import { tarragona } from '@/lib/zones/tarragona';
import { reus } from '@/lib/zones/reus';
import { salou } from '@/lib/zones/salou';
import { cambrils } from '@/lib/zones/cambrils';
import { vilaSeca } from '@/lib/zones/vila-seca';
import { elVendrell } from '@/lib/zones/el-vendrell';
import { valls } from '@/lib/zones/valls';

export const ZONES: ZoneData[] = [
  madrid,
  tarragona,
  reus,
  salou,
  cambrils,
  vilaSeca,
  elVendrell,
  valls,
];

export function getZone(ciudad: string): ZoneData | undefined {
  return ZONES.find((z) => z.ciudad === ciudad);
}
