import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Footer } from "./modules/application/components/footer";
import { Header } from "./modules/application/components/header";
import { Providers } from "./modules/application/components/providers/providers";

export const metadata: Metadata = {
  title: "LastPing",
  description: "ETH-Only Dead Man's Switch for Ethereum.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "EtherPoll",
    description: "ETH-Only Dead Man's Switch for Ethereum.",
    url: "https://last-ping-app.vercel.app",
    siteName: "Shan8851",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://last-ping-app.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Shan8851 – Full Stack Web3 Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EtherPoll",
    description: "ETH-Only Dead Man's Switch for Ethereum.",
    creator: "@shan8851",
    images: ["https://last-ping-app.vercel.app/og.png"],
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"], // adjust as needed
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#1C1F24",
              color: "#F5F7FA",
              border: "1px solid #2A2E35",
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              padding: "12px 16px",
              borderRadius: "1rem",
              minWidth: "280px",
              maxWidth: "400px",
            },
          }}
        />

        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
