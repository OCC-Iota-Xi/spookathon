"use client"

import { Creepster } from "next/font/google"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
})

type Organizer = {
  name: string
  role: string
  blurb: string
  socials?: {
    github?: string
    linkedin?: string
  }
}

const ORGANIZERS: Organizer[] = [
  {
    name: "Kevin Doan",
    role: "Technical Lead & VP of Scholarly Activities",
    blurb: "Leads platform development and ensures our hackers have the tools they need to build spooky-good projects.",
    socials: {
      github: "https://github.com/kevindoan",
      linkedin: "https://www.linkedin.com/in/kevin-doan/",
    },
  },
  {
    name: "Iota Xi Board",
    role: "Event Operations",
    blurb: "Coordinating workshops, judges, and the all-important pizza deliveries throughout the weekend.",
  },
  {
    name: "Volunteer Mentors",
    role: "On-Site Support",
    blurb: "Industry professionals and alumni ready to help debug, ideate, and cheer on every team.",
  },
  {
    name: "Partner Clubs",
    role: "Community Outreach",
    blurb: "Collaborating with student orgs across campus to make Spookathon a welcoming, inclusive space for every participant.",
  },
]

export default function OrganizersSection() {
  return (
    <section id="organizers" className="relative bg-[#140b11] py-20 md:py-28">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 55%)" }} />

      <div className="relative z-10 px-4 md:px-10 lg:px-20 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-zinc-400">The Coven Behind the Code</p>
          <h2 className={`text-4xl md:text-6xl lg:text-7xl mt-3 text-white ${creepster.className}`}>
            Meet the Organizers
          </h2>
          <p className="mt-4 md:mt-6 text-zinc-300 max-w-2xl mx-auto text-sm md:text-base">
            Spookathon is powered by the Iota Xi Computer Science Honor Society and a haunted house full of volunteers.
            This crew keeps the lights on, the candy bowls full, and the ideas flowing all night long.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {ORGANIZERS.map((organizer) => (
            <div
              key={organizer.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">{organizer.role}</p>
                <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">{organizer.name}</h3>
                <p className="mt-4 text-sm md:text-base text-zinc-300 leading-relaxed">{organizer.blurb}</p>

                {organizer.socials && (
                  <div className="mt-6 flex items-center gap-4 text-zinc-200">
                    {organizer.socials.github && (
                      <Link
                        href={organizer.socials.github}
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="size-4" /> Github
                      </Link>
                    )}
                    {organizer.socials.linkedin && (
                      <Link
                        href={organizer.socials.linkedin}
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="size-4" /> LinkedIn
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
