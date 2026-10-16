import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Boutiques",
  description:
    "Explore fashion boutiques worldwide and open your own storefront in minutes on Fashly.co.",
  alternates: { canonical: "/boutiques" },
  robots: { index: false, follow: true },
};

export default function BoutiquesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title="Boutiques" />
      </main>
      <Footer />
    </>
  );
}
