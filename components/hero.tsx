'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

type Props = {
  redirectToProjects: () => void
}

export default function Hero({
  redirectToProjects
}: Props) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#646cff_1px,transparent_1px)] bg-[size:20px_20px] z-0" />

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Uziel Felipe Estrada Marin</h1>
        <h2 className="text-xl md:text-2xl text-slate-300 mb-8">Ingeniero en Desarrollo y Gestión de Software</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Especialista en React, JavaScript, TypeScript y Python con enfoque en rendimiento y buenas prácticas.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-slate-700 hover:bg-slate-600" onClick={redirectToProjects}>
            Ver Proyectos
          </Button>
          <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
            Descargar CV
          </Button>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-300 hover:text-white hover:bg-slate-700"
            onClick={() => {
              window.open("https://github.com/uziel471", "_blank");
            }}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-300 hover:text-white hover:bg-slate-700"
            onClick={() => {
              window.open("https://www.linkedin.com/in/uziel471", "_blank");
            }}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-300 hover:text-white hover:bg-slate-700"
            onClick={() => {
              window.open("mailto:uziel471@gmail.com", "_blank");
            }}
          >
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
