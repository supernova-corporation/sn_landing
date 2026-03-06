"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Ticker from "@/components/Ticker/Ticker";
import TruthSection from "@/components/TruthSection/TruthSection";
import InfrastructureSection from "@/components/InfrastructureSection/InfrastructureSection";
import DifferentSection from "@/components/DifferentSection/DifferentSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Superload from "@/components/Superload/Superload";
import Roadmap from "@/components/Roadmap/Roadmap";
import Team from "@/components/Team/Team";
import { Contact, Footer } from "@/components/Contact/Contact";

/**
 * Supernova Landing Page
 * @returns JSX.Element
 */
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Ticker />
      <TruthSection />
      <InfrastructureSection />
      <DifferentSection />
      <HowItWorks />
      <Superload />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
