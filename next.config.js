/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Permite compilar en otra carpeta (útil si OneDrive bloquea .next): NEXT_DIST_DIR=.next-preview
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async headers() {
    // Evita que se indexen paginaciones o rutas /page/ duplicadas.
    return [{ source: '/page/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] }];
  },
};
