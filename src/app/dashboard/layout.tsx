import type { Metadata } from "next";
import "@/styles/globals.css";
import { SidebarInset, SidebarProvider } from "@/app/_components/atoms/ui/sidebar";
import { AppSidebar } from "@/app/_components/molecules/sidebar/AppSidebar";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import NavbarDashboard from "../_components/molecules/navigation/NavbarDashboard";
import { GuardProvider } from "../_components/atoms/providers/guard-provider";

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
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
  return (
    <GuardProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <NavbarDashboard />
          <main className="p-4">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </GuardProvider>
  );
}