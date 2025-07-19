import { Sun, Ghost, ArrowDown, Contact, House } from "lucide-react"
import { Creepster  } from "next/font/google"

import { Button } from "@/components/button"

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
})


export default function Home() {
  return (
    <div  className="flex flex-row min-h-screen text-white relative overflow-hidden">
      <nav className="flex flex-col justify-between items-center fixed top-0 h-screen px-3 py-6 me-8">
        <div className="flex items-center space-x-3">
          <Ghost className="size-8" />
        </div>

        <div className="flex flex-col p-1 py-2 bg-zinc-900/50 rounded-full mx-auto gap-y-2">
          <a href="#home" className="flex flex-row items-center p-3 hover:bg-zinc-700/50 rounded-full transition-colors">
            <House className="size-5" />
          </a>
          <a href="#about" className="flex flex-row items-center p-3 hover:bg-zinc-700/50 rounded-full transition-colors">
            <Ghost className="size-5" />
          </a>
          <a href="#tracks" className="flex flex-row items-center p-3 hover:bg-zinc-700/50 rounded-full transition-colors">
            <Contact className="size-5" />
          </a>
        </div>

        <div></div>
      </nav>

      
      {/* Main content */}
      <main className="w-full px-6 md:px-8 ml-24">
          <section id="home" className="min-h-screen h-screen flex flex-row items-center relative">
            <div className="absolute bottom-0 w-full flex flex-col items-center pb-5">
              <h1 className="mb-2 text-sm">Scroll down to learn more</h1>
              <ArrowDown className="size-5" /> 
            </div>
          
            <div>
              <h1 className="mb-4 text-xl font-medium">October 24 – 31</h1>
              <h1 className={`mb-8 text-4xl md:text-6xl lg:text-9xl leading-tighter ${creepster.className}`}>
                Spookathon<br/>2025
              </h1>
            </div>

            <div className="flex flex-row justify-center w-full">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/011/569/987/non_2x/3d-pumpkin-halloween-free-free-png.png" 
                alt="Pumpkin" 
                className="w-1/2 rock-animation"
              />
            </div>
          </section>

          <section id="about" className="min-h-screen h-screen flex flex-row items-center">
            <div className="w-1/2">
              <h1 className={`text-4xl md:text-7xl leading-tighter ${creepster.className}`}>
                About
              </h1>

              <p className="mt-3">Spookathon is a hybrid, week-long, Halloween-inspired hackathon (software/hardware competition) hosted by the Iota Xi Honor Society at Orange Coast College. Open to students of all experience levels, the event focuses on those studying computer science, engineering, or other tech-related fields. Participants will work in small teams to build creative, tech-driven solutions to real-world problems.</p>
            </div>
          </section>

          <section id="tracks" className="min-h-screen h-screen flex flex-col items-center">
              <h1 className={`text-4xl md:text-7xl leading-tighter ${creepster.className}`}>
                Tracks
              </h1>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-zinc-900/50 rounded-lg p-4">

                </div>
              </div>
          </section>

          <section id="faqs" className="min-h-screen h-screen flex flex-col items-center">
              <h1 className={`text-4xl md:text-7xl leading-tighter ${creepster.className}`}>
                FAQs
              </h1>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-zinc-900/50 rounded-lg p-4">

                </div>
              </div>
          </section>
        </main>
    </div>
  );
}
