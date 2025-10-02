import SetupProces from "@/components/SetupProces";
import HowWorksHero from "@/components/HowWorksHero";
import CoreComponents from "@/components/CoreComponents";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "How it works | BuraVPN",
  description: "BuraVPN Contact page",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <HowWorksHero />
      <CoreComponents />
      <SetupProces />
      <CoreComponents />
      <CallToAction />
    </div>
  );
}
