import { db } from "./index";
import { user, course, chapter, lesson } from "./schema";
import { v4 as uuidv4 } from "uuid";

async function main() {
    console.log("Seeding database...");

    // 1. Create a dummy instructor
    const instructorId = uuidv4();
    await db.insert(user).values({
        id: instructorId,
        name: "Dr. Ethan Carter",
        email: `ethan.carter.${Date.now()}@example.com`,
        role: "instructor",
        emailVerified: true,
    });

    console.log(`Created instructor: ${instructorId}`);

    // 2. Dummy Courses Data
    const coursesToInsert = [
        {
            id: uuidv4(),
            title: "Mastering Full-Stack Next.js 14",
            slug: `mastering-nextjs-${Date.now()}`,
            description: "A comprehensive guide to building production-ready applications with Next.js App Router, Tailwind, and Drizzle ORM.",
            smallDescription: "Learn to build modern web apps from scratch to deployment.",
            fileKey: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
            price: 9900, // $99.00
            duration: 1200, // 20 hours in minutes
            level: "Intermediate" as const,
            category: "Web Development",
            status: "Published" as const,
            userId: instructorId,
        },

        {
            id: uuidv4(),
            title: "Data Science with Python",
            slug: `data-science-python-${Date.now()}`,
            description: "Dive into data analysis, visualization, and machine learning using Python, Pandas, NumPy, and scikit-learn.",
            smallDescription: "Step-by-step introduction to analyzing real-world datasets.",
            fileKey: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            price: 12900,
            duration: 1800,
            level: "Advanced" as const,
            category: "Data Science",
            status: "Published" as const,
            userId: instructorId,
        }
    ];

    await db.insert(course).values(coursesToInsert);
    console.log(`Inserted ${coursesToInsert.length} courses.`);

    // 3. Insert Dummy Chapters & Lessons for the first course
    const firstCourseId = coursesToInsert[0].id;

    const chapter1Id = uuidv4();
    await db.insert(chapter).values({
        id: chapter1Id,
        title: "Introduction to Next.js",
        position: 1,
        courseId: firstCourseId,
    });

    const chapter2Id = uuidv4();
    await db.insert(chapter).values({
        id: chapter2Id,
        title: "Routing and Layouts",
        position: 2,
        courseId: firstCourseId,
    });

    // Insert Lessons
    await db.insert(lesson).values([
        {
            id: uuidv4(),
            title: "What is Next.js 14?",
            description: "An overview of the framework and why we use it.",
            position: 1,
            chapterId: chapter1Id,
        },
        {
            id: uuidv4(),
            title: "Setting up your environment",
            description: "Installing Node, creating the Next app, and configuring Tailwind.",
            position: 2,
            chapterId: chapter1Id,
        },
        {
            id: uuidv4(),
            title: "Understanding the App Router",
            description: "Differences between Page router and App router. Server vs Client components.",
            position: 1,
            chapterId: chapter2Id,
        }
    ]);

    console.log("Database seeded successfully!");
}

main().catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
});
