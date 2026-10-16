import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { unslugify } from "@/lib/launch";

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = unslugify(slug.join(" "));
  return {
    title: `${title} — Coming Soon`,
    description: `${title} is launching soon on Fashly.co. Official launch: 20 November 2026.`,
    robots: { index: false, follow: true },
  };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const title = unslugify(slug.join(" "));
  return (
    <>
      <Navbar />
      <main>
        <ComingSoon title={title} />
      </main>
      <Footer />
    </>
  );
}
