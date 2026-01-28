import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/modules/landing/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
    </main>
  );
}

