'use client'
import { useState, useEffect } from 'react'

export default function TimerCounter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(
      () => setCount((prevCount) => prevCount + 1),
      1000
    )
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <hr />
      <p> {count}</p>
      <button
        className="font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}
