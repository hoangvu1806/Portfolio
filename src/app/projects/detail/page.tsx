"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { motion } from "framer-motion";
import {
    FiExternalLink,
    FiGithub,
    FiArrowLeft,
    FiCalendar,
    FiTag,
    FiLayers,
    FiCpu,
    FiUsers,
    FiUser,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetailPage() {
    // Sample data for a detailed project
    const project = {
        title: "AI Vision - Intelligent Image Recognition System",
        description:
            "A modern computer vision system combining traditional image processing techniques with advanced deep learning models to create an accurate and efficient image recognition solution.",
        longDescription:
            "AI Vision is a 6-month research and development project focused on building a comprehensive computer vision system capable of analyzing and understanding image content at a high level. The project combines traditional image processing techniques (such as noise filtering, segmentation, and feature extraction) with advanced deep learning models (such as CNN, YOLO, and Transformer) to create an accurate and efficient image recognition solution.\n\nThe system is designed with a flexible microservice architecture, allowing easy integration into various applications and extension of new functionalities. It also includes a comprehensive RESTful API and a user-friendly interface for visualizing and interacting with image analysis results.",
        coverImage: "/project-cover.jpg",
        images: ["/project-1.jpg", "/project-2.jpg", "/project-3.jpg"],
        date: "June, 2023",
        client: "Internal Research",
        role: "Lead AI Engineer",
        category: "Computer Vision",
        technologies: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "OpenCV",
            "Docker",
            "FastAPI",
            "React",
        ],
        features: [
            "High-accuracy object detection and classification in images",
            "Semantic segmentation for detailed pixel-level analysis",
            "Real-time object tracking in videos",
            "Text information extraction from images (OCR)",
            "Anomaly and deformation detection in medical images",
            "Comprehensive RESTful API for easy integration",
            "Visual interface for monitoring and analyzing results",
            "Scalability to handle large data volumes",
        ],
        challenges: [
            "Optimizing model performance for real-time analysis",
            "Balancing accuracy and computational resource requirements",
            "Handling difficult viewpoints and poor lighting conditions",
            "Designing an extensible architecture to handle concurrent requests",
        ],
        results: [
            "95% detection accuracy on the test dataset",
            "40% reduction in processing time compared to traditional methods",
            "Horizontal scalability to handle up to 1000 requests/minute",
            "Intuitive user interface reducing analysis time by 60%",
        ],
        demoUrl: "https://ai-vision-demo.com",
        githubUrl: "https://github.com/username/ai-vision",
    };

    return (
        <MainLayout>
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/70">
                    <Image
                        src={project.coverImage || "/project-placeholder.jpg"}
                        alt={project.title}
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative h-full flex flex-col justify-end pb-12">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-6"
                    >
                        <FiArrowLeft className="mr-2" /> Back to projects
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl"
                    >
                        {project.description}
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                                Project Overview
                            </h2>
                            <div className="prose prose-lg prose-invert max-w-none">
                                {project.longDescription
                                    .split("\n\n")
                                    .map((paragraph, idx) => (
                                        <p
                                            key={idx}
                                            className="text-gray-300 mb-4"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                                Key Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.2 + index * 0.05,
                                        }}
                                        className="flex items-start"
                                    >
                                        <span className="text-primary text-lg mr-2">
                                            •
                                        </span>
                                        <p className="text-gray-300">
                                            {feature}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-12 grid gap-8"
                        >
                            <div>
                                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                                    Challenges
                                </h2>
                                <ul className="space-y-3">
                                    {project.challenges.map(
                                        (challenge, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start text-gray-300"
                                            >
                                                <span className="text-secondary text-lg mr-2">
                                                    •
                                                </span>
                                                <span>{challenge}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                                    Results
                                </h2>
                                <ul className="space-y-3">
                                    {project.results.map((result, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start text-gray-300"
                                        >
                                            <span className="text-accent text-lg mr-2">
                                                •
                                            </span>
                                            <span>{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                                Project Images
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {project.images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3 + index * 0.1,
                                        }}
                                        whileHover={{ scale: 1.03 }}
                                        className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
                                    >
                                        <Image
                                            src={image}
                                            alt={`${project.title} - Image ${
                                                index + 1
                                            }`}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative backdrop-blur-sm bg-gray-900/30 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 p-6 mb-8"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                                <h3 className="text-xl font-bold mb-6 text-gray-100">
                                    Project Information
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FiCalendar className="text-primary mt-1" />
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-400">
                                                Date
                                            </h4>
                                            <p className="text-gray-300">
                                                {project.date}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <FiUsers className="text-primary mt-1" />
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-400">
                                                Client
                                            </h4>
                                            <p className="text-gray-300">
                                                {project.client}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <FiUser className="text-primary mt-1" />
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-400">
                                                Role
                                            </h4>
                                            <p className="text-gray-300">
                                                {project.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <FiTag className="text-primary mt-1" />
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-400">
                                                Category
                                            </h4>
                                            <p className="text-gray-300">
                                                {project.category}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative backdrop-blur-sm bg-gray-900/30 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 p-6 mb-8"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                                <h3 className="text-xl font-bold mb-4 text-gray-100">
                                    Technologies
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col gap-4"
                            >
                                {project.demoUrl && (
                                    <Link
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="inline-flex items-center justify-center w-full px-6 py-3 font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg hover:shadow-primary-glow transition-all"
                                    >
                                        View Demo{" "}
                                        <FiExternalLink className="ml-2" />
                                    </Link>
                                )}

                                {project.githubUrl && (
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="inline-flex items-center justify-center w-full px-6 py-3 font-medium bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                                    >
                                        Source Code{" "}
                                        <FiGithub className="ml-2" />
                                    </Link>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
