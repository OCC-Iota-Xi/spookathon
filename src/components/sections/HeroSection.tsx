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
                    paddingTop: "10rem",
                    minHeight: "calc(100vh - 3rem)",
                    background: "radial-gradient(circle at center top,rgba(45, 55, 39, 1) 0%, rgba(27, 32, 37, 1) 40%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%)"
                }}
            >
                {/* Vertically centered content */}
                <div className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-2 items-center px-8 lg:px-16">
                    <div className="w-full text-center lg:text-left">
                        <h2 className="mb-3 text-lg lg:text-xl font-medium">October 24 – 31</h2>

                        <h1
                            className={`text-4xl md:text-6xl lg:text-9xl leading-none mb-4 ${creepster.className}`}
                        >
                            Spookathon
                            <br />
                            2025
                        </h1>

                        <Link href="/" className="mt-6 inline-block">
                            <Button size="lg" className="text-base px-8 py-6 bg-white text-black rounded-full">
                                Register
                                <ArrowRight className="size-4 ml-2" />
                            </Button>
                        </Link>
                        
                        {/* Countdown directly under the title */}
                        <div id="hero-countdown" className="mt-12">
                            <p className="font-mono text-sm mb-2">Countdown to Spookathon</p>
                            <Countdown targetDate={new Date("2025-10-24T09:00:00")} />
                        </div>
                    </div>

                    {/* spacer column for layout on desktop */}
                    <div className="hidden lg:block" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center z-30">
                    <p className="mb-2 text-sm text-zinc-300">Scroll down to learn more</p>
                    <ArrowDown className="size-5" />
                </div>


                {/* Pumpkin sits on top of the grass */}
                <img
                    src="https://static.vecteezy.com/system/resources/previews/011/569/987/non_2x/3d-pumpkin-halloween-free-free-png.png"
                    alt="Pumpkin"
                    className="absolute bottom-24 right-1/2 translate-x-1/2 lg:right-16 lg:translate-x-0 w-[38rem] max-w-[80vw] z-20 rock-animation pointer-events-none select-none"
                />
            </section>

            {/* <div 
                id="hero-interstitial"
                className="w-full h-20 py-2 px-4 bg-black flex flex-row items-center justify-between"
            >
                <div className="w-1/3">
                    <Countdown targetDate={new Date("2025-10-24T09:00:00")} />
                </div>

                <div className="w-1/3 h-full flex flex-row items-center justify-center">
                    <div className="flex flex-col items-center z-30 animate-bounce">
                        <p className="mb-2 text-sm text-zinc-300">Scroll down to learn more</p>
                        <ArrowDown className="size-5 text-orange-400" />
                    </div>
                </div>

                <div className="flex flex-row justify-end w-1/3">
                    <a href="/" className="text-sm font-medium bg-zinc-100 hover:bg-zinc-100/70 transition-colors text-zinc-900 px-4 py-2 rounded-full">
                    Register!
                    </a>
                </div>
            </div> */}
        </>
    );
}
