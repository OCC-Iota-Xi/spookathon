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
    <div className={`flex flex-col items-center`}>
      <h2 className="text-lg font-medium text-zinc-300 mb-4">Hackathon Starts In</h2>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <div className="bg-zinc-900/50 rounded-lg p-4 min-w-[80px] text-center">
            <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
            <div className="text-xs text-zinc-400">Days</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-zinc-900/50 rounded-lg p-4 min-w-[80px] text-center">
            <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
            <div className="text-xs text-zinc-400">Hours</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-zinc-900/50 rounded-lg p-4 min-w-[80px] text-center">
            <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
            <div className="text-xs text-zinc-400">Minutes</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-zinc-900/50 rounded-lg p-4 min-w-[80px] text-center">
            <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
            <div className="text-xs text-zinc-400">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  )
} 