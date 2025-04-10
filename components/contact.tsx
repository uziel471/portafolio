'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>

      <div className="grid md:grid-cols-1 gap-2">
        <Card className="bg-slate-800 border-slate-700 text-slate-200">
          <CardHeader>
            <CardTitle className="text-xl">Información de Contacto</CardTitle>
            <CardDescription className="text-slate-400">
              Estoy disponible para nuevas oportunidades y colaboraciones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-slate-700 p-3 rounded-full">
                <Mail className="h-5 w-5 text-slate-200" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-slate-200">uziel471@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-700 p-3 rounded-full">
                <Phone className="h-5 w-5 text-slate-200" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Teléfono</p>
                <p className="text-slate-200">+52 664 547 2727</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-700 p-3 rounded-full">
                <MapPin className="h-5 w-5 text-slate-200" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Ubicación</p>
                <p className="text-slate-200">México</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-600 text-white hover:bg-slate-700"
                onClick={() => {
                  window.open("https://github.com/uziel471", "_blank");
                }}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-600 text-white hover:bg-slate-700"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/uziel471", "_blank");
                }}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-600 text-white hover:bg-slate-700"
                onClick={() => {
                  window.open("mailto:uziel471@gmail.com", "_blank");
                }}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
