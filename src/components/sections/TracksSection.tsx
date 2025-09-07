"use client"

import Image from "next/image"
import { Ghost, Plus, Minus} from "lucide-react"
import Link from "next/link"
import { Creepster } from "next/font/google";
import { Button } from "@/components/ui/button"
import { useState } from "react"

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});

type Track = {
  title: string
  description: string
}

export default function TracksSection() {
  const [openTrack, setOpenTrack] = useState<number | null>(null)

  const tracks: Track[] = [
    {
      title: "Education",
      description:
        "Build tools that improve learning, access, and campus life",
    },
    {
      title: "Healthcare",
      description:
        "Create solutions that support wellness, access, and patient experience",
    },
    {
      title: "Daily Life",
      description:
        "Simplify everyday tasks with smart, practical tools",
    },
    {
      title: "Hardware / Robotics",
      description:
        "Design devices, sensors, or robots to solve real problems",
    },
    {
      title: "AI",
      description:
        "Apply AI/ML to create intelligent, ethical, high-impact features",
    },
    {
      title: "Math Honor Society Challenge",
      description:
        "Solve a problem with math and computer science",
    },
  ]

  return (
    <section
      id="tracks"
      className="relative min-h-screen bg-[#796961]"
    >

      <div className="relative w-full h-[100vh] md:h-auto">
        <Image
          src="/assets/witch.svg"
          alt="Tracks"
          width={1920}
          height={600}
          className="w-full h-full object-cover object-center md:h-auto md:object-contain"
        />
      </div>

      <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-16">
        <div className="w-full lg:w-1/2 lg:ml-8 md:mt-24">
          <h1 className={`text-5xl md:text-6xl lg:text-8xl mb-4 text-white ${creepster.className}`}>Tracks</h1>

          <div className="mt-4 md:mt-8 space-y-2">
            {tracks.map(({ title, description }, index) => (
              <div 
                key={title}
                className="border-b border-white overflow-hidden"
              >
                <button
                  className="w-full py-2 md:py-3 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                  onClick={() => setOpenTrack(openTrack === index ? null : index)}
                >
                  <h3 className="text-lg md:text-xl text-white font-medium">{title}</h3>
                  {openTrack === index ? (
                    <Minus className="size-5 md:size-6 text-white flex-shrink-0" strokeWidth={1.5} />
                  ) : (
                    <Plus className="size-5 md:size-6 text-white flex-shrink-0" strokeWidth={1.5} />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openTrack === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-2 pb-4">
                    <p className="text-white/80 leading-relaxed text-sm md:text-base">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-16">
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Can&apos;t decide? <span className="font-semibold">Mix and match tracks</span> to create something truly unique!
            </p>
            <Link href="https://form.jotform.com/251737472997070">
              <Button
                size="lg"
                className="text-sm md:text-base p-4 md:p-6 bg-white text-black rounded-full"
              >
                Join the Adventure
                <Ghost className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  )
}
