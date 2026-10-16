import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "Shop curated fashion collections from designers and boutiques worldwide on Fashly.co. Women's, men's, kids, luxury and bridal fashion.",
  alternates: { canonical: "/marketplace" },
  // Switch to index: true once the real page content is live.
  robots: { index: false, follow: true },
};

export default function MarketplacePage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title="Marketplace" />
      </main>
      <Footer />
    </>
  );
}
