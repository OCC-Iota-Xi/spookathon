"use client"

import { Creepster } from "next/font/google"
import { Quote } from "lucide-react"

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
})

type Testimonial = {
  quote: string
  name: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Spookathon was the first hackathon where I felt comfortable building something wild. The mentors and vibe were incredible!",
    name: "Jamie L.",
    role: "2024 Participant"
  },
  {
    quote: "The themes pushed our team to think creatively. We shipped a prototype we were actually proud to demo by Sunday morning.",
    name: "Arjun M.",
    role: "Best Hardware Winner"
  },
  {
    quote: "Workshops, swag, spooky snacks—Spookathon has it all. I met my future internship team here!",
    name: "Sofia R.",
    role: "UI/UX Track Finalist"
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative bg-[#0d090f] py-24 md:py-28">
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, rgba(119,68,119,0.35), transparent 55%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-zinc-500">Hallway Whispers</p>
          <h2 className={`text-4xl md:text-6xl lg:text-7xl text-white mt-3 ${creepster.className}`}>
            What Hackers Are Saying
          </h2>
          <p className="mt-4 md:mt-6 text-zinc-300 max-w-2xl mx-auto text-sm md:text-base">
            Stories from past participants who took on the challenge, stayed up way too late, and shipped something hauntingly brilliant.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7 flex flex-col"
            >
              <Quote className="size-8 text-zinc-400" />
              <blockquote className="mt-4 text-sm md:text-base text-zinc-200 leading-relaxed flex-1">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 text-zinc-400 text-sm">
                <span className="block text-zinc-100 font-semibold">{testimonial.name}</span>
                <span className="block text-xs uppercase tracking-[0.25em]">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
