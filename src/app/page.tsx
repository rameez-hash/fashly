import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Ecosystem from "@/components/Ecosystem";
import LiveShopping from "@/components/LiveShopping";
import TrendingFeed from "@/components/TrendingFeed";
import Marketplace from "@/components/Marketplace";
import SalonBooking from "@/components/SalonBooking";
import Directory from "@/components/Directory";
import Community from "@/components/Community";
import Differentiator from "@/components/Differentiator";
import Messenger from "@/components/Messenger";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import LaunchPopup from "@/components/LaunchPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <Ecosystem />
         <Community />
        <Marketplace /><Directory /> <LiveShopping />

        <TrendingFeed />
        
        <SalonBooking />
        
      
        <Differentiator />
        <Messenger />
        <Events />
      </main>
      <Footer />
      <LaunchPopup />
    </>
  );
}
