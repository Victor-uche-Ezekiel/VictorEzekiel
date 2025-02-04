"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Send me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-2xl border bg-card/95 backdrop-blur-sm p-8 relative z-0">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                className="bg-background/80 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                className="bg-background/80 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
                className="min-h-[150px] bg-background/80 backdrop-blur-sm resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              variant="gradient"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 relative z-0">
          {/* Contact Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-card/95 backdrop-blur-sm p-6 transition-colors hover:bg-accent/50">
              <Mail className="h-6 w-6 mb-4 text-blue-500" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground mt-1">
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-primary relative"
                >
                  your.email@example.com
                </a>
              </p>
            </div>
            <div className="rounded-xl border bg-card/95 backdrop-blur-sm p-6 transition-colors hover:bg-accent/50">
              <Phone className="h-6 w-6 mb-4 text-green-500" />
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground mt-1">
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary relative"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
            <div className="rounded-xl border bg-card/95 backdrop-blur-sm p-6 transition-colors hover:bg-accent/50">
              <MessageSquare className="h-6 w-6 mb-4 text-purple-500" />
              <h3 className="font-semibold">Social Media</h3>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary relative"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary relative"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary relative"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="rounded-xl border bg-card/95 backdrop-blur-sm p-6 transition-colors hover:bg-accent/50">
              <MapPin className="h-6 w-6 mb-4 text-red-500" />
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground mt-1">
                San Francisco, CA
                <br />
                United States
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="rounded-xl border bg-card/95 backdrop-blur-sm p-6">
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <p className="text-sm text-muted-foreground">
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM PST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
