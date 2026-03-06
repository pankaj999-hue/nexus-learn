"use client";

import { Quote } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Heading Animation
        gsap.fromTo(
            ".test-anim-heading",
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

        // Testimonial Cards Animation
        gsap.fromTo(
            ".test-anim-card",
            { opacity: 0, scale: 0.95, y: 40 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: ".test-anim-card",
                    start: "top 85%",
                }
            }
        );
    }, { scope: sectionRef });

    const testimonials = [
        {
            quote: "Nexus Learn completely transformed my career path. The instructors are top-notch and the interactive platform made learning complex topics a breeze.",
            name: "Sarah Jenkins",
            title: "Full-Stack Developer",
            image: "https://i.pravatar.cc/150?img=1"
        },
        {
            quote: "I've tried many online learning platforms, but none compare to the quality and community here. The real-world projects actually prepare you for the job.",
            name: "Michael Chen",
            title: "Data Scientist",
            image: "https://i.pravatar.cc/150?img=11"
        },
        {
            quote: "The pacing of the courses is perfect. As a working professional, I could easily fit the lessons into my schedule and upskill without burning out.",
            name: "Elena Rodriguez",
            title: "UX Designer",
            image: "https://i.pravatar.cc/150?img=5"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-dark text-offwhite overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 test-anim-heading">
                        Student Success
                    </h2>

                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 test-anim-heading">
                        Hear from our community
                    </h3>

                    <p className="text-offwhite/70 text-lg font-sans test-anim-heading">
                        Don&apos;t just take our word for it. See how our platform has helped thousands of students achieve their goals.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-offwhite/5 backdrop-blur-sm rounded-2xl p-8 border border-offwhite/10 relative test-anim-card"
                        >
                            <Quote className="absolute top-6 right-6 h-12 w-12 text-accent/20" />

                            {/* Quote */}
                            <div className="mb-8 relative z-10">
                                <p className="text-offwhite/90 text-lg leading-relaxed italic">
                                    &quot;{item.quote}&quot;
                                </p>
                            </div>

                            {/* User */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-accent/50">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h4 className="font-bold text-offwhite">
                                        {item.name}
                                    </h4>
                                    <p className="text-accent text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}