import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import Footer from './componets/layout/Footer'
import Header from './componets/layout/Header'
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import config from "@/src/amplifyconfiguration.json";
import { ConfigureAmplifyClientSide } from '../utils/ConfigureAmplifyClientSide';

Amplify.configure(config, {ssr: true});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'コネクトテック',
  description: 'コネクトテック',
}

export default function RootLayout({
  children,
}: {
  children: React
  .ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <ConfigureAmplifyClientSide />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
