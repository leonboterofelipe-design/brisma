/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Permite compilar en otra carpeta (útil si OneDrive bloquea .next): NEXT_DIST_DIR=.next-preview
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [{ source: '/ley-insolvencia-persona-natural', destination: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=173897', permanent: false }];
  },
  async headers() {
    // Evita que se indexen paginaciones o rutas /page/ duplicadas.
    return [{ source: '/page/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] }];
  },
};
