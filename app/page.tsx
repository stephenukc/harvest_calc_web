import MainLayout from "@/components/main-layout";
import { Metadata } from "next";
import Choose from "./_home/choose";
import CTA from "./_home/cta";
import Features from "./_home/features";
import Hero from "./_home/hero";

export const metadata: Metadata = {
  title: "Home - HarvestCalc",
  description: "Powering the future of agriculture.",
};

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Choose />
      <CTA />
    </MainLayout>
  );
}
