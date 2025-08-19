"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who can participate in Spookathon?",
      answer: "Spookathon is open to students of all experience levels across any major! Whether you're a complete beginner or seasoned developer, there's a place for you."
    },
    {
      question: "Do I need a team?",
      answer: "Teams are encouraged but not required! You can form teams of 2-4 people, or participate solo. We'll also have team formation activities for those looking for teammates."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, chargers, any development tools you prefer, and your creativity! We'll provide food, drinks, and a great environment to code in."
    },
    {
      question: "Are there prizes?",
      answer: "Yes! We have prizes for winners in each track, as well as special awards for innovation, design, and community choice."
    },
    {
      question: "Is there registration fee?",
      answer: "No! Spookathon is completely free to participate. We'll provide meals, snacks, and all necessary resources."
    }
  ]

  return (
    <section id="faqs" className="min-h-screen py-20 flex flex-col items-center justify-center px-8 bg-[#180f09]">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl mb-4">
          FAQs
        </h1>
        
        <p className="text-zinc-300 mb-12">
          Got questions? We&apos;ve got answers! Click on any question below to learn more about Spookathon.
        </p>
      </div>

      <div className="max-w-4xl w-full space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="backdrop-blur-sm border-b border-white overflow-hidden"
          >
            <button
              className="w-full py-4 text-left flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              {openFaq === index ? (
                <Minus className="size-5 flex-shrink-0" />
              ) : (
                <Plus className="size-5 flex-shrink-0" />
              )}
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-4">
                <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
