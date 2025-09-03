"use client"

import { Calendar, Users, Trophy, Ghost, School } from "lucide-react"
import { ArcTimeline } from "../magicui/arc-timeline"
import { Creepster } from "next/font/google";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutSection() {
  const data = [
    {
      time: "Aug-Sept. 2025",
      steps: [
        { icon: <span>📝</span>, content: "Applications open 8/26" },
      ],
    },
    {
      time: "Oct 2025",
      steps: [
        { icon: <span>📅</span>, content: "Applications close 10/10" },
        { icon: <span>🎯</span>, content: "Decisions come out 10/17" },
      ],
    },
    {
      time: "Hackathon Starts",
      steps: [
        { icon: <span>🎃</span>, content: "Opening Ceremony" }
      ],
    }
  ];
  
  return (
    <section id="about" className="relative min-h-screen bg-[#26221f] py-24">

      <img
        src="/assets/forest.svg"
        alt="About"
        className="w-full bg-[#26221f]"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl lg:text-8xl mx-auto ${creepster.className}`}>About</h1>

          <p className="text-base md:text-xl lg:text-2xl mt-4 md:mt-6 lg:mt-8 text-zinc-200 text-center w-full md:w-4/5 lg:w-3/4">
            Spookathon is a Halloween-inspired hackathon hosted by the Iota Xi Honor Society at Orange Coast College. 
            Open to <span className="font-semibold text-white">students of all experience levels across any major</span>, participants will work in small teams to <span className="font-semibold text-white">build creative, tech-driven solutions to real-world problems.</span>
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className={`text-7xl mx-auto ${creepster.className}`}>About</h1>

        <p className="text-xl mt-6 text-zinc-200 text-center w-1/2">
          Spookathon is a Halloween-inspired hackathon hosted by the Iota Xi Honor Society at Orange Coast College. 
          Open to <span className="font-semibold text-white ms-1">students of all experience levels across any major</span>, participants will work in small teams to <span className="font-semibold text-white">build creative, tech-driven solutions to real-world problems.</span>
        </p>

        <div className="w-full md:w-3/4 flex flex-col items-center justify-center relative my-20">
          <div className="grid grid-cols-5 gap-4 w-full">
            <div className="flex flex-col items-center rounded-lg">
              <Calendar className="size-16 mb-4" strokeWidth={2} />
              <div className="text-xl font-medium text-center">One Weekend</div>
              <div className="text-center">Oct 24-27, 2025</div>
            </div>
            
            <div className="flex flex-col items-center rounded-lg">
              <Users className="size-16 mb-4" strokeWidth={2} />
              <div className="text-xl font-medium text-center">All Levels</div>
              <div className="text-center">Beginners Welcome</div>
            </div>
            
            <div className="flex flex-col items-center rounded-lg">
              <Trophy className="size-16 mb-4" strokeWidth={2} />
              <div className="text-xl font-medium text-center">Great Prizes</div>
              <div className="text-center">Multiple Categories</div>
            </div>
            
            <div className="flex flex-col items-center rounded-lg">
              <Ghost className="size-16 mb-4" strokeWidth={2} />
              <div className="text-xl font-medium text-center">100% Free</div>
              <div className="text-center">Food & Drinks Included</div>
            </div>

            <div className="flex flex-col items-center rounded-lg">
              <School className="size-16 mb-4" strokeWidth={2} />
              <div className="text-xl font-medium text-center">@ OCC</div>
              <div className="text-center">Hosted on campus</div>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div className="flex flex-col items-center justify-center">
        <ArcTimeline data={data} />
        <p className="text-zinc-300 text-center mt-[-2rem]">Click through the timeline to see what&apos;s happening when!</p>
      </div> */}
    </section>
  )
}
