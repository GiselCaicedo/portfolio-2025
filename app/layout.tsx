import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fraunces, JetBrains_Mono } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { GoodVibesToggle } from '@/components/ui';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gissoler Studio | Digital products with precision',
  description: 'We design and build web experiences focused on clarity, conversion, and performance.',
  keywords: ['studio', 'web', 'design', 'development', 'ux', 'branding'],
  authors: [{ name: 'Gissoler Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Gissoler Studio | Digital products with precision',
    description: 'Premium sites that convert and feel alive.',
    siteName: 'Gissoler Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gissoler Studio | Digital products with precision',
    description: 'Premium sites that convert and feel alive.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body
        className={`${plusJakarta.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <GoodVibesToggle />
      </body>
    </html>
  );
}
