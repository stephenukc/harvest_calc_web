"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Choose from "./_home/choose";
import CTA from "./_home/cta";
import Features from "./_home/features";
import Hero from "./_home/hero";

export default function Example() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Choose />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
