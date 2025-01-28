import { ThemeToggler } from "@/components";
import { HeroSection } from "@/sections";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section>
        <HeroSection />
      </section>
      <ThemeToggler />
    </div>
  );
}
