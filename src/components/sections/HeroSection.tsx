"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { Creepster } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";
import Link from "next/link";

const creepster = Creepster({
    weight: "400",
    subsets: ["latin"],
});

export default function HeroSection() {
    return (
        <>
            <section 
                id="home" 
                className="relative overflow-hidden"
                style={{
                    background: 'linear-gradient(to bottom, #4a2545, #2d1b3d, #1a0d1a, #000000)',
                    minHeight: '100vh'
                }}
            >
                 <div className="absolute top-0 left-0 right-0 z-10 h-full items-center px-4 md:px-8 lg:px-16">
                    <div className="w-full text-center lg:text-left mt-24">
                        <h2 className="mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-medium">October 24 – 25</h2>

                        <h1
                            className={`text-7xl md:text-8xl xl:text-9xl leading-none mb-4 md:mb-6 ${creepster.className}`}
                        >
                            Spookathon
                            <br />
                            2025
                        </h1>
                        
                        {/* Countdown directly under the title */}
                        <div id="hero-countdown" className="flex flex-col md:flex-row items-center">
                            <div className="md:me-12">
                                <p className="font-mono text-sm mb-2">Countdown to Spookathon</p>
                                <Countdown targetDate={new Date("2025-10-24T09:00:00")} />
                            </div>

                            <Link href="https://form.jotform.com/251737472997070" className="mt-4 md:mt-6 inline-block">
                                <Button size="lg" className="text-sm md:text-base px-6 md:px-8 py-4 md:py-6 bg-white text-black rounded-full">
                                    Register
                                    <ArrowRight className="size-3 md:size-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* spacer column for layout on desktop */}
                    <div className="hidden lg:block" />
                </div>
                
                {/* Hero ground SVG */}
                <div className="flex flex-col justify-end h-screen">
                    <img
                        src="/assets/hero-ground.svg"
                        alt="Ground"
                        className="w-full h-[50vh] object-cover object-bottom md:h-auto md:object-contain"
                    />
                </div>

                
                <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex flex-col items-center z-30">
                    <p className="mb-2 text-xs md:text-sm text-zinc-300">Scroll down to learn more</p>
                    <ArrowDown className="size-4 md:size-5" />
                </div>
            </section>
        </>
    );
}
