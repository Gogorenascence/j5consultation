const { createWriteStream } = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Define your routes here
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/articles', changefreq: 'weekly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.5 },
  // Add more routes here if needed
];

// Generate the sitemap
async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://www.j5healthcenters.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemapStream.pipe(writeStream);

  // Write each route to the sitemap
  routes.forEach(route => {
    sitemapStream.write(route);
  });

  sitemapStream.end();

  writeStream.on('finish', () => {
    console.log('Sitemap created successfully!');
  });
}

generateSitemap().catch(err => {
  console.error('Error generating sitemap:', err);
});
