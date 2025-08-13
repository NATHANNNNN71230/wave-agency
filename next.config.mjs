/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique (génère un dossier /out prêt à héberger)
  output: 'export',
  // Autorise <Image> sans l’optimiseur serveur (obligatoire en statique)
  images: { unoptimized: true },
  trailingSlash: false,
};
export default nextConfig;
