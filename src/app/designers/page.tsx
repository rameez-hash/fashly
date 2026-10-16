import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Designers",
  description:
    "Discover and follow top fashion designers. Publish collections, showcase your work and sell globally on Fashly.co.",
  alternates: { canonical: "/designers" },
  robots: { index: false, follow: true },
};

export default function DesignersPage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title="Designers" />
      </main>
      <Footer />
    </>
  );
}
