import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { GoodVibesToggle } from '@/components/ui';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer & Designer',
  description: 'Crafting digital experiences that bridge design and technology. From design to development, complete digital solutions to elevate your product.',
  keywords: ['developer', 'designer', 'portfolio', 'web development', 'UI/UX', 'creative'],
  authors: [{ name: 'Portfolio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Portfolio | Creative Developer & Designer',
    description: 'Crafting digital experiences that bridge design and technology.',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Creative Developer & Designer',
    description: 'Crafting digital experiences that bridge design and technology.',
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <GoodVibesToggle />
      </body>
    </html>
  );
}
