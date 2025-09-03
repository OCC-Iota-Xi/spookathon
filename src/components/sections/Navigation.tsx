"use client"

import { Menu, X } from "lucide-react"
import { Countdown } from "@/components/ui/countdown"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navigation() {
  const [showCountdown, setShowCountdown] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                <Countdown targetDate={new Date("2025-10-24T09:00:00")} />
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex flex-row items-center justify-end space-x-8">
          <Link href="#home" className="hover:text-zinc-100 transition-colors font-medium">
            Home
          </Link>

          <Link href="#about" className="hover:text-zinc-100 transition-colors font-medium">
            About
          </Link>

          <Link href="#tracks" className="hover:text-zinc-100 transition-colors font-medium">
            Tracks
          </Link>

          <Link href="#faqs" className="hover:text-zinc-100 transition-colors font-medium">
            FAQs
          </Link>

          <Link href="https://form.jotform.com/251737472997070" className="font-medium bg-zinc-100 hover:bg-zinc-100/70 transition-colors text-zinc-900 px-4 py-2 rounded-full">
            Register!
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-3">
          <Link href="https://form.jotform.com/251737472997070" className="text-xs font-medium bg-zinc-100 hover:bg-zinc-100/70 transition-colors text-zinc-900 px-3 py-2 rounded-full">
            Register
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-24 left-0 right-0 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="flex flex-col space-y-1 p-4">
            <Link 
              href="#home" 
              className="block py-3 px-4 hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="block py-3 px-4 hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#tracks" 
              className="block py-3 px-4 hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tracks
            </Link>
            <Link 
              href="#faqs" 
              className="block py-3 px-4 hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            {showCountdown && (
              <div className="px-4 py-2 border-t border-zinc-700 mt-2 pt-4">
                <div className="text-xs">
                  <Countdown targetDate={new Date("2025-10-24T09:00:00")} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
