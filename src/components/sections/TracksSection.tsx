"use client"

import { Skull, Ghost, Brain, Heart, Bot, Zap } from "lucide-react"
import { Creepster } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const creepster = Creepster({ weight: "400", subsets: ["latin"] })

type Track = {
  title: string
  description: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function TracksSection() {
  const tracks: Track[] = [
    {
      title: "Web Development",
      description:
        "Build responsive web apps using modern frameworks like React, Vue, or Angular",
      Icon: Skull,
    },
    {
      title: "Mobile Development",
      description:
        "Create innovative iOS/Android apps with React Native, Flutter, or native stacks",
      Icon: Ghost,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Leverage AI/ML to solve complex problems with real-world impact",
      Icon: Brain,
    },
    {
      title: "Health & Wellness",
      description:
        "Build solutions that promote health and well-being",
      Icon: Heart,
    },
    {
      title: "Robotics",
      description:
        "Build a robot that can solve a problem",
      Icon: Bot,
    },
    {
      title: "Math Honor Society Challenge",
      description:
        "Solve a problem with math and computer science",
      Icon: Zap,
    },
  ]

  return (
    <section
      id="tracks"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#0d171a]"
    >
      <h1 className="text-5xl mb-4 text-white">Tracks</h1>

      <p className="font-light text-zinc-300 text-center max-w-2xl mb-12">
        Choose your adventure!
      </p>

      <div className="grid w-full md:w-1/2 grid-cols-1 sm:grid-cols-3 gap-3">
        {tracks.map(({ title, description, Icon }) => (
          <article
            key={title}
            className="relative p-6 rounded-2xl border border-[#234252]"
          >
            {/* Content */}
            <div className="space-y-4 h-32">
              <h3 className="text-lg text-white">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Icon illustration area */}
            <div className="my-8 flex justify-center">
              <div className="relative">
                <Icon className="size-24" strokeWidth={0.5} color="#56a4cc" />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-zinc-300 mb-6">
          Can&apos;t decide? <span className="text-white font-semibold">Mix and match tracks</span> to create something truly unique!
        </p>
        <Link href="/">
          <Button
            size="lg"
            className="text-base p-6 bg-white text-black rounded-full"
          >
            Join the Adventure
            <Ghost className="size-4 ml-2" />
          </Button>
        </Link>
      </div>
      
    </section>
  )
}
