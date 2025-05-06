// app/about/page.tsx
"use client";

import AboutHeader from "@/components/Aboutheader";
import AboutIntro from "@/components/AboutIntro";
import AboutMission from "@/components/AboutMission";
import Aboutlet from "@/components/Aboutlet";
import AboutVision from "@/components/AboutVision";
import AboutStatement from "@/components/AboutStatement";
import Aboutlast from "@/components/Aboutlast";
import Foooter from "@/components/Foooter";







import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="w-full overflow-hidden">
     <AboutHeader/>
     <AboutIntro/>
     <AboutMission/>
     <Aboutlet/>
     <AboutVision/>
     <AboutStatement/>
     <Aboutlast/>
     <Foooter/>
    </main>
  );
};

export default AboutPage;
