"use client"

import Image from "next/image"
import Navigation from "../components/sections/Navigation"
import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import TracksSection from "../components/sections/TracksSection"
import FAQSection from "../components/sections/FAQSection"
// import EventDetailsSection from "../components/sections/EventDetailsSection"
import Footer from "../components/sections/Footer"
import ScheduleSection from "@/components/sections/ScheduleSection"
// import OrganizersSection from "@/components/sections/OrganizersSection"
// import TestimonialsSection from "@/components/sections/TestimonialsSection"

export default function Home() {
  return (
    <div className="text-white">
      <Navigation />
      
      <main className="w-full">
        <HeroSection />

        <Image
          src="/assets/interstitial-1.svg"
          alt="Interstitial"
          width={1920}
          height={200}
          className="w-full bg-gradient-to-b from-[#796961] to-[#26221f]"
        />

        <AboutSection />

        {/* <EventDetailsSection /> */}

        <TracksSection />

        <div
          id="tracks-interstitial"
          className="relative h-40 md:h-60 bg-[#5f4f47] overflow-hidden"
        >
          {/* Base dirt layer */}
          <div className="absolute inset-0 bg-[#5f4f47]"></div>
          
          {/* Messy dirt piles - multiple irregular mounds */}
          <div 
            className="absolute bottom-0 left-0 w-full h-20 md:h-32 bg-[#3d2817]"
            style={{
              clipPath: 'polygon(0% 100%, 15% 85%, 25% 90%, 35% 75%, 50% 80%, 65% 70%, 75% 85%, 85% 75%, 100% 90%, 100% 100%)'
            }}
          ></div>
          
          {/* Second dirt layer - darker */}
          <div 
            className="absolute bottom-0 left-0 w-full h-12 md:h-24 bg-[#2a1810]"
            style={{
              clipPath: 'polygon(0% 100%, 20% 70%, 30% 85%, 45% 65%, 60% 75%, 70% 60%, 80% 80%, 90% 65%, 100% 85%, 100% 100%)'
            }}
          ></div>
          
          {/* Third layer - even messier */}
          <div 
            className="absolute bottom-0 left-0 w-full h-8 md:h-16 bg-[#1a0f08]"
            style={{
              clipPath: 'polygon(0% 100%, 12% 60%, 28% 80%, 42% 55%, 58% 70%, 72% 50%, 88% 75%, 100% 60%, 100% 100%)'
            }}
          ></div>
          
          {/* Scattered dirt chunks - responsive sizes */}
          <div className="absolute bottom-4 md:bottom-8 left-[10%] w-4 md:w-8 h-2 md:h-4 bg-[#2a1810] rounded-full transform rotate-12"></div>
          <div className="absolute bottom-6 md:bottom-12 left-[25%] w-3 md:w-6 h-2 md:h-3 bg-[#3d2817] rounded-full transform -rotate-6"></div>
          <div className="absolute bottom-3 md:bottom-6 left-[40%] w-5 md:w-10 h-3 md:h-5 bg-[#1a0f08] rounded-full transform rotate-45"></div>
          <div className="absolute bottom-7 md:bottom-14 left-[60%] w-4 md:w-7 h-2 md:h-4 bg-[#2a1810] rounded-full transform -rotate-12"></div>
          <div className="absolute bottom-2 md:bottom-4 left-[75%] w-5 md:w-9 h-2 md:h-4 bg-[#3d2817] rounded-full transform rotate-30"></div>
          <div className="absolute bottom-5 md:bottom-10 left-[85%] w-3 md:w-5 h-2 md:h-3 bg-[#1a0f08] rounded-full transform -rotate-45"></div>
        </div>
        
        <ScheduleSection />

        <FAQSection />

        {/* Organizer Section Boilerplate (remove if we don't want to use it)  */}
        {/* <OrganizersSection /> */}

        {/* Testimonial Boilerplate (remove if we don't want to use it)  */}
        {/* <TestimonialsSection />  */}

        <div
          id="faq-interstitial"
          className="h-40 md:h-60"
          style={{
            background: 'linear-gradient(to bottom, #180f09 0%, #000000 100%)'
          }}
        />

        <Footer />

      </main>
    </div>
  );
}
