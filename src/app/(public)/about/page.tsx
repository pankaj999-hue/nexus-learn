"use client";

import { Users, Target, Award, BookOpen } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hero Section Animation
        gsap.fromTo(
            ".about-hero-anim",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-hero-anim",
                    start: "top 80%",
                }
            }
        );

        // Stats Cards Animation
        gsap.fromTo(
            ".about-stat-anim",
            { opacity: 0, scale: 0.9, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: ".about-stat-anim",
                    start: "top 85%",
                }
            }
        );

        // Story Section Animation
        gsap.fromTo(
            ".about-story-text",
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-story-text",
                    start: "top 75%",
                }
            }
        );

        gsap.fromTo(
            ".about-story-image",
            { opacity: 0, x: 40, scale: 0.95 },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-story-image",
                    start: "top 75%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="bg-background text-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight about-hero-anim">Our Mission</h1>
                    <p className="text-xl text-dark/60 dark:text-offwhite/80 max-w-2xl mx-auto leading-relaxed about-hero-anim">
                        We believe that high-quality education should be accessible to everyone, everywhere.
                        Nexus Learn was built to break down barriers and create a global community of lifelong learners.
                    </p>
                </div>
            </section>

            {/* Stats/Values Section */}
            <section className="bg-beige text-dark py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-offwhite p-8 rounded-2xl shadow-sm border border-dark/5 text-center about-stat-anim">
                            <Users className="w-10 h-10 mx-auto mb-4 text-accent-foreground" />
                            <h3 className="text-4xl font-bold mb-2">100k+</h3>
                            <p className="text-dark/60">Active Learners</p>
                        </div>
                        <div className="bg-offwhite p-8 rounded-2xl shadow-sm border border-dark/5 text-center about-stat-anim">
                            <BookOpen className="w-10 h-10 mx-auto mb-4 text-accent-foreground" />
                            <h3 className="text-4xl font-bold mb-2">500+</h3>
                            <p className="text-dark/60">Expert Courses</p>
                        </div>
                        <div className="bg-offwhite p-8 rounded-2xl shadow-sm border border-dark/5 text-center about-stat-anim">
                            <Award className="w-10 h-10 mx-auto mb-4 text-accent-foreground" />
                            <h3 className="text-4xl font-bold mb-2">50+</h3>
                            <p className="text-dark/60">Industry Partners</p>
                        </div>
                        <div className="bg-offwhite p-8 rounded-2xl shadow-sm border border-dark/5 text-center about-stat-anim">
                            <Target className="w-10 h-10 mx-auto mb-4 text-accent-foreground" />
                            <h3 className="text-4xl font-bold mb-2">95%</h3>
                            <p className="text-dark/60">Completion Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-background text-foreground">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="about-story-text">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
                            <p className="text-lg text-dark/70 mb-4">
                                Founded in 2024, Nexus Learn started as a small project with a big vision. We saw that traditional education was often too rigid, expensive, and disconnected from real-world skills.
                            </p>
                            <p className="text-lg text-dark/70">
                                Today, we've grown into a comprehensive platform where industry experts can share their knowledge directly with students around the globe. Our platform combines interactive technology with proven pedagogical methods to ensure our students don't just consume content—they master skills.
                            </p>
                        </div>
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl about-story-image">
                            <div className="absolute inset-0 bg-dark/10"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
