import HeroSection from "@/components/HeroSection";
import MilestoneSection from "@/components/MilestoneSection";
import Comparison from "@/components/Comparison";
import Kickastarter from "@/components/Kickstarter";
import HomePageShop from "@/components/HomePageShop";

export const metadata = {
  title: "Home | BuraVPN",
  description: "Welcome to the BuraVPN Home page",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <Kickastarter />
      <Comparison />
      <HomePageShop />
      <MilestoneSection />
    </main>
  );
}
