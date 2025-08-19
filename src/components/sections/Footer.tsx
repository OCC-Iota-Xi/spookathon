"use client"

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Footer() {

  return (
    <footer className="min-h-screen py-20 flex flex-col items-center justify-center px-8">

        <Terminal className="mt-16">
            <TypingAnimation>&gt; ./spookathon.sh --summon-hackers --level=nightmare</TypingAnimation>

            <AnimatedSpan className="text-green-500">
            <span>👻 Haunting the codebase...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
            <span>🎃 Carving out workspace. Found React ecosystem.</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
            <span>🕷️ Weaving dark CSS magic...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
            <span>🧙‍♂️ Casting import spells...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
            <span>⚡ Brewing component potions...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
            <span>🔮 Summoning API spirits...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
            <span>💀 Reanimating dead code...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
            <span>🧠 Installing neural networks...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
            <span>🤖 Awakening the machines...</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-orange-500">
            <span>⚠️ Warning: 48 hours of coding madness detected</span>
            <span className="pl-2">- sleep.exe not found</span>
            </AnimatedSpan>

            <TypingAnimation className="text-muted-foreground">
            🎃 SPOOKATHON INITIALIZED! Welcome to the nightmare...
            </TypingAnimation>

            <TypingAnimation className="text-muted-foreground">
            💻 Your coding horror story begins October 24th.
            </TypingAnimation>
        </Terminal>
      
        <Link href="/" className="mt-16">
          <Button
            size="lg"
            className="text-base p-6 bg-white text-black rounded-full"
          >
            Join the Spookathon
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </Link>

    </footer>
  )
}
