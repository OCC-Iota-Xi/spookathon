"use client"

import Navigation from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import TracksSection from "@/components/sections/TracksSection"
import FAQSection from "@/components/sections/FAQSection"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="text-white">
      <Navigation />
      
      <main className="w-full">
        <HeroSection />
      
        <div 
          id="hero-interstitial"
          className="h-60 bg-black flex items-center justify-center my-8"
        >
          <div 
            style={{
              width: '2px',
              height: '100%',
              backgroundImage: 'linear-gradient(to bottom, white 50%, transparent 50%)',
              backgroundSize: '1px 20px',
              backgroundRepeat: 'repeat-y',
              mask: 'linear-gradient(to bottom, transparent 0%, white 20%, white 80%, transparent 100%)',
              WebkitMask: 'linear-gradient(to bottom, transparent 0%, white 20%, white 80%, transparent 100%)'
            }}
          ></div>
        </div>

        <AboutSection />
        
        <div
          id="about-interstitial"
          className="h-60"
          style={{
            background: 'linear-gradient(to bottom, black 0%, #040a0c 25%, #070f12 50%, #0a1418 75%, #0d171a 100%)'
          }}
        />

        <TracksSection />

        <div
          id="tracks-interstitial"
          className="relative h-60 bg-black overflow-hidden"
        >
          {/* Base dirt layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d171a] 70% via-[#2a1810] 85% to-[#3d2817]"></div>
          
          {/* Messy dirt piles - multiple irregular mounds */}
          <div 
            className="absolute bottom-0 left-0 w-full h-32 bg-[#3d2817]"
            style={{
              clipPath: 'polygon(0% 100%, 15% 85%, 25% 90%, 35% 75%, 50% 80%, 65% 70%, 75% 85%, 85% 75%, 100% 90%, 100% 100%)'
            }}
          ></div>
          
          {/* Second dirt layer - darker */}
          <div 
            className="absolute bottom-0 left-0 w-full h-24 bg-[#2a1810]"
            style={{
              clipPath: 'polygon(0% 100%, 20% 70%, 30% 85%, 45% 65%, 60% 75%, 70% 60%, 80% 80%, 90% 65%, 100% 85%, 100% 100%)'
            }}
          ></div>
          
          {/* Third layer - even messier */}
          <div 
            className="absolute bottom-0 left-0 w-full h-16 bg-[#1a0f08]"
            style={{
              clipPath: 'polygon(0% 100%, 12% 60%, 28% 80%, 42% 55%, 58% 70%, 72% 50%, 88% 75%, 100% 60%, 100% 100%)'
            }}
          ></div>
          
          {/* Scattered dirt chunks */}
          <div className="absolute bottom-8 left-[10%] w-8 h-4 bg-[#2a1810] rounded-full transform rotate-12"></div>
          <div className="absolute bottom-12 left-[25%] w-6 h-3 bg-[#3d2817] rounded-full transform -rotate-6"></div>
          <div className="absolute bottom-6 left-[40%] w-10 h-5 bg-[#1a0f08] rounded-full transform rotate-45"></div>
          <div className="absolute bottom-14 left-[60%] w-7 h-4 bg-[#2a1810] rounded-full transform -rotate-12"></div>
          <div className="absolute bottom-4 left-[75%] w-9 h-4 bg-[#3d2817] rounded-full transform rotate-30"></div>
          <div className="absolute bottom-10 left-[85%] w-5 h-3 bg-[#1a0f08] rounded-full transform -rotate-45"></div>
          
          {/* Texture overlay for gritty effect */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(45, 24, 16, 0.8) 2px, transparent 2px),
                radial-gradient(circle at 80% 20%, rgba(26, 15, 8, 0.6) 1px, transparent 1px),
                radial-gradient(circle at 40% 40%, rgba(61, 40, 23, 0.7) 1.5px, transparent 1.5px),
                radial-gradient(circle at 90% 90%, rgba(42, 24, 16, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 30px 30px, 40px 40px, 25px 25px'
            }}
          ></div>
        </div>
        
        <FAQSection />

        <div
          id="faq-interstitial"
          className="h-60"
          style={{
            background: 'linear-gradient(to bottom, #180f09 0%, #000000 100%)'
          }}
        />

        <Footer />

      </main>
    </div>
  );
}
