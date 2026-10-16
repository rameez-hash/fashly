import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Salons & Beauty",
  description:
    "Find top-rated salons, book beauty & styling appointments, watch live demos and shop pro-grade products on Fashly.co.",
  alternates: { canonical: "/salons" },
  robots: { index: false, follow: true },
};

export default function SalonsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title="Salons & Beauty" />
      </main>
      <Footer />
    </>
  );
}
