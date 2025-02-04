import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="mt-auto border-t relative z-0 bg-background/80 backdrop-blur-sm">
      <div className="container py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Link href="/" className="gradient-text text-xl font-bold relative">
              Portfolio
            </Link>
            <p className="mt-4 text-muted-foreground">
              A showcase of my work, skills, and journey in web development.
              Building modern, accessible, and performant web applications.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold">Links</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground relative"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-foreground relative"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-foreground relative"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-foreground relative"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Connect</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground relative"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground relative"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground relative"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-4 border-t pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="ml-auto relative"
          >
            <a href="#top">Back to top ↑</a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
