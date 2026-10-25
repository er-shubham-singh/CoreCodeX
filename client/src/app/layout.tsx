import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { PillNavbar } from '../components/common/PillNavbar';
import { Footer } from '../components/common/Footer';
import { siteConfig } from '../config/site.config';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'CoreCodeX | Next-Gen Digital & AI Engineering Agency',
  description:
    'CoreCodeX engineers ultra-responsive Next.js web applications, mobile platforms, enterprise AI integrations, and autonomous conversational chatbots for ambitious global businesses.',
  keywords: [
    'CoreCodeX',
    'Next.js development',
    'MERN stack agency',
    'AI integration services',
    'enterprise chatbots',
    'mobile app development',
    'custom machine learning',
    'Vadodara Gujarat tech agency',
    'Haridwar Uttarakhand tech agency',
    '3D web animation'
  ],
  authors: [
    { name: 'Sahil Prasad', url: 'https://corecodex.com' },
    { name: 'Shubham Singh', url: 'https://corecodex.com' }
  ],
  openGraph: {
    title: 'CoreCodeX | Next-Gen Digital & AI Engineering Agency',
    description: 'Scaling future-proof digital products, high-performance web applications, and enterprise AI.',
    url: 'https://corecodex.com',
    siteName: 'CoreCodeX',
    images: [
      {
        url: '/assets/3d/corecodex_3d_core.jpg',
        width: 1200,
        height: 630,
        alt: 'CoreCodeX AI & Software Engineering Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body>
        <ThemeProvider>
          <PillNavbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
