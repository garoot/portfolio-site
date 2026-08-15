import React from 'react';
import { Urbanist, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

// Urbanist carries all display and body text.
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

// JetBrains Mono is reserved for terminal output and technical metadata.
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`appRoot ${urbanist.variable} ${jetbrains.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
