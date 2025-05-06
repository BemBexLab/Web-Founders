// app/portfolio/page.tsx
"use client";



import CareerHeader from "@/components/CareerHeader";
import CareerSect from "@/components/CareerSect";
import Foooter from "@/components/Foooter";



export default function CareerPage() {
  return (
    <main className="w-full overflow-hidden">
      <CareerHeader/>
      <CareerSect/>
      <Foooter/>
    </main>
  );
}
