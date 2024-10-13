
import ImageCard from '@/showcase/demo/playground/image-card'
import React from 'react'

export default function DemoPage() {
  return (
    <div className='min-h-screen pt-10 max-w-7xl mx-auto w-full flex flex-col items-center justify-center'>
      <div className='text-center pb-4 border-b border-gray-700'>
        <h1 className='text-4xl font-semibold'>Demo Page</h1>
        <p className='text-lg mt-4'>This is just a demo page for videography</p>
      </div>
      <ImageCard />
    </div>
  )
}
