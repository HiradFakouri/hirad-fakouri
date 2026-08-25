export const FREELANCE_PROJECTS = [
  {
    slug: "leadqual",
    name: "LeadQual",
    headline: "Never miss a lead again",
    problem:
      "Trades and service businesses lose jobs simply because they can't reply to WhatsApp messages fast enough while out on a job. LeadQual sits on the business's WhatsApp number, has a natural conversation with anyone who messages in, and captures a fully qualified lead — job type, urgency, location, contact details — before a human even sees it. Urgent jobs get flagged immediately; the business owner gets pinged the moment a real lead comes through.",
    bullets: [
      "Customer messages the business's WhatsApp number",
      "AI has a natural conversation, checking real-time service availability and pricing rather than guessing",
      "Structured lead (job type, urgency, location, contact) is automatically logged",
      "Owner gets an instant notification for urgent jobs",
      "Every lead is visible on a live dashboard, sorted by urgency",
    ],
    stack: ["FastAPI", "Claude API", "Twilio (WhatsApp)", "Supabase", "Next.js"],
    video: true,
    screenshots: 3,
    testimonial: null,
  },
  {
    slug: "docuparse",
    name: "DocuParse",
    headline: "Turn messy paperwork into clean data",
    problem:
      "Small businesses lose hours retyping supplier invoices, receipts, and handwritten job sheets into spreadsheets by hand. DocuParse reads a photo or PDF directly, extracts every line item into structured data, flags anything it's not confident about for a quick human check, and generates a clean, professional PDF quote or CSV export in seconds.",
    bullets: [
      "Upload a photo or PDF of any invoice, receipt, or price list",
      "AI reads it directly and extracts line items — description, quantity, price, total",
      "Low-confidence items are flagged for review rather than silently guessed",
      "Review and correct anything before confirming",
      "Generate a polished PDF quote or export to CSV instantly",
    ],
    stack: ["FastAPI", "Claude API (vision)", "Supabase", "Next.js"],
    video: true,
    screenshots: 3,
    testimonial: null,
  },
  {
    slug: "bookflow",
    name: "BookFlow",
    headline: "Booking and reminders that run themselves",
    problem:
      "No-shows are pure lost revenue for any appointment-based business. BookFlow gives customers a simple booking page, sends an instant confirmation, and automatically follows up with reminders before the appointment — cutting no-shows without anyone having to remember to chase people manually.",
    bullets: [
      "Customer books a service and time slot on a simple public booking page",
      "Instant confirmation sent via WhatsApp/SMS",
      "Automated reminders fire before the appointment, no manual work required",
      "No-shows are tracked, with automatic win-back follow-up messages",
      "Owner dashboard shows upcoming bookings and no-show rates at a glance",
    ],
    stack: ["FastAPI", "APScheduler", "Twilio", "Supabase", "Next.js"],
    video: true,
    screenshots: 3,
    testimonial: null,
  },
  {
    slug: "askyourdocs",
    name: "AskYourDocs",
    headline: "Answers sourced only from your own documents",
    problem:
      "Business owners and staff waste time digging through policy documents, price lists, and FAQs to answer simple questions. AskYourDocs lets a business upload their own documents and get a chat interface that answers questions using only that material — and, critically, it says so honestly when a question falls outside what's been uploaded, rather than guessing.",
    bullets: [
      "Upload policies, price lists, FAQs, or manuals",
      "Ask a question in plain English",
      "Answers are retrieved directly from the uploaded documents, with the source cited",
      "If the answer isn't in the documents, it says so clearly instead of making something up",
    ],
    stack: ["FastAPI", "Claude API", "Voyage AI (embeddings)", "Supabase (pgvector)", "Next.js"],
    video: true,
    screenshots: 3,
    testimonial: null,
  },
  {
    slug: "opspulse",
    name: "OpsPulse",
    headline: "One dashboard that tells you what actually needs attention",
    problem:
      "Business owners juggling leads, bookings, and revenue across separate tools end up manually piecing together what's actually going on. OpsPulse pulls it all into one dashboard and writes a short, plain-English weekly summary — highlighting what changed and what's worth acting on, not just restating numbers.",
    bullets: [
      "Pulls data from leads, bookings, and revenue automatically",
      "Computes week-over-week changes",
      "AI generates a short summary that interprets the data rather than just listing it — including a specific suggested action where relevant",
      "Refreshable on demand",
    ],
    stack: ["FastAPI", "Claude API", "Supabase", "Next.js"],
    video: true,
    screenshots: 2,
    testimonial: null,
  },
];

export const CLIENT_PROJECTS = [
  {
    slug: "in4leads",
    name: "in4leads",
    headline: "A CRM built for a real client, from scratch",
    problem:
      "in4leads is a full CRM system built for a UK construction/trades client, covering contact and company management with secure multi-user access. It was built end-to-end — from initial requirements through to a working, deployed product — using a modern full-stack setup.",
    bullets: [
      "Contact and company management tailored to a trades business's workflow",
      "Secure multi-user access",
      "Built and iterated directly with a real client through the full product lifecycle",
    ],
    stack: ["Next.js", "FastAPI", "Supabase"],
    video: false,
    screenshots: 3,
    testimonial: null,
  },
  {
    slug: "praxis",
    name: "Praxis",
    headline: "Admin automation for a private medical practice",
    problem:
      "Praxis is a medical practice administration system built for a private clinic, pairing an AI-powered admin agent with a companion dashboard. It handles scheduling logistics and patient communication automation — including appointment reminders and no-show follow-up — giving practice staff a clear operational view without manual admin overhead.",
    bullets: [
      "AI-powered admin agent handling scheduling and patient communication tasks",
      "Automated appointment reminders and no-show follow-up messaging",
      "Companion dashboard giving staff a real-time operational view",
      "Built and deployed for a real private medical practice",
    ],
    stack: ["Python", "FastAPI", "APScheduler", "Next.js", "PostgreSQL"],
    video: false,
    screenshots: 3,
    testimonial: {
      text: "I had the pleasure of working with Mr Hirad Fakouri, a highly skilled and professional software engineer, who assisted me in developing a professional medical website. Throughout the project, Hirad was attentive, patient and genuinely interested in understanding my requirements. He listened carefully to my ideas and was also very good at suggesting practical improvements and creative solutions that were helpful, relevant and well aligned with current expectations for a modern professional website. He was thorough, reliable and consistently worked within the agreed timeframe. Tasks were completed efficiently and on time, and communication throughout the project was clear, respectful and professional. I found Hirad to be a very polite, knowledgeable and technically skilled individual with a strong sense of responsibility and attention to detail. His contribution was greatly appreciated, and I would be very happy to recommend him to anyone looking for a dependable and capable software engineer or web developer. I wish Hirad every success in his future endeavours and have no hesitation in recommending him.",
      author: "Dr Shokouh-Amiri",
    },
  },
];

export const OTHER_PROJECTS = [
  {
    title: "AI Admin Automation Tool",
    description:
      "FastAPI-powered automation tooling that streamlines administrative workflows using AI-driven processing pipelines.",
    tech: ["Python", "FastAPI"],
    github: null,
    images: [],
  },
  {
    title: "SleePT",
    subtitle: "AI Chat Agent",
    description:
      "A comedic anti-productivity AI chat app. SleePT acts as a sarcastic, passive-aggressive life coach that comforts you into procrastinating — built on WebSockets with real-time streaming responses.",
    tech: ["Next.js", "Express.js", "WebSockets", "MongoDB", "OpenAI API"],
    github: "https://github.com/HiradFakouri/SleePT",
    images: [],
  },
  {
    title: "Kobuki Driverless Robot",
    description:
      "Path planning and autonomous navigation systems for the Kobuki robot platform, built for the UGRacing Driverless team.",
    tech: ["Python", "ROS2"],
    github: null,
    images: [],
  },
  {
    title: "Global Velocity Profile",
    description:
      "Racing line optimization and physics-accurate velocity profiling for UGRacing Driverless's autonomous race car — computes an optimal racing line from cone boundary data and a real-time velocity plan using an actual tyre/aero model. Runs as a ROS2 node.",
    tech: ["Python", "NumPy", "SciPy", "ROS2"],
    github: null,
    images: [],
  },
  {
    title: "PitWall",
    description:
      "Real-time telemetry dashboard for UGRacing Driverless, streaming live car sensor data over MQTT to a live web dashboard with adjustable PID controller gains and setpoints.",
    tech: ["Next.js", "Recharts", "MQTT.js", "EMQX", "Python"],
    github: null,
    images: [],
  },
  {
    title: "GUI Image Filtering App",
    description:
      "Web-based image filtering tool with a Python backend, supporting real-time transformations powered by Pillow.",
    tech: ["Next.js", "Express.js", "Python Pillow"],
    github: "https://github.com/HiradFakouri/filter-webGUI",
    images: [
      "/images/filterGUI/project-one-1.png",
      "/images/filterGUI/project-one-2.png",
      "/images/filterGUI/project-one-3.png",
    ],
  },
  {
    title: "Tic Tac Toe GUI",
    description:
      "A simple implementation of the classic Tic Tac Toe game, designed for two players or single-player mode with a basic AI opponent. Built for fun and learning, this project combines fundamental programming concepts with a user-friendly interface.",
    tech: [],
    github: "https://github.com/HiradFakouri/tictactoe2.0/tree/main",
    images: [
      "/images/Tic Tac Toe/project-two-1.png",
      "/images/Tic Tac Toe/project-two-2.png",
      "/images/Tic Tac Toe/project-two-3.png",
    ],
  },
  {
    title: "TodoApp",
    description:
      "A simple and efficient Todo Application built with Flask, designed to help you manage your tasks effectively. This app features user authentication for secure access and stores data persistently using MongoDB.",
    tech: [],
    github: "https://github.com/HiradFakouri/TodoApp",
    images: [
      "/images/TodoApp/project-three-1.png",
      "/images/TodoApp/project-three-2.png",
    ],
  },
  {
    title: "Timer",
    description:
      "A sleek and customizable Timer Application built with Next.js, designed for productivity and fun. This app features custom time settings, preset easy times, pause/resume functionality, and a delightful tune when the timer ends.",
    tech: [],
    github: "https://github.com/HiradFakouri/TodoApp",
    images: [
      "/images/Timer/project-four-1.png",
      "/images/Timer/project-four-2.png",
      "/images/Timer/project-four-3.png",
      "/images/Timer/project-four-4.png",
    ],
  },
  {
    title: "Internal and External Stakeholder Quiz Game",
    description:
      "A fun and interactive Quiz Game designed to help users learn about internal and external stakeholders in a business context. Built for National 5 Business Management",
    tech: [],
    github: null,
    images: [
      "/images/IandE/project-five-1.png",
      "/images/IandE/project-five-2.png",
      "/images/IandE/project-five-3.png",
      "/images/IandE/project-five-4.png",
    ],
  },
  {
    title: "Calculator GUI",
    description:
      "A user-friendly Graphical User Interface (GUI) Calculator designed for simple and efficient arithmetic operations. Built as a fun and educational project, this calculator provides all the basic functionalities with a sleek, intuitive interface.",
    tech: [],
    github: "https://github.com/HiradFakouri/GUIcalculator/",
    images: [
      "/images/Calculator/project-six-1.png",
      "/images/Calculator/project-six-2.png",
      "/images/Calculator/project-six-3.png",
    ],
  },
];

export const SKILLS = [
  "Python", "JavaScript", "Node.js", "Express.js", "Next.js",
  "FastAPI", "MongoDB", "PostgreSQL", "ROS2", "Git",
  "Tailwind CSS", "SQL", "C", "Rust",
];

export const NAV_LINKS = [
  { label: "AI Automation", href: "/ai-automation" },
  { label: "Client Work", href: "/client-work" },
  { label: "Other Projects", href: "/other-projects" },
  { label: "About", href: "/about" },
];

export const HIGHLIGHT_SLUGS = ["leadqual", "praxis", "in4leads"];

export const ALL_PROJECTS = [...FREELANCE_PROJECTS, ...CLIENT_PROJECTS];
