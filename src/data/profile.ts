export const profile = {
    name: "Do Hoang Vu",
    title: "AI Engineer",
    email: "dohoangvu.nt2005@gmail.com",
    phone: "+84 835901375",
    location: {
        address: "Hoang Van Thu Street",
        city: "Ho Chi Minh City",
        district: "Phu Nhuan District",
        country: "Vietnam",
    },
    social: {
        github: "https://github.com/hoangvu1806",
        linkedin: "https://linkedin.com/in/hoangvu1806",
        portfolio: "https://hoangvu.id.vn",
    },
    education: {
        university: "The Saigon International University",
        degree: "Bachelor of Artificial Intelligence",
        graduation: "2027",
        gpa: "3.62/4.00",
    },
    tech_stack: ["PyTorch", "LangChain", "FastAPI"],
    certifications: [
        {
            title: "Machine Learning - Deep Learning Foundation",
            issuer: "cole.vn",
        },
        {
            title: "Exploratory Data Analysis for Machine Learning",
            issuer: "IBM",
        },
    ],
    projects: [
        {
            title: "ENTERPRISE AI CHATBOT PLATFORM",
            type: "Enterprise Solution",
            description:
                "Designed and implemented an advanced enterprise chatbot platform that integrates cutting-edge technologies for enhanced user interactions and business process automation across multiple departments.",
            details: [
                "Developed a RAG (Retrieval-Augmented Generation) system with knowledge graph integration for contextual understanding",
                "Implemented a multi-agent architecture for handling complex queries and orchestrating specialized tasks",
                "Created automated workflows using n8n for seamless integration with enterprise systems",
                "Deployed MCP (Model Context Protocol) to manage and unify contextual inputs from diverse data formats and sources in LLM-based pipelines.",
                "Built custom vector databases for efficient storage and retrieval of domain-specific knowledge",
            ],
            featured: true,
            image: null,
            demoUrl: null,
            githubUrl: null,
        },
        {
            title: "INTERNAL DOCUMENT INTELLIGENCE SYSTEM",
            type: "Enterprise Solution",
            description:
                "Led the development of an AI-powered document analysis and extraction system for internal corporate use, significantly reducing manual document processing time and improving accuracy across departments.",
            details: [
                "Implemented OCR and NLP pipelines for automated document classification and information extraction",
                "Designed custom entity recognition models for industry-specific terminology",
                "Created an intuitive dashboard for monitoring system performance and document processing metrics",
                "Integrated with existing enterprise systems through secure APIs",
            ],
            status: "In Development",
        },
        {
            title: "PREDICTIVE CUSTOMER ANALYTICS PLATFORM",
            type: "Enterprise Solution",
            description:
                "Developed a predictive analytics platform that leverages customer data to forecast behaviors, preferences, and churn probability, enabling proactive business strategies and personalized customer engagement.",
            details: [
                "Built machine learning models for customer segmentation and behavior prediction",
                "Designed interactive visualization tools for business stakeholders",
                "Implemented real-time data processing pipelines for continuous model updating",
                "Created recommendation engines for personalized customer experiences",
            ],
            status: "In Development",
        },
        {
            title: "MULTIMODAL SENTIMENT ANALYSIS TOOL",
            type: "Personal Research",
            description:
                "Developing a multimodal sentiment analysis tool that combines textual, visual, and audio data to provide comprehensive sentiment understanding for content creators and market researchers.",
            details: [
                "Implementing fusion techniques for combining textual, visual, and audio features",
                "Developing custom transformer-based models for multimodal understanding",
                "Creating visualization tools for sentiment analysis results",
                "Building an API for easy integration with content management systems",
            ],
            status: "In Development",
        },
        {
            title: "PERSONAL FINANCE AI ASSISTANT",
            type: "Personal Project",
            description:
                "Building a privacy-focused AI assistant for personal finance management, with capabilities for expense tracking, budget optimization, investment recommendations, and financial goal planning.",
            details: [
                "Implementing secure, local-first data processing for financial information",
                "Developing NLP capabilities for natural language financial queries",
                "Creating visualization and reporting tools for financial insights",
                "Building integration with financial data providers while maintaining user privacy",
            ],
            status: "In Development",
        },
        {
            title: "COLLABORATIVE RESEARCH PLATFORM FOR STUDENTS",
            type: "Academic Group Project",
            description:
                "Working with a multidisciplinary team to create a platform that facilitates research collaboration among students, featuring project matching, resource sharing, and integrated literature review tools.",
            details: [
                "Developing recommendation systems for research partner matching",
                "Creating document collaboration tools with version control",
                "Implementing citation management and literature organization features",
                "Building communication channels for research teams",
            ],
            status: "In Planning",
            demoUrl: null,
        },
        {
            title: "ZALO AI CHALLENGE 2023",
            description:
                "Built deep generative models for symbolic and audio-based music generation using Transformer-based architectures. Fine-tuned temporal coherence and structural consistency to align with evaluation metrics in generative audio tasks.",
        },
        {
            title: "AIC24 COMPETITION",
            description:
                "Developed scalable video understanding pipelines for event retrieval, leveraging contrastive learning and multimodal embeddings to enhance temporal-semantic alignment in untrimmed video datasets.",
            details: [
                "Integrated multi-head self-attention, temporal convolutional networks, and cross-modal fusion to improve mAP and retrieval latency in benchmark datasets.",
            ],
        },
        {
            title: "VIZQUEST: ENHANCED VIDEO EVENT RETRIEVAL USING FUSION AND TEMPORAL MODELING",
            type: "Research Paper",
            description:
                "Co-authored a research paper accepted at SOICT24, introducing a novel framework combining spatio-temporal attention with hierarchical feature fusion to optimize long-range video event detection.",
        },
    ],
    personalProjects: [
        {
            title: "Deeplearning-Practice",
            type: "AI & ML",
            description:
                "A comprehensive collection of deep learning implementations coded from scratch, covering everything from computer vision to natural language processing. This repository showcases high-quality implementations of fundamental and advanced deep learning algorithms.",
            details: [
                "Computer Vision models including CNN architectures and ResNet implementations",
                "Natural Language Processing models including LSTM with attention mechanisms",
                "Regression models with detailed logging for housing price prediction",
                "Sentiment analysis on IMDb reviews with deep learning approaches",
                "Classification models for Vietnamese news articles",
                "All implementations feature clean, well-documented code with detailed explanations",
            ],
            image: "/deeplearning.jpg",
            githubUrl: "https://github.com/hoangvu1806/Deeplearning-Practice",
            featured: true,
        },
        {
            title: "EzClip",
            type: "Web App",
            description:
                "A powerful desktop application designed to effortlessly download videos from various online platforms including YouTube, Facebook, and TikTok. Built with Electron.js and leverages yt-dlp for wide format support.",
            details: [
                "Support for multiple platforms including YouTube, Facebook, TikTok",
                "Download videos in various formats and resolutions",
                "Simple and intuitive user interface with modern design",
                "Offline functionality – no server required",
                "Built with Electron.js for cross-platform compatibility",
            ],
            image: "/ezclip.jpg",
            githubUrl: "https://github.com/hoangvu1806/EzClip",
            featured: true,
        },
        {
            title: "Decision Tree Visualization",
            type: "AI & ML",
            description:
                "A web application for building and visualizing decision trees from CSV data. Features include customizing model parameters, interactive visualization of decision trees, and performance metrics calculation.",
            details: [
                "Built with Python, FastAPI, and scikit-learn for the backend",
                "Interactive UI with HTML, CSS, JavaScript, and TailwindCSS",
                "Supports custom model parameters (max depth, min samples split, criterion)",
                "Visualizes decision trees as hierarchical structures",
                "Calculates and displays model evaluation metrics",
            ],
            image: "/visualization_decision_tree.jpg",
            githubUrl:
                "https://github.com/hoangvu1806/Decision-Tree-Visualization",
            featured: true,
        },
        {
            title: "Generative AI and Retrieval-Augmented Generation (RAG) Research",
            description:
                "Explored advanced implementations of LLMs integrated with RAG pipelines using vector databases (FAISS, ChromaDB) and embeddings from OpenAI/BGE models for enterprise-grade question-answering systems.",
        },
        {
            title: "Speech-to-Speech Conversion Models",
            description:
                "Built prototypes using voice conversion models (e.g., VITS, YourTTS) to enable real-time speaker-adaptive transformations, focusing on phoneme alignment, prosody control, and zero-shot voice cloning.",
        },
    ],
    skills: {
        technical: [
            {
                category: "Programming",
                items: ["Python", "JavaScript", "SQL", "C/C++", "Bash"],
            },
            {
                category: "Libraries/Frameworks",
                items: ["PyTorch", "FastAPI", "LangChain", "Opencv"],
            },
            {
                category: "AI Expertise",
                items: [
                    "LLMs",
                    "Generative AI",
                    "Enterprise Chatbot Systems",
                    "Computer Vision",
                ],
            },
            {
                category: "Tools",
                items: ["Conda", "Git", "GitHub", "Docker", "n8n"],
            },
        ],
        soft: [
            "AI-centric problem decomposition and solution engineering",
            "Agile team collaboration in research and production environments",
            "Innovative mindset in adapting SOTA models for enterprise use",
            "High ownership and self-driven learning in emerging AI domains",
        ],
        languages: [
            { language: "English", level: "Upper-Intermediate" },
            { language: "Vietnamese", level: "Native" },
        ],
    },
    interests: [
        "Generative AI",
        "LLMs",
        "Enterprise Chatbot Systems",
        "Voice Transformation",
    ],
};
