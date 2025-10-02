import SetupProces from "@/components/SetupProces";
import HowWorksHero from "@/components/HowWorksHero";
import CoreComponents from "@/components/CoreComponents";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "How it works | BuraVPN",
  description: "BuraVPN How it Works page",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <HowWorksHero />
      <CoreComponents />
      <SetupProces />
      <CoreComponents />
      <CallToAction
        btnCTA_text="Get Your VPN Router - $85"
        titleCTA_span="Monthly Fees?"
        titleCTA="Ready to Stop"
        paragraphCTA="Join 50,000+ users who chose one-time payment over monthly
            subscriptions."
        caption="✓ No monthly fees"
      />
    </main>
  );
}
