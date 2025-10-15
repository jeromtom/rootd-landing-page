import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Compliance from "@/components/Compliance";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <ProblemSolution />
      <Features />
      <Compliance />
      <WaitlistForm />
      <Footer />
    </main>
  );
}