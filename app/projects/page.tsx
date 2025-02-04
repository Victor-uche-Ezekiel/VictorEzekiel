"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

// Project categories
const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Open Source",
];

// Project data
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176375c?q=80&w=2069",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055",
    category: "Mobile Apps",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps create high-quality blog posts, social media content, and marketing copy.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    category: "Web Development",
    technologies: ["Python", "OpenAI", "FastAPI", "React"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode, animations, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069",
    category: "UI/UX Design",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Open Source Library",
    description:
      "A utility library for handling complex data structures in TypeScript.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    category: "Open Source",
    technologies: ["TypeScript", "Jest", "GitHub Actions"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-muted-foreground">
          Here are some of my recent projects. Each one is crafted with
          attention to detail, focusing on user experience and clean code.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-9 bg-background/80 backdrop-blur-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "gradient" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="relative"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {selectedCategory === "All" && searchQuery === "" && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl border bg-card/95 backdrop-blur-sm transition-colors hover:bg-accent/50"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="gradient" asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* All Projects */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects
          .filter(
            (project) =>
              !project.featured ||
              selectedCategory !== "All" ||
              searchQuery !== ""
          )
          .map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border bg-card/95 backdrop-blur-sm transition-colors hover:bg-accent/50"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="gradient" asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
