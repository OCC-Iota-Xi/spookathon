"use client"

import { Creepster } from "next/font/google";
import { useState } from "react";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});

type ScheduleEvent = {
  time: string
  title: string
  description: string
  duration: string
  type: 'workshop' | 'activity' | 'meal' | 'ceremony' | 'hacking' | 'other'
}

type DaySchedule = {
  day: string
  date: string
  events: ScheduleEvent[]
}

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0) // 0 for Day 1, 1 for Day 2
  const scheduleData: DaySchedule[] = [
    {
      day: "Day 1",
      date: "October 25, 2025",
      events: [
        {
          time: "8:00 AM",
          title: "Contestants Arrive",
          description: "Check in all participants at Reception",
          duration: "1 hour",
          type: 'other'
        },
        {
          time: "9:00 AM",
          title: "Opening Ceremony",
          description: "Welcome to Spookathon! Meet the organizers and get ready for the coding adventure ahead!",
          duration: "30 min",
          type: 'ceremony'
        },
        {
          time: "9:30 AM",
          title: "Ceremony Close & Hacking Start",
          description: "Announce breakfast and team formation. The spooky coding begins!",
          duration: "30 min",
          type: 'hacking'
        },
        {
          time: "10:00 AM",
          title: "Team Formation Event",
          description: "Find your coding companions! Mix and match with other hackers to form the perfect spooky squad.",
          duration: "30 min",
          type: 'other'
        },
        {
          time: "11:00 AM",
          title: "Workshop 1: Idea Formation",
          description: "Learn how to brainstorm and develop your hackathon project ideas effectively.",
          duration: "30 min",
          type: 'workshop'
        },
        {
          time: "12:30 PM",
          title: "Lunch",
          description: "Fuel up with some delicious food to keep your coding energy high!",
          duration: "30 min",
          type: 'meal'
        },
        {
          time: "2:00 PM",
          title: "Workshop 2: How to Collaborate on GitHub",
          description: "Master version control and team collaboration using GitHub for your projects.",
          duration: "1 hour",
          type: 'workshop'
        },
        {
          time: "4:00 PM",
          title: "Activity 1: Type Racer Competition",
          description: "Test your typing skills in this fun competition! Fastest fingers win spooky prizes.",
          duration: "1 hour",
          type: 'activity'
        },
        {
          time: "6:00 PM",
          title: "Workshop 3: Intro to UI/UX",
          description: "Learn the basics of user interface and user experience design for your projects.",
          duration: "30 min",
          type: 'workshop'
        },
        {
          time: "7:00 PM",
          title: "Dinner",
          description: "Enjoy a delicious dinner with your fellow hackers and recharge for the evening.",
          duration: "1 hour",
          type: 'meal'
        },
        {
          time: "7:30 PM",
          title: "Activity 2: Ping-pong Championship",
          description: "Take a break from coding and compete in our ping-pong tournament!",
          duration: "1 hour",
          type: 'activity'
        },
        {
          time: "9:30 PM",
          title: "End of Day 1",
          description: "End of Day 1! Get some rest and come back tomorrow for more hacking fun.",
          duration: "30 min",
          type: 'other'
        }
      ]
    },
    {
      day: "Day 2",
      date: "October 26, 2025",
      events: [
        {
          time: "9:00 AM",
          title: "Breakfast",
          description: "Start your day with a hearty breakfast to fuel your final coding push!",
          duration: "30 min",
          type: 'meal'
        },
        {
          time: "10:00 AM",
          title: "Workshop 4: Pitching Your Ideas",
          description: "Learn how to effectively present and pitch your project to judges and peers.",
          duration: "1 hour",
          type: 'workshop'
        },
        {
          time: "12:00 PM",
          title: "Lunch",
          description: "Final meal before the big push! Make sure you&apos;re energized for presentations.",
          duration: "1 hour",
          type: 'meal'
        },
        {
          time: "2:30 PM",
          title: "Submissions Due (Soft Deadline)",
          description: "First deadline for project submissions. Make sure your project is ready!",
          duration: "30 min",
          type: 'other'
        },
        {
          time: "3:00 PM",
          title: "Hacking Ends (Hard Deadline)",
          description: "Time's up! Final deadline for all project submissions.",
          duration: "30 min",
          type: 'hacking'
        },
        {
          time: "3:00 PM",
          title: "Break for Hackers",
          description: "Take a well-deserved break while judges review your amazing projects.",
          duration: "30 min",
          type: 'other'
        },
        {
          time: "3:30 PM",
          title: "Judging Time",
          description: "Judges review all submitted projects and select the winners.",
          duration: "1 hour",
          type: 'other'
        },
        {
          time: "5:00 PM",
          title: "Closing Ceremony & Awards",
          description: "The moment of truth! Winners will be announced and prizes awarded.",
          duration: "45 min",
          type: 'ceremony'
        }
      ]
    }
  ]

  return (
    <section
      id="schedule"
      className="relative min-h-screen bg-[#2a1f1a] py-24"
    >
      {/* Custom Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-[calc(144%+1.3px)] h-[78px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#190E08"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#190E08"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#190E08"
          />
        </svg>
      </div>

      <div className="relative max-w mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className={`text-5xl md:text-6xl lg:text-8xl mb-2 text-white ${creepster.className}`}>
            Schedule
          </h1>
        </div>

        {/* Schedule Blocks */}
        <div className="space-y-8">
          {/* Day Selection Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {scheduleData.map((daySchedule, dayIndex) => (
              <button
                key={dayIndex}
                onClick={() => setActiveDay(dayIndex)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeDay === dayIndex
                    ? 'bg-orange-400 text-black'
                    : 'bg-[#3a2f2a] text-white border border-zinc-700 hover:border-zinc-600'
                }`}
              >
                {daySchedule.day}
              </button>
            ))}
          </div>

          <div className="space-y-8">
              {/* Schedule Events */}
              <div className="space-y-3">
                {scheduleData[activeDay].events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex items-center gap-4 bg-[#3a2f2a]/40 backdrop-blur-sm rounded-lg p-4 border border-zinc-700/30">
                    <div className="flex-shrink-0 w-20 text-orange-400 font-semibold text-sm">
                      {event.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-base">{event.title}</h3>
                    </div>
                    <div className="flex-shrink-0 text-zinc-500 text-sm">
                      {event.duration}
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>

    
      </div>

      {/* Custom Shape Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg 
          className="relative block w-[calc(144%+1.3px)] h-[78px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#190E08"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#190E08"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#190E08"
          />
        </svg>
      </div>
    </section>
  )
}
