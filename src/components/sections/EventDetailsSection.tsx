"use client"

import Link from "next/link"
import { CalendarDays, MapPin, Users2, Trophy, UtensilsCrossed, Briefcase, Info, DoorOpen, Award } from "lucide-react"
import { Creepster } from "next/font/google"

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
})

type InfoCardProps = { icon: React.ReactNode; title: string; body: React.ReactNode }
function InfoCard({ icon, title, body }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-1 text-orange-300">{icon}</div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
          <div className="mt-2 text-sm md:text-base text-zinc-300 leading-relaxed">{body}</div>
        </div>
      </div>
    </div>
  )
}

type BubbleStatProps = {
  label: string;
  sublabel?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}
function BubbleStat({ label, sublabel, size = 'md', className, style }: BubbleStatProps) {
  const sizeClass = size === 'lg' ? 'h-44 w-44' : size === 'sm' ? 'h-32 w-32' : 'h-36 w-36'
  return (
    <div
      className={`hidden md:flex absolute ${sizeClass} items-center justify-center text-center rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm text-white shadow-[0_0_60px_rgba(250,140,50,0.22)] ${className ?? ''}`}
      style={style}
    >
      <div className="px-6">
        <div className="text-[0.9rem] font-semibold leading-tight">{label}</div>
        {sublabel ? <div className="text-xs text-zinc-300 mt-1 leading-snug">{sublabel}</div> : null}
      </div>
    </div>
  )
}

export default function EventDetailsSection() {
  return (
    <section id="details" className="relative overflow-hidden bg-[#0f0a0f] py-24 md:py-32">
      {/* warm radial glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 50% 20%, rgba(250,140,50,0.14), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className={`text-4xl md:text-6xl lg:text-7xl ${creepster.className}`}>Event Details</h2>
          <p className="mt-3 md:mt-4 text-zinc-300 max-w-2xl mx-auto">A compact overview laid out for quick scanning.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column: original content preserved */}
          <div className="space-y-4 md:space-y-6">
            <InfoCard
              icon={<Info className="size-6" />}
              title="What you'll build"
              body={
                <>
                  A creative, tech-driven solution: website, mobile app, AI tool, or a physical prototype with Arduino/Raspberry Pi. We’ll provide prompts and beginner templates to kickstart your build.
                </>
              }
            />
            <InfoCard
              icon={<Briefcase className="size-6" />}
              title="What to bring"
              body={
                <>
                  Laptop, charger, optional peripherals (mouse, headphones), and any hardware you’d like to hack. We provide power, Wi‑Fi, food, and workspace. Bring your OCC ID for check‑in.
                </>
              }
            />
            <InfoCard
              icon={<Users2 className="size-6" />}
              title="Teams"
              body={
                <>
                  Teams of 2–4 recommended; solo is welcome. No team yet? Join our team formation mixer right after opening ceremony and we’ll match you by interests and skills.
                </>
              }
            />
            <InfoCard
              icon={<Trophy className="size-6" />}
              title="Why join"
              body={
                <>
                  Build your resume, meet new people, learn fast, and compete for prizes. Beyond coding: workshops, games, and activities all weekend. We’ll help you take the first steps.
                </>
              }
            />
            <InfoCard
              icon={<UtensilsCrossed className="size-6" />}
              title="How to get started"
              body={
                <>
                  Sign up, show up, and ship something spooky. {" "}
                  <Link href="https://form.jotform.com/251737472997070" className="underline font-medium text-white">Register here</Link>.
                </>
              }
            />
          </div>

          {/* Right column: floating circular bubbles styled like reference */}
          <div className="relative min-h-[560px]">
            {/* Mobile/tablet fallback as simple list */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3">
                <div className="text-sm font-semibold">When to arrive</div>
                <div className="text-xs text-zinc-300">Sat 8:00 AM check‑in; Opening 9:00 AM</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3">
                <div className="text-sm font-semibold">Prizes & tracks</div>
                <div className="text-xs text-zinc-300">Multiple tracks + special awards</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3">
                <div className="text-sm font-semibold">Re‑entry allowed</div>
                <div className="text-xs text-zinc-300">Step out and return with wristband</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3">
                <div className="text-sm font-semibold">Open to all majors</div>
                <div className="text-xs text-zinc-300">Beginners welcome</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3">
                <div className="text-sm font-semibold">Where</div>
                <div className="text-xs text-zinc-300">OCC Student Center Ballroom</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3">
                <div className="text-sm font-semibold">Food provided</div>
                <div className="text-xs text-zinc-300">Meals + snacks</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3">
                <div className="text-sm font-semibold">Sun 3:00 PM end</div>
                <div className="text-xs text-zinc-300">Awards right after</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3">
                <div className="text-sm font-semibold">Free to join</div>
                <div className="text-xs text-zinc-300">Register now</div>
              </div>
            </div>

            {/* Bubbles on desktop, placed around a soft glow center */}
            <div className="absolute inset-0 hidden md:block">
              {/* soft central glow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

              <BubbleStat
                label="When to arrive"
                sublabel="Sat 8:00 AM check‑in; Opening 9:00 AM"
                size="md"
                style={{ left: '4%', top: '6%' }}
              />
              <BubbleStat
                label="Prizes & tracks"
                sublabel="Multiple tracks + special awards"
                size="sm"
                style={{ left: '38%', top: '-2%' }}
              />
              <BubbleStat
                label="Re‑entry allowed"
                sublabel="Step out and return with wristband"
                size="lg"
                style={{ right: '2%', top: '8%' }}
              />
              <BubbleStat
                label="Open to all majors"
                sublabel="Beginners welcome"
                size="md"
                style={{ left: '2%', top: '46%' }}
              />
              <BubbleStat
                label="Where"
                sublabel="OCC Student Center Ballroom"
                size="md"
                style={{ right: '3%', top: '48%' }}
              />
              <BubbleStat
                label="Food provided"
                sublabel="Meals + snacks"
                size="sm"
                style={{ left: '10%', bottom: '9%' }}
              />
              <BubbleStat
                label="Sun 3:00 PM end"
                sublabel="Awards right after"
                size="sm"
                style={{ left: '50%', transform: 'translateX(-50%)', bottom: '3%' }}
              />
              <BubbleStat
                label="Free to join"
                sublabel="Register now"
                size="sm"
                style={{ right: '8%', bottom: '7%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


