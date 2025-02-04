"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, Calendar, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, blogPosts, type BlogPost } from "./blog-data";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group relative overflow-hidden rounded-xl border bg-card/95 backdrop-blur-sm transition-colors hover:bg-accent/50 block"
      >
        <div className="aspect-video relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            {post.tags?.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">
                  {post.author.role}
                </p>
              </div>
            </div>
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
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-16">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts, tutorials, and insights about web development, design, and
          technology.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
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

      {/* Featured Posts */}
      {selectedCategory === "All" && searchQuery === "" && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Articles</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* All Posts */}
      <AnimatePresence mode="popLayout">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts
            .filter(
              (post) =>
                !post.featured ||
                selectedCategory !== "All" ||
                searchQuery !== ""
            )
            .map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
        </div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <Tag className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold mb-2">No posts found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}
