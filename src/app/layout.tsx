import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MediaCine Films - Luxury Wedding Cinematography',
  description: 'A boutique wedding cinematography studio specializing in timeless, emotive, and editorial films. Based in Los Angeles, available worldwide.',
  openGraph: {
    title: 'MediaCine Films - Luxury Wedding Cinematography',
    description: 'A boutique wedding cinematography studio specializing in timeless, emotive, and editorial films.',
    url: 'https://mediacinefilms.com',
    siteName: 'MediaCine Films',
    images: [
      {
        url: 'https://mediacinefilms.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MediaCine Films Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
