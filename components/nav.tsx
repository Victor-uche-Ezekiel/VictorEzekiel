"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-cyan-700"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
                pathname === link.href
                  ? "text-primary font-semibold after:scale-x-100"
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className={cn("h-5 w-5 text-foreground", isOpen ? "hidden" : "block")} />
            <X className={cn("h-5 w-5 text-foreground", isOpen ? "block" : "hidden")} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/98 backdrop-blur-sm md:hidden">
          <nav className="container py-8">
            <ul className="flex flex-col space-y-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-2 text-lg font-medium transition-colors relative",
                      "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
                      pathname === link.href
                        ? "text-primary font-semibold after:scale-x-100"
                        : "text-foreground/80 hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
