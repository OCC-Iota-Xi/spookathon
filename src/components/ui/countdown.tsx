"use client"

import { useState, useEffect } from 'react'

interface CountdownProps {
  targetDate: Date
  className?: string
}

export function Countdown({ targetDate, className = "" }: CountdownProps) {
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
    <div>
      <div className="flex space-x-1">
        <div className="flex flex-col items-center w-14">
          <div className="bg-zinc-900/50 rounded-lg text-center p-3 w-full border border-zinc-800">
            <div className="text-base font-medium text-white mb-1">{timeLeft.days}</div>
            <div className="text-xs text-zinc-300">Days</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-14">
          <div className="bg-zinc-900/50 rounded-lg text-center p-3 w-full border border-zinc-800">
            <div className="text-base font-medium text-white mb-1">{timeLeft.hours}</div>
            <div className="text-xs text-zinc-300">Hours</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-14">
          <div className="bg-zinc-900/50 rounded-lg text-center p-3 w- border border-zinc-800">
            <div className="text-base font-medium text-white mb-1">{timeLeft.minutes}</div>
            <div className="text-xs text-zinc-300">Mins</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-14">
          <div className="bg-zinc-900/50 rounded-lg text-center p-3 w-full border border-zinc-800">
            <div className="text-base font-medium text-white mb-1">{timeLeft.seconds}</div>
            <div className="text-xs text-zinc-300">Secs</div>
          </div>
        </div>
      </div>
    </div>
  )
} 