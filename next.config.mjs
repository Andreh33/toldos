/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  /**
   * Redirecciones permanentes (308).
   * Los cuatro primeros consolidan antiguas guías del blog que competían por
   * la misma búsqueda ("toldos en X") con las landings locales /toldos-en/*:
   * mismo intent, una sola URL — se elimina la canibalización de keywords.
   */
  async redirects() {
    return [
      { source: '/consejos/toldos-en-madrid', destination: '/toldos-en/madrid', permanent: true },
      { source: '/consejos/toldos-en-tarragona', destination: '/toldos-en/tarragona', permanent: true },
      { source: '/consejos/toldos-en-reus', destination: '/toldos-en/reus', permanent: true },
      { source: '/consejos/toldos-en-salou-cambrils', destination: '/toldos-en/salou', permanent: true },
    ];
  },
};

export default nextConfig;
