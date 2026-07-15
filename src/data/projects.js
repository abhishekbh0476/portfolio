const projects = [
  {
    name: "CortexAI — Enterprise Knowledge Intelligence Platform",
    category: "Full Stack / AI",
    tech: "React 19, FastAPI, LangGraph, LangChain, Groq (Llama 3.3 70B), FAISS, fastembed, Supabase PostgreSQL, Supabase Storage, JWT, SQLAlchemy 2.0, Alembic, PyMuPDF",
    link: "https://github.com/abhishekbh0476/CortexAI",
    liveLink: "https://cortexai-bsbp-seven.vercel.app",
    description: "Production-grade RAG platform for enterprise knowledge management. Upload PDFs, DOCX, PPTX, XLSX and query them with natural language. Powered by a 7-node LangGraph multi-agent pipeline (Planner → Context Manager → Query Rewriter → Retriever → Fact Validator → Citation → Response Generator) with anti-hallucination, SSE streaming, conversational memory, per-user FAISS indexes, JWT auth, and a full MUI dashboard."
  },
  {
    name: "Complaint / Issue Reporting Application",
    category: "Full Stack",
    tech: "Node.js, Express.js, MongoDB, Socket.io, JWT, Multer",
    link: "https://github.com/abhishekbh0476/Complaint-Issue-Reporting-App",
    description: "Full-stack complaint management system with real-time WebSocket notifications, admin dashboard, file attachments, MongoDB Atlas integration, and role-based authentication."
  },
  {
    name: "SecureLife AI Insurance Management System",
    category: "Full Stack / AI",
    tech: "Spring Boot 3.2, React 18, MySQL, Stripe, JWT, OAuth2",
    link: null,
    description: "AI-powered insurance platform with JWT auth, Google OAuth2, Stripe card & UPI QR payments, AI premium prediction, fraud detection, and analytics dashboard."
  },
  {
    name: "NLP Contextual Question Answering System",
    category: "AI / NLP",
    tech: "Python, Flask, RoBERTa, spaCy, NLTK",
    link: "https://github.com/abhishekbh0476/NLP-CONTEXTUAL-QUESTION-ANSWERING"
  },
  {
    name: "TaskFlow – Smart Task Reminder App",
    category: "Frontend",
    tech: "HTML, JavaScript, Tailwind CSS",
    link: "https://github.com/abhishekbh0476/taskflow",
    liveLink: "https://taskflow-haib7o3bg-abhishek-b-hs-projects-ba695908.vercel.app/"
  },
  {
    name: "DiaSense – AI-Driven IoT Diabetes Prediction",
    category: "AI / ML + IoT",
    tech: "Python, Flask, ESP32, ML",
    link: "https://github.com/abhishekbh0476/DiaSense"
  },
  {
    name: "Music Playlist Application",
    category: "Python Application",
    tech: "Python",
    link: "https://github.com/abhishekbh0476/Music-Playlist"
  },
  {
    name: "Movie Success Prediction System",
    category: "Machine Learning",
    tech: "Python, Pandas, Scikit-learn",
    link: "https://github.com/abhishekbh0476/Movie-Success-prediction"
  },
  {
    name: "ChainTrace – Blockchain Supply Chain",
    category: "Blockchain",
    tech: "Solidity, Web3.js, Truffle, Ganache",
    link: "https://github.com/abhishekbh0476/ChainTrace"
  },
  {
    name: "Sign Language Recognition System",
    category: "Deep Learning / Computer Vision",
    tech: "Python, CNN, OpenCV",
    link: "https://github.com/abhishekbh0476/Sign-Language-Recogniton"
  }
];

export default projects;
