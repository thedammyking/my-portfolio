import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oluwadamilola - A Frontend Engineer',
    short_name: `Oluwadamilola - A Frontend Engineer`,
    description:
      'Crafting scalable, user-friendly, and reliable web products with outstanding performance.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1a1a',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566183/my-portfolio/favicon-16x16_dkupgr.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566187/my-portfolio/favicon-32x32_m9w2bt.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566177/my-portfolio/android-chrome-192x192_bugayq.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566178/my-portfolio/android-chrome-512x512_opb9vt.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}

export const dynamic = 'error';
