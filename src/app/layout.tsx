import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://fashly.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fashly.co — The Global Fashion Social Network & Live Commerce Platform",
    template: "%s | Fashly.co",
  },
  description:
    "Fashly.co connects designers, salons, boutiques, models, influencers and fashion lovers worldwide. Discover fashion, stream live, sell products, book services and network with professionals.",
  keywords: [
    "fashion social network",
    "live fashion shopping",
    "designers",
    "boutiques",
    "salons",
    "fashion marketplace",
    "fashion community",
    "live commerce",
  ],
  authors: [{ name: "Fashly" }],
  creator: "Fashly",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Fashly.co",
    title: "Fashly.co — Showcase Your Fashion to the World",
    description:
      "The Global Fashion Social Network & Live Commerce Platform. Connect, stream live, sell and discover fashion worldwide.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashly.co — Showcase Your Fashion to the World",
    description:
      "The Global Fashion Social Network & Live Commerce Platform.",
    creator: "@fashly",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
