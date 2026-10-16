import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join a worldwide fashion community of designers, models, boutiques, influencers and fashion lovers on Fashly.co.",
  alternates: { canonical: "/community" },
  robots: { index: false, follow: true },
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title="Community" />
      </main>
      <Footer />
    </>
  );
}
