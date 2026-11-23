import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Geist } from 'next/font/google';
import MotionProvider from '@/components/MotionProvider';
import './globals.css';

const sans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
});

export const metadata: Metadata = {
  title: 'TGC Subs & Convenience | Fresh Subs in Quinte West',
  description:
    'Fresh, made-to-order subs, salads, soups and platters — plus your everyday convenience store essentials. 210 Front St, Quinte West, ON.',
};

export const viewport: Viewport = {
  themeColor: '#D42530',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
