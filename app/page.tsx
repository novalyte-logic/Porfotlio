import { ScrollProgressBar } from "@/components/scroll-progress";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Architecture } from "@/components/architecture";
import { Testimonials } from "@/components/testimonials";
import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";
import { AiChat } from "@/components/ai-chat";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-background">
      <ScrollProgressBar />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Architecture />
      <Testimonials />
      <TechStack />
      <Footer />
      <AiChat />
    </main>
  );
}
