import React from 'react'
import MyButton from '../components/health-check-button'

export default async function healthCheck() {
  return (
    <main
      className={`flex h-[calc(100vh-56px)] flex-col items-center justify-center`}
    >
      <MyButton />
    </main>
  )
}
