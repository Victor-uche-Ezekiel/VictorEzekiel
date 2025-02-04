"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  ThumbsUp,
  Eye,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// This would typically come from a CMS or database
const blogPost = {
  title: "Building a Modern Portfolio with Next.js and Tailwind",
  excerpt:
    "A comprehensive guide to creating a performant and beautiful portfolio website using Next.js 14 and Tailwind CSS.",
  content: `
    <h2>Introduction</h2>
    <p class="lead">Building a modern portfolio website requires careful consideration of both functionality and aesthetics. In this comprehensive guide, we'll walk through the process of creating a stunning portfolio using Next.js 14 and Tailwind CSS.</p>

    <blockquote>
      Next.js 14 and Tailwind CSS provide the perfect foundation for building modern, performant web applications with an excellent developer experience.
    </blockquote>

    <h2>Why Next.js and Tailwind?</h2>
    <p>Next.js has become the go-to framework for React applications, offering features like:</p>
    <ul class="feature-list">
      <li><strong>Server-side rendering</strong> - Improved performance and SEO optimization</li>
      <li><strong>Automatic code splitting</strong> - Faster page loads and better user experience</li>
      <li><strong>Built-in routing and API routes</strong> - Simplified application architecture</li>
      <li><strong>Excellent developer experience</strong> - Enhanced productivity and code quality</li>
    </ul>

    <div class="info-box">
      <p><strong>Pro Tip:</strong> When starting a new Next.js project, use the latest version to take advantage of the newest features and improvements.</p>
    </div>

    <h2>Setting Up the Project</h2>
    <p>Let's start by creating a new Next.js project with Tailwind CSS. Open your terminal and run the following command:</p>
    <pre><code class="language-bash">npx create-next-app@latest my-portfolio --typescript --tailwind</code></pre>
    <p class="code-caption">This command creates a new Next.js project with TypeScript and Tailwind CSS pre-configured.</p>

    <h2>Key Features to Implement</h2>
    <div class="grid-list">
      <div class="feature-card">
        <h3>📱 Responsive Design</h3>
        <p>Ensure your portfolio looks great on all devices and screen sizes.</p>
      </div>
      <div class="feature-card">
        <h3>🌓 Dark Mode</h3>
        <p>Implement a seamless dark mode experience for better accessibility.</p>
      </div>
      <div class="feature-card">
        <h3>✨ Animations</h3>
        <p>Add smooth animations to enhance user interaction and engagement.</p>
      </div>
      <div class="feature-card">
        <h3>🔍 SEO</h3>
        <p>Optimize your portfolio for search engines to increase visibility.</p>
      </div>
      <div class="feature-card">
        <h3>📬 Contact Form</h3>
        <p>Create an interactive form for potential clients to reach out.</p>
      </div>
    </div>

    <h2>Performance Optimization</h2>
    <p>To ensure optimal performance, we'll implement several key optimizations:</p>
    <div class="steps">
      <div class="step">
        <span class="step-number">1</span>
        <div>
          <h3>Image Optimization</h3>
          <p>Utilize next/image for automatic image optimization, including:</p>
          <ul>
            <li>Automatic WebP conversion</li>
            <li>Responsive image sizes</li>
            <li>Lazy loading</li>
          </ul>
        </div>
      </div>
      <div class="step">
        <span class="step-number">2</span>
        <div>
          <h3>Component Lazy Loading</h3>
          <p>Implement dynamic imports for better initial page load times.</p>
        </div>
      </div>
      <div class="step">
        <span class="step-number">3</span>
        <div>
          <h3>Caching Strategies</h3>
          <p>Set up proper caching for static assets and API responses.</p>
        </div>
      </div>
      <div class="step">
        <span class="step-number">4</span>
        <div>
          <h3>Bundle Optimization</h3>
          <p>Minimize JavaScript bundles for faster page loads.</p>
        </div>
      </div>
    </div>
  `,
  image:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069",
  category: "Web Development",
  readTime: "8 min read",
  date: "Mar 15, 2024",
  author: {
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    role: "Senior Developer",
  },
  relatedPosts: [
    {
      title: "Mastering TypeScript: Advanced Tips and Tricks",
      excerpt:
        "Deep dive into TypeScript's advanced features, best practices, and patterns for large-scale applications.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
      slug: "mastering-typescript",
      readTime: "12 min read",
      date: "Mar 10, 2024",
    },
    {
      title: "CI/CD Pipeline Setup with GitHub Actions",
      excerpt:
        "Step-by-step guide to setting up a robust CI/CD pipeline using GitHub Actions for your web applications.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2043",
      slug: "cicd-github-actions",
      readTime: "10 min read",
      date: "Mar 5, 2024",
    },
  ],
};

function TableOfContents() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const headings =
    blogPost.content
      .match(/<h2>.*?<\/h2>/g)
      ?.map((heading) => heading.replace(/<\/?h2>/g, "")) || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("h2[id]").forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false); // Close the sheet after clicking
    }
  };

  const TableOfContentsContent = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 pb-4 border-b">
        <Menu className="h-5 w-5" />
        <h3 className="font-semibold">On this page</h3>
      </div>
      <div className="space-y-1">
        {headings.map((heading, index) => {
          const sectionId = heading.toLowerCase().replace(/\s+/g, "-");
          return (
            <button
              key={heading}
              onClick={() => scrollToSection(sectionId)}
              className={cn(
                "w-full px-4 py-2.5 rounded-lg text-left text-sm transition-all",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeSection === sectionId
                  ? "bg-accent/50 text-accent-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {heading}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:block sticky top-20">
        <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-6">
          <TableOfContentsContent />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg border-2 bg-background/80 backdrop-blur-sm z-50"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open table of contents</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="h-[80vh] px-6 pb-10 bg-background border-t-2 shadow-2xl"
          >
            <div className="absolute left-1/2 top-3 h-1.5 w-12 -translate-x-1/2 rounded-full bg-muted" />
            <div className="mt-8 max-w-lg mx-auto">
              <div className="rounded-xl bg-card/50 backdrop-blur-sm p-6 shadow-lg border">
                <TableOfContentsContent />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(42);
  const [views, setViews] = useState(1337);
  const [comments, setComments] = useState(8);
  const articleRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Process content to add IDs to headings
  const processedContent = blogPost.content.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, content) => {
      const id = content.toLowerCase().replace(/\s+/g, "-");
      return `<h2 id="${id}">${content}</h2>`;
    }
  );

  return (
    <>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      <article ref={articleRef} className="container py-16 relative">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          <div>
            {/* Hero Section */}
            <div className="mb-16">
              <Badge variant="secondary" className="mb-4">
                {blogPost.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                {blogPost.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {blogPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {blogPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {views} views
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {comments} comments
                </div>
              </div>
              <div className="aspect-[2/1] relative rounded-xl overflow-hidden mb-8">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{blogPost.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {blogPost.author.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <Bookmark
                      className={cn("h-4 w-4", isBookmarked && "fill-current")}
                    />
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => setLikes(likes + 1)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{likes}</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl">
              <div
                className="prose dark:prose-invert max-w-none 
                  prose-headings:scroll-mt-20 
                  prose-headings:font-bold
                  prose-h2:text-3xl
                  prose-h2:mt-12
                  prose-h2:mb-6
                  prose-h3:text-xl
                  prose-h3:mt-8
                  prose-h3:mb-4
                  prose-p:text-base
                  prose-p:leading-7
                  prose-li:text-base
                  prose-li:leading-7
                  prose-img:rounded-xl
                  prose-pre:bg-muted/80
                  prose-pre:backdrop-blur-sm
                  prose-pre:border
                  prose-pre:rounded-xl
                  prose-blockquote:border-l-4
                  prose-blockquote:border-primary
                  prose-blockquote:pl-6
                  prose-blockquote:py-1
                  prose-blockquote:my-8
                  prose-blockquote:italic
                  prose-blockquote:text-lg
                  prose-blockquote:font-medium
                  [&_.lead]:text-lg
                  [&_.lead]:text-muted-foreground
                  [&_.lead]:leading-8
                  [&_.feature-list]:list-none
                  [&_.feature-list]:pl-0
                  [&_.feature-list_li]:flex
                  [&_.feature-list_li]:items-center
                  [&_.feature-list_li]:gap-2
                  [&_.feature-list_li]:py-2
                  [&_.feature-list_li]:border-b
                  [&_.feature-list_li]:border-muted
                  [&_.feature-list_li_strong]:text-primary
                  [&_.info-box]:bg-muted/50
                  [&_.info-box]:backdrop-blur-sm
                  [&_.info-box]:p-6
                  [&_.info-box]:rounded-xl
                  [&_.info-box]:my-8
                  [&_.code-caption]:text-sm
                  [&_.code-caption]:text-muted-foreground
                  [&_.code-caption]:mt-2
                  [&_.grid-list]:grid
                  [&_.grid-list]:grid-cols-1
                  [&_.grid-list]:md:grid-cols-2
                  [&_.grid-list]:gap-6
                  [&_.grid-list]:my-8
                  [&_.feature-card]:bg-muted/50
                  [&_.feature-card]:backdrop-blur-sm
                  [&_.feature-card]:p-6
                  [&_.feature-card]:rounded-xl
                  [&_.feature-card_h3]:mt-0
                  [&_.feature-card_p]:mb-0
                  [&_.steps]:space-y-8
                  [&_.step]:flex
                  [&_.step]:gap-6
                  [&_.step-number]:flex
                  [&_.step-number]:items-center
                  [&_.step-number]:justify-center
                  [&_.step-number]:w-8
                  [&_.step-number]:h-8
                  [&_.step-number]:rounded-full
                  [&_.step-number]:bg-primary
                  [&_.step-number]:text-primary-foreground
                  [&_.step-number]:font-bold"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t flex gap-2 flex-wrap">
              {blogPost.tags?.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 rounded-xl bg-muted/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {blogPost.author.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {blogPost.author.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                John is a senior developer with over 10 years of experience in
                web development. He specializes in React, Next.js, and modern
                web technologies. He loves sharing his knowledge through writing
                and speaking at conferences.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:sticky lg:top-20 lg:self-start space-y-8">
            <div className="rounded-xl border bg-card p-6">
              <TableOfContents />
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-semibold mb-8">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPost.relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-xl border bg-card/95 backdrop-blur-sm transition-colors hover:bg-accent/50"
              >
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
