"use client"

import { useRef } from "react"

import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  const projectDetailRef = useRef<HTMLDivElement>(null);

  const redirectToProjects = () => {
    if (!projectDetailRef.current) {
      return;
    }
    projectDetailRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Hero redirectToProjects={redirectToProjects} />
      <div className="container mx-auto px-4 py-8 space-y-20">
        <About />
        <Skills />
        <Experience />
        <Projects ref={projectDetailRef} />
        <Contact />
      </div>
    </main>
  )
}
