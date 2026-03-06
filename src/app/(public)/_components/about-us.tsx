"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Target, Users } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function AboutUs() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Text Content Animation
        gsap.fromTo(
            ".about-anim-text",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                }
            }
        );

        // Main Image Animation
        gsap.fromTo(
            ".about-anim-image-main",
            { opacity: 0, scale: 0.95, y: 40 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: "top 75%",
                }
            }
        );

        // Small Square Image Animation
        gsap.fromTo(
            ".about-anim-image-small",
            { opacity: 0, x: -40, rotate: -5 },
            {
                opacity: 1,
                x: 0,
                rotate: 0,
                duration: 1,
                delay: 0.3,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: "top 75%",
                }
            }
        );

        // Floating Stats Animation
        gsap.fromTo(
            ".about-anim-float",
            { opacity: 0, y: 30, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.6,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: "top 75%",
                }
            }
        );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 bg-background overflow-hidden border-t border-dark/10" id="about">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div ref={contentRef} className="space-y-8">
                        <div className="about-anim-text">
                            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-wider uppercase mb-4">
                                About Us
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
                                Empowering Minds, <br /> Shaping <span className="text-accent italic">Futures.</span>
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-xl about-anim-text">
                            At Nexus Learn, we believe that education should be accessible,
                            engaging, and tailored to your unique journey. We've built a
                            platform that connects passionate learners with expert instructors,
                            creating an ecosystem where knowledge thrives.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-2 about-anim-text">
                            {[
                                "Community-driven learning",
                                "World-class instructors",
                                "Interactive materials",
                                "Lifetime access"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="bg-accent/10 p-1 rounded-full">
                                        <CheckCircle2 className="text-accent h-4 w-4" />
                                    </div>
                                    <span className="font-medium text-foreground text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 about-anim-text">
                            <Link href="/about">
                                <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium group shadow-xl shadow-accent/20">
                                    Discover Our Journey
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image Collage & floating stats */}
                    <div ref={imageContainerRef} className="relative h-[550px] w-full mt-10 lg:mt-0">
                        {/* Main Tall Image */}
                        <div className="absolute right-0 top-0 w-3/4 h-[90%] rounded-[2rem] overflow-hidden shadow-2xl about-anim-image-main">
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                                alt="Students learning"
                                fill
                                unoptimized={true}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-dark/10"></div>
                        </div>

                        {/* Overlapping Square Image */}
                        <div className="absolute left-0 bottom-0 w-1/2 h-[55%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-background z-10 about-anim-image-small">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                                alt="Collaborative work"
                                fill
                                unoptimized={true}
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Glassmorphism Stat Card */}
                        <div className="absolute -left-4 top-20 bg-background/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-dark/10 z-20 flex items-center gap-4 about-anim-float">
                            <div className="bg-accent/20 p-3 rounded-full">
                                <Target className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">10k+</h3>
                                <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Active Students</p>
                            </div>
                        </div>

                        {/* Floating Bubble */}
                        <div className="absolute right-8 -bottom-4 bg-dark text-offwhite p-5 rounded-3xl shadow-2xl z-20 flex flex-col items-center justify-center border-4 border-background about-anim-float">
                            <Users className="h-6 w-6 mb-1 text-accent" />
                            <h3 className="text-xl font-bold">50+</h3>
                            <p className="text-offwhite/70 text-[10px] uppercase font-bold tracking-widest">Mentors</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
