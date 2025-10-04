"use client"

import { Countdown } from "@/components/ui/countdown"
import { useState, useEffect } from "react"
import Link from "next/link"

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
      <nav className={`flex flex-row items-center justify-between fixed top-0 z-50 w-full px-4 lg:px-8 h-20 transition-all duration-300 border-b border-transparent ${
        hasScrolled 
          ? 'bg-zinc-950/40 backdrop-blur-lg border-zinc-800' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center space-x-4">
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="size-10"
          />
          
          {/* Animated countdown that appears on scroll */}
          <div className={`hidden sm:block transition-all duration-500 ease-in-out ${
            showCountdown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            {showCountdown && (
              <div className="text-xs">
                <Countdown targetDate={new Date("2025-10-25T09:00:00")} />
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex flex-row items-center justify-end space-x-6">
          <Link href="#home" className="hover:text-zinc-100 transition-colors font-medium">
            Home
          </Link>

          <Link href="#about" className="hover:text-zinc-100 transition-colors font-medium">
            About
          </Link>

          <Link href="#tracks" className="hover:text-zinc-100 transition-colors font-medium">
            Tracks
          </Link>

          <Link href="#schedule" className="hover:text-zinc-100 transition-colors font-medium">
            Schedule
          </Link>

          <Link href="#faqs" className="hover:text-zinc-100 transition-colors font-medium">
            FAQs
          </Link>

          <div className="flex items-center space-x-3">
            <GetInvolvedButton />

            <Link 
              href="https://form.jotform.com/251737472997070" 
              className="flex items-center justify-center font-medium transition-colors px-4 h-10 rounded-full bg-zinc-100 hover:bg-zinc-100/70 text-zinc-900"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className={`md:hidden flex items-center space-x-3 transition-all duration-500 ease-in-out ${
          showMobileButtons ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}>
          <GetInvolvedButton />
          <Link href="https://form.jotform.com/251737472997070" className="flex items-center justify-center font-medium transition-colors px-3 h-11 rounded-full bg-zinc-100 hover:bg-zinc-100/70 text-zinc-900">
            Register!
          </Link>
        </div>
      </nav>
    </>
  )
}
