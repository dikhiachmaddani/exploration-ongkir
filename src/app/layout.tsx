import { ThemeProvider } from "@/app/_components/atoms/providers/theme-provider";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import ReactQueryProvider from "@/utils/react-query";

export const metadata: Metadata = {
  title: {
    template: '%s | Raja Ongkir',
    default: 'Raja Ongkir - Estimasi perjalanan barang anda',
  },
  description: "Raja Ongkir specializes in Estimasi harga perjalanan barang.",
  generator: 'Next.js',
  applicationName: 'Raja Ongkir',
  keywords: ['Raja Ongkir'],
  authors: [{ name: 'Dikhi Achmad Dani' }],
  creator: 'Dikhi Achmad Dani',
  publisher: 'Raja Ongkir',
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
};

interface LayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ReactQueryProvider>
                {children}
            </ReactQueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );

}