// app/portfolio/page.tsx
"use client";

import Clients from "@/components/Clients";
import PortfolioGallery from "@/components/PortfolioGallery";
import Portfoliohero from "@/components/Portfoliohero";
import ProjectCard from "@/components/ProjectCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Foooter from "@/components/Foooter";





export default function PortfolioPage() {
  return (
    <main className="w-full overflow-hidden">
      <Portfoliohero />
      <ProjectCard />
      <TestimonialsCarousel />
      <Foooter />
    </main>
  );
};
