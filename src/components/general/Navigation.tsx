"use client"

import { Countdown } from "@/components/ui/countdown"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Instagram } from "lucide-react"

import GetInvolvedButton from "@/components/general/GetInvolvedButton"

export default function Navigation() {
  const [showCountdown, setShowCountdown] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [showMobileButtons, setShowMobileButtons] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Show backdrop and border when user has scrolled
      setHasScrolled(scrollY > 50)
      
      // Show mobile buttons when user has scrolled (similar to countdown logic)
      setShowMobileButtons(scrollY > 50)
      
      const heroCountdown = document.getElementById('hero-countdown')
      if (heroCountdown) {
        const rect = heroCountdown.getBoundingClientRect()
        // Show navbar countdown when hero countdown is out of view
        setShowCountdown(rect.bottom < 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 z-50 w-full h-20 transition-all duration-300 border-b ${
          hasScrolled
            ? 'bg-zinc-950/60 backdrop-blur-xl border-zinc-800/60 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 flex flex-row items-center justify-between h-full">
          <div className="flex items-center space-x-4">
            <Link href="#home" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm">
              <img
                src="/assets/logo.svg"
                alt="Spookathon logo"
                className="size-10"
              />
            </Link>
          
            {/* Animated countdown that appears on scroll */}
            <div className={`hidden sm:flex items-center space-x-3 transition-all duration-500 ease-in-out ${
              showCountdown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              {showCountdown && (
                <>
                  <div className="text-xs">
                    <Countdown targetDate={new Date(2025, 9, 17, 23, 59, 0)} />
                  </div>
                  <div className="flex items-center space-x-5 ms-5">
                    <Link 
                      href="https://discord.gg/P9aYmYaJfe" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm"
                      aria-label="Join our Discord"
                    >
                      <svg className="size-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </Link>
                    <Link 
                      href="https://instagram.com/cshs_occ" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="size-7" />
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="hidden md:flex flex-row items-center justify-end space-x-6">
            <Link href="#home" className="hover:text-zinc-100 transition-all font-medium hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm">
              Home
            </Link>

            <Link href="#about" className="hover:text-zinc-100 transition-all font-medium hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm">
              About
            </Link>

            <Link href="#tracks" className="hover:text-zinc-100 transition-all font-medium hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm">
              Tracks
            </Link>

            <Link href="#schedule" className="hover:text-zinc-100 transition-all font-medium hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm">
              Schedule
            </Link>

            <Link href="#faqs" className="hover:text-zinc-100 transition-all font-medium hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 rounded-sm">
              FAQs
            </Link>

            <div className="flex items-center space-x-3">
              <Link 
                href="https://form.jotform.com/252888339331163" 
                className="flex items-center justify-center font-medium transition-all px-4 h-10 rounded-full bg-zinc-100 hover:bg-zinc-100/80 text-zinc-900 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40"
              >
                Register
              </Link>
              
              <GetInvolvedButton />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden flex items-center space-x-3 transition-all duration-500 ease-in-out ${
            showMobileButtons ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <GetInvolvedButton />
            <Link href="https://form.jotform.com/252888339331163" className="flex items-center justify-center font-medium transition-all px-3 h-11 rounded-full bg-zinc-100 hover:bg-zinc-100/80 text-zinc-900 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40">
              Register!
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
