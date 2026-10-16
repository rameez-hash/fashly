import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Go Live",
  description:
    "Start a live fashion stream, showcase your collections and sell to a global audience in real time on Fashly.co.",
  alternates: { canonical: "/go-live" },
  robots: { index: false, follow: true },
};

export default function GoLivePage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title="Go Live" />
      </main>
      <Footer />
    </>
  );
}
