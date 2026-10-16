import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Live Shopping",
  description:
    "Watch live fashion shows, boutique sales and salon demonstrations — interact and buy in real time on Fashly.co.",
  alternates: { canonical: "/live-shopping" },
  robots: { index: false, follow: true },
};

export default function LiveShoppingPage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title="Live Shopping" />
      </main>
      <Footer />
    </>
  );
}
