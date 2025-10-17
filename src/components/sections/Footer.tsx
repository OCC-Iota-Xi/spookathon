"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Instagram } from "lucide-react"
import { Creepster } from "next/font/google";
const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {


  return (
    <footer className="flex flex-col items-center justify-end px-4 md:px-8 overflow-hidden pb-2">
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center">
        <Link href="https://form.jotform.com/252888339331163" className="mt-8 md:mt-12">
          <Button
            size="lg"
            className="text-sm md:text-base p-4 md:p-6 bg-white text-black rounded-full"
          >
            Join the Spookathon
            <ArrowRight className="size-3 md:size-4 ml-2" />
          </Button>
        </Link>

        <div className="mt-6 md:mt-8 flex items-center gap-5 md:gap-6">
          <Link 
            href="https://discord.gg/XDpjaNPv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm"
            aria-label="Join our Discord"
          >
            <svg className="size-7 md:size-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </Link>
          <Link 
            href="https://instagram.com/cshs_occ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="size-7 md:size-8" />
          </Link>
        </div>

        <h1 className={`text-7xl md:text-8xl xl:text-[9rem] leading-none mb-4 md:mb-6 mt-12 ${creepster.className}`}>
          Spookathon
        </h1>
      </div>
    </footer>
  )
}
