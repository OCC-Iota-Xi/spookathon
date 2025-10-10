"use client"

import Image from "next/image"
import { Creepster } from "next/font/google"

const creepster = Creepster({ weight: "400", subsets: ["latin"] })

const PHOTOS = [
  // Using existing assets as placeholders; replace with past event photos when available
  { src: "/assets/og-image.png", alt: "Past hackathon 1" },
  { src: "/assets/og-image.png", alt: "Past hackathon 2" },
  { src: "/assets/og-image.png", alt: "Past hackathon 3" },
  { src: "/assets/og-image.png", alt: "Past hackathon 4" },
  { src: "/assets/og-image.png", alt: "Past hackathon 5" },
  { src: "/assets/og-image.png", alt: "Past hackathon 6" },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="relative bg-[#0b090c] py-20 md:py-28">
      <div className="absolute inset-0" style={{ background: "radial-gradient(50% 50% at 50% 10%, rgba(255,255,255,0.06), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className={`text-4xl md:text-6xl lg:text-7xl ${creepster.className}`}>Past Haunts</h2>
          <p className="mt-3 text-zinc-300">Scenes from previous Spookathons—teams building, learning, and having fun.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PHOTOS.map((photo, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image src={photo.src} alt={photo.alt} width={800} height={600} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


