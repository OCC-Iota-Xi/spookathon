"use client"

import { Ghost } from "lucide-react"
import { Countdown } from "@/components/ui/countdown"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [showCountdown, setShowCountdown] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Show backdrop and border when user has scrolled
      setHasScrolled(scrollY > 50)
      
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
    <nav className={`flex flex-row items-center justify-between fixed top-0 z-50 w-full px-4 lg:px-8 py-4 h-24 transition-all duration-300 border-b border-transparent ${
      hasScrolled 
        ? 'bg-zinc-950/40 backdrop-blur-lg border-zinc-800' 
        : 'bg-transparent'
    }`}>
      <div className="flex items-center space-x-4">
        <Ghost className="size-8" />
        
        {/* Animated countdown that appears on scroll */}
        <div className={`transition-all duration-500 ease-in-out ${
          showCountdown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}>
          {showCountdown && (
            <div className="text-xs">
              <Countdown targetDate={new Date("2025-10-24T09:00:00")} />
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex flex-row items-center justify-end space-x-8">
        <a href="#home" className="hover:text-zinc-100 transition-colors font-medium">
          Home
        </a>

        <a href="#about" className="hover:text-zinc-100 transition-colors font-medium">
          About
        </a>

        <a href="#tracks" className="hover:text-zinc-100 transition-colors font-medium">
          Tracks
        </a>

        <a href="#faqs" className="hover:text-zinc-100 transition-colors font-medium">
          FAQs
        </a>

        <a href="/" className="font-medium bg-zinc-100 hover:bg-zinc-100/70 transition-colors text-zinc-900 px-4 py-2 rounded-full">
          Register!
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <a href="/" className="text-sm font-medium bg-zinc-100 hover:bg-zinc-100/70 transition-colors text-zinc-900 px-4 py-2 rounded-full">
          Register!
        </a>
      </div>
    </nav>
  )
}
