// app/about/page.tsx
"use client";


import Foooter from "@/components/Foooter";
import ServicesHeader from "@/components/Servicesheader";
import Cardsection from "@/components/Cardsection";
import WhyChooseSection from "@/components/WhyChooseSection";



import Image from "next/image";

const ServicePage = () => {
  return (
    <main className="w-full overflow-hidden">
      <ServicesHeader/>
      <Cardsection/>
      <WhyChooseSection/>
      <Foooter />
    </main>
  );
};

export default ServicePage;
