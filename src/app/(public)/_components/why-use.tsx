"use client";

import { BookOpen, GraduationCap, Layout, Video } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function WhyUse() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Heading Animation
        gsap.fromTo(
            ".why-anim-heading",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );

        // Grid Cards Animation
        gsap.fromTo(
            ".why-anim-card",
            { opacity: 0, scale: 0.95, y: 40 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: ".why-anim-card",
                    start: "top 85%",
                }
            }
        );
    }, { scope: sectionRef });

    const features = [
        {
            title: "Interactive Video Lessons",
            description: "Learn through high-quality video content that keeps you engaged. Pause, rewind, and re-watch at your own pace.",
            icon: <Video className="h-8 w-8 text-offwhite" />,
        },
        {
            title: "Comprehensive Materials",
            description: "Access a wide range of study materials, from detailed notes to practical exercises and real-world projects.",
            icon: <BookOpen className="h-8 w-8 text-offwhite" />,
        },
        {
            title: "Expert Instructors",
            description: "Learn from industry professionals who bring years of practical experience and deep knowledge to every course.",
            icon: <GraduationCap className="h-8 w-8 text-offwhite" />,
        },
        {
            title: "Intuitive Dashboard",
            description: "Track your progress, manage your certifications, and stay on top of your learning schedule all in one place.",
            icon: <Layout className="h-8 w-8 text-offwhite" />,
        },
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-beige text-dark">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-accent font-semibold tracking-wider uppercase text-sm why-anim-heading">Why Choose Us</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-dark why-anim-heading">
                        Everything you need to master new skills
                    </h3>
                    <p className="text-lg text-dark/70 font-sans why-anim-heading">
                        We provide a holistic learning environment designed to help you succeed, no matter your background or experience level.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-dark rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl border border-dark/5 group relative overflow-hidden why-anim-card"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors"></div>

                            <div className="bg-accent/20 w-16 h-16 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform relative z-10">
                                {feature.icon}
                            </div>

                            <h4 className="text-xl font-bold text-offwhite mb-3 relative z-10">{feature.title}</h4>
                            <p className="text-offwhite/70 leading-relaxed font-sans relative z-10">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
