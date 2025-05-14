"use client";

import { MainLayout } from "@/components/layout/main-layout";
import {
    FiArrowRight,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiCode,
    FiLayers,
    FiServer,
    FiUser,
    FiAward,
    FiBriefcase,
} from "react-icons/fi";
import { profile } from "@/data/profile";
import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicBackground } from "@/components/ui/dynamic-background";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Home() {
    const introTexts = [
        "AI Engineer specializing in generative AI programming, advanced large language models, and multimodal visual processing.",
        "Extensive experience developing enterprise-grade chatbot systems and voice interaction pipelines optimized for high-concurrency environments.",
        "Proficient in leveraging state-of-the-art AI frameworks to tackle complex challenges in natural language processing.",
        "Adept at integrating cutting-edge models and architectures to deliver scalable, efficient solutions.",
    ];

    return (
        <MainLayout>
            {/* Dynamic Background */}
            <DynamicBackground />

            {/* Hero Section */}
            <section className="hero-section pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6 relative">
                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full filter blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-5 rounded-full filter blur-3xl -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="md:col-span-7 flex flex-col"
                        >
                            <div className="py-4 my-2">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
                                    <span className="animated-border-text">
                                        {profile.name}
                                    </span>
                                </h1>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
                                <span className="text-secondary text-shadow-secondary">
                                    {profile.title}
                                </span>
                            </h2>

                            <TypingAnimation
                                texts={introTexts}
                                className="block text-lg md:text-xl max-w-xl leading-relaxed mb-8 mt-2"
                            />

                            <div className="flex flex-wrap gap-6 mb-12">
                                <Link
                                    href="/projects"
                                    className="btn btn-primary"
                                >
                                    View Projects
                                    <FiArrowRight className="ml-2" />
                                </Link>
                                <Link
                                    href="/resume"
                                    className="btn btn-outline"
                                >
                                    View Resume
                                </Link>
                            </div>

                            <div className="flex items-center gap-6">
                                <Link
                                    href={profile.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="text-gray-400 hover:text-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-primary"
                                >
                                    <FiGithub size={20} />
                                </Link>
                                <Link
                                    href={profile.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-gray-400 hover:text-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-primary"
                                >
                                    <FiLinkedin size={20} />
                                </Link>
                                <Link
                                    href={`mailto:${profile.email}`}
                                    aria-label="Email"
                                    className="text-gray-400 hover:text-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-primary"
                                >
                                    <FiMail size={20} />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            className="md:col-span-5 relative flex justify-center"
                        >
                            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-primary rounded-full flex items-center justify-center overflow-hidden shadow-primary-glow">
                                <FiUser className="text-white text-8xl" />
                            </div>

                            {/* Floating elements */}
                            <div className="absolute top-10 -left-4 z-20 backdrop-blur-sm bg-gray-900/30 rounded-lg border border-gray-700/50 p-2 ml-4">
                                <div className="text-xs font-medium text-gray-300">
                                    Specialization
                                </div>
                                <div className="font-semibold text-secondary text-shadow-secondary">
                                    AI Engineering
                                </div>
                            </div>

                            <div className="absolute bottom-4 -right-4 p-2 z-20 backdrop-blur-sm bg-gray-900/30 rounded-lg border border-gray-700/50 mr-4">
                                <div className="text-xs font-medium p-1 text-gray-300">
                                    Tech Stack
                                </div>
                                <div className="font-semibold text-primary text-shadow-primary">
                                    {profile.tech_stack.join(", ")}...
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key facts section */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="flex flex-col items-center text-center h-full min-h-[260px] p-6 backdrop-blur-sm bg-gray-900/30 rounded-lg border border-gray-700/50"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center mb-4 shadow-primary-glow">
                                <FiAward className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-shadow-primary">
                                Education
                            </h3>
                            <div className="flex-grow flex flex-col justify-center w-full">
                                <p className="text-gray-300 mb-3">
                                    {profile.education.degree}
                                </p>
                                <p className="text-gray-300">
                                    {profile.education.university}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center text-center h-full min-h-[260px] p-6 backdrop-blur-sm bg-gray-900/30 rounded-lg border border-gray-700/50"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4 shadow-secondary-glow">
                                <FiBriefcase className="text-2xl text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-shadow-secondary">
                                Certifications
                            </h3>
                            <div className="flex-grow flex flex-col justify-center w-full">
                                <p className="text-gray-300 mb-3">
                                    {profile.certifications[0].title}
                                </p>
                                <p className="text-gray-300">
                                    {profile.certifications[0].issuer}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center text-center h-full min-h-[260px] p-6 backdrop-blur-sm bg-gray-900/30 rounded-lg border border-gray-700/50"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mb-4 shadow-accent-glow">
                                <FiCode className="text-2xl text-accent" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-shadow-accent">
                                Languages
                            </h3>
                            <div className="flex-grow flex flex-col justify-center w-full">
                                {profile.skills.languages.map(
                                    (lang, index, arr) => (
                                        <p
                                            key={index}
                                            className={`text-gray-300 ${
                                                index < arr.length - 1
                                                    ? "mb-3"
                                                    : ""
                                            }`}
                                        >
                                            {lang.language} - {lang.level}
                                        </p>
                                    )
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                <span className="text-primary text-shadow-primary">
                                    Technical Skills
                                </span>
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto backdrop-blur-sm bg-gray-900/30 p-4 rounded-lg">
                                Skills and technologies I've mastered through
                                years of learning and working.
                            </p>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {profile.skills.technical.map((skill, index) => (
                            <motion.div
                                key={skill.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="p-6 backdrop-blur-sm bg-gray-900/30 rounded-lg border border-gray-700/50"
                            >
                                <div className="flex items-start gap-4">
                                    {index === 0 && (
                                        <FiCode className="text-primary text-2xl mt-1" />
                                    )}
                                    {index === 1 && (
                                        <FiLayers className="text-secondary text-2xl mt-1" />
                                    )}
                                    {index === 2 && (
                                        <FiServer className="text-accent text-2xl mt-1" />
                                    )}
                                    {index === 3 && (
                                        <FiGithub className="text-primary text-2xl mt-1" />
                                    )}
                                    <div>
                                        <h3
                                            className={`font-semibold text-xl mb-4 ${
                                                index === 0
                                                    ? "text-primary text-shadow-primary"
                                                    : index === 1
                                                    ? "text-secondary text-shadow-secondary"
                                                    : index === 2
                                                    ? "text-accent text-shadow-accent"
                                                    : "text-primary text-shadow-primary"
                                            }`}
                                        >
                                            {skill.category}
                                        </h3>
                                        <ul className="space-y-3">
                                            {skill.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="text-gray-300 flex items-center gap-2"
                                                >
                                                    <span
                                                        className={`w-2 h-2 rounded-full ${
                                                            index === 0
                                                                ? "bg-primary"
                                                                : index === 1
                                                                ? "bg-secondary"
                                                                : index === 2
                                                                ? "bg-accent"
                                                                : "bg-primary"
                                                        }`}
                                                    ></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                <span className="text-primary text-shadow-primary">
                                    Featured Projects
                                </span>
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto backdrop-blur-sm bg-gray-900/30 p-4 rounded-lg">
                                Some of my notable projects I've worked on
                                recently.
                            </p>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {profile.projects.slice(0, 3).map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="overflow-hidden backdrop-blur-sm bg-gray-900/30 rounded-lg border border-gray-700/50"
                            >
                                <div className="h-40 bg-gradient-primary relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-60">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                                            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                                            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                            <line
                                                x1="12"
                                                y1="22.08"
                                                x2="12"
                                                y2="12"
                                            ></line>
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3
                                        className={`font-semibold text-xl mb-3 ${
                                            index === 0
                                                ? "text-primary text-shadow-primary"
                                                : index === 1
                                                ? "text-secondary text-shadow-secondary"
                                                : "text-accent text-shadow-accent"
                                        }`}
                                    >
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        {project.description}
                                    </p>
                                    {project.details && (
                                        <ul className="list-disc list-inside text-sm text-gray-300 mb-6 pl-2">
                                            {project.details.map(
                                                (detail, index) => (
                                                    <li
                                                        key={index}
                                                        className="mb-1"
                                                    >
                                                        {detail}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                    <Link
                                        href="/projects"
                                        className={`hover:text-${
                                            index === 0
                                                ? "primary"
                                                : index === 1
                                                ? "secondary"
                                                : "accent"
                                        } font-medium inline-flex items-center transition-colors`}
                                    >
                                        View Details
                                        <FiArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/projects" className="btn btn-outline">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
