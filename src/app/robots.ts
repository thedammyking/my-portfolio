import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/']
      }
    ],
    sitemap: 'https://oluwadamilola.me/sitemap.xml'
  };
}

export const dynamic = 'error';
