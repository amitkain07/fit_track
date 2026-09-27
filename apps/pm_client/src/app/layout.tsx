import './global.css';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Prerna Coaching | Strength & Hormonal Wellness for Indian Women',
  description:
    'Customized workout and nutrition blueprints designed for busy Indian lifestyles, festive schedules, and joint realities — without starvation or scary gym culture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FAF7F2] text-[#22211F] antialiased selection:bg-[#EADBCC] selection:text-[#1F1E1C]">
        {children}
      </body>
    </html>
  );
}

