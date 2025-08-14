"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { motion } from "framer-motion";
import { FiSearch, FiTag, FiX } from "react-icons/fi";
import { useState } from "react";

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = [
        "AI & IT Trends",
        "AI & ML",
        "Agentic AI",
        "LLMs",
        "MLOps",
        "Natural Language Processing",
        "Maths",
        "Computer Science",
        "Generative AI",
        "Physics",
        "Technical News",
        "Research Paper"
    ];

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="min-h-[40vh] relative flex items-center justify-center overflow-hidden mb-16">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full filter blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full filter blur-3xl -z-10"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="container px-4 md:px-6 mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Blog
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Thoughts and insights on AI, machine learning, and technology trends.
                    </p>
                </motion.div>
            </section>

            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                {/* Search Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="relative max-w-2xl mx-auto">
                        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        />
                    </div>
                </motion.div>

                {/* Category Filter Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setSelectedCategory("")}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!selectedCategory
                                    ? "bg-primary text-white shadow-primary-glow"
                                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
                                }`}
                        >
                            All Categories
                        </button>
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                        ? "bg-secondary text-gray-900 shadow-secondary-glow"
                                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Active Filters */}
                {(searchQuery || selectedCategory) && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mb-8"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="text-sm text-gray-400">Active filters:</span>
                            {searchQuery && (
                                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30 flex items-center gap-2">
                                    Search: "{searchQuery}"
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="hover:text-primary-300 transition-colors"
                                    >
                                        <FiX size={14} />
                                    </button>
                                </span>
                            )}
                            {selectedCategory && (
                                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm border border-secondary/30 flex items-center gap-2">
                                    {selectedCategory}
                                    <button
                                        onClick={() => setSelectedCategory("")}
                                        className="hover:text-secondary-300 transition-colors"
                                    >
                                        <FiX size={14} />
                                    </button>
                                </span>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Coming Soon Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20"
                >
                    <div className="text-center py-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-12 max-w-2xl mx-auto"
                        >
                            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 shadow-primary-glow">
                                <FiTag className="text-3xl text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-200">
                                Coming Soon
                            </h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                I'm working on creating valuable content about AI, machine learning,
                                and technology. Check back soon for insightful articles and tutorials.
                            </p>

                            {/* Preview Topics */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                                    <div className="text-primary font-medium mb-1">AI & ML</div>
                                    <div className="text-gray-400">Deep Learning, Neural Networks</div>
                                </div>
                                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                                    <div className="text-secondary font-medium mb-1">LLMs</div>
                                    <div className="text-gray-400">GPT, Transformers, Fine-tuning</div>
                                </div>
                                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                                    <div className="text-accent font-medium mb-1">Generative AI</div>
                                    <div className="text-gray-400">Text & Image Generation</div>
                                </div>
                                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                                    <div className="text-primary font-medium mb-1">MLOps</div>
                                    <div className="text-gray-400">Model Deployment, Monitoring</div>
                                </div>
                                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                                    <div className="text-secondary font-medium mb-1">Research</div>
                                    <div className="text-gray-400">Latest Papers, Trends</div>
                                </div>
                                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                                    <div className="text-accent font-medium mb-1">Tutorials</div>
                                    <div className="text-gray-400">Hands-on Guides</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </MainLayout>
    );
}