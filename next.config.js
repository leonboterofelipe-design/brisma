/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  async headers() {
    // Evita que se indexen paginaciones o rutas /page/ duplicadas.
    return [{ source: '/page/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] }];
  },
};
