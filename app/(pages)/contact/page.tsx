import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
    description: "Just a email contact section",
    alternates: {
      canonical: `https://mxnan.com/contact`,
    },
  };
}
export default function ContactPage() {
  return (
  <section>
    
  </section>
  )
}
