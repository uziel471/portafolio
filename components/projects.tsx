import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, StickyNote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "./ui/button"

type Props = {
  ref: React.Ref<HTMLDivElement>
}

export default function Projects({
  ref,
}: Props) {
  return (
    <section ref={ref} id="projects" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Pokedex"
          description="listado con scroll infinito de Pokémon."
          image="/pokedex.png"
          tags={["React", "JavaScript", "Material UI"]}
          demoUrl="https://pokewiki.vercel.app/"
          codeUrl="https://github.com/lk321/pokedex"
          internal={false}
        />
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  codeUrl?: string
  internal?: boolean
}

function ProjectCard({ title, description, image, tags, demoUrl, codeUrl, internal }: ProjectCardProps) {
  return (
    <Card className="bg-slate-800 border-slate-700 text-slate-200 overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          {internal && (
            <Badge variant="outline" className="bg-slate-700">
              Proyecto Interno
            </Badge>
          )}
        </div>
        <CardDescription className="text-slate-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-slate-700">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-4 mt-8">
          {demoUrl && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-600 text-white hover:bg-slate-700"
              onClick={() => {
                window.open(demoUrl, "_blank");
              }}
            >
              <Github className="h-5 w-5" />
            </Button>
          )}
          {codeUrl && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-600 text-white hover:bg-slate-700"
              onClick={() => {
                window.open(codeUrl, "_blank");
              }}
            >
              <StickyNote className="h-5 w-5" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
