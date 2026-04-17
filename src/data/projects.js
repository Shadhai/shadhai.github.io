export const projectsData = [

    {
        "id": 1,
        "title": "ICU Sentinel Pulse",
        "description": "An OpenEnv-compliant ICU simulation environment powered by explainable AI for clinical decision support and patient monitoring.",
        "tech": ["Python", "FastAPI", "PyTorch", "Docker", "OpenEnv", "Reinforcement Learning"],
        "context": "ICU decision-making is highly complex due to rapidly changing patient vitals, high-risk interventions, and the need for real-time clinical reasoning support.",
        "pitch": "An AI-powered ICU simulation system that not only recommends clinical actions but also assigns the right specialist doctor and explains every decision with transparent reasoning and clinical context.",
        "problemSolving": "We designed a reinforcement learning–ready ICU environment with a structured state-action-reward system, enabling agents to learn optimal interventions under varying patient conditions. Key challenges included modeling realistic ICU vitals dynamics, integrating a doctor assignment mechanism, and ensuring explainable decision outputs for every step.",
        "presentation": "The system is exposed via a FastAPI backend with endpoints like /reset, /step, and /state, enabling seamless integration with dashboards and RL training pipelines.",
        "polish": "Explainability modules generate human-readable clinical reasoning alongside each AI action, improving trust, interpretability, and evaluation in high-stakes medical environments.",
        "image": "/exai1.png",
        "archImage": "/exai.jpg",
        "github": "https://github.com/Shadhai/EXAI_ICU_RL.git"
    },
    {
        "id": 2,
        "title": "Ultimate Car Rental Backend",
        "description": "Enterprise-ready Spring Boot backend for a multi-role vehicle rental platform with secure authentication, payments, and analytics.",
        "tech": ["Java 17+", "Spring Boot", "Spring Security (JWT)", "Spring Data JPA", "MySQL/PostgreSQL", "Maven", "Swagger/OpenAPI"],
        "context": "Vehicle rental platforms require strict role separation, real-time booking coordination, and secure financial transactions across multiple user types including customers, drivers, and administrators.",
        "pitch": "A scalable backend system that powers a multi-role vehicle rental ecosystem with secure authentication, automated rental lifecycle management, and real-time operational analytics.",
        "problemSolving": "We implemented a layered architecture (Controller → Service → Repository) with JWT-based authentication and role-based access control for Admin, Local Head, Driver, and Customer roles. Core challenges included managing rental state transitions, ensuring transactional consistency for payments and refunds, and designing a flexible driver assignment and payout system.",
        "presentation": "The system exposes modular REST APIs grouped by role (/api/admin, /api/customer, /api/driver, /api/local-head) and includes Swagger/OpenAPI documentation for seamless developer integration and testing.",
        "polish": "Built with pagination, filtering, and optimized JPA queries to ensure scalability. Security is enforced through encrypted credentials, refresh token flows, and strict endpoint authorization rules.",
        "image": "https://via.placeholder.com/800x500/0f172a/3b82f6?text=Car+Rental+Backend",
        "archImage": "",
        "github": "https://github.com/Shadhai/Ultimate_Car_Rental_Backend-Spring-Boot-.git"
    },
    {
        "id": 3,
        "title": "GenAI RAG Agent – Private Knowledge Assistant",
        "description": "A Retrieval-Augmented Generation (RAG) backend system that enables users to build private, domain-specific AI assistants from PDFs, DOCX files, and web URLs.",
        "tech": ["FastAPI", "LangChain", "ChromaDB", "Ollama", "Python", "SentenceTransformers"],
        "context": "Most enterprise AI systems rely on external APIs, raising privacy concerns and cost limitations. There is a growing need for fully local, secure, and domain-specific AI systems that can reason over private documents.",
        "pitch": "A privacy-first RAG-based AI backend that transforms user-uploaded documents into an intelligent knowledge base capable of answering contextual, source-backed questions in real time.",
        "problemSolving": "We designed a modular RAG pipeline consisting of ingestion, chunking, vector storage, retrieval, and generation layers. Key challenges included maintaining context accuracy across large documents, optimizing retrieval relevance (k=5 cosine similarity search), and ensuring fully local LLM execution using Ollama for zero-cost inference.",
        "presentation": "The system exposes FastAPI endpoints and multiple UI assistants (/car, /university, /tech) along with a unified /hub interface for interacting with different domain-specific agents.",
        "polish": "Enhanced retrieval accuracy using RecursiveCharacterTextSplitter, ChromaDB vector persistence, and MiniLM embeddings, while ensuring source attribution for every generated response.",
        "image": "/UniRAG.png",
        "archImage": "",
        "github": "https://github.com/Shadhai/Agentic_RAG_Chatbot.git"
    },

    {
        "id": 4,
        "title": "Generative Adversarial Networks (GAN) Lab",
        "description": "A collection of GAN experiments including face generation, conditional GANs, and self-attention GAN architectures.",
        "tech": ["Python", "TensorFlow", "Keras", "PyTorch", "NumPy", "Matplotlib"],
        "context": "Generating realistic synthetic data requires balancing two competing neural networks (generator and discriminator), while maintaining training stability and avoiding mode collapse.",
        "pitch": "A deep learning project suite exploring multiple GAN architectures to generate high-quality synthetic images and study training stability techniques.",
        "problemSolving": "GAN training instability was addressed through techniques like improved loss functions, normalization strategies, and architectural tuning. Experiments included conditional generation, self-attention mechanisms, and stabilization methods to reduce mode collapse and improve output diversity.",
        "presentation": "Each GAN variant is organized as a separate module with visual output comparisons, enabling clear analysis of how architectural changes affect generated image quality.",
        "polish": "Optimizations such as spectral normalization, label conditioning, and attention layers significantly improved convergence stability and image realism.",
        "image": "/GAN.png",
        "archImage": "",
        "github": "https://github.com/Shadhai/GAN-Generative-Adversarial-Network-.git"
    }
];
