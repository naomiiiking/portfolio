import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naomi King – AI Engineer',
  description: 'AI Engineer at Goodnotes. Building production AI systems and connecting with women in STEM.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27><rect width=%27100%27 height=%27100%27 fill=%27%230f0f0e%27/><text x=%2750%27 y=%2760%27 font-family=%27JetBrains Mono, monospace%27 font-size=%2760%27 font-weight=%27600%27 fill=%27%23c72c41%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27>NK</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
