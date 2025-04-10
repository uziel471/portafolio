import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Server } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>

      <Tabs defaultValue="frontend" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-slate-800">
            <TabsTrigger value="frontend" className="data-[state=active]:bg-slate-700">
              <Code className="mr-2 h-4 w-4" />
              Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="data-[state=active]:bg-slate-700">
              <Server className="mr-2 h-4 w-4" />
              Backend
            </TabsTrigger>
            <TabsTrigger value="database" className="data-[state=active]:bg-slate-700">
              <Database className="mr-2 h-4 w-4" />
              Bases de Datos
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="frontend" className="mt-0">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "React", level: "Avanzado", years: 4 },
                  { name: "JavaScript", level: "Avanzado", years: 4 },
                  { name: "TypeScript", level: "Avanzado", years: 3 },
                  { name: "HTML5", level: "Avanzado", years: 4 },
                  { name: "CSS3", level: "Intermedio", years: 4 },
                  { name: "Redux", level: "Avanzado", years: 3 },
                  { name: "Next.js", level: "Intermedio", years: 2 },
                  { name: "Tailwind CSS", level: "Intermedio", years: 2 },
                ].map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backend" className="mt-0">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Node.js", level: "Intermedio", years: 3 },
                  { name: "Express", level: "Intermedio", years: 3 },
                  { name: "Python", level: "Intermedio", years: 2 },
                  { name: "RESTful APIs", level: "Avanzado", years: 3 },
                  { name: "GraphQL", level: "Básico", years: 1 },
                ].map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="mt-0">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "MongoDB", level: "Intermedio", years: 4 },
                  { name: "SQL", level: "Intermedio", years: 3 },
                ].map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

function SkillCard({ skill }: { skill: { name: string; level: string; years: number } }) {
  return (
    <div className="bg-slate-700 p-4 rounded-lg text-center">
      <h3 className="font-medium text-white mb-2">{skill.name}</h3>
      <Badge variant="outline" className="mb-2">
        {skill.level}
      </Badge>
      <p className="text-sm text-slate-300">
        {skill.years} {skill.years === 1 ? "año" : "años"}
      </p>
    </div>
  )
}
