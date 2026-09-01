import type {Metadata} from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { SoundProvider } from '@/components/sound-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://jamilyakasai.com'),
  title: {
    default: 'Jamil Yakasai - Founder & AI Systems Builder',
    template: '%s | Jamil Yakasai',
  },
  description: 'Portfolio of Jamil Yakasai, showcasing applied-AI products, automation systems, and operational control planes.',
  keywords: [
    'Jamil Yakasai',
    'Applied AI Engineer',
    'AI Systems Architect',
    'Novalyte AI',
    'Agentic Workflows',
    'LLM Tool Calling',
    'Forward Deployed Engineer',
    'San Francisco AI',
    'Next.js',
    'TypeScript',
    'Enterprise Operations',
    'Healthtech AI',
    'PostgreSQL',
    'Control Planes',
    'Zendesk',
    'Deterministic AI',
    'Revenue Telemetry',
    'Full Stack Engineer',
  ],
  authors: [{ name: 'Jamil Yakasai', url: 'https://jamilyakasai.com' }],
  creator: 'Jamil Yakasai',
  publisher: 'Jamil Yakasai',
  alternates: {
    canonical: 'https://jamilyakasai.com',
  },
  openGraph: {
    title: 'Jamil Yakasai - Founder & AI Systems Builder',
    description: 'Portfolio of Jamil Yakasai, showcasing applied-AI products, automation systems, and operational control planes.',
    url: 'https://jamilyakasai.com',
    siteName: 'Jamil Yakasai Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jamil Yakasai - Founder & AI Systems Builder | Applied AI & Control Planes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jamil Yakasai - Founder & AI Systems Builder',
    description: 'Portfolio of Jamil Yakasai, showcasing applied-AI products, automation systems, and operational control planes.',
    creator: '@sanbosay',
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans bg-[#0b0f17] text-slate-100 min-h-screen">
        <ThemeProvider defaultTheme="dark">
          <LanguageProvider>
            <SoundProvider>
              {children}
            </SoundProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
