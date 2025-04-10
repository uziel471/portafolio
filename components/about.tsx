import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-12">Sobre Mí</h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-slate-700">
            <Image
              src="/80862779.jpeg"
              alt="Uziel Felipe Estrada Marin"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Card className="bg-slate-800 border-slate-700 text-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl">Ingeniero en Desarrollo y Gestión de Software</CardTitle>
            <CardDescription className="text-slate-400">Con 4 años de experiencia profesional</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Soy un desarrollador apasionado por crear soluciones de software eficientes y escalables. Me especializo
              en el desarrollo frontend con React y TypeScript, aplicando siempre buenas prácticas para optimizar el
              rendimiento.
            </p>
            <p>
              Mi experiencia incluye el trabajo en proyectos internos para G-Global, donde he contribuido
              significativamente al desarrollo de un sistema WMS (Warehouse Management System), mejorando procesos
              logísticos y optimizando la gestión de inventarios.
            </p>
            <p>
              Además de mis habilidades técnicas, me enfoco en la colaboración efectiva en equipo y la entrega de
              soluciones que realmente resuelvan problemas de negocio.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
