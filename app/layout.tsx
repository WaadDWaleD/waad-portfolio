import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import BackgroundGrid from '@/components/BackgroundGrid';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Waad Waled | Software Engineer & AI Specialist',
  description:
    'Personal portfolio of Waad Waled Elsayed Ahmed - Software Engineer & AI Specialist. Graduate of Computer Science & Artificial Intelligence from Capital University.',
  keywords: [
    'Waad Waled',
    'Software Engineer',
    'AI Specialist',
    'Frontend Developer',
    'Next.js',
    'React',
    'TensorFlow',
    'Computer Vision',
    'MediaPipe',
    'Portfolio',
  ],
  authors: [{ name: 'Waad Waled Elsayed Ahmed' }],
  creator: 'Waad Waled Elsayed Ahmed',
  openGraph: {
    title: 'Waad Waled | Software Engineer & AI Specialist',
    description:
      'Computer Science & Artificial Intelligence Graduate from Capital University. Building scalable web applications and intelligent deep learning systems.',
    url: 'https://waadwaled404.getportify.com',
    siteName: 'Waad Waled Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen relative selection:bg-cyan-500 selection:text-white`}>
        <ThemeProvider>
          <BackgroundGrid />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
