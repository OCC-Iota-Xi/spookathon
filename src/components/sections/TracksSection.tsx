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
      description: `Build apps that gamify learning with spooky themes 🎃. Create study tools with zombie challenges 🧟, 
      develop campus navigation systems with ghostly guides 👻, or design VR educational experiences that transport 
      students to different historical periods 🏰. Make learning fun and spooky! ✨`,
    },
    {
      title: "Healthcare",
      description: `Create mental health tools with calming Halloween themes 🎃. Build telemedicine platforms that connect 
      patients with doctors like summoning spirits 🔮, develop medication reminder systems with spooky alarms 👻, design 
      accessibility tools that help patients navigate healthcare systems ♿, or craft wellness tracking apps with 
      supernatural motivation systems 💪. Health and wellness systems now rests on your whimsical wizardry! ✨`,
    },
    {
      title: "Daily Life",
      description: `Build smart home automation systems controlled by haunted voice assistants 🗣️, create meal planning 
      apps with ghostly chef recommendations 👨‍🍳, develop time management tools with spooky productivity reminders ⏰, 
      design personal finance trackers with mystical budget insights 💰, or craft social platforms that help people 
      connect in magical ways 🤝.`,
    },
    {
      title: "Hardware / Robotics",
      description: `Build Halloween-themed IoT sensors that monitor air quality or noise levels 🌪️, create robotic assistants 
      that help with household chores (think Roomba dressed as a ghost 👻), design Arduino projects for automatic lighting 
      systems 💡, develop wearable devices that track health metrics with spooky visualizations 📊, or craft smart garden 
      systems that make plants grow better through haunted automation 🌱.`,
    },
    {
      title: "AI",
      description: `Create any projects with spooky use of AI. Help users with Halloween costume recommendations using image 
      recognition 🎭, build natural language processing tools that analyze spooky literature 📖, develop recommendation systems 
      for horror movies or haunted attractions 🎬, craft computer vision projects that detect Halloween decorations 🦇, 
      or design AI assistants that help users learn tech skills through interactive ghostly tutorials 👨‍💻.`,
    },
    {
      title: "Math Honor Society Challenge",
      description: `Create a math educational app! Design interactive learning platforms that make mathematics engaging and 
      spooktacular. Build apps that teach algebra through zombie survival games 🧟, create geometry tools with haunted shapes 
      and mysterious angles 📐, develop calculus visualizations with supernatural waves and ghostly derivatives ⚡, 
      craft statistics dashboards that reveal spooky patterns in data 📈, or design problem-solving games where players must use 
      math to escape haunted dungeons 🏰.`,
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
