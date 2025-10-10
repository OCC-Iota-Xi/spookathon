"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { Creepster } from "next/font/google"

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  type FaqItem = { question: string; answer: string }
  type FaqCategory = { name: string; items: FaqItem[] }

  const categories: FaqCategory[] = [
    {
      name: "General",
      items: [
        {
          question: "What is a hackathon?",
          answer:
            "A hackathon is a fast‑paced event where you collaborate to build a project in a single weekend. You'll attend workshops, get help from mentors, and demo your work to judges at the end.",
        },
        {
          question: "Who can come?",
          answer:
            "Spookathon welcomes students from any major and skill level. Beginners are encouraged to join—no prior hackathon experience required.",
        },
        {
          question: "What does it cost?",
          answer:
            "It's free to attend. We provide meals, snacks, and plenty of caffeine throughout the event.",
        },
        {
          question: "Are there prizes?",
          answer:
            "Yes! We'll recognize top projects in each track and award special prizes for innovation, design, and community choice.",
        },
      ],
    },
    {
      name: "Participation",
      items: [
        {
          question: "What if I don't know how to code?",
          answer:
            "You're still welcome! We offer beginner‑friendly workshops and mentors. You can learn as you go and contribute through design, product, research, writing, and more.",
        },
        {
          question: "What if I don't have a team or idea?",
          answer:
            "No problem. We'll run team‑formation and ideation activities at the start. You can also work solo if you prefer.",
        },
        {
          question: "What can I build?",
          answer:
            "Anything you can dream up—web, mobile, AI/ML, hardware, games, or something wild that fits our tracks. Projects must be built during the event.",
        },
      ],
    },
    {
      name: "Logistics",
      items: [
        {
          question: "What should I bring?",
          answer:
            "Bring your laptop, chargers, and anything you need to be comfortable. We'll take care of food, drinks, and a space to create.",
        },
        {
          question: "When should I arrive? Can I leave and come back?",
          answer:
            "Check‑in opens at 8:00 AM on Saturday and Opening Ceremony starts at 9:00 AM. You can step out and re‑enter with your event wristband; please return before submissions close.",
        },
        {
          question: "Where is the event and where do I park?",
          answer:
            "We're in the OCC Student Center Ballroom. Parking is available in nearby campus lots; follow event signage to the Ballroom entrance.",
        },
      ],
    },
  ]

  return (
    <section id="faqs" className="min-h-screen py-12 md:py-20 flex flex-col items-center justify-center px-4 md:px-8 bg-[#180f09]">
      <div className="max-w-4xl w-full">
        <h1 className={`text-4xl md:text-6xl lg:text-8xl mx-auto ${creepster.className} text-center`}>
          FAQs
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-6 lg:mt-8 mb-8 md:mb-12 text-center">
          Got questions? We&apos;ve got answers! Click on any question below to learn more about Spookathon.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-sm text-white/90">
                {category.name}
              </span>
            </div>
            <div className="space-y-3 md:space-y-4">
              {category.items.map((faq) => {
                const key = `${category.name}-${faq.question}`
                const isOpen = openItem === key
                return (
                  <div
                    key={key}
                    className="backdrop-blur-sm border-b border-white overflow-hidden"
                  >
                    <button
                      className="w-full py-3 md:py-4 px-2 md:px-0 text-left flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
                      onClick={() => setOpenItem(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${key}`}
                    >
                      <h3 className="text-base md:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      {isOpen ? (
                        <Minus className="size-4 md:size-5 flex-shrink-0" />
                      ) : (
                        <Plus className="size-4 md:size-5 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      id={`panel-${key}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      role="region"
                      aria-labelledby={`button-${key}`}
                    >
                      <div className="px-2 md:px-6 pb-3 md:pb-4">
                        <p className="text-zinc-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
