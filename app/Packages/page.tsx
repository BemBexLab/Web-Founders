// app/portfolio/page.tsx
"use client";


import Heroo from "@/components/Heroo";
import Specialoffer from "@/components/Specialoffer";
import Price from "@/components/Price";
import Foooter from "@/components/Foooter";
import PricingCard from "@/components/PricingCard";


export default function PackagePage() {
  return (
    <main className="w-full overflow-hidden">
      <Heroo/>
      <Specialoffer/>
      <Price/>
      <PricingCard/>
      <Foooter/>
    </main>
  );
}
