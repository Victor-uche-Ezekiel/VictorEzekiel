import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
]

export default function Home() {
  return (
    <div className="relative">
      <div className="container py-32 md:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex items-center rounded-full border px-3 py-1 text-sm">
                <Badge variant="gradient" className="mr-2">New</Badge>
                Available for freelance work
              </div>
              <h1 className="mb-8 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Building Digital Experiences That Matter
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Full-stack developer specializing in building exceptional digital
                experiences. Let's turn your vision into reality.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 to-teal-500 blur-2xl opacity-20" />
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070"
                  alt="Code on a computer screen"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">Technologies I work with</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-teal-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  )
}
