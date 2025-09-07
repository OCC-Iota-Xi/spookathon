"use client"

import Image from "next/image"
import { Creepster } from "next/font/google";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutSection() {
  
  return (
    <section id="about" className="relative md:min-h-screen bg-[#26221f] py-24">
      <div className="relative w-full h-[56vh] md:h-auto">
        <Image
          src="/assets/forest.svg"
          alt="About"
          width={1920}
          height={400}
          className="w-full h-full object-cover object-center md:h-auto md:object-contain bg-[#26221f]"
        />

        <div className="absolute left-0 right-0 top-[58%] -translate-y-1/2 px-4 md:top-1/2 md:px-8 lg:px-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className={`text-5xl md:text-6xl lg:text-8xl mx-auto ${creepster.className}`}>About</h1>

            <p className="text-base md:text-xl lg:text-2xl mt-2 md:mt-6 lg:mt-8 text-zinc-200 text-center w-full md:w-4/5 lg:w-3/4">
              Spookathon is a Halloween-inspired hackathon hosted by the Iota Xi Honor Society at Orange Coast College. 
              Open to <span className="font-semibold text-white">students of all experience levels across any major</span>, participants will work in small teams to <span className="font-semibold text-white">build creative, tech-driven solutions to real-world problems.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
