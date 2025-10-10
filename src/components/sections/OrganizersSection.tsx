"use client"

import { Creepster } from "next/font/google"

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
})

type Organizer = {
  name: string
  role: string
}

const ORGANIZERS: Organizer[] = [
  {
    name: "Eric Nguyen",
    role: "Financial and Logistics Lead Organizer",
  },
  {
    name: "Kevin Doan",
    role: "Technical and Volunteering Lead Organizer",
  },
  {
    name: "Juliana Cherevko",
    role: "Relations & Legal Lead Organizer",
  },
]

export default function OrganizersSection() {
  return (
    <section id="organizers" className="relative bg-[#0f0a0f] py-20 md:py-28">
      <div className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(250,140,50,0.10), transparent)" }} />
      {/* Top blend into previous section (FAQ bg) */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 md:h-16" style={{ background: 'linear-gradient(to bottom, #180f09 0%, rgba(24,15,9,0) 100%)' }} />
      {/* Bottom blend into interstitial (starts at #180f09) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 md:h-16" style={{ background: 'linear-gradient(to top, #180f09 0%, rgba(24,15,9,0) 100%)' }} />

      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-6xl lg:text-7xl mt-3 text-white ${creepster.className}`}>
            Meet the Organizers
          </h2>
          <p className="mt-4 md:mt-6 text-zinc-300 max-w-2xl mx-auto text-sm md:text-base">
            Spookathon is powered by the Iota Xi Computer Science Honor Society and a haunted house full of volunteers.
            This crew keeps the lights on, the candy bowls full, and the ideas flowing all night long.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {ORGANIZERS.map((organizer) => (
            <div
              key={organizer.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1"
            >

              <div className="relative z-10">
                <h3 className="mt-3 text-lg font-medium text-white">{organizer.name}</h3>
                <p className="text-sm mt-2">{organizer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
