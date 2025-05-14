export const profile = {
    name: "Do Hoang Vu",
    title: "AI Engineer",
    email: "dohoangvu.forwork@gmail.com",
    phone: "+84 35901375",
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
    tech_stack: ["Python", "PyTorch", "LangChain", "FastAPI"],
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
                items: ["Python", "JavaScript", "C/C++", "SQL", "Bash"],
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
