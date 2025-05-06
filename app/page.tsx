"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";


import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import WhyChooseSection from "@/components/WhyChooseSection";
import VideoSection from "@/components/VideoSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Foooter from "@/components/Foooter";




const Home = () => {
  return (
    <main className="w-full overflow-hidden">
      {/* <div className="w-full max-w-7xl mx-auto sm:px-10 px-5"> */}
      {/* <FloatingNav navItems={navItems} /> */}
      <Hero />
      {/* <Stats/> */}
      <AboutSection/>
      <ServiceSection/>
      <WhyChooseSection/>
      <VideoSection/>
      <GalleryCarousel/>
      <TestimonialsCarousel/>
      <Foooter/>
      {/* <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      {/* </div> */}
    </main>
  );
};

export default Home;
