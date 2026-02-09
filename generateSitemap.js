import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import data
import { sabadsData } from './src/data/sabadsData.js';
import { dhamsData } from './src/data/dhams.js';
import { rulesData } from './src/data/rulesData.js';
import { martyrsData } from './src/data/martyrs.js';

const BASE_URL = 'https://khejribachao.in'; 

// Helper function to escape special characters for XML (Critical for avoiding errors)
const escapeXml = (unsafe) => {
  if (typeof unsafe !== 'string') return unsafe;
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
};

// Current Date for lastmod
const currentDate = new Date().toISOString();

// Updated Static Routes (Including new Legal Pages)
const staticRoutes = [
  { url: '/', priority: '1.0', freq: 'daily' },
  { url: '/120sabad', priority: '0.9', freq: 'weekly' },
  { url: '/history', priority: '0.9', freq: 'monthly' },
  { url: '/news', priority: '0.9', freq: 'daily' },
  { url: '/sabadwani', priority: '0.8', freq: 'weekly' },
  { url: '/bishnoi', priority: '0.8', freq: 'monthly' },
  { url: '/guru', priority: '0.8', freq: 'monthly' },
  { url: '/rules', priority: '0.7', freq: 'monthly' },
  { url: '/incidents', priority: '0.7', freq: 'monthly' },
  { url: '/movements/bikaner-2026', priority: '0.8', freq: 'weekly' },
  { url: '/contact', priority: '0.5', freq: 'yearly' },
  { url: '/privacy-policy', priority: '0.3', freq: 'yearly' }, // Updated Name
  { url: '/terms-conditions', priority: '0.3', freq: 'yearly' }, // Updated Name
  { url: '/disclaimer', priority: '0.3', freq: 'yearly' }, // New Page
  { url: '/about-us', priority: '0.6', freq: 'yearly' }
];

const generateSitemap = () => {
    console.log('Generating Sitemap...');
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // 1. Add Static Routes
    staticRoutes.forEach(route => {
        xml += `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.freq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
    });

    // 2. Sabad Routes (High Priority)
    sabadsData.forEach(sabad => {
        if (sabad.id) {
            xml += `  <url>
    <loc>${BASE_URL}/sabadwani/${escapeXml(sabad.id.toString())}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
        }
    });

    // 3. Dham Routes
    Object.values(dhamsData).forEach(dham => {
         if (dham.id) {
            xml += `  <url>
    <loc>${BASE_URL}/dham/${escapeXml(dham.id.toString())}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
         }
    });

    // 4. Rule Routes
    rulesData.forEach(rule => {
        if (rule.id) {
            xml += `  <url>
    <loc>${BASE_URL}/rules/${escapeXml(rule.id.toString())}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
`;
        }
    });

    // 5. History / Martyr Routes
    if (martyrsData.individuals) {
        martyrsData.individuals.forEach(martyr => {
            if (martyr.id) {
                xml += `  <url>
    <loc>${BASE_URL}/history/martyr/${escapeXml(martyr.id.toString())}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
            }
        });
    }

    // 6. Village Routes
    if (martyrsData.villages) {
        martyrsData.villages.forEach(village => {
            if (village.id) {
                xml += `  <url>
    <loc>${BASE_URL}/history/village/${escapeXml(village.id.toString())}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;
            }
        });
    }

    xml += `</urlset>`;

    // Write file
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const publicDir = path.join(__dirname, 'public');
    
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)){
        fs.mkdirSync(publicDir);
    }

    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);
    
    console.log(`✅ Sitemap Generated Successfully!`);
    console.log(`📍 Location: ${sitemapPath}`);
    console.log(`🔗 Total URLs: ${xml.match(/<url>/g).length}`);
};

generateSitemap();