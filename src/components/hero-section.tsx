"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "secondary";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
}: HeroProps) {

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "px-4",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      <div className="mx-auto flex max-w-[1248px] flex-col gap-8 pt-12 sm:gap-12 sm:pt-16 lg:pt-20 pb-20">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-10">
          {/* Badge */}
          {badge && (
            <a
              href={badge.action.href}
              className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-muted/80 hover:text-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              <span>{badge.text}</span>
              <ChevronRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </a>
          )}

          {/* Title - Professional, high-contrast, tracking tight */}
          <h1 className="relative z-10 max-w-4xl mx-auto animate-appear text-5xl font-serif font-bold tracking-tight text-dark dark:text-offwhite sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.1]">
            {title}
          </h1>

          {/* Description - legible, high-contrast subset */}
          <p className="text-lg relative z-10 max-w-[650px] animate-appear font-sans text-dark/70 dark:text-offwhite/70 opacity-0 delay-100 sm:text-xl leading-relaxed">
            {description}
          </p>

          {/* Actions - solid buttons, good sizing */}
          <div className="relative z-10 flex animate-appear flex-col sm:flex-row justify-center gap-4 opacity-0 delay-300">
            {actions.map((action, index) => (
              <Button key={index} variant={action.variant} size="lg" className="min-w-[160px] h-12 text-md" asChild>
                <a href={action.href} className="flex items-center justify-center gap-2">
                  {action.icon}
                  {action.text}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
