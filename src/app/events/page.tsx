import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Fashion Events",
  description:
    "Discover fashion weeks, exhibitions, designer launches and competitions happening across the globe on Fashly.co.",
  alternates: { canonical: "/events" },
  robots: { index: false, follow: true },
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title="Fashion Events" />
      </main>
      <Footer />
    </>
  );
}
