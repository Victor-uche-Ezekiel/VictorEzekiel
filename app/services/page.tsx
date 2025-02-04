"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration",
      "Performance Optimization",
      "SEO Implementation",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications that work seamlessly on all devices.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070",
    features: [
      "iOS & Android Apps",
      "React Native Development",
      "App Store Deployment",
      "Push Notifications",
      "Offline Support",
      "Analytics Integration",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive interfaces that users love to interact with.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070",
    features: [
      "User Interface Design",
      "User Experience Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "Responsive Design",
      "User Testing",
    ],
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$999",
    description: "Perfect for small projects and startups",
    features: [
      "Single Page Website",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "5 Pages Maximum",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "Ideal for growing businesses",
    features: [
      "Multi-page Website",
      "E-commerce Integration",
      "Advanced SEO",
      "Custom Forms",
      "Unlimited Pages",
      "3 Months Support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Custom Web Application",
      "Advanced Features",
      "Priority Support",
      "Performance Optimization",
      "Security Hardening",
      "12 Months Support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-16">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-lg text-muted-foreground">
          Professional web development and design services tailored to your
          needs.
        </p>
      </div>

      {/* Services */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-xl border bg-card/95 backdrop-blur-sm"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                {service.title}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs. All plans include our core
            features.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative overflow-hidden rounded-xl border bg-card/95 backdrop-blur-sm p-8",
                plan.featured && "border-blue-500 shadow-lg scale-105"
              )}
            >
              {plan.featured && (
                <Badge variant="gradient" className="absolute top-4 right-4">
                  Popular
                </Badge>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground">/project</span>
                )}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "gradient" : "outline"}
                className="w-full"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border bg-card/95 backdrop-blur-sm p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Have a specific requirement or need a customized solution? Let's
          discuss your project and create something amazing together.
        </p>
        <Button variant="gradient" size="lg" asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  );
}
