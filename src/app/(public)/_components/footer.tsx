import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-offwhite/70 pt-20 pb-10 border-t border-offwhite/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src={"/logo.png"}
                                alt="Nexus Learn logo"
                                className="size-10 brightness-0 invert"
                                width={100}
                                height={100}
                            />
                            <span className="font-bold text-xl text-offwhite">Nexus Learn</span>
                        </Link>
                        <p className="max-w-xs font-sans text-sm leading-relaxed">
                            Empowering learners worldwide to achieve their goals through accessible, high-quality online education and an interactive community.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-offwhite mb-6 uppercase tracking-wider text-sm">Platform</h4>
                        <ul className="space-y-4 text-sm font-sans">
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/courses" className="hover:text-accent transition-colors">Browse Courses</Link></li>
                            <li><Link href="/instructors" className="hover:text-accent transition-colors">Our Instructors</Link></li>
                            <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing Plans</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-offwhite mb-6 uppercase tracking-wider text-sm">Resources</h4>
                        <ul className="space-y-4 text-sm font-sans">
                            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog & Articles</Link></li>
                            <li><Link href="/tutorials" className="hover:text-accent transition-colors">Free Tutorials</Link></li>
                            <li><Link href="/faq" className="hover:text-accent transition-colors">Help Center / FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-offwhite mb-6 uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-4 text-sm font-sans">
                            <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/cookies" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/accessibility" className="hover:text-accent transition-colors">Accessibility</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-offwhite/10 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {currentYear} Nexus Learn Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
