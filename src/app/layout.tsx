import React from 'react';
import cx from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';

import BackToTop from '@/components/BackToTop';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { THEME_MODE_KEY } from '@/data/contants';
import { ThemeMode } from '@/types/enums';

import '../styles/base.scss';
import '../styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const helvetica = localFont({
  src: [
    {
      path: '../styles/fonts/Helvetica.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../styles/fonts/Helvetica-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-helvetica'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oluwadamilola.me'),
  title: {
    template: 'Oluwadamilola, Senior Frontend Engineer | %s',
    default: 'Oluwadamilola, Senior Frontend Engineer'
  },
  description:
    'Crafting scalable, user-friendly, and reliable web products with outstanding performance.',
  generator: 'Oluwadamilola Babalola',
  applicationName: `Oluwadamilola, Senior Frontend Engineer`,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Oluwadamilola Babalola',
    'Portfolio',
    'Oluwadamilola Babalola Portfolio',
    'Frontend Engineer',
    'Oluwadamilola, Senior Frontend Engineer',
    'Oluwadamilola Babalola - Senior Frontend Engineer',
    'Oluwadamilola Babalola Senior Frontend Engineer',
    'Babalola Frontend Engineer',
    'Oluwadamilola Frontend Engineer',
    'Oluwadamilola',
    'Babalola',
    'Senior Frontend Engineer',
    'Software Engineer'
  ],
  creator: 'Oluwadamilola Babalola',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    url: 'https://oluwadamilola.me',
    siteName: 'Oluwadamilola, Senior Frontend Engineer',
    type: 'website',
    images: {
      url: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566195/my-portfolio/og-image_qyxxjr.png',
      alt: 'Oluwadamilola, Senior Frontend Engineer',
      width: 1200,
      height: 630
    }
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@monsieurdammy',
    images: {
      url: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566200/my-portfolio/twitter-image_m1izdt.png',
      alt: 'Oluwadamilola, Senior Frontend Engineer',
      width: 1200,
      height: 630
    }
  },
  icons: {
    icon: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566249/my-portfolio/favicon_jye8fy.ico',
    shortcut: [
      'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566192/my-portfolio/logo-full_m1eqd5.png'
    ],
    apple: [
      {
        url: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566179/my-portfolio/apple-touch-icon_lexsm5.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566178/my-portfolio/android-chrome-512x512_opb9vt.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: 'https://res.cloudinary.com/ds8bd6wxr/image/upload/v1713566177/my-portfolio/android-chrome-192x192_bugayq.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    'max-video-preview': -1,
    'max-image-preview': 'standard',
    'max-snippet': -1
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={cx(inter.variable, helvetica.variable, 'font-sans relative')}>
        <ThemeProvider
          attribute='class'
          storageKey={THEME_MODE_KEY}
          enableSystem
          defaultTheme={ThemeMode.Dark}
        >
          <div className='mx-auto min-h-screen max-w-screen-xl px-4 md:px-8 lg:px-12 xl:px-20 '>
            {children}
          </div>
          <ThemeSwitcher />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
