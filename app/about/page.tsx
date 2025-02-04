"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Design",
    items: [
      "Figma",
      "Adobe XD",
      "UI/UX",
      "Responsive Design",
      "Design Systems",
      "Prototyping",
    ],
  },
];

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise web applications using Next.js and Node.js.",
    achievements: [
      "Reduced page load times by 60% through performance optimizations",
      "Led a team of 5 developers in rebuilding the company's main product",
      "Implemented automated testing that improved code coverage to 90%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications using React and TypeScript.",
    achievements: [
      "Built and maintained multiple client projects with 100% satisfaction rate",
      "Mentored junior developers and conducted code reviews",
      "Introduced modern frontend practices that improved development efficiency",
    ],
  },
  {
    title: "Web Developer",
    company: "StartUp Co.",
    period: "2018 - 2020",
    description:
      "Full stack development of web applications using various technologies.",
    achievements: [
      "Developed and launched 3 major features that increased user engagement by 40%",
      "Collaborated with design team to implement new UI/UX improvements",
      "Reduced bug reports by 50% through improved testing procedures",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    period: "2016 - 2018",
    description: "Specialized in Software Engineering and Web Technologies",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "State University",
    period: "2012 - 2016",
    description: "Major in Computer Science with focus on Software Development",
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#",
  },
  {
    name: "Professional Web Developer",
    issuer: "Google",
    date: "2022",
    link: "#",
  },
  {
    name: "React Advanced Certification",
    issuer: "Meta",
    date: "2021",
    link: "#",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Hi! I'm a passionate full-stack developer with over 5 years of
            experience in building modern web applications. I specialize in
            creating scalable, performant, and user-friendly solutions using
            cutting-edge technologies.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            My journey in web development started with a curiosity about how
            things work on the internet, and it has evolved into a career
            focused on creating exceptional digital experiences.
          </p>
          <div className="flex gap-4">
            <Button variant="gradient" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 to-teal-500 blur-2xl opacity-20" />
          <div className="relative h-full">
            <Image
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071"
              alt="Profile photo"
              fill
              className="object-cover rounded-3xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-xl border bg-card/95 backdrop-blur-sm p-6 text-card-foreground"
            >
              <h3 className="font-semibold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-muted last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-blue-500" />
              <div className="rounded-xl border bg-card/95 backdrop-blur-sm p-6">
                <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <Badge variant="outline">{job.period}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="rounded-xl border bg-card/95 backdrop-blur-sm p-6"
              >
                <div className="flex flex-wrap gap-4 items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
                <p className="text-muted-foreground mb-2">{edu.school}</p>
                <p className="text-sm text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-xl border bg-card/95 backdrop-blur-sm p-6"
              >
                <div className="flex flex-wrap gap-4 items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{cert.name}</h3>
                  <Badge variant="outline">{cert.date}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{cert.issuer}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
