import { Metadata } from 'next';
import React from 'react'


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Components",
    description: "Showing custom components here",
    alternates: {
      canonical: `https://mxnan.com/components`,
    },
  };
}
export default function ComponentIntroPage() {
  return (
   <section>
    
   </section>
  )
}
