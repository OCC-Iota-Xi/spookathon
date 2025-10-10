"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

export default function GetInvolvedButton() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center font-medium transition-colors px-4 h-12 rounded-full bg-zinc-800 hover:bg-zinc-800/70 text-white cursor-pointer">
        Get Involved
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get Involved</DialogTitle>
          <DialogDescription>
            Choose an option to get involved in Spookathon 2025.
          </DialogDescription>
        </DialogHeader>

        <Link href="https://form.jotform.com/252387815581163" className="inline-block w-full">
          <Button size="lg" className="text-sm md:text-base px-6 md:px-8 py-4 md:py-6 rounded-full w-full">
            Join as Volunteer
            <ArrowRight className="size-3 md:size-4 ml-2" />
          </Button>
        </Link>

        <Link href="https://form.jotform.com/252387810463157" className="inline-block w-full">
          <Button size="lg" className="text-sm md:text-base px-6 md:px-8 py-4 md:py-6 rounded-full w-full">
            Become a Mentor/Judge
            <ArrowRight className="size-3 md:size-4 ml-2" />
          </Button>
        </Link>
      </DialogContent>
    </Dialog>
  )
}
