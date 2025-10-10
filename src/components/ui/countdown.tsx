"use client"

import { useState, useEffect } from 'react'

interface CountdownProps {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div aria-label="Event countdown" role="timer">
      <div className="flex space-x-1 md:space-x-2">
        <div className="flex flex-col items-center w-14 md:w-16">
          <div className="bg-zinc-900/50 rounded-lg text-center p-2 w-full border border-zinc-800 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
            <div className="text-base font-semibold text-white mb-0.5 md:mb-1">{timeLeft.days}</div>
            <div className="text-[10px] md:text-xs text-zinc-300 uppercase tracking-wide">Days</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-14 md:w-16">
          <div className="bg-zinc-900/50 rounded-lg text-center p-2 w-full border border-zinc-800 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
            <div className="text-base font-semibold text-white mb-0.5 md:mb-1">{timeLeft.hours}</div>
            <div className="text-[10px] md:text-xs text-zinc-300 uppercase tracking-wide">Hours</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-14 md:w-16">
          <div className="bg-zinc-900/50 rounded-lg text-center p-2 w-full border border-zinc-800 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
            <div className="text-base font-semibold text-white mb-0.5 md:mb-1">{timeLeft.minutes}</div>
            <div className="text-[10px] md:text-xs text-zinc-300 uppercase tracking-wide">Mins</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-14 md:w-16">
          <div className="bg-zinc-900/50 rounded-lg text-center p-2 w-full border border-zinc-800 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
            <div className="text-base font-semibold text-white mb-0.5 md:mb-1">{timeLeft.seconds}</div>
            <div className="text-[10px] md:text-xs text-zinc-300 uppercase tracking-wide">Secs</div>
          </div>
        </div>
      </div>
    </div>
  )
} 