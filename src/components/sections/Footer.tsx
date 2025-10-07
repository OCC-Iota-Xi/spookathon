"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Footer() {

  return (
    <footer className="min-h-screen py-12 md:py-20 flex flex-col items-center justify-center px-4 md:px-8">
      
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
