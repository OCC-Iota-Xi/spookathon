"use client"

import { Calendar, Users, Trophy, Ghost, School } from "lucide-react"
import { ArcTimeline } from "@/components/magicui/arc-timeline"


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
    <section id="about" className="pb-20">
      <div className="flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="text-5xl mx-auto">About</h1>

        <p className="mt-6 font-light text-zinc-200 text-center w-1/2">
          Spookathon is a Halloween-inspired hackathon hosted by the Iota Xi Honor Society at Orange Coast College. 
          Open to <span className="font-semibold text-white ms-1">students of all experience levels across any major</span>, participants will work in small teams to <span className="font-semibold text-white">build creative, tech-driven solutions to real-world problems.</span>
        </p>

        <div className="w-full md:w-2/3 flex flex-col items-center justify-center relative my-20">
          <div className="grid grid-cols-5 gap-4 w-full">
            <div className="flex flex-col items-center rounded-lg p-8">
              <Calendar className="size-16 mb-4" strokeWidth={0.5} />
              <div className="text-lg font-medium">One Weekend</div>
              <div className="text-xs">Oct 24-27, 2025</div>
            </div>
            
            <div className="flex flex-col items-center rounded-lg p-8">
              <Users className="size-16 mb-4" strokeWidth={0.5} />
              <div className="text-lg font-medium">All Levels</div>
              <div className="text-xs">Beginners Welcome</div>
            </div>
            
            <div className="flex flex-col items-center rounded-lg p-8">
              <Trophy className="size-16 mb-4" strokeWidth={0.5} />
              <div className="text-lg font-medium">Great Prizes</div>
              <div className="text-xs">Multiple Categories</div>
            </div>
            
            <div className="flex flex-col items-center rounded-lg p-8">
              <Ghost className="size-16 mb-4" strokeWidth={0.5} />
              <div className="text-lg font-medium">100% Free</div>
              <div className="text-xs">Food & Drinks Included</div>
            </div>

            <div className="flex flex-col items-center rounded-lg p-8">
              <School className="size-16 mb-4" strokeWidth={0.5} />
              <div className="text-lg font-medium">@ OCC</div>
              <div className="text-xs text-center">Hosted on campus</div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center justify-center">
        <ArcTimeline data={data} />
        <p className="text-zinc-300 text-center mt-[-2rem]">Click through the timeline to see what's happening when!</p>
      </div>
    </section>
  )
}
