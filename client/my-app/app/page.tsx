import { Button } from '@/components/ui/button'
import SearchInput from '@/components/search-input'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <div className="h-[5000px] pt-16">
      <section className="flex flex-col justify-around items-center text-center min-h-screen bg-red-100">
      <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl">The Gateway To your Business Success</h1>
      <SearchInput />
      </div>
      <div>
      <a href={'/c/hhhh'} className="text-xl hover:bg-red-200">
        company profiles
      </a>
      <a href={'/c/onboarding'} className="text-xl hover:bg-red-200">
        onboard new company
      </a>
      </div>
      </section>
    </div>
  )
}
