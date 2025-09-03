"use client"

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../magicui/terminal"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Footer() {

  return (
    <footer className="min-h-screen py-12 md:py-20 flex flex-col items-center justify-center px-4 md:px-8">

        <Terminal className="mt-8 md:mt-16 w-full max-w-4xl">
            <TypingAnimation className="text-xs md:text-sm">&gt; ./spookathon.sh --summon-hackers --level=nightmare</TypingAnimation>

            <AnimatedSpan className="text-green-500 text-xs md:text-sm">
            <span>👻 Haunting the codebase...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500 text-xs md:text-sm">
            <span>🎃 Carving out workspace. Found React ecosystem.</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500 text-xs md:text-sm">
            <span>🕷️ Weaving dark CSS magic...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500 text-xs md:text-sm">
            <span>🧙‍♂️ Casting import spells...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500 text-xs md:text-sm">
            <span>⚡ Brewing component potions...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500 text-xs md:text-sm">
            <span>🔮 Summoning API spirits...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500 text-xs md:text-sm">
            <span>💀 Reanimating dead code...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500 text-xs md:text-sm">
            <span>🧠 Installing neural networks...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500 text-xs md:text-sm">
            <span>🤖 Awakening the machines...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-orange-500 text-xs md:text-sm">
            <span>⚠️ Warning: 48 hours of coding madness detected</span>
            <span className="pl-2 block md:inline">- sleep.exe not found</span>
            </AnimatedSpan>

            <TypingAnimation className="text-muted-foreground text-xs md:text-sm">
            🎃 SPOOKATHON INITIALIZED! Welcome to the nightmare...
            </TypingAnimation>

            <TypingAnimation className="text-muted-foreground text-xs md:text-sm">
            💻 Your coding horror story begins October 24th.
            </TypingAnimation>
        </Terminal>
      
        <Link href="https://form.jotform.com/251737472997070" className="mt-8 md:mt-16">
          <Button
            size="lg"
            className="text-sm md:text-base p-4 md:p-6 bg-white text-black rounded-full"
          >
            Join the Spookathon
            <ArrowRight className="size-3 md:size-4 ml-2" />
          </Button>
        </Link>

    </footer>
  )
}
