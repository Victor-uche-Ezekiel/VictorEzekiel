import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/gradient.css";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "A showcase of my work and expertise in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "min-h-screen bg-background antialiased",
        geistSans.variable,
        geistMono.variable,
        "selection:bg-blue-200 selection:text-blue-900",
        "dark:selection:bg-blue-800 dark:selection:text-blue-50"
      )}
    >
      <body className={cn("relative min-h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            {/* Background Elements */}
            <div className="fixed inset-0 flex justify-center -z-1">
              <div className="w-full max-w-7xl">
                <div className="absolute right-1/2 h-[800px] w-[800px] translate-x-1/2 opacity-50 dark:opacity-30">
                  <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-[128px]" />
                </div>
              </div>
            </div>
            <div className="fixed inset-0 -z-2">
              <div className="absolute inset-0 gradient-grid" />
              <div className="absolute inset-0 noise" />
            </div>

            {/* Content */}
            <Nav />
            <main className="relative flex-1 px-4">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
