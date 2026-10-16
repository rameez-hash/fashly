import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Fashion Messenger",
  description:
    "Chat with designers, boutiques and fashion experts in real time. Join group discussions and collaboration rooms on Fashly.co.",
  alternates: { canonical: "/chat" },
  robots: { index: false, follow: true },
};

export default function ChatPage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title="Fashion Messenger" />
      </main>
      <Footer />
    </>
  );
}
