import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-12">Experiencia Laboral</h2>

      <div className="space-y-8">
        <Card className="bg-slate-800 border-slate-700 text-slate-200">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle className="text-xl">Ingeniero de Desarrollo de Software</CardTitle>
                <CardDescription className="text-slate-400">G-Global</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-slate-700">
                  2020 - Presente
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Desarrollo y mantenimiento de aplicaciones internas de la empresa, con enfoque principal en un sistema WMS
              (Warehouse Management System) para optimizar la gestión de inventarios y procesos logísticos.
            </p>
            <h4 className="font-semibold text-lg mt-4">Responsabilidades:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Desarrollo de interfaces de usuario con React y TypeScript</li>
              <li>Implementación de buenas prácticas para optimizar el rendimiento</li>
              <li>Integración con APIs RESTful y servicios backend</li>
              <li>Desarrollo de scripts de automatización con Python</li>
              <li>Colaboración en el diseño de arquitectura de software</li>
            </ul>
            <h4 className="font-semibold text-lg mt-4">Logros:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reducción del 40% en el tiempo de carga de la aplicación WMS</li>
              <li>Implementación de un sistema de monitoreo en tiempo real</li>
              <li>Desarrollo de un módulo de reportes que mejoró la toma de decisiones</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge className="bg-slate-700">React</Badge>
              <Badge className="bg-slate-700">TypeScript</Badge>
              <Badge className="bg-slate-700">JavaScript</Badge>
              <Badge className="bg-slate-700">Python</Badge>
              <Badge className="bg-slate-700">Node.js</Badge>
              <Badge className="bg-slate-700">RESTful APIs</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Puedes agregar más experiencias laborales aquí */}
      </div>
    </section>
  )
}
