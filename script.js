// =====================
// CONFIG (edit easily)
// =====================
const PROFILE = {
  name: "Vansh Sharma",
  email: "sharmavansh969@gmail.com",
  phone: "+91-8082840158",
  location: "India",

  // Put real links here
  resumeUrl: "ADD_YOUR_RESUME_PDF_LINK_HERE",
  linkedin: "https://www.linkedin.com/in/vansh-sharma-b9b80b298/",
  github: "https://github.com/vansh565",
  

  // Images (local path or hosted URL)
  profileImg: "assets/vanshsharma.jpeg",
  heroBannerImg: "assets/hero-banner.jpg", // BIG image above "Yogendra Bharadwaj / Profile Summary" area

  // Optional: Nav/Footer logo (set empty string to hide image and show "YB" fallback)
  navLogo: "assets/vanshsharma.jpeg",       // NAV LOGO image path (customize anytime)
  footerLogo: "assets/vanshsharma.jpeg",    // FOOTER LOGO image path
  heroBannerImg2: "assets/hero-banner-2.jpg", // Right-side hero highlight image

  // Contact extras
  mapEmbedUrl: "ADD_GOOGLE_MAP_EMBED_URL_HERE",  // CONTACT MAP: paste iframe src URL (NOT the whole iframe)
  contactQrImg: "assets/qr/contact-qr.png",      // CONTACT SECTION QR image
  footerQrImg: "assets/qr/footer-qr.png",        // FOOTER QR image
};

// Hero text
const HERO = {
  bullets: [
    "AI + Web applications: build, enhance, optimize.",

    "Robotics + automation development exposure."
  ],
  badges: ["AI","ML / DL","Full Stack ","Robotics"],
  float1: "1K+ LinkedIn followers",
  float2: "B.Tech (Cse) @ Graphic Era Deemed To be University",
};

// About
const ABOUT = {
  text: "I’m Vansh Sharma — an Artificial Intelligence Software Developer who builds robust, user-centered systems: AI applications, dashboards, conversational assistants, and robotics automation.",
  focus: "GenAI • Full-Stack •ML/DL",
  tools: "Git/GitHub • Linux",
};

// 5 demo counters (0 -> big number)
const STATS = [
  { label: "Linkedin Followers", value: 1000, suffix: "+" },
  { label: "Projects", value: 15, suffix: "+" },
  { label: "Certificates", value: 15, suffix: "+" },
  

];

// Skills (devicon)
const SKILLS = {
  languages: [
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-cplusplus-plain colored", name: "C/C++" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript" },
    { icon: "devicon-mysql-plain colored", name: "SQL" },
  ],
  stack: [
    { icon: "devicon-react-original colored", name: "HTML, CSS" },
    { icon: "devicon-nodejs-plain colored", name: "Node.js" },
    { icon: "devicon-express-original colored", name: "Express" },
    { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
  ],
  tools: [
    { icon: "devicon-git-plain colored", name: "Git" },
    { icon: "devicon-github-original colored", name: "GitHub" },
    { icon: "devicon-linux-plain colored", name: "Linux" },
  ]
  ,
  // NEW (extra 3 cards) — add minimum 12 items each for better visibility
  ai: [
    { icon: "devicon-tensorflow-original colored", name: "TensorFlow" },
    { icon: "devicon-pytorch-original colored", name: "PyTorch" },
    { icon: "devicon-opencv-plain colored", name: "OpenCV" },
    { icon: "devicon-numpy-plain colored", name: "NumPy" },
    { icon: "devicon-pandas-original colored", name: "Pandas" },
    { icon: "devicon-scikitlearn-plain colored", name: "Scikit-learn" },
    { icon: "devicon-anaconda-original colored", name: "Anaconda" },
    { icon: "devicon-kaggle-original colored", name: "Kaggle" }
  ],
  cloud: [

    { icon: "devicon-kubernetes-plain colored", name: "Kubernetes" },
  
    { icon: "devicon-googlecloud-plain colored", name: "GCP" },
 
    { icon: "devicon-linux-plain colored", name: "Linux" },
    { icon: "devicon-bash-plain colored", name: "Bash" },
   
  ],
  research: [
    { icon: "devicon-python-plain colored", name: "Python (Tools)" },
    { icon: "devicon-latex-original colored", name: "LaTeX" },

    { icon: "devicon-github-original colored", name: "GitHub" },
  ,
    { icon: "devicon-vscode-original colored", name: "VS Code" },
    { icon: "devicon-ubuntu-plain colored", name: "Ubuntu" },
    { icon: "devicon-matlab-plain colored", name: "MATLAB" }
  ]

};

// Experience cards (bigger + 2 images + pdf)
const EXPERIENCES = [
  {
    key: "geu",
    role: "Summer Intern",
    org: "Graphic Era Deemed University (GEU), Dehradun",
    
    date: "03/06/2025 – 16/07/2025",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Graphic_Era_University_Logo.png/240px-Graphic_Era_University_Logo.png",
    points: [
      "Built humanoid robot features: locomotion + voice assistant ",
      "Implemented voice-based conversational abilities using AI.",
      "Developed a web page to control robot speed/direction for manual operation."
    ],
    tags: ["Python","ML","GenAI","C","HTML/CSS/JS"],
    media: [
      { name: "Completion Certificate", type: "image", thumb: "assets/internship.jpeg", url: "assets/internship.jpeg" },

      // You can add pdf too:
      // { name:"Certificate PDF", type:"pdf", url:"assets/exp/geu-cert.pdf" }
    ],
    links: [
      { label:"Organization Website", url:"https://www.geu.ac.in/" },
      { label:"View", url:"internship.jpeg" }
    ]
  },
//   {
//     key: "visit",
//     role: "SDE Intern",
//     org: "VISIT-UTTRAKHAND (visituttrakhand.in), Dehradun",
//     date: "01/04/2023 – 30/06/2023",
//     logo: "https://uttarakhandtourism.gov.in/sites/default/files/2022-10/uttarakhand-tourism-logo.png",
//     points: [
//       "Full-stack development (frontend + backend) for a travel website.",
//       "Built executive dashboards for travel package plans and overviews."
//     ],
//     tags: ["MERN","Dashboards","UX"],
//     media: [
//       { name: "Offer/Proof", type: "image", thumb: "assets/exp/visit-1.jpg", url: "assets/exp/visit-1.jpg" },
//       { name: "Certificate", type: "image", thumb: "assets/exp/visit-2.jpg", url: "assets/exp/visit-2.jpg" },
//     ],
//     links: [
//       { label:"Visit Uttarakhand", url:"https://www.visituttrakhand.in/" },
//       { label:"Internship Proof", url:"ADD_VISIT_PROOF_LINK" }
//     ]
//   }
 ];

// Education cards (logo + media)
const EDUCATION = [
  {
    key: "geu",
    degree: "B.Tech in Computer Science  ",
    inst: "Graphic Era Deemed to be University ",
    date: "2023 – Present",
    logo: "https://www.pngkit.com/png/detail/89-895805_iit-patna-logo-png.png",
    media: [
      { name: "ID Card / Proof", type: "image", thumb: "assets/edu/iitp-1.jpg", url: "assets/edu/iitp-1.jpg" },
      { name: "Recommendation", type: "image", thumb: "assets/edu/iitp-2.jpg", url: "assets/edu/iitp-2.jpg" },
    ]
  },
  {
    key: "Jammu",
    degree: "12th",
    inst: "Oriental Academy School",
    date: "2022 – 2023 • Percentage: 95.4%",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Graphic_Era_University_Logo.png/240px-Graphic_Era_University_Logo.png",
    media: [
      { name: "Degree/Marksheet", type: "image", thumb: "assets/edu/geu-1.jpg", url: "assets/edu/geu-1.jpg" },
      { name: "Recommendation", type: "image", thumb: "assets/edu/geu-2.jpg", url: "assets/edu/geu-2.jpg" },
    ]
  }
];

// Projects (6+) + 2 images + 2 links
const PROJECTS = [
  {
    title: "Voice-Enabled AI Disease Prediction",
    meta: "Python • ML • NLP • RAG ",
    desc: "Voice-based disease prediction with intelligent outputs and user-friendly workflow. Scalable architecture for deployment and future enhancements.",
    img1: "assets/NDRF.jpg",
    img2: "assets/NDRF.jpg",
    github: "ADD_GITHUB_LINK",
    live: "https://base-station-ndrf-1x99.vercel.app/"
  },
  {
    title: "Robotics Control Dashboard",
    meta: "HTML • CSS • JS",
    desc: "A web dashboard to control robot speed/direction with low-latency control and a clean UI for manual operation.",
    img1: "assets/projects/p2-1.jpg",
    img2: "assets/projects/p2-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Travel Executive Dashboard",
    meta: "MERN • Analytics",
    desc: "Full-stack dashboard for travel packages: planning views, management tools, and admin analytics for better operations.",
    img1: "assets/projects/p3-1.jpg",
    img2: "assets/projects/p3-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "AI Chat Assistant (Demo)",
    meta: "LLM • UI • API",
    desc: "A demo assistant interface for question answering, structured outputs, and knowledge-base style responses (backend extendable).",
    img1: "assets/projects/p4-1.jpg",
    img2: "assets/projects/p4-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Smart Safety Detection System",
    meta: "IoT • Sensors • AI",
    desc: "Home/industry safety system prototype with detection, alert logic, and monitoring dashboard concept.",
    img1: "assets/projects/p5-1.jpg",
    img2: "assets/projects/p5-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Portfolio 3D Website",
    meta: "Modern UI • 3D Glass",
    desc: "Premium 3D-glass portfolio with sections, animations, sliders, search, blogs, LinkedIn cards, and light/dark mode.",
    img1: "assets/projects/p6-1.jpg",
    img2: "assets/projects/p6-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  }
];


// =====================
// NEW: Fixed 9 projects grid (3 categories × 3 cards)
// NOTE: This is separate from the existing PROJECTS slider below.
// Edit titles, stacks, links, and images here.
// =====================
const PROJECT_GRID_9 = {
  cat1Title: "Projects",
  cat2Title: "",
  cat3Title: "",
  cat1: [
    { title:"Project 1", subtitle:"Fateh NDRF dashboard", stack:["AI","Python","NLP"], img:"assets/NDRF.png", link1:{label:"GitHub", url:"https://base-station-ndrf-1x99.vercel.app/"}, link2:{label:"Live", url:"https://base-station-ndrf-1x99.vercel.app/"} },
    { title:"Project 2", subtitle:"Trinetra Rag AI", stack:["FULL STACK","RAG"], img:"assets/rag.png", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"https://multimodel-rag-system.vercel.app/"} },
    { title:"Project 3", subtitle:"AI Resume Analyzer and comapany Recommendation System", stack:["Python","RAG"], img:"assets/resume.png", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"https://ai-resume-analyzer-and-company-reco-navy.vercel.app/"} },
  ],
  cat2: [
    { title:"Project 4", subtitle:"Monocular and Stereo Odometry", stack:["LLM","Tessereact"], img:"assets/visual.png", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Demo", url:"https://stereo-and-monocular-odometry.vercel.app/"} },
    { title:"Project 5", subtitle:"OCR based Recognition", stack:["ORB","CV","Numpy"], img:"assets/ocr.png", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"https://ocr-xdsy.vercel.app/"} },
    { title:"Project 6", subtitle:"Nexus Ecommerece Website", stack:["Node js","Mongo DB","Html5","Css3"], img:"assets/nexus.png", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"https://nexus-store-f7uu.vercel.app/"} },
  ],
  cat3: [

    { title:"Project 7", subtitle:"Green Heaven ", stack:["Node js","Mongo DB","Html5","Css3"], img:"assets/plant.png", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"https://new-plant.vercel.app/"} },
  ]
};

// =====================
// NEW: Certificates (6 cards) + slider rail
const CERTIFICATES = [
  { 
    title:"Certificate 1",
    subtitle:"Issuer • 2025",
    img:"assets/1.jpeg",
    link1:{label:"View", url:"assets/1.jpeg"},
   
  },

  { 
    title:"Certificate 2",
    subtitle:"Issuer • 2025",
    img:"assets/2.jpeg",
    link1:{label:"View", url:"assets/2.jpeg"},
   
  },
   { 
    title:"Certificate 3",
    subtitle:"Issuer • 2025",
    img:"assets/6.jpeg",
    link1:{label:"View", url:"assets/6.jpeg"},
   
  },
   { 
    title:"Certificate 4",
    subtitle:"Issuer • 2025",
    img:"assets/5.jpeg",
    link1:{label:"View", url:"assets/5.jpeg"},
    
  },

   { 
    title:"Certificate 5",
    subtitle:"Issuer • 2026",
    img:"assets/4.jpeg",
    link1:{label:"View", url:"assets/4.jpeg"},
  
  },
   { 
    title:"Certificate 6",
    subtitle:"Issuer • 2025",
    img:"assets/3.jpeg",
    link1:{label:"View", url:"assets/3.jpeg"},
  
  },

];

// // Slider items (optional separate highlights)
// const CERT_SLIDES = [
//   { title:"Highlighted Certificate", subtitle:"Short story / result", img:"assets/cert/s1.jpg", desc:"Write 2-4 lines about this certificate and why it matters." },
//   { title:"Another Highlight", subtitle:"Issuer • Year", img:"assets/cert/s2.jpg", desc:"Write 2-4 lines about this certificate and why it matters." },
// ];

// // =====================
// // NEW: Recommendations (images + LinkedIn)
// // =====================
// const RECOMMENDATIONS = [
//   { title:"Recommendation 1", from:"Name • Role • Company", text:"Paste recommendation text here (2-5 lines).", img:"assets/reco/r1.jpg", source:"LinkedIn" },
//   { title:"Recommendation 2", from:"Name • Role • Company", text:"Paste recommendation text here (2-5 lines).", img:"assets/reco/r2.jpg", source:"Image proof" },
//   { title:"Recommendation 3", from:"Name • Role • Company", text:"Paste recommendation text here (2-5 lines).", img:"assets/reco/r3.jpg", source:"LinkedIn" },
// ];


// NEW: Media slider (Projects ke baad)
// const MEDIA_SLIDES = [
//   {
//     img: "assets/media/m1.jpg",
//     title: "Conference / Talk",
//     subtitle: "Speaker / Guest Session",
//     desc: "Write 5–7 lines about this media moment. Explain context, your role, impact, audience, and key outcome. Add more details to make it strong and impressive."
//   },
//   {
//     img: "assets/media/m2.jpg",
//     title: "Hackathon Moment",
//     subtitle: "Team + Solution Demo",
//     desc: "Write 5–7 lines about your hackathon achievement, the problem statement, what you built, and why it mattered. Keep it story-like and professional."
//   },
//   {
//     img: "assets/media/m3.jpg",
//     title: "Lab / Robotics",
//     subtitle: "Automation & Experiments",
//     desc: "Write 5–7 lines describing the robotics/AI lab work, experiments, results, and learnings. Add measurable results if possible."
//   }
// ];

// // NEW: Video glimpse
// const VIDEO = {
//   src: "assets/video/glimpse.mp4" // put your mp4 file here
// };

// // // Publications / Patents / Books: (2 buttons + optional 2 images)
// const PUBLICATIONS = [
//   {
//     title: "Gas & Fire Detection Systems for Home/Industry",
//     subtitle: "CRC Press • 2023",
//     meta: "Publication",
//     desc: "This work focuses on design and implementation of detection mechanisms for safety monitoring, including alerts, architecture, and deployment notes.",
//     img1: "assets/pubs/pub1-1.jpg",
//     img2: "assets/pubs/pub1-2.jpg",
//     btn1: { label: "View Paper", url: "ADD_PUBLICATION_LINK" },
//     btn2: { label: "Publisher", url: "ADD_PUBLISHER_LINK" }
//   }
// ];

// const PATENTS = [
//   {
//     title: "202531085495 — Solar-electric marine vessel with dual turbine propulsion",
//     subtitle: "Filed/Published • 2025",
//     meta: "Patent",
//     desc: "Patent describing a marine vessel with energy efficiency and safety focus. Includes propulsion details and environmental safety aspects.",
//     img1: "assets/patents/p1-1.jpg",
//     img2: "assets/patents/p1-2.jpg",
//     btn1: { label: "View Patent", url: "ADD_PATENT_LINK" },
//     btn2: { label: "Patent Portal", url: "ADD_PATENT_PORTAL_LINK" }
//   }
// ];

// const BOOK_CHAPTERS = [
//   {
//     title: "Fuzzy & Hybrid Techniques for Brain Signal Understanding",
//     subtitle: "Book Chapter",
//     meta: "Book Chapter",
//     desc: "Discusses fuzzy/hybrid approaches for analyzing brain signals, improving interpretability, and optimizing classification pipelines.",
//     img1: "assets/books/c1-1.jpg",
//     img2: "assets/books/c1-2.jpg",
//     btn1: { label: "View Chapter", url: "ADD_CHAPTER_LINK" },
//     btn2: { label: "Publisher", url: "ADD_CHAPTER_PUBLISHER_LINK" }
//   }
// ];

// const EDITED_BOOKS = [
//   {
//     title: "AI for Drones in Smart Healthcare",
//     subtitle: "Edited Book (Proposal)",
//     meta: "Edited Book",
//     desc: "Edited book proposal with scope on drone-based healthcare monitoring, intelligent sensing, and future research directions.",
//     img1: "assets/books/e1-1.jpg",
//     img2: "assets/books/e1-2.jpg",
//     btn1: { label: "View Details", url: "ADD_BOOK_LINK" },
//     btn2: { label: "Publisher", url: "ADD_BOOK_PUBLISHER_LINK" }
//   }
// ];

// Achievements (9) — bigger card + 2 images + 2 links
const ACHIEVEMENTS = [
   { icon:"🏆", title:"Best Researcher Award", meta:"G20 Symposium • 2023", sub:"Robotics & Automation (Digital Agriculture)", desc:"Write 5–7 lines about this recognition: why you got it, what you delivered, impact, and audience. Keep it strong, measurable, and professional.", img1:"assets/ach/a1-1.jpg", img2:"assets/ach/a1-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Gallery", url:"ADD_LINK"} },
   { icon:"🎖️", title:"Top Performer Recognition", meta:"Academic / Research", sub:"Consistent results & contributions", desc:"Write 5–7 lines describing your performance recognition and what outcomes you achieved.", img1:"assets/ach/a2-1.jpg", img2:"assets/ach/a2-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Certificate", url:"ADD_LINK"} },
  { icon:"🥇", title:"Hackathon Winner", meta:"Tech Event", sub:"Solution impact & execution", desc:"Write 5–7 lines about hackathon: problem, your approach, role, and final result.", img1:"assets/ach/a3-1.jpg", img2:"assets/ach/a3-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Photos", url:"ADD_LINK"} },
  { icon:"📜", title:"Publication Milestone", meta:"Research Output", sub:"Peer-reviewed contribution", desc:"Write 5–7 lines: what you published, novelty, and why it matters.", img1:"assets/ach/a4-1.jpg", img2:"assets/ach/a4-2.jpg", btn1:{label:"View", url:"ADD_LINK"}, btn2:{label:"Index", url:"ADD_LINK"} },
  { icon:"🔬", title:"Research Collaboration", meta:"Interdisciplinary", sub:"Evaluation & reporting", desc:"Write 5–7 lines about collaboration and what you delivered.", img1:"assets/ach/a5-1.jpg", img2:"assets/ach/a5-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Docs", url:"ADD_LINK"} },
  { icon:"🤖", title:"Robotics Achievement", meta:"Automation", sub:"AI-based interaction workflow", desc:"Write 5–7 lines about robotics build, demos, and outcomes.", img1:"assets/ach/a6-1.jpg", img2:"assets/ach/a6-2.jpg", btn1:{label:"Video", url:"ADD_LINK"}, btn2:{label:"Proof", url:"ADD_LINK"} },
  { icon:"🌟", title:"Community Recognition", meta:"Mentoring / Outreach", sub:"Helping & guidance", desc:"Write 5–7 lines on mentoring/outreach impact.", img1:"assets/ach/a7-1.jpg", img2:"assets/ach/a7-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Photos", url:"ADD_LINK"} },
  { icon:"📈", title:"Growth Milestone", meta:"Professional", sub:"Skill + deliverables", desc:"Write 5–7 lines describing growth and results.", img1:"assets/ach/a8-1.jpg", img2:"assets/ach/a8-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Notes", url:"ADD_LINK"} },
  { icon:"🎓", title:"Certification Highlights", meta:"Upskilling", sub:"AI/Full-stack certifications", desc:"Write 5–7 lines about certification journey & outcomes.", img1:"assets/ach/a9-1.jpg", img2:"assets/ach/a9-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"All Certs", url:"ADD_LINK"} }
];


// OPTIONAL: external RSS feeds (CORS depends). Use a proxy like rss2json.
// Example: https://api.rss2json.com/v1/api.json?rss_url=YOUR_RSS
// const BLOG_FEEDS = [
  // { label: "My Medium", rss2json: "https://api.rss2json.com/v1/api.json?rss_url=YOUR_MEDIUM_RSS" }
// ];

// LinkedIn Posts (manual reliable)

// =====================
// Utilities
// =====================
function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function safeUrl(url){
  if (!url || String(url).startsWith("ADD_")) return "#";
  try { return new URL(url, window.location.href).href; }
  catch { return "#"; }
}
function safeText(s, fallback=""){
  const t = String(s ?? "").trim();
  return t || fallback;
}
function isPdf(url){
  return String(url || "").toLowerCase().endsWith(".pdf");
}

// =====================
// Navbar mobile toggle
// =====================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// =====================
// Scroll progress
// =====================
const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  if (progress) progress.style.width = `${scrolled}%`;
});

// =====================
// Theme toggle
// =====================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
function setTheme(mode){
  if (mode === "light") document.body.classList.add("light");
  else document.body.classList.remove("light");
  localStorage.setItem("theme", mode);
  if (themeIcon) themeIcon.innerHTML = mode === "light" ? `<svg class="themeSvg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>` : `<svg class="themeSvg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.6A8.5 8.5 0 0 1 11.4 3a6.8 6.8 0 1 0 9.6 9.6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;
}
setTheme(localStorage.getItem("theme") || "dark");
themeToggle?.addEventListener("click", () => {
  const current = document.body.classList.contains("light") ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
});
// =====================
// LANGUAGE (dropdown + simple i18n)
// NOTE: Pure dictionary-based (no API). Full control over wording.
// =====================
const LANGUAGES = [
  { key: "en", code: "EN", name: "English",   flag: "🇺🇸" },
  { key: "hi", code: "HI", name: "हिन्दी",     flag: "🇮🇳" },
  { key: "fr", code: "FR", name: "Français",  flag: "🇫🇷" },
  { key: "de", code: "DE", name: "Deutsch",   flag: "🇩🇪" },
  { key: "es", code: "ES", name: "Español",   flag: "🇪🇸" },
  { key: "ja", code: "JA", name: "日本語",    flag: "🇯🇵" },
  { key: "zh", code: "ZH", name: "中文",      flag: "🇨🇳" },
];

// Complete TEXT dictionary – सभी HTML के visible texts को कवर किया गया है
const TEXT = {
  en: {
    // Navigation (already good)
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_projects: "Projects",
    nav_cert: "Certificates",
    nav_reco: "Recommendations",
    nav_media: "Media",
    nav_glimpse: "Video Glimpse",
    nav_blogs: "Blogs",
    nav_linkedin: "LinkedIn",
    nav_publications: "Publications",
    nav_patents: "Patents",
    nav_bookchapter: "Book Chapter",
    nav_editedbook: "Edited Book",
    nav_achievements: "Recognition",
    nav_contact: "Contact",
foot_name: "Vansh Sharma",
foot_tag: "AI • Full-Stack • ML",
foot_note: "© {year} Vansh Sharma",
    // Hero
    hero_kicker: "AI • Full-Stack • Research",
    hero_title_1: "Building intelligent products + research work",
    hero_title_3: "3D-modern",
    hero_title_4: "experience.",
    hero_subtitle: "Results-oriented AI Software Developer with hands-on experience in intelligent & web-based applications. AI Specialist with strong research output (papers, patents, book work).",
    hero_profile_summary: "Profile Summary",
    hero_highlight: "Highlight",
    hero_now: "Now",

    btn_view_projects: "View Projects",
    btn_contact_me: "Contact Me",
    foot_name: "Vansh Sharma",
foot_tag: "AI • Full-Stack • ML",
foot_note: "© {year} Vansh Sharma",
foot_qr_badge: "📱 Connect Instantly",
foot_qr_title: "Scan QR Code",
foot_qr_desc: "Quickly access my portfolio, resume, projects, LinkedIn profile, and professional updates directly from your mobile device.",
foot_backtop: "↑ Back to top",
foot_quick: "Quick Links",
foot_privacy: "Privacy",
foot_terms: "Terms",
foot_sitemap: "Sitemap",
foot_schedule: "Schedule Meeting",
meet_name: "Your Name",
meet_email: "Your Email",
meet_when: "Preferred Date & Time",
meet_topic: "Topic",
meet_request: "Request",
foot_newsletter: "Newsletter",
news_email: "Email address",
news_subscribe: "Subscribe",
    btn_resume: "Download Resume",

hero_featured: "🏆 Academic Excellence • ₹1 Lakh Scholarship",
   
hero_featured_sub:
"Recognized for outstanding academic performance at Graphic Era University with a prestigious ₹1,00,000 per year merit scholarship — a testament to my dedication, top-tier scoring, and consistent excellence in Computer Science & Engineering. This 100% merit-based scholarship is awarded to only the top-performing students, reflecting my strong academic foundation, problem-solving abilities, and commitment to innovation. Fueled by this recognition, I continue to push boundaries in Artificial Intelligence, Full-Stack Development, and Research, building intelligent systems that create real-world impact while maintaining the highest standards of academic and professional excellence."
    // Section headings & sub-texts (already data-i18n)
    ,sec_about: "About",
    sec_about_sub: "What I do and what I’m focused on.",
    sec_skills: "Technical Expertise",
    sec_skills_sub: "Stack logos included.",
    sec_experience: "Work Experience",
  
    sec_education: "Education",
  
    sec_projects: "Projects",
    
    sec_certificates: "Certificates",
    
    sec_recommendations: "Recommendations",
  
    sec_media: "Media",
    
    sec_glimpse: "Video Glimpse",
    sec_glimpse_sub: "No text inside — video autoplay, muted, loop. Size CSS se adjust kar lena.",
    sec_blogs: "Blogs",
    
    sec_linkedin: "LinkedIn Posts",

    sec_publications: "Publications",
  
 
    sec_contact: "Contact",
    sec_contact_sub: "Let’s collaborate — AI, full-stack, robotics, research.",

    // Loader
    loader_text: "Loading…",
    loader_hint: "Tip: Change loader style in <b>style.css</b> (search: LOADER)",

    // About section hard-coded texts
    about_who_iam: "Who I am",
    about_quick_links: "Quick Links",
    

    // Skills hard-coded headings & notes
    skills_languages_core: "Languages & Core",
    skills_fullstack: "Full-Stack",
    skills_tools_platforms: "Tools & Platforms",
    skills_ai_ml: "AI / ML",
    skills_cloud_devops: "Cloud / DevOps",
    skills_research_tools: "Research / Tools",

  
    skills_note_mern: "MERN + modern UI.",
    skills_note_deploy: "Deployment-ready.",
    skills_note_ai: "12+ stacks supported (script.js)",
    skills_note_cloud: "Add your tools + platforms.",
    skills_note_research: "Paper writing + tooling.",

    // Certificates slider
    cert_more_title: "More certificates",
   

    // Contact section
    contact_send_message: "Send a Message",
    contact_form_hint: "Form sizing fixed + responsive.",
    contact_quick_info: "Quick Info",
    contact_reply_fast: "I reply fastest on email / LinkedIn.",
    contact_location: "Location",
    foot_qr_badge: "📱 Connect Instantly",
    contact_email: "Email",
    contact_phone: "Phone",
ach_badge: "🏆 Achievements",
ach_title: "Innovation • Leadership • Sports Excellence",
ach_desc: "Passionate about Artificial Intelligence, Robotics, Innovation, and Sports, I have consistently achieved excellence across technical and athletic domains. I am a 5-time Hackathon Winner and 1-time Ideathon Winner, recognized for developing impactful AI, automation, and robotics-based solutions for real-world challenges. Alongside technology, I am also a 4-time Gold Medalist in State and District level Netball championships and represented at the National level 5 times. These achievements reflect strong leadership, creativity, teamwork, dedication, and problem-solving abilities developed through continuous learning and competitive experiences.",
ach_hackathon: "Hackathon Winner",
ach_ideathon: "Ideathon Winner",
ach_gold: "Gold Medalist at State level and District level",
ach_national: "National Player",
    // Contact form placeholders & button
    form_name: "Your Name",
    form_email: "Your Email",
    form_subject: "Subject",
    form_message: "Your Message",
    form_send: "Send (demo)",
    
    form_backend_hint: "Connect EmailJS / backend later.",

    // Footer
    foot_name: "Vansh Sharma",
    foot_tag: "AI • Full-Stack • ML",
    foot_note: "© {year} Vansh Sharma. Built with a 3D-modern UI.",
    foot_quick: "Quick Links",
    foot_schedule: "Schedule Meeting",
    foot_schedule_hint: "Request a meeting (demo). You can connect Calendly/Google Calendar later.",
    foot_newsletter: "Newsletter",
    foot_news_hint: "Get updates about my work & research (demo).",
    foot_privacy: "Privacy",
    foot_terms: "Terms",
    foot_sitemap: "Sitemap",
    foot_backtop: "↑ Back to top",
    footerQrImg: "assets/vansh-1024.jpeg",
    right_badge: "🚀 Innovation Lab",
right_title: "AI • Robotics • Future Tech",
right_sub: "Creating intelligent AI assistants, robotics automation systems, real-time interactive platforms, and futuristic digital experiences powered by innovation, creativity, and modern technology.",
right_feature_1: "AI Automation",
right_feature_2: "Robotics Systems",
right_feature_3: "Full Stack Apps",


    meet_name: "Your Name",
    meet_email: "Your Email",
    meet_when: "Preferred Date & Time",
    meet_topic: "Topic (AI / Full-stack / ML)",
    meet_request: "Request (demo)",

    news_email: "Email address",
    news_subscribe: "Subscribe",
   
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_projects: "Projects",
    nav_cert: "Certificates",
    nav_achievements: "Recognition",
    nav_contact: "Contact",
    proj_cat1_title: "AI & ML Projects",
proj_cat2_title: "Web Development",
proj_cat3_title: "Robotics & IoT",

    hero_kicker: "AI • Full-Stack • Research",
    hero_title_1: "Building intelligent products + research work",
    hero_title_3: "3D-modern",
    hero_title_4: "experience.",
    hero_subtitle:
      "Results-oriented AI Software Developer with hands-on experience in intelligent & web-based applications.",

    btn_view_projects: "View Projects",
    btn_contact_me: "Contact Me",
    btn_resume: "Download Resume",

    sec_about: "About",
    sec_skills: "Technical Expertise",
    sec_experience: "Work Experience",
    sec_education: "Education",
    sec_projects: "Projects",
    sec_certificates: "Certificates",
    sec_contact: "Contact",

    contact_send_message: "Send a Message",

    form_name: "Your Name",
    form_email: "Your Email",
    form_subject: "Subject",
    form_message: "Your Message",
    form_send: "Send",
about_who_iam: "Who I am",
about_quick_links: "Quick Links",
about_focus_label: "Focus",
about_tools_label: "Tools",

    foot_backtop: "↑ Back to top",
    sec_contact: "Contact",
sec_contact_sub: "Let's collaborate on AI, full-stack & research projects.",
contact_send_message: "Send a Message",
contact_form_hint: "Fill the form below and I'll get back to you soon.",
form_name: "Your Name",
form_email: "Your Email",
form_subject: "Subject",
form_message: "Your Message",
form_send: "Send Message",
  },

  hi: {
    nav_about: "परिचय",
    nav_skills: "कौशल",
    nav_experience: "अनुभव",
    nav_education: "शिक्षा",
    nav_projects: "प्रोजेक्ट्स",
    nav_cert: "प्रमाणपत्र",
    nav_reco: "सिफारिशें",
    nav_media: "मीडिया",
    nav_glimpse: "वीडियो झलक",
    sec_contact: "संपर्क करें",
sec_contact_sub: "आइए AI, फुल-स्टैक और शोध परियोजनाओं पर सहयोग करें।",
contact_send_message: "संदेश भेजें",
contact_form_hint: "नीचे दिया गया फॉर्म भरें, मैं जल्द ही आपसे संपर्क करूंगा।",
form_name: "आपका नाम",
form_email: "आपका ईमेल",
form_subject: "विषय",
form_message: "आपका संदेश",
form_send: "संदेश भेजें",
    nav_blogs: "ब्लॉग",
    proj_cat1_title: "एआई और एमएल प्रोजेक्ट्स",
proj_cat2_title: "वेब डेवलपमेंट",
proj_cat3_title: "रोबोटिक्स और IoT",
    foot_name: "वंश शर्मा",
foot_tag: "AI • फुल-स्टैक • ML",
foot_note: "© {year} वंश शर्मा",
foot_qr_badge: "📱 तुरंत कनेक्ट करें",
foot_qr_badge: "📱 तुरंत कनेक्ट करें",
foot_qr_title: "QR कोड स्कैन करें",
foot_qr_desc: "अपने मोबाइल डिवाइस से सीधे मेरे पोर्टफोलियो, रिज्यूमे, प्रोजेक्ट्स, लिंक्डइन प्रोफाइल और पेशेवर अपडेट तक त्वरित पहुंच प्राप्त करें।",
foot_backtop: "↑ ऊपर जाएं",
foot_quick: "त्वरित लिंक",
foot_privacy: "गोपनीयता",
foot_terms: "शर्तें",
foot_sitemap: "साइटमैप",
foot_schedule: "मीटिंग शेड्यूल करें",
meet_name: "आपका नाम",
meet_email: "आपका ईमेल",
meet_when: "पसंदीदा तारीख और समय",
meet_topic: "विषय",
meet_request: "अनुरोध करें",
foot_newsletter: "न्यूज़लेटर",
news_email: "ईमेल पता",
news_subscribe: "सदस्यता लें",
    nav_linkedin: "लिंक्डइन",
    nav_publications: "प्रकाशन",
    nav_patents: "पेटेंट",
    nav_bookchapter: "पुस्तक अध्याय",
    nav_editedbook: "संपादित पुस्तक",
    nav_achievements: "मान्यता",
    nav_contact: "संपर्क",
    about_who_iam: "मैं कौन हूँ",
about_quick_links: "त्वरित लिंक",
about_focus_label: "फोकस",
about_tools_label: "उपकरण",
ach_badge: "🏆 उपलब्धियाँ",
ach_title: "नवाचार • नेतृत्व • खेल उत्कृष्टता",
ach_desc: "कृत्रिम बुद्धिमत्ता, रोबोटिक्स, नवाचार और खेलों के प्रति जुनूनी, मैंने तकनीकी और एथलेटिक क्षेत्रों में लगातार उत्कृष्टता हासिल की है। मैं 5 बार हैकाथॉन विजेता और 1 बार आइडियाथॉन विजेता हूं, जिसे वास्तविक दुनिया की चुनौतियों के लिए प्रभावशाली AI, ऑटोमेशन और रोबोटिक्स-आधारित समाधान विकसित करने के लिए मान्यता प्राप्त है। प्रौद्योगिकी के साथ-साथ, मैं राज्य और जिला स्तर की नेटबॉल चैंपियनशिप में 4 बार स्वर्ण पदक विजेता हूं और 5 बार राष्ट्रीय स्तर पर प्रतिनिधित्व किया है।",
ach_hackathon: "हैकाथॉन विजेता",
ach_ideathon: "आइडियाथॉन विजेता",
ach_gold: "राज्य और जिला स्तर पर स्वर्ण पदक विजेता",
ach_national: "राष्ट्रीय खिलाड़ी",
    
    // Buttons
btn_view_projects: "प्रोजेक्ट्स देखें",
btn_contact_me: "संपर्क करें",
btn_resume: "रिज़्यूमे डाउनलोड करें",


// Hero featured section
hero_featured: "प्रमुख हाइलाइट",
hero_featured_sub: "यहाँ बड़ा हीरो पोस्टर इमेज जोड़ें (कोड लिंक)",


    hero_kicker: "AI • फुल-स्टैक • रिसर्च",
    hero_title_1: "बुद्धिमान उत्पाद + शोध कार्य का निर्माण",
    hero_title_3: "3D-आधुनिक",
    hero_title_4: "अनुभव।",
    hero_subtitle: "परिणाम-उन्मुख AI सॉफ्टवेयर डेवलपर जिसके पास बुद्धिमान एवं वेब-आधारित एप्लिकेशनों में व्यावहारिक अनुभव है। मजबूत शोध उत्पादन वाला AI विशेषज्ञ (पेपर, पेटेंट, पुस्तक कार्य)।",
    hero_profile_summary: "प्रोफ़ाइल सारांश",
    hero_highlight: "हाइलाइट",
    hero_now: "अभी",
    right_badge: "🚀 इनोवेशन लैब",
right_title: "AI • रोबोटिक्स • फ्यूचर टेक",
right_sub: "अभिनव एआई सहायक, रोबोटिक्स ऑटोमेशन सिस्टम, रीयल-टाइम इंटरैक्टिव प्लेटफॉर्म और भविष्य के डिजिटल अनुभव बनाना, जो नवाचार, रचनात्मकता और आधुनिक तकनीक द्वारा संचालित हैं।",
right_feature_1: "AI ऑटोमेशन",
right_feature_2: "रोबोटिक्स सिस्टम",
right_feature_3: "फुल स्टैक ऐप्स",

    btn_view_projects: "प्रोजेक्ट्स देखें",
    btn_contact_me: "संपर्क करें",
    btn_resume: "रिज्यूमे डाउनलोड करें",

    sec_about: "परिचय",
    sec_about_sub: "मैं क्या करता हूँ और मेरा फोकस क्या है।",
    sec_skills: "तकनीकी विशेषज्ञता",
    sec_skills_sub: "स्टैक लोगो शामिल हैं।",
    sec_experience: "कार्य अनुभव",
    sec_experience_sub: "प्रत्येक कार्ड में 2 इमेज + प्रमाणपत्र PDF + 2 लिंक बटन (कोड से)।",
    sec_education: "शिक्षा",
    sec_education_sub: "लोगो + मीडिया स्लॉट कोड से।",
    sec_projects: "प्रोजेक्ट्स",
    sec_projects_sub: "6+ कार्ड + ऑटो-स्वैप स्लाइडर। प्रत्येक प्रोजेक्ट में 2 इमेज + 2 लिंक।",
    sec_certificates: "प्रमाणपत्र",
    sec_certificates_sub: "6 प्रमुख प्रमाणपत्र + स्लाइडर (प्रोजेक्ट्स से अलग डिज़ाइन)।",
    sec_recommendations: "सिफारिशें",
    sec_recommendations_sub: "बाहरी सिफारिश इमेज + लिंक्डइन सिफारिशें (script.js में जोड़ें/संपादित करें)।",
    sec_media: "मीडिया",
    sec_media_sub: "ऑटो स्लाइडर • होवर ज़ूम • शीर्षक/उपशीर्षक + 5–7 लाइनें (कोड से)।",
    sec_glimpse: "वीडियो झलक",
    sec_glimpse_sub: "अंदर कोई टेक्स्ट नहीं — वीडियो ऑटोप्ले, म्यूट, लूप। साइज़ CSS से एडजस्ट करें।",
    sec_blogs: "ब्लॉग",
    sec_blogs_sub: "स्थानीय ब्लॉग + वैकल्पिक बाहरी RSS फेच (कोड से)।",
    sec_linkedin: "लिंक्डइन पोस्ट",
    sec_linkedin_sub: "पिछले 4–5 पोस्ट कार्ड (मैनुअल लिंक या एम्बेड स्निपेट)।",
    sec_publications: "प्रकाशन",
    sec_publications_sub: "प्रत्येक आइटम: शीर्षक/उपशीर्षक/मेटा + 5 लाइनें + 2 बटन + 2 इमेज (वैकल्पिक)।",
    sec_patents: "पेटेंट",
    sec_patents_sub: "प्रत्येक आइटम: 2 बटन (देखें + पोर्टल) + वैकल्पिक इमेज।",
    sec_bookchapter: "पुस्तक अध्याय",
    sec_bookchapter_sub: "प्रत्येक आइटम में 2 बटन + विवरण + वैकल्पिक इमेज।",
    sec_editedbook: "संपादित पुस्तक",
    sec_editedbook_sub: "प्रत्येक आइटम में 2 बटन + विवरण + वैकल्पिक इमेज।",
    sec_achievements: "मान्यता एवं उपलब्धियाँ",
    sec_achievements_sub: "9 उपलब्धियाँ • बड़े प्रीमियम 3D कार्ड • प्रत्येक में 2 इमेज + 2 लिंक।",
    sec_contact: "संपर्क",
    sec_contact_sub: "आइए सहयोग करें — AI, फुल-स्टैक, रोबोटिक्स, रिसर्च।",

    loader_text: "लोड हो रहा है…",
    loader_hint: "टिप: <b>style.css</b> में लोडर स्टाइल बदलें (LOADER खोजें)",

    about_who_iam: "मैं कौन हूँ",
    about_quick_links: "त्वरित लिंक",
    about_links_muted: "सभी लिंक script.js से काम करते हैं",

    skills_languages_core: "भाषाएँ और कोर",
    skills_fullstack: "फुल-स्टैक",
    skills_tools_platforms: "टूल्स और प्लेटफॉर्म",
    skills_ai_ml: "AI / ML",
    skills_cloud_devops: "क्लाउड / DevOps",
    skills_research_tools: "शोध / टूल्स",

    skills_note_edit: "script.js में आइकॉन कभी भी बदलें",
    skills_note_mern: "MERN + आधुनिक UI।",
    skills_note_deploy: "डिप्लॉयमेंट के लिए तैयार।",
    skills_note_ai: "12+ स्टैक समर्थित (script.js)",
    skills_note_cloud: "अपने टूल्स + प्लेटफॉर्म जोड़ें।",
    skills_note_research: "पेपर लेखन + टूलिंग।",

    cert_more_title: "अधिक प्रमाणपत्र",
    cert_more_hint: "स्वचालित स्क्रॉल • script.js में अनुकूलित करें",

    contact_send_message: "संदेश भेजें",
    contact_form_hint: "फॉर्म साइज फिक्स्ड + रिस्पॉन्सिव।",
    contact_quick_info: "त्वरित जानकारी",
    contact_reply_fast: "मैं ईमेल / LinkedIn पर सबसे तेज़ जवाब देता हूँ।",
    contact_location: "स्थान",
    contact_email: "ईमेल",
    contact_phone: "फोन",
foot_name: "वंश शर्मा",
foot_tag: "एआई • फुल-स्टैक • एमएल",
foot_note: "© {year} वंश शर्मा",

    form_name: "आपका नाम",
    form_email: "आपका ईमेल",
    form_subject: "विषय",
    form_message: "आपका संदेश",
    form_send: "भेजें (डेमो)",
    form_backend_hint: "EmailJS / बैकएंड बाद में कनेक्ट करें।",

  

    meet_name: "आपका नाम",
    meet_email: "आपका ईमेल",
    meet_when: "पसंदीदा तारीख और समय",
    meet_topic: "विषय (AI / फुल-स्टैक / रिसर्च)",
    meet_request: "रिक्वेस्ट करें (डेमो)",

    news_email: "ईमेल पता",
    news_subscribe: "सब्सक्राइब करें",
    hero_featured_sub: "ग्राफिक एरा विश्वविद्यालय में उत्कृष्ट शैक्षणिक प्रदर्शन के लिए प्रतिष्ठित ₹1,00,000 प्रति वर्ष मेरिट छात्रवृत्ति से सम्मानित — यह मेरे समर्पण, शीर्ष अंक, और कंप्यूटर साइंस एंड इंजीनियरिंग में निरंतर उत्कृष्टता का प्रमाण है। यह 100% मेरिट-आधारित छात्रवृत्ति केवल शीर्ष प्रदर्शन करने वाले छात्रों को प्रदान की जाती है, जो मेरी मजबूत शैक्षणिक नींव, समस्या-समाधान क्षमताओं, और नवाचार के प्रति प्रतिबद्धता को दर्शाती है। इस मान्यता से प्रेरित होकर, मैं कृत्रिम बुद्धिमत्ता, फुल-स्टैक विकास, और अनुसंधान में नई सीमाओं को पार करना जारी रखता हूं, ऐसी बुद्धिमान प्रणालियाँ बना रहा हूं जो वास्तविक दुनिया पर प्रभाव डालती हैं और शैक्षणिक एवं व्यावसायिक उत्कृष्टता के उच्चतम मानकों को बनाए रखती हैं।",

    
  },

  fr: {
    // French translations (basic)
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_experience: "Expérience",
    nav_education: "Éducation",
    nav_projects: "Projets",
    nav_cert: "Certificats",
    proj_cat1_title: "Projets IA et ML",
proj_cat2_title: "Développement Web",
proj_cat3_title: "Robotique et IoT",
foot_name: "Vansh Sharma",
foot_tag: "IA • Full-Stack • ML",
foot_note: "© {year} Vansh Sharma",

    nav_reco: "Recommandations",
    nav_media: "Médias",
    nav_glimpse: "Aperçu vidéo",
    foot_name: "Vansh Sharma",
foot_tag: "IA • Full-Stack • ML",
foot_note: "© {year} Vansh Sharma",
foot_qr_badge: "📱 Connectez-vous instantanément",
foot_qr_badge: "📱 Connectez-vous instantanément",
foot_qr_title: "Scanner le code QR",
foot_qr_desc: "Accédez rapidement à mon portfolio, CV, projets, profil LinkedIn et mises à jour professionnelles directement depuis votre appareil mobile.",
foot_backtop: "↑ Retour en haut",
foot_quick: "Liens rapides",
foot_privacy: "Confidentialité",
foot_terms: "Conditions",
foot_sitemap: "Plan du site",
foot_schedule: "Planifier une réunion",
meet_name: "Votre nom",
meet_email: "Votre email",
meet_when: "Date et heure préférées",
meet_topic: "Sujet",
meet_request: "Demander",
foot_newsletter: "Newsletter",
news_email: "Adresse email",
news_subscribe: "S'abonner",

    sec_contact: "Contact",
sec_contact_sub: "Collaborons sur des projets d'IA, full-stack et de recherche.",
contact_send_message: "Envoyer un message",
contact_form_hint: "Remplissez le formulaire ci-dessous et je vous répondrai bientôt.",
form_name: "Votre nom",
form_email: "Votre email",
form_subject: "Sujet",
form_message: "Votre message",
form_send: "Envoyer",
    nav_blogs: "Blogs",
    nav_linkedin: "Publications LinkedIn",
    nav_publications: "Publications",
    ach_badge: "🏆 Réalisations",
ach_title: "Innovation • Leadership • Excellence Sportive",
ach_desc: "Passionné par l'intelligence artificielle, la robotique, l'innovation et les sports, j'ai constamment atteint l'excellence dans les domaines techniques et athlétiques. Je suis 5 fois gagnant de hackathon et 1 fois gagnant d'idéathon, reconnu pour le développement de solutions percutantes basées sur l'IA, l'automatisation et la robotique pour des défis du monde réel.",
ach_hackathon: "Gagnant de Hackathon",
ach_ideathon: "Gagnant d'Idéathon",
ach_gold: "Médaillé d'Or au niveau État et District",
ach_national: "Joueur National",

    nav_patents: "Brevets",
    nav_bookchapter: "Chapitre de livre",
    nav_editedbook: "Livre édité",
    about_who_iam: "Qui je suis",
about_quick_links: "Liens rapides",
about_focus_label: "Focalisation",
about_tools_label: "Outils",
    nav_achievements: "Reconnaissances",
    nav_contact: "Contact",
     hero_featured_sub:  "Reconnu pour mes performances académiques exceptionnelles à l'Université Graphic Era avec une prestigieuse bourse au mérite de ₹1,00,000 par an — un témoignage de mon dévouement, de mes résultats exceptionnels et de mon excellence constante en informatique et en ingénierie. Cette bourse au mérité à 100% n'est attribuée qu'aux étudiants les plus performants, reflétant ma solide base académique, mes capacités de résolution de problèmes et mon engagement envers l'innovation. Alimenté par cette reconnaissance, je continue de repousser les limites dans l'intelligence artificielle, le développement full-stack et la recherche, construisant des systèmes intelligents qui créent un impact réel tout en maintenant les plus hauts standards d'excellence académique et professionnelle.",
right_badge: "🚀 Laboratoire d'Innovation",
right_title: "IA • Robotique • Tech Futuriste",
right_sub: "Création d'assistants IA intelligents, de systèmes d'automatisation robotique, de plateformes interactives en temps réel et d'expériences numériques futuristes alimentées par l'innovation, la créativité et la technologie moderne.",
right_feature_1: "Automatisation IA",
right_feature_2: "Systèmes Robotiques",
right_feature_3: "Applications Full Stack",
    hero_kicker: "IA • Full-Stack • Recherche",
    hero_title_1: "Création de produits intelligents + travaux de recherche",
    hero_title_3: "3D-moderne",
    hero_title_4: "expérience.",
    hero_subtitle: "Développeur logiciel IA orienté résultats avec expérience pratique dans applications intelligentes et web.",
    hero_profile_summary: "Résumé du profil",
    hero_highlight: "Mise en avant",
    hero_now: "Maintenant",

    btn_view_projects: "Voir les projets",
    btn_contact_me: "Me contacter",
    btn_resume: "Télécharger le CV",

    sec_about: "À propos",
    sec_about_sub: "Ce que je fais et sur quoi je me concentre.",
    sec_skills: "Expertise technique",
    sec_skills_sub: "Logos de stack inclus.",
    sec_experience: "Expérience professionnelle",
    
    sec_education: "Éducation",
    sec_education_sub: "Logos + emplacements média depuis le code.",
    sec_projects: "Projets",
    sec_projects_sub: "6+ cartes + slider auto-swap.",
    sec_certificates: "Certificats",
    sec_certificates_sub: "6 certificats en vedette + slider.",
    sec_recommendations: "Recommandations",
    sec_recommendations_sub: "Images de recommandations externes + LinkedIn.",
    sec_media: "Médias",
    sec_media_sub: "Slider auto • zoom au survol.",
    sec_glimpse: "Aperçu vidéo",
    sec_glimpse_sub: "Pas de texte — vidéo autoplay, muet, boucle.",
    sec_blogs: "Blogs",
    sec_blogs_sub: "Blogs locaux + RSS externe optionnel.",
    sec_linkedin: "Publications LinkedIn",
    sec_linkedin_sub: "4–5 derniers posts en cartes.",
    sec_publications: "Publications",
    sec_publications_sub: "Chaque élément : titre + 5 lignes + 2 boutons.",
    sec_patents: "Brevets",
    sec_patents_sub: "2 boutons + images optionnelles.",
    sec_bookchapter: "Chapitre de livre",
    sec_bookchapter_sub: "2 boutons + description + images.",
    sec_editedbook: "Livre édité",
    sec_editedbook_sub: "2 boutons + description + images.",
    sec_achievements: "Reconnaissances & Réalisations",
    sec_achievements_sub: "9 reconnaissances • grandes cartes 3D.",
    sec_contact: "Contact",
    sec_contact_sub: "Collaborons — IA, full-stack, robotique, recherche.",

    loader_text: "Chargement…",
    loader_hint: "Astuce : Changez le style du loader dans <b>style.css</b>",

    about_who_iam: "Qui je suis",
    about_quick_links: "Liens rapides",
    about_links_muted: "Tous les liens fonctionnent depuis script.js",

    skills_languages_core: "Langages & Core",
    skills_fullstack: "Full-Stack",
    skills_tools_platforms: "Outils & Plateformes",
    skills_ai_ml: "IA / ML",
    skills_cloud_devops: "Cloud / DevOps",
    skills_research_tools: "Recherche / Outils",

    skills_note_edit: "Modifiez les icônes dans script.js",
    skills_note_mern: "MERN + interface moderne.",
    skills_note_deploy: "Prêt au déploiement.",
    skills_note_ai: "12+ stacks supportés (script.js)",
    skills_note_cloud: "Ajoutez vos outils + plateformes.",
    skills_note_research: "Rédaction de papiers + outils.",

    cert_more_title: "Plus de certificats",
    cert_more_hint: "Défilement auto • personnaliser dans script.js",

    contact_send_message: "Envoyer un message",
    contact_form_hint: "Formulaire taille fixe + responsive.",
    contact_quick_info: "Infos rapides",
    contact_reply_fast: "Je réponds le plus vite par email / LinkedIn.",
    contact_location: "Localisation",
    contact_email: "Email",
    contact_phone: "Téléphone",

    form_name: "Votre nom",
    form_email: "Votre email",
    form_subject: "Sujet",
    form_message: "Votre message",
    form_send: "Envoyer (démo)",
    form_backend_hint: "Connectez EmailJS / backend plus tard.",


    meet_name: "Votre nom",
    meet_email: "Votre email",
    meet_when: "Date et heure préférées",
    meet_topic: "Sujet (IA / Full-stack / Recherche)",
    meet_request: "Demander (démo)",

    news_email: "Adresse email",
    news_subscribe: "S'abonner"
  },
  

  de: {
  nav_about: "Über mich",
  nav_skills: "Fähigkeiten",
  nav_experience: "Erfahrung",
  nav_education: "Ausbildung",
  nav_projects: "Projekte",
  nav_cert: "Zertifikate",
  foot_qr_badge: "📱 Sofort verbinden",
  about_who_iam: "Wer ich bin",
  foot_name: "Vansh Sharma",
  proj_cat1_title: "KI und ML Projekte",
proj_cat2_title: "Webentwicklung",
proj_cat3_title: "Robotik und IoT",
foot_tag: "KI • Full-Stack • ML",
foot_note: "© {year} Vansh Sharma",
foot_qr_badge: "📱 Sofort verbinden",
foot_name: "Vansh Sharma",
foot_tag: "KI • Full-Stack • ML",
foot_note: "© {year} Vansh Sharma",
foot_qr_title: "QR-Code scannen",
foot_qr_desc: "Greifen Sie schnell auf mein Portfolio, meinen Lebenslauf, Projekte, mein LinkedIn-Profil und berufliche Updates direkt von Ihrem mobilen Gerät zu.",
foot_backtop: "↑ Nach oben",
foot_quick: "Schnellzugriff",
foot_privacy: "Datenschutz",
foot_terms: "AGB",
foot_sitemap: "Sitemap",
foot_schedule: "Meeting vereinbaren",
meet_name: "Ihr Name",
meet_email: "Ihre E-Mail",
meet_when: "Bevorzugtes Datum & Uhrzeit",
meet_topic: "Thema",
meet_request: "Anfragen",
foot_newsletter: "Newsletter",
news_email: "E-Mail-Adresse",
news_subscribe: "Abonnieren",

about_quick_links: "Schnellzugriff",
about_focus_label: "Fokus",
about_tools_label: "Werkzeuge",
sec_contact: "Kontakt",
sec_contact_sub: "Lassen Sie uns an KI-, Full-Stack- und Forschungsprojekten zusammenarbeiten.",
contact_send_message: "Nachricht senden",
contact_form_hint: "Füllen Sie das folgende Formular aus und ich werde mich bald bei Ihnen melden.",
form_name: "Ihr Name",
form_email: "Ihre E-Mail",
form_subject: "Betreff",
form_message: "Ihre Nachricht",
form_send: "Senden",
  nav_reco: "Empfehlungen",
  nav_media: "Medien",
  ach_badge: "🏆 Errungenschaften",
ach_title: "Innovation • Führung • Sportliche Exzellenz",
ach_desc: "Leidenschaftlich für künstliche Intelligenz, Robotik, Innovation und Sport habe ich in technischen und sportlichen Bereichen konsequent Exzellenz erreicht. Ich bin 5-facher Hackathon-Sieger und 1-facher Ideathon-Sieger.",
ach_hackathon: "Hackathon-Sieger",
ach_ideathon: "Ideathon-Sieger",
ach_gold: "Goldmedaillengewinner auf Staats- und Bezirksebene",
ach_national: "Nationalspieler",
  nav_glimpse: "Video-Einblick",
  hero_featured: "Hervorgehobenes Highlight",
hero_featured_sub: "Fügen Sie hier ein großes Hero-Posterbild hinzu (Code-Link)",
  hero_featured_sub: "Anerkannt für herausragende akademische Leistungen an der Graphic Era University mit einem prestigeträchtigen ₹1,00,000 pro Jahr Leistungsstipendium — ein Zeugnis meines Einsatzes, meiner Spitzenleistungen und meiner konsequenten Exzellenz in Informatik und Ingenieurwesen. Dieses 100%ige leistungsbasierte Stipendium wird nur den besten Studenten verliehen und spiegelt meine starke akademische Grundlage, meine Problemlösungsfähigkeiten und mein Engagement für Innovation wider. Durch diese Anerkennung angetrieben, verschiebe ich weiterhin Grenzen in den Bereichen künstliche Intelligenz, Full-Stack-Entwicklung und Forschung und baue intelligente Systeme auf, die reale Auswirkungen haben und dabei die höchsten Standards akademischer und beruflicher Exzellenz aufrechterhalten.",
right_badge: "🚀 Innovationslabor",
right_title: "KI • Robotik • Zukunftstechnologie",
right_sub: "Entwicklung intelligenter KI-Assistenten, Robotik-Automatisierungssysteme, Echtzeit-Interaktionsplattformen und futuristischer digitaler Erlebnisse, angetrieben durch Innovation, Kreativität und moderne Technologie.",
right_feature_1: "KI-Automatisierung",
right_feature_2: "Robotiksysteme",
right_feature_3: "Full-Stack-Apps",
  nav_blogs: "Blogs",
  nav_linkedin: "LinkedIn",
  nav_publications: "Publikationen",
  nav_patents: "Patente",
  nav_bookchapter: "Buchkapitel",
  nav_editedbook: "Herausgegebenes Buch",
  nav_achievements: "Anerkennung",
  nav_contact: "Kontakt",

  hero_kicker: "KI • Full-Stack • Forschung",
  hero_title_1: "Intelligente Produkte & Forschungsarbeit",
  hero_title_3: "3D-modern",
  hero_title_4: "Erlebnis.",
  hero_subtitle:
    "Ergebnisorientierter KI-Softwareentwickler mit praktischer Erfahrung in intelligenten und webbasierten Anwendungen.",
  hero_profile_summary: "Profilübersicht",
  hero_highlight: "Highlight",
  hero_now: "Jetzt",

  btn_view_projects: "Projekte ansehen",
  btn_contact_me: "Kontakt aufnehmen",
  btn_resume: "Lebenslauf herunterladen",

  sec_about: "Über mich",
  sec_about_sub: "Was ich mache und worauf ich mich konzentriere.",
  sec_skills: "Technische Expertise",
  sec_skills_sub: "Stack-Logos enthalten.",
  sec_experience: "Berufserfahrung",
  sec_experience_sub: "Detaillierte Arbeitserfahrung.",
  sec_education: "Ausbildung",
  sec_education_sub: "Akademischer Hintergrund.",
  sec_projects: "Projekte",
  sec_projects_sub: "Ausgewählte technische Projekte.",
  sec_certificates: "Zertifikate",
  sec_certificates_sub: "Berufliche Zertifizierungen.",
  sec_recommendations: "Empfehlungen",
  sec_recommendations_sub: "Feedback von Kollegen.",
  sec_media: "Medien",
  sec_media_sub: "Interviews, Vorträge & Highlights.",
  sec_glimpse: "Video-Einblick",
  sec_glimpse_sub: "Kurze visuelle Einführung.",
  sec_blogs: "Blogs",
  sec_blogs_sub: "Gedanken & technische Artikel.",
  sec_linkedin: "LinkedIn-Beiträge",
  sec_linkedin_sub: "Neueste berufliche Updates.",
  sec_publications: "Publikationen",
  sec_publications_sub: "Forschungsveröffentlichungen.",
  sec_patents: "Patente",
  sec_patents_sub: "Eingereichte & erteilte Patente.",
  sec_bookchapter: "Buchkapitel",
  sec_bookchapter_sub: "Veröffentlichte Buchkapitel.",
  sec_editedbook: "Herausgegebenes Buch",
  sec_editedbook_sub: "Von mir herausgegebene Bücher.",
  sec_achievements: "Anerkennungen & Erfolge",
  sec_achievements_sub: "Auszeichnungen & Ehrungen.",
  sec_contact: "Kontakt",
  sec_contact_sub: "Lass uns zusammenarbeiten.",

  loader_text: "Lädt…",

  about_who_iam: "Wer ich bin",
  about_quick_links: "Schnellzugriff",

  skills_languages_core: "Sprachen & Grundlagen",
  skills_fullstack: "Full-Stack",
  skills_tools_platforms: "Tools & Plattformen",
  skills_ai_ml: "KI / ML",
  skills_cloud_devops: "Cloud / DevOps",
  skills_research_tools: "Forschung / Tools",

  contact_send_message: "Nachricht senden",

  form_name: "Ihr Name",
  form_email: "Ihre E-Mail",
  form_subject: "Betreff",
  form_message: "Nachricht",
  form_send: "Senden",

  foot_backtop: "↑ Nach oben"
},
es: {
  nav_about: "Sobre mí",
  nav_skills: "Habilidades",
  nav_experience: "Experiencia",
  nav_education: "Educación",
  about_who_iam: "Quién soy",
  foot_qr_badge: "📱 Conéctate al instante",
about_quick_links: "Enlaces rápidos",
sec_contact: "Contacto",
sec_contact_sub: "Colaboremos en proyectos de IA, full-stack e investigación.",
contact_send_message: "Enviar mensaje",
contact_form_hint: "Complete el siguiente formulario y me comunicaré con usted pronto.",
form_name: "Tu nombre",
proj_cat1_title: "Proyectos de IA y ML",
proj_cat2_title: "Desarrollo Web",
proj_cat3_title: "Robótica e IoT",
foot_name: "Vansh Sharma",
foot_tag: "IA • Full-Stack • ML",
foot_note: "© {year} Vansh Sharma",
foot_qr_badge: "📱 Conéctate al instante",
foot_qr_title: "Escanear código QR",
foot_qr_desc: "Acceda rápidamente a mi portafolio, currículum, proyectos, perfil de LinkedIn y actualizaciones profesionales directamente desde su dispositivo móvil.",
foot_backtop: "↑ Volver arriba",
foot_quick: "Enlaces rápidos",
foot_privacy: "Privacidad",
foot_terms: "Términos",
foot_sitemap: "Mapa del sitio",
foot_schedule: "Programar reunión",
meet_name: "Tu nombre",
meet_email: "Tu correo",
meet_when: "Fecha y hora preferida",
meet_topic: "Tema",
meet_request: "Solicitar",
foot_newsletter: "Boletín",
news_email: "Correo electrónico",
news_subscribe: "Suscribirse",
form_email: "Tu correo electrónico",
form_subject: "Asunto",
form_message: "Tu mensaje",
form_send: "Enviar",
about_focus_label: "Enfoque",
about_tools_label: "Herramientas",
ach_badge: "🏆 Logros",
ach_title: "Innovación • Liderazgo • Excelencia Deportiva",
ach_desc: "Apasionado por la Inteligencia Artificial, Robótica, Innovación y Deportes, he logrado consistentemente la excelencia en los dominios técnico y atlético. Soy 5 veces ganador de Hackathon y 1 vez ganador de Ideathon.",
ach_hackathon: "Ganador de Hackathon",
ach_ideathon: "Ganador de Ideathon",
ach_gold: "Medallista de Oro a nivel Estatal y Distrital",
ach_national: "Jugador Nacional",

  hero_featured: "Destacado",
hero_featured_sub: "Reconocido por su excepcional rendimiento académico en la Universidad Graphic Era con una prestigiosa beca al mérito de ₹1,00,000 por año — un testimonio de mi dedicación, puntuaciones sobresalientes y excelencia constante en Ciencias de la Computación e Ingeniería. Esta beca basada en méritos del 100% se otorga solo a los estudiantes con mejor rendimiento, lo que refleja mi sólida base académica, habilidades para resolver problemas y compromiso con la innovación. Impulsado por este reconocimiento, continúo superando límites en Inteligencia Artificial, Desarrollo Full-Stack e Investigación, construyendo sistemas inteligentes que crean un impacto en el mundo real mientras mantengo los más altos estándares de excelencia académica y profesional.",
right_badge: "🚀 Laboratorio de Innovación",
right_title: "IA • Robótica • Tecnología Futura",
right_sub: "Creación de asistentes de IA inteligentes, sistemas de automatización robótica, plataformas interactivas en tiempo real y experiencias digitales futuristas impulsadas por la innovación, la creatividad y la tecnología moderna.",
right_feature_1: "Automatización IA",
right_feature_2: "Sistemas Robóticos",
right_feature_3: "Aplicaciones Full Stack",

  nav_projects: "Proyectos",
  nav_cert: "Certificados",
  nav_reco: "Recomendaciones",
  nav_media: "Medios",
  nav_glimpse: "Vista previa",
  nav_blogs: "Blogs",
  nav_linkedin: "LinkedIn",
  nav_publications: "Publicaciones",
  nav_patents: "Patentes",
  nav_bookchapter: "Capítulo de libro",
  nav_editedbook: "Libro editado",
  nav_achievements: "Reconocimientos",
  nav_contact: "Contacto",

  hero_kicker: "IA • Full-Stack • Investigación",
  hero_title_1: "Productos inteligentes y trabajo de investigación",
  hero_title_3: "3D-moderno",
  hero_title_4: "experiencia.",
  hero_subtitle:
    "Desarrollador de software de IA orientado a resultados con experiencia práctica en aplicaciones inteligentes y web.",
  hero_profile_summary: "Resumen del perfil",
  hero_highlight: "Destacado",
  hero_now: "Ahora",

  btn_view_projects: "Ver proyectos",
  btn_contact_me: "Contáctame",
  btn_resume: "Descargar CV",

  sec_about: "Sobre mí",
  sec_about_sub: "Qué hago y en qué me enfoco.",
  sec_skills: "Experiencia técnica",
  sec_skills_sub: "Logos de stacks incluidos.",
  sec_experience: "Experiencia laboral",
  sec_experience_sub: "Experiencia profesional detallada.",
  sec_education: "Educación",
  sec_education_sub: "Formación académica.",
  sec_projects: "Proyectos",
  sec_projects_sub: "Proyectos técnicos destacados.",
  sec_certificates: "Certificados",
  sec_certificates_sub: "Certificaciones profesionales.",
  sec_recommendations: "Recomendaciones",
  sec_recommendations_sub: "Opiniones de colegas.",
  sec_media: "Medios",
  sec_media_sub: "Charlas, entrevistas y logros.",
  sec_glimpse: "Vista previa",
  sec_glimpse_sub: "Introducción visual breve.",
  sec_blogs: "Blogs",
  sec_blogs_sub: "Pensamientos y artículos técnicos.",
  sec_linkedin: "Publicaciones de LinkedIn",
  sec_linkedin_sub: "Últimas actualizaciones profesionales.",
  sec_publications: "Publicaciones",
  sec_publications_sub: "Publicaciones de investigación.",
  sec_patents: "Patentes",
  sec_patents_sub: "Patentes registradas y otorgadas.",
  sec_bookchapter: "Capítulo de libro",
  sec_bookchapter_sub: "Capítulos de libros publicados.",
  sec_editedbook: "Libro editado",
  sec_editedbook_sub: "Libros editados por mí.",
  sec_achievements: "Reconocimientos y logros",
  sec_achievements_sub: "Premios y honores.",
  sec_contact: "Contacto",
  sec_contact_sub: "Colaboremos.",

  loader_text: "Cargando…",

  about_who_iam: "Quién soy",
  about_quick_links: "Enlaces rápidos",

  skills_languages_core: "Lenguajes y fundamentos",
  skills_fullstack: "Full-Stack",
  skills_tools_platforms: "Herramientas y plataformas",
  skills_ai_ml: "IA / ML",
  skills_cloud_devops: "Cloud / DevOps",
  skills_research_tools: "Investigación / Herramientas",

  contact_send_message: "Enviar mensaje",

  form_name: "Tu nombre",
  form_email: "Tu correo",
  form_subject: "Asunto",
  form_message: "Mensaje",
  form_send: "Enviar",

  foot_backtop: "↑ Volver arriba"
},
ja: {
  nav_about: "概要",
  about_who_iam: "私について",
about_quick_links: "クイックリンク",
about_focus_label: "フォーカス",
proj_cat1_title: "AI・MLプロジェクト",
proj_cat2_title: "ウェブ開発",
proj_cat3_title: "ロボティクスとIoT",
about_tools_label: "ツール",
  nav_skills: "スキル",
  ach_badge: "🏆 実績",
ach_title: "イノベーション • リーダーシップ • スポーツ優秀性",
ach_desc: "人工知能、ロボット工学、イノベーション、スポーツに情熱を持ち、技術分野と運動分野の両方で一貫して優秀な成果を達成してきました。5回のハッカソン優勝と1回のアイデアソン優勝を果たしています。",
ach_hackathon: "ハッカソン優勝",
ach_ideathon: "アイデアソン優勝",
foot_qr_badge: "📱 即座に接続",
ach_gold: "州および地区レベルで金メダリスト",
foot_name: "ヴァンシュ・シャルマ",
foot_tag: "AI • フルスタック • ML",
foot_note: "© {year} ヴァンシュ・シャルマ",
foot_qr_badge: "📱 即座に接続",
foot_qr_title: "QRコードをスキャン",
foot_qr_desc: "モバイルデバイスから直接、私のポートフォリオ、履歴書、プロジェクト、LinkedInプロフィール、専門的な更新情報にすばやくアクセスできます。",
foot_backtop: "↑ トップへ戻る",
foot_quick: "クイックリンク",
foot_privacy: "プライバシー",
foot_terms: "利用規約",
foot_sitemap: "サイトマップ",
foot_schedule: "ミーティングを予約",
meet_name: "お名前",
meet_email: "メールアドレス",
meet_when: "希望日時",
meet_topic: "トピック",
meet_request: "リクエスト",
foot_newsletter: "ニュースレター",
news_email: "メールアドレス",
news_subscribe: "登録",
ach_national: "ナショナルプレーヤー",

  nav_experience: "経験",
  sec_contact: "お問い合わせ",
sec_contact_sub: "AI、フルスタック、研究プロジェクトで協力しましょう。",
contact_send_message: "メッセージを送信",
contact_form_hint: "以下のフォームにご記入ください。すぐにご連絡いたします。",
form_name: "お名前",
form_email: "メールアドレス",
form_subject: "件名",
form_message: "メッセージ",
form_send: "送信",

  hero_featured: "注目のハイライト",
hero_featured_sub: "グラフィックエラ大学での優秀な学業成績が認められ、年間 ₹1,00,000 の名誉ある成績奨学金を授与されました — これは私の献身、トップレベルの成績、そしてコンピュータサイエンスと工学における一貫した優秀さの証です。この100％成績ベースの奨学金は、トップパフォーマーの学生のみに授与され、私の強固な学問的基盤、問題解決能力、そしてイノベーションへの取り組みを反映しています。この認識に触発されて、私は人工知能、フルスタック開発、研究の限界を押し広げ、学問的および専門的優秀さの最高基準を維持しながら、現実世界に影響を与える知的システムを構築し続けています。",
right_badge: "🚀 イノベーションラボ",
right_title: "AI • ロボット工学 • 未来技術",
right_sub: "革新的なAIアシスタント、ロボット自動化システム、リアルタイムインタラクティブプラットフォーム、そしてイノベーション、創造性、最新技術を活用した未来的なデジタル体験を創造します。",
right_feature_1: "AI自動化",
right_feature_2: "ロボットシステム",
right_feature_3: "フルスタックアプリ",
  nav_education: "学歴",
  nav_projects: "プロジェクト",
  nav_cert: "認定証",
  nav_reco: "推薦",
  nav_media: "メディア",
  nav_glimpse: "ビデオ紹介",
  nav_blogs: "ブログ",
  nav_linkedin: "LinkedIn",
  nav_publications: "出版物",
  nav_patents: "特許",
  nav_bookchapter: "書籍章",
  nav_editedbook: "編集書籍",
  nav_achievements: "実績",
  nav_contact: "連絡先",

  hero_kicker: "AI • フルスタック • 研究",
  hero_title_1: "知的プロダクトと研究活動",
  hero_title_3: "3Dモダン",
  hero_title_4: "体験。",
  hero_subtitle:
    "知的およびWebベースのアプリケーションに実務経験を持つ成果志向のAIソフトウェア開発者。",
  hero_profile_summary: "プロフィール概要",
  hero_highlight: "ハイライト",
  hero_now: "現在",

  btn_view_projects: "プロジェクトを見る",
  btn_contact_me: "連絡する",
  btn_resume: "履歴書をダウンロード",

  sec_about: "概要",
  sec_about_sub: "私の活動内容と注力分野。",
  sec_skills: "技術的専門知識",
  sec_skills_sub: "スタックロゴ付き。",
  sec_experience: "職務経験",
  sec_experience_sub: "詳細な職務経験。",
  sec_education: "学歴",
  sec_education_sub: "学術的背景。",
  sec_projects: "プロジェクト",
  sec_projects_sub: "注目の技術プロジェクト。",
  sec_certificates: "認定証",
  sec_certificates_sub: "専門資格。",
  sec_recommendations: "推薦",
  sec_recommendations_sub: "同僚からの評価。",
  sec_media: "メディア",
  sec_media_sub: "講演、インタビュー、実績。",
  sec_glimpse: "ビデオ紹介",
  sec_glimpse_sub: "短いビジュアル紹介。",
  sec_blogs: "ブログ",
  sec_blogs_sub: "考察と技術記事。",
  sec_linkedin: "LinkedIn投稿",
  sec_linkedin_sub: "最新の活動。",
  sec_publications: "出版物",
  sec_publications_sub: "研究出版物。",
  sec_patents: "特許",
  sec_patents_sub: "申請・取得済み特許。",
  sec_bookchapter: "書籍章",
  sec_bookchapter_sub: "出版された書籍章。",
  sec_editedbook: "編集書籍",
  sec_editedbook_sub: "編集した書籍。",
  // Japanese (ja)
foot_name: "ヴァンシュ・シャルマ",
foot_tag: "AI • フルスタック • ML",
foot_note: "© {year} ヴァンシュ・シャルマ",

  sec_achievements: "実績と表彰",
  sec_achievements_sub: "受賞歴と功績。",
  sec_contact: "連絡先",
  sec_contact_sub: "一緒に協力しましょう。",

  loader_text: "読み込み中…",

  about_who_iam: "私について",
  about_quick_links: "クイックリンク",

  skills_languages_core: "言語と基礎",
  skills_fullstack: "フルスタック",
  skills_tools_platforms: "ツールとプラットフォーム",
  skills_ai_ml: "AI / ML",
  skills_cloud_devops: "クラウド / DevOps",
  skills_research_tools: "研究 / ツール",

  contact_send_message: "メッセージを送信",

  form_name: "お名前",
  form_email: "メール",
  form_subject: "件名",
  form_message: "メッセージ",
  form_send: "送信",

  foot_backtop: "↑ トップへ戻る"
},
zh: {
  nav_about: "关于我",
  nav_skills: "技能",
  nav_experience: "经验",
  nav_education: "教育",
  nav_projects: "项目",
  hero_featured: "精选亮点",
  about_who_iam: "关于我",
about_quick_links: "快速链接",
about_focus_label: "专注领域",
foot_qr_badge: "📱 立即连接",
about_tools_label: "工具",
hero_featured_sub: "因在图形时代大学的杰出学术表现而获得著名的每年₹1,00,000功绩奖学金 — 这证明了我的奉献精神、顶尖成绩以及计算机科学与工程领域的持续卓越。这项100%基于功绩的奖学金仅授予表现最优秀的学生，反映了我扎实的学术基础、解决问题的能力以及对创新的承诺。在这项认可的推动下，我继续在人工智能、全栈开发和研究中突破界限，构建能够创造真实世界影响的智能系统，同时保持学术和专业卓越的最高标准。"
,
right_badge: "🚀 创新实验室",
right_title: "人工智能 • 机器人 • 未来科技",
right_sub: "创建智能AI助手、机器人自动化系统、实时交互平台以及由创新、创造力和现代技术驱动的未来数字体验。",
right_feature_1: "AI自动化",
right_feature_2: "机器人系统",
right_feature_3: "全栈应用",
  nav_cert: "证书",
  proj_cat1_title: "人工智能和机器学习项目",
proj_cat2_title: "网页开发",
proj_cat3_title: "机器人与物联网",
  nav_reco: "推荐",
  nav_media: "媒体",
  nav_glimpse: "视频简介",
  nav_blogs: "博客",
  nav_linkedin: "领英",
  nav_publications: "出版物",
  nav_patents: "专利",
  nav_bookchapter: "书籍章节",
  nav_editedbook: "编辑书籍",
  nav_achievements: "成就",
  nav_contact: "联系",

  hero_kicker: "人工智能 • 全栈 • 研究",
  hero_title_1: "智能产品与研究工作",
  hero_title_3: "3D现代",
  hero_title_4: "体验。",
  hero_subtitle:
    "以结果为导向的AI软件开发人员，拥有智能和Web应用的实践经验。",
  hero_profile_summary: "个人简介",
  hero_highlight: "亮点",
  foot_name: "万什·夏尔马",
foot_tag: "人工智能 • 全栈 • 机器学习",
foot_note: "© {year} 万什·夏尔马",
foot_qr_badge: "📱 立即连接",
foot_qr_title: "扫描二维码",
foot_qr_desc: "直接从您的移动设备快速访问我的作品集、简历、项目、领英个人资料和专业更新。",
foot_backtop: "↑ 返回顶部",
foot_quick: "快速链接",
foot_privacy: "隐私政策",
foot_terms: "服务条款",
foot_sitemap: "网站地图",
foot_schedule: "安排会议",
meet_name: "您的姓名",
meet_email: "您的邮箱",
meet_when: "首选日期和时间",
meet_topic: "主题",
meet_request: "请求",
foot_newsletter: "新闻通讯",
news_email: "邮箱地址",
news_subscribe: "订阅",
  hero_now: "现在",

  btn_view_projects: "查看项目",
  btn_contact_me: "联系我",
  btn_resume: "下载简历",

  sec_about: "关于我",
  sec_about_sub: "我的工作内容和专注方向。",
  sec_skills: "技术专长",
  sec_skills_sub: "包含技术栈图标。",
  sec_experience: "工作经验",
  sec_experience_sub: "详细的职业经验。",
  sec_education: "教育背景",
  sec_education_sub: "学术背景。",
  sec_projects: "项目",
  sec_projects_sub: "重点技术项目。",
  sec_certificates: "证书",
  sec_certificates_sub: "专业认证。",
  sec_recommendations: "推荐",
  sec_recommendations_sub: "同事评价。",
  sec_media: "媒体",
  sec_media_sub: "演讲、采访和亮点。",
  sec_glimpse: "视频简介",
  sec_glimpse_sub: "简短视觉介绍。",
  sec_blogs: "博客",
  sec_blogs_sub: "技术文章与思考。",
  sec_linkedin: "领英动态",
  sec_linkedin_sub: "最新职业更新。",
  sec_publications: "出版物",
  sec_publications_sub: "研究论文。",
  sec_patents: "专利",
  sec_patents_sub: "已申请和授权的专利。",
  // Chinese (zh)
foot_name: "万什·夏尔马",
foot_tag: "人工智能 • 全栈 • 机器学习",
foot_note: "© {year} 万什·夏尔马",
  sec_bookchapter: "书籍章节",
  sec_bookchapter_sub: "已出版章节。",
  sec_editedbook: "编辑书籍",
  sec_editedbook_sub: "我编辑的书籍。",
  sec_achievements: "成就与荣誉",
  sec_achievements_sub: "奖项与表彰。",
  sec_contact: "联系",
  sec_contact_sub: "欢迎合作。",

  loader_text: "加载中…",

  about_who_iam: "我是谁",
  about_quick_links: "快速链接",

  skills_languages_core: "语言与基础",
  skills_fullstack: "全栈",
  skills_tools_platforms: "工具与平台",
  skills_ai_ml: "AI / ML",
  skills_cloud_devops: "云 / DevOps",
  skills_research_tools: "研究 / 工具",
  ach_badge: "🏆 成就",
ach_title: "创新 • 领导力 • 体育卓越",
ach_desc: "对人工智能、机器人技术、创新和体育充满热情，我在技术和体育领域 consistently 取得了卓越成就。我是5次黑客马拉松获胜者和1次创意马拉松获胜者。",
ach_hackathon: "黑客马拉松获胜者",
ach_ideathon: "创意马拉松获胜者",
ach_gold: "邦和地区级金牌得主",
ach_national: "国家级运动员",

  contact_send_message: "发送消息",

  form_name: "你的名字",
  form_email: "你的邮箱",
  form_subject: "主题",
  form_message: "留言",
  form_send: "发送",
  sec_contact: "联系方式",
sec_contact_sub: "让我们在人工智能、全栈和研究项目上合作。",
contact_send_message: "发送消息",
contact_form_hint: "填写下面的表格，我会尽快回复您。",
form_name: "您的姓名",
form_email: "您的电子邮箱",
form_subject: "主题",
form_message: "您的消息", 
form_send: "发送",

  foot_backtop: "↑ 返回顶部"
  
}

};



// Simple t() helper
function t(langKey, token, fallback) {
  return TEXT[langKey]?.[token] || TEXT.en?.[token] || fallback || token;
}

// Apply language function (same)
function applyLanguage(langKey) {
  document.documentElement.lang = langKey;
  document.documentElement.setAttribute("lang", langKey);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const token = el.getAttribute("data-i18n");
    const fallback = el.textContent.trim();
    el.textContent = t(langKey, token, fallback);
  });

  const langCodeEl = document.getElementById("langCode");
  const langMeta = LANGUAGES.find(l => l.key === langKey) || LANGUAGES[0];
  if (langCodeEl) langCodeEl.textContent = langMeta.code;

  localStorage.setItem("lang", langKey);
}

// Bind tokens – improved version
function bindI18nTokens() {
  const nav = document.getElementById("navLinks");
  if (nav) {
    const links = Array.from(nav.querySelectorAll("a"));
    const byHref = (hash) => links.find(a => a.getAttribute("href") === hash);

    byHref("#about")?.setAttribute("data-i18n", "nav_about");
    byHref("#skills")?.setAttribute("data-i18n", "nav_skills");
    byHref("#experience")?.setAttribute("data-i18n", "nav_experience");
    byHref("#education")?.setAttribute("data-i18n", "nav_education");
    byHref("#projects")?.setAttribute("data-i18n", "nav_projects");
    byHref("#certifications")?.setAttribute("data-i18n", "nav_cert");
    byHref("#recommendations")?.setAttribute("data-i18n", "nav_reco");
    byHref("#media")?.setAttribute("data-i18n", "nav_media");
    byHref("#glimpse")?.setAttribute("data-i18n", "nav_glimpse");
    byHref("#blogs")?.setAttribute("data-i18n", "nav_blogs");
    byHref("#linkedin")?.setAttribute("data-i18n", "nav_linkedin");
    byHref("#publications")?.setAttribute("data-i18n", "nav_publications");
    byHref("#patents")?.setAttribute("data-i18n", "nav_patents");
    byHref("#bookchapter")?.setAttribute("data-i18n", "nav_bookchapter");
    byHref("#editedbook")?.setAttribute("data-i18n", "nav_editedbook");
    byHref("#achievements")?.setAttribute("data-i18n", "nav_achievements");
    byHref("#contact")?.setAttribute("data-i18n", "nav_contact");
  }

  // Hero CTA
  const ctaBtns = document.querySelectorAll("#home .ctaRow .btn");
  if (ctaBtns.length >= 3) {
    ctaBtns[0].setAttribute("data-i18n", "btn_view_projects");
    ctaBtns[1].setAttribute("data-i18n", "btn_contact_me");
    ctaBtns[2].setAttribute("data-i18n", "btn_resume");
  }

  // All section headings + sub
  const sections = [
    { id: "about", h2: "sec_about", p: "sec_about_sub" },
    { id: "skills", h2: "sec_skills", p: "sec_skills_sub" },
    { id: "experience", h2: "sec_experience", p: "sec_experience_sub" },
    { id: "education", h2: "sec_education", p: "sec_education_sub" },
    { id: "projects", h2: "sec_projects", p: "sec_projects_sub" },
    { id: "certifications", h2: "sec_certificates", p: "sec_certificates_sub" },
    { id: "recommendations", h2: "sec_recommendations", p: "sec_recommendations_sub" },
    { id: "media", h2: "sec_media", p: "sec_media_sub" },
    { id: "glimpse", h2: "sec_glimpse", p: "sec_glimpse_sub" },
    { id: "blogs", h2: "sec_blogs", p: "sec_blogs_sub" },
    { id: "linkedin", h2: "sec_linkedin", p: "sec_linkedin_sub" },
    { id: "publications", h2: "sec_publications", p: "sec_publications_sub" },
    { id: "patents", h2: "sec_patents", p: "sec_patents_sub" },
    { id: "bookchapter", h2: "sec_bookchapter", p: "sec_bookchapter_sub" },
    { id: "editedbook", h2: "sec_editedbook", p: "sec_editedbook_sub" },
    { id: "achievements", h2: "sec_achievements", p: "sec_achievements_sub" },
    { id: "contact", h2: "sec_contact", p: "sec_contact_sub" }
  ];

  sections.forEach(s => {
    document.querySelector(`#${s.id} h2`)?.setAttribute("data-i18n", s.h2);
    document.querySelector(`#${s.id} .sectionHead p`)?.setAttribute("data-i18n", s.p);
  });

  // Hero special parts
  document.querySelector(".kicker")?.setAttribute("data-i18n", "hero_kicker");
  document.querySelector(".heroLeft .title span:nth-child(1)")?.setAttribute("data-i18n", "hero_title_1");
  document.querySelector(".heroLeft .title .grad")?.setAttribute("data-i18n", "hero_title_3");
  document.querySelector(".heroLeft .title span:last-child")?.setAttribute("data-i18n", "hero_title_4");
  document.querySelector(".heroLeft .subtitle")?.setAttribute("data-i18n", "hero_subtitle");
}

// Init UI (same)
function initLanguageUI() {
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");
  if (!btn || !menu) return;

  menu.innerHTML = LANGUAGES.map(l => `
    <button class="langItem" role="option" data-lang="${l.key}">
      <span class="langLeft">
        <span class="langFlag">${l.flag}</span>
        <span class="langName">${l.name}</span>
      </span>
      <span class="langKey">${l.code}</span>
    </button>
  `).join("");

  const closeMenu = () => {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", e => {
    e.stopPropagation();
    menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", menu.classList.contains("open"));
  });

  menu.addEventListener("click", e => {
    const item = e.target.closest(".langItem");
    if (item) {
      applyLanguage(item.dataset.lang);
      closeMenu();
    }
  });

  document.addEventListener("click", closeMenu);
}
// Run initialization
bindI18nTokens();
initLanguageUI();
applyLanguage(localStorage.getItem("lang") || "en");
// =====================
// Resume + year
// =====================
document.getElementById("resumeBtn")?.setAttribute("href", safeUrl(PROFILE.resumeUrl));
document.getElementById("year").innerText = new Date().getFullYear();

// =====================
// Hero images + text
// =====================
const profileImg = document.getElementById("profileImg");
if (profileImg) profileImg.src = safeText(PROFILE.profileImg, "assets/profile.jpg");

const heroBannerImg = document.getElementById("heroBannerImg");
if (heroBannerImg){
  const src = safeText(PROFILE.heroBannerImg, "");
  if (src){
    heroBannerImg.src = src;
    heroBannerImg.addEventListener("load", () => heroBannerImg.classList.add("ready"));
  }
}

const bulletsEl = document.getElementById("profileBullets");
if (bulletsEl){
  bulletsEl.innerHTML = HERO.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("");
}
const badgesEl = document.getElementById("heroBadges");
if (badgesEl){
  badgesEl.innerHTML = HERO.badges.map(x => `<span class="badge">${escapeHtml(x)}</span>`).join("");
}
document.getElementById("heroFloat1").textContent = HERO.float1;
document.getElementById("heroFloat2").textContent = HERO.float2;

// =====================
// About
// =====================
document.getElementById("aboutText").textContent = ABOUT.text;
document.getElementById("aboutFocus").textContent = ABOUT.focus;
document.getElementById("aboutTools").textContent = ABOUT.tools;

// =====================
// About quick links
// =====================
const linkGrid = document.getElementById("linkGrid");
if (linkGrid){
  const items = [
    { title:"LinkedIn", hint:"Open profile", url: PROFILE.linkedin },
    { title:"GitHub", hint:"Open repositories", url: PROFILE.github },

  ];
  linkGrid.innerHTML = items.map(i => `
    <a class="linkCard" href="${safeUrl(i.url)}" target="_blank" rel="noopener">
      <div class="lcTitle">${escapeHtml(i.title)}</div>
      <div class="lcHint">${escapeHtml(i.hint)}</div>
    </a>
  `).join("");
}

// =====================
// Skills render
// =====================
function renderSkills(elId, items){
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = items.map(it => `
    <div class="logoItem">
      <i class="${escapeHtml(it.icon)}"></i>
      <span>${escapeHtml(it.name)}</span>
    </div>
  `).join("");
}
renderSkills("skillsLang", SKILLS.languages);
renderSkills("skillsStack", SKILLS.stack);
renderSkills("skillsTools", SKILLS.tools);
// EXTRA SKILLS (below) — change arrays in SKILLS.ai / SKILLS.cloud / SKILLS.research
renderSkills("skillsAI", SKILLS.ai || []);
renderSkills("skillsCloud", SKILLS.cloud || []);
renderSkills("skillsResearch", SKILLS.research || []);

// =====================
// Count-up stats (fixed bug)
// =====================
const statsGrid = document.getElementById("statsGrid");
if (statsGrid){
  statsGrid.innerHTML = STATS.map((s, idx) => `
    <div class="statCard">
      <div class="statIn">
        <div class="statValue" data-target="${s.value}" data-suffix="${escapeHtml(s.suffix || "")}" id="stat-${idx}">0</div>
        <div class="statLabel">${escapeHtml(s.label)}</div>
      </div>
    </div>
  `).join("");
}

function formatNum(n){
  return n.toLocaleString("en-IN");
}
function animateCount(el, target, suffix){
  const duration = 1200;
  const start = performance.now();
  const from = 0;

  function tick(now){
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.floor(from + (target - from) * eased);
    el.textContent = formatNum(val) + (suffix || "");
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function startCountersOnce(){
  const els = [...document.querySelectorAll(".statValue")];
  els.forEach(el => {
    const target = Number(el.getAttribute("data-target") || "0");
    const suffix = el.getAttribute("data-suffix") || "";
    animateCount(el, target, suffix);
  });
}

let countersStarted = false;
const hero = document.getElementById("home");
if (hero){
  const io = new IntersectionObserver((entries) => {
    if (!countersStarted && entries.some(e => e.isIntersecting)){
      countersStarted = true;
      startCountersOnce();
      io.disconnect();
    }
  }, { threshold: 0.35 });
  io.observe(hero);
}

// =====================
// Media renderer (image/pdf) for cards
// =====================
function renderMediaGrid(items){
  if (!items || !items.length) return `<div class="muted">Add media in script.js</div>`;
  return items.map(m => {
    const url = safeText(m.url, "#");
    const name = safeText(m.name, "Media");
    const type = safeText(m.type, isPdf(url) ? "pdf" : "image").toLowerCase();
    const thumb = safeText(m.thumb, url);

    const thumbHtml = type === "pdf" || isPdf(url)
      ? `<div class="pdfBadge">PDF</div>`
      : `<img src="${escapeHtml(thumb)}" alt="${escapeHtml(name)}" onerror="this.closest('.mediaCard').style.display='none'">`;

    return `
      <a class="mediaCard" href="${safeUrl(url)}" target="_blank" rel="noopener">
        <div class="mediaThumb">${thumbHtml}</div>
        <div class="mediaMeta">
          <div class="mediaName">${escapeHtml(name)}</div>
          <div class="mediaType">${escapeHtml(type.toUpperCase())}</div>
        </div>
      </a>
    `;
  }).join("");
}

function renderBtnRow(btns){
  if (!btns || !btns.length) return "";
  return btns.map(b => `
    <a class="linkBtn ${b.primary ? "primary" : ""}" href="${safeUrl(b.url)}" target="_blank" rel="noopener">
      ${escapeHtml(b.label)}
    </a>
  `).join("");
}

// =====================
// Experience render
// =====================
const expTimeline = document.getElementById("expTimeline");
if (expTimeline){
  expTimeline.innerHTML = EXPERIENCES.map(exp => `
    <div class="tItem card glass tilt">
      <div class="tIn">
        <div class="tTop">
          <div class="org">
            <img class="orgLogo" alt="${escapeHtml(exp.org)} logo" src="${escapeHtml(exp.logo)}" onerror="this.style.display='none'">
            <div>
              <div class="tRole">${escapeHtml(exp.role)}</div>
              <div class="tOrg">${escapeHtml(exp.org)}</div>
            </div>
          </div>
          <div class="tDate">${escapeHtml(exp.date)}</div>
        </div>

        <div class="tBody">
          <ul class="bullets">
            ${exp.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
          </ul>

          <div class="tagRow">
            ${exp.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
          </div>

          <div class="mediaBlock">
            <div class="mediaHead">
              <div class="mediaTitle">Certificates / Proofs</div>
              
            </div>
            <div class="mediaGrid">${renderMediaGrid(exp.media)}</div>
          </div>

          <div class="btnRow">
            ${renderBtnRow([
              { label: exp.links?.[0]?.label || "Link 1", url: exp.links?.[0]?.url, primary: true },
              { label: exp.links?.[1]?.label || "Link 2", url: exp.links?.[1]?.url }
            ])}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// =====================
// Education render
// =====================
const eduGrid = document.getElementById("eduGrid");
if (eduGrid){
  eduGrid.innerHTML = EDUCATION.map(ed => `
    <div class="card glass tilt cardXL">
      <div class="eduTop">
        <img class="eduLogo" alt="${escapeHtml(ed.inst)} logo" src="${escapeHtml(ed.logo)}" onerror="this.style.display='none'">
        <div>
          <div class="eduDegree">${escapeHtml(ed.degree)}</div>
          <div class="eduInst">${escapeHtml(ed.inst)}</div>
          <div class="eduDate">${escapeHtml(ed.date)}</div>
        </div>
      </div>

      <div class="mediaBlock">
        <div class="mediaHead">
          <div class="mediaTitle">Certificates / Recommendations</div>
        
        </div>
        <div class="mediaGrid">${renderMediaGrid(ed.media)}</div>
      </div>
    </div>
  `).join("");
}

// =====================
// Fixed 9 project cards (above the slider)
// =====================
function renderProjectGrid9(){
  const c1 = document.getElementById("projCat1");
  const c2 = document.getElementById("projCat2");
  const c3 = document.getElementById("projCat3");
  if (!c1 || !c2 || !c3) return;

  // Update category headings (if you change titles in PROJECT_GRID_9)
  document.querySelectorAll(".projCatTitle")[0].textContent = PROJECT_GRID_9.cat1Title;
  document.querySelectorAll(".projCatTitle")[1].textContent = PROJECT_GRID_9.cat2Title;
  document.querySelectorAll(".projCatTitle")[2].textContent = PROJECT_GRID_9.cat3Title;

  const card = (p) => `
    <div class="projGridCard tilt-sm">
      <div class="pTitle">${escapeHtml(p.title)}</div>
      <div class="muted" style="margin-top:6px">${escapeHtml(p.subtitle || "")}</div>

      <div class="projStackRow">
        ${(p.stack || []).slice(0,12).map(s => `<span class="stackPill">${escapeHtml(s)}</span>`).join("")}
      </div>

      <div class="certActions" style="margin-top:12px">
        ${p.link1?.url ? `<a class="btn" href="${safeUrl(p.link1.url)}" target="_blank" rel="noopener">${escapeHtml(p.link1.label || "Link 1")}</a>` : ""}
        ${p.link2?.url ? `<a class="btn ghost" href="${safeUrl(p.link2.url)}" target="_blank" rel="noopener">${escapeHtml(p.link2.label || "Link 2")}</a>` : ""}
      </div>

      <div class="projThumb">
        <img src="${safeText(p.img, "")}" alt="${escapeHtml(p.title)}"/>
      </div>
    </div>
  `;

  c1.innerHTML = PROJECT_GRID_9.cat1.map(card).join("");
  c2.innerHTML = PROJECT_GRID_9.cat2.map(card).join("");
  c3.innerHTML = PROJECT_GRID_9.cat3.map(card).join("");
}
renderProjectGrid9();

// =====================
// Projects slider (auto swap)
// =====================
const track = document.getElementById("projectTrack");
const dots = document.getElementById("projDots");
let projIndex = 0;
let autoTimer = null;

function renderProjects(){
  if (!track) return;

  track.innerHTML = PROJECTS.map(p => `
    <div class="projectCard">
      <div class="projectIn">
        <div class="pTitle">${escapeHtml(p.title)}</div>
        <div class="pMeta">${escapeHtml(p.meta)}</div>
        <div class="pDesc">${escapeHtml(p.desc)}</div>

        <div class="cardMedia2">
          <div class="miniImg"><img src="${escapeHtml(p.img1)}" alt="project image 1" onerror="this.closest('.miniImg').style.display='none'"></div>
          <div class="miniImg"><img src="${escapeHtml(p.img2)}" alt="project image 2" onerror="this.closest('.miniImg').style.display='none'"></div>
        </div>

        <div class="actionRow">
          <a class="linkBtn primary" href="${safeUrl(p.github)}" target="_blank" rel="noopener">GitHub</a>
          <a class="linkBtn" href="${safeUrl(p.live)}" target="_blank" rel="noopener">Live Demo</a>
        </div>
      </div>
    </div>
  `).join("");

  if (dots){
    dots.innerHTML = PROJECTS.map((_, i) => `
      <button class="dot ${i===0 ? "active":""}" aria-label="Go to slide ${i+1}" data-i="${i}"></button>
    `).join("");

    dots.querySelectorAll(".dot").forEach(d => {
      d.addEventListener("click", () => {
        projIndex = Number(d.getAttribute("data-i"));
        goToProject(projIndex);
        restartAuto();
      });
    });
  }

  goToProject(0);
}

function goToProject(i){
  if (!track) return;

  const card = track.querySelector(".projectCard");
  if (!card) return;

  const isMobile = window.matchMedia("(max-width: 1020px)").matches;

  const cardWidth = card.getBoundingClientRect().width;
  const gap = 16;
  const visible = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, PROJECTS.length - visible);
  projIndex = Math.max(0, Math.min(i, maxIndex));

  const x = -(projIndex * (cardWidth + gap));
  track.style.transform = `translateX(${x}px)`;

  if (dots){
    const all = [...dots.querySelectorAll(".dot")];
    all.forEach((d, idx) => d.classList.toggle("active", idx === projIndex));
  }
}

function nextProject(){
  const isMobile = window.matchMedia("(max-width: 1020px)").matches;
  const visible = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, PROJECTS.length - visible);
  projIndex = (projIndex >= maxIndex) ? 0 : projIndex + 1;
  goToProject(projIndex);
}
function prevProject(){
  const isMobile = window.matchMedia("(max-width: 1020px)").matches;
  const visible = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, PROJECTS.length - visible);
  projIndex = (projIndex <= 0) ? maxIndex : projIndex - 1;
  goToProject(projIndex);
}

function restartAuto(){
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(nextProject, 3800);
}

document.getElementById("projNext")?.addEventListener("click", () => { nextProject(); restartAuto(); });
document.getElementById("projPrev")?.addEventListener("click", () => { prevProject(); restartAuto(); });
window.addEventListener("resize", () => goToProject(projIndex));

renderProjects();
restartAuto();

// =====================
// Certificates section (6 cards + rail slider)
// =====================
function renderCertificates(){
  const grid = document.getElementById("certGrid");
  const rail = document.getElementById("certTrack");
  if (grid){
    grid.innerHTML = CERTIFICATES.map(c => `
      <div class="certCard tilt-sm">
        <div class="certThumb"><img src="${safeText(c.img,"")}" alt="${escapeHtml(c.title)}"/></div>
        <div class="certMeta">
          <div class="certTitle">${escapeHtml(c.title)}</div>
          <div class="certSub">${escapeHtml(c.subtitle || "")}</div>
          <div class="certActions">
            ${c.link1?.url ? `<a class="btn" href="${safeUrl(c.link1.url)}" target="_blank" rel="noopener">${escapeHtml(c.link1.label || "View")}</a>` : ""}
            ${c.link2?.url ? `<a class="btn ghost" href="${safeUrl(c.link2.url)}" target="_blank" rel="noopener">${escapeHtml(c.link2.label || "Verify")}</a>` : ""}
          </div>
        </div>
      </div>
    `).join("");
  }
  if (rail){
    rail.innerHTML = CERT_SLIDES.map(s => `
      <div class="certSlide">
        <div class="certThumb"><img src="${safeText(s.img,"")}" alt="${escapeHtml(s.title)}"/></div>
        <div class="certMeta">
          <div class="certTitle">${escapeHtml(s.title)}</div>
          <div class="certSub">${escapeHtml(s.subtitle || "")}</div>
          <div class="p" style="margin-top:10px">${escapeHtml(s.desc || "")}</div>
        </div>
      </div>
    `).join("");
  }
}
renderCertificates();

// =====================
// Recommendations section
// =====================
function renderRecommendations(){
  const grid = document.getElementById("recGrid");
  if (!grid) return;
  grid.innerHTML = RECOMMENDATIONS.map(r => `
    <div class="recCard tilt-sm">
      <div class="recImg"><img src="${safeText(r.img,"")}" alt="${escapeHtml(r.title)}"/></div>
      <div class="recBody">
        <div class="recTitle">${escapeHtml(r.title)}</div>
        <div class="recText">${escapeHtml(r.text || "")}</div>
        <div class="recFrom">— ${escapeHtml(r.from || "")} • ${escapeHtml(r.source || "")}</div>
      </div>
    </div>
  `).join("");
}
renderRecommendations();

// =====================
// Media slider (NEW)
// =====================
const mediaTrack = document.getElementById("mediaTrack");
const mediaDots = document.getElementById("mediaDots");
let mediaIndex = 0;
let mediaTimer = null;

function renderMediaSlider(){
  if (!mediaTrack) return;

  mediaTrack.innerHTML = MEDIA_SLIDES.map(s => `
    <div class="mediaSlide">
      <img class="msImg" src="${escapeHtml(s.img)}" alt="${escapeHtml(s.title)}" onerror="this.closest('.mediaSlide').style.display='none'">
      <div class="msBody">
        <div class="msTitle">${escapeHtml(s.title)}</div>
        <div class="msSub">${escapeHtml(s.subtitle)}</div>
        <div class="msDesc">${escapeHtml(s.desc)}</div>
      </div>
    </div>
  `).join("");

  if (mediaDots){
    mediaDots.innerHTML = MEDIA_SLIDES.map((_, i) => `
      <button class="dot ${i===0 ? "active":""}" aria-label="Go to media ${i+1}" data-i="${i}"></button>
    `).join("");

    mediaDots.querySelectorAll(".dot").forEach(d => {
      d.addEventListener("click", () => {
        mediaIndex = Number(d.getAttribute("data-i"));
        goToMedia(mediaIndex);
        restartMediaAuto();
      });
    });
  }

  goToMedia(0);
}

function goToMedia(i){
  if (!mediaTrack) return;
  const slide = mediaTrack.querySelector(".mediaSlide");
  if (!slide) return;

  const slideWidth = slide.getBoundingClientRect().width;
  const gap = 16;

  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = Math.max(0, Math.min(i, maxIndex));

  const x = -(mediaIndex * (slideWidth + gap));
  mediaTrack.style.transform = `translateX(${x}px)`;

  if (mediaDots){
    const all = [...mediaDots.querySelectorAll(".dot")];
    all.forEach((d, idx) => d.classList.toggle("active", idx === mediaIndex));
  }
}
function nextMedia(){
  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = (mediaIndex >= maxIndex) ? 0 : mediaIndex + 1;
  goToMedia(mediaIndex);
}
function prevMedia(){
  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = (mediaIndex <= 0) ? maxIndex : mediaIndex - 1;
  goToMedia(mediaIndex);
}
function restartMediaAuto(){
  if (mediaTimer) clearInterval(mediaTimer);
  mediaTimer = setInterval(nextMedia, 3600);
}
document.getElementById("mediaNext")?.addEventListener("click", () => { nextMedia(); restartMediaAuto(); });
document.getElementById("mediaPrev")?.addEventListener("click", () => { prevMedia(); restartMediaAuto(); });
window.addEventListener("resize", () => goToMedia(mediaIndex));

renderMediaSlider();
restartMediaAuto();

// =====================
// Video glimpse (NEW)
// =====================
const v = document.getElementById("glimpseVideo");
if (v){
  const src = safeText(VIDEO.src, "");
  if (src && !src.startsWith("ADD_")){
    v.innerHTML = `<source src="${escapeHtml(src)}" type="video/mp4">`;
  }
  // autoplay might be blocked if not muted (we keep muted in HTML)
  v.muted = true;
  v.autoplay = true;
  v.loop = true;
}

// =====================
// 2-button list renderer (with optional 2 images)
// =====================
function renderTwoBtnList(elId, arr){
  const el = document.getElementById(elId);
  if (!el) return;

  el.innerHTML = arr.map(item => `
    <div class="itemCard tilt">
      <div class="itemTitle">${escapeHtml(item.title)}</div>
      ${item.subtitle ? `<div class="itemSub">${escapeHtml(item.subtitle)}</div>` : ""}
      <div class="itemMeta">${escapeHtml(item.meta || "")}</div>
      <div class="itemDesc">${escapeHtml(item.desc || "")}</div>

      <div class="itemMedia2">
        <div class="miniImg"><img src="${escapeHtml(item.img1 || "")}" alt="image 1" onerror="this.closest('.miniImg').style.display='none'"></div>
        <div class="miniImg"><img src="${escapeHtml(item.img2 || "")}" alt="image 2" onerror="this.closest('.miniImg').style.display='none'"></div>
      </div>

      <div class="actionRow">
        <a class="linkBtn primary" href="${safeUrl(item.btn1?.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn1?.label || "View")}</a>
        <a class="linkBtn" href="${safeUrl(item.btn2?.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn2?.label || "External")}</a>
      </div>

      ${item.embedHtml ? `<div class="muted" style="margin-top:12px">Embedded content below:</div><div style="margin-top:10px">${item.embedHtml}</div>` : ""}
    </div>
  `).join("");
}

renderTwoBtnList("pubList", PUBLICATIONS);
renderTwoBtnList("patentList", PATENTS);
renderTwoBtnList("chapterList", BOOK_CHAPTERS);
renderTwoBtnList("editedBookList", EDITED_BOOKS);
renderTwoBtnList("liGrid", LINKEDIN_POSTS);

// =====================
// Blogs render (local + optional external RSS)
// =====================
const blogGrid = document.getElementById("blogGrid");

function renderBlogs(posts){
  if (!blogGrid) return;
  blogGrid.innerHTML = posts.map(p => `
    <div class="itemCard tilt">
      <div class="itemTitle">${escapeHtml(p.title)}</div>
      <div class="itemSub">${escapeHtml(p.subtitle || "")}</div>
      <div class="itemDesc">${escapeHtml(p.desc || "")}</div>

      <div class="itemMedia2">
        <div class="miniImg"><img src="${escapeHtml(p.img1 || "")}" alt="blog image 1" onerror="this.closest('.miniImg').style.display='none'"></div>
        <div class="miniImg"><img src="${escapeHtml(p.img2 || "")}" alt="blog image 2" onerror="this.closest('.miniImg').style.display='none'"></div>
      </div>

      <div class="actionRow">
        <a class="linkBtn primary" href="${safeUrl(p.btn1?.url)}" target="_blank" rel="noopener">${escapeHtml(p.btn1?.label || "Read")}</a>
        <a class="linkBtn" href="${safeUrl(p.btn2?.url)}" target="_blank" rel="noopener">${escapeHtml(p.btn2?.label || "External")}</a>
      </div>
    </div>
  `).join("");
}

async function fetchExternalBlogs(){
  const external = [];
  for (const f of BLOG_FEEDS){
    try{
      const res = await fetch(f.rss2json);
      const data = await res.json();
      const items = (data.items || []).slice(0, 4);
      items.forEach(it => {
        external.push({
          title: it.title || `Blog from ${f.label}`,
          subtitle: f.label,
          desc: (it.description || "").replace(/<[^>]*>?/gm, "").slice(0, 360) + "...",
          img1: it.thumbnail || "assets/blog/placeholder.jpg",
          img2: "assets/blog/placeholder2.jpg",
          btn1: { label: "Read Blog", url: it.link || "#" },
          btn2: { label: "More", url: it.guid || it.link || "#" }
        });
      });
    }catch(e){
      // ignore feed errors
    }
  }
  return external;
}

(async function initBlogs(){
  const external = await fetchExternalBlogs();
  const all = [...BLOG_POSTS, ...external];
  renderBlogs(all);
})();

// =====================
// Achievements render (BIG)
// =====================
// =====================
// Achievements (BIG) — passport proof image + left/right
// =====================
const achGrid = document.getElementById("achGrid");
if (achGrid){
  // Normalize proof images (supports old img1/img2, and also new "proofs" array)
  const normalized = ACHIEVEMENTS.map(a => ({
    ...a,
    proofs: Array.isArray(a.proofs) ? a.proofs : [a.img1, a.img2].filter(Boolean)
  }));

  achGrid.innerHTML = normalized.map((a, idx) => `
    <div class="awardCard tilt">
      <div class="awardIn">
        <div class="awHead">
          <div class="awIcon">${escapeHtml(a.icon || "🏆")}</div>
          <div>
            <div class="awTitle">${escapeHtml(a.title)}</div>
            <div class="awMeta muted">${escapeHtml(a.meta || "")}</div>
            <div class="awSub">${escapeHtml(a.sub || "")}</div>
          </div>
        </div>

        <div class="p" style="margin-top:12px">${escapeHtml(a.desc || "")}</div>

        <!-- Proof image (passport size) + nav buttons -->
        <div class="proofRow" data-ach="${idx}">
          <button class="proofNavBtn" data-proof="prev" aria-label="Previous proof">‹</button>
          <div class="proofFrame">
            <img class="proofImg" src="${safeText(a.proofs[0] || "", "")}" alt="Proof image"/>
          </div>
          <button class="proofNavBtn" data-proof="next" aria-label="Next proof">›</button>
          <div class="muted" style="font-size:12px;margin-left:auto">Proof</div>
        </div>

        <div class="btnRow" style="margin-top:14px">
          ${a.btn1?.url ? `<a class="btn" href="${safeUrl(a.btn1.url)}" target="_blank" rel="noopener">${escapeHtml(a.btn1.label || "Link 1")}</a>` : ""}
          ${a.btn2?.url ? `<a class="btn ghost" href="${safeUrl(a.btn2.url)}" target="_blank" rel="noopener">${escapeHtml(a.btn2.label || "Link 2")}</a>` : ""}
        </div>

        <div class="proofHint">Tip: Add more proofs by using <b>proofs: [ ... ]</b> in script.js</div>
      </div>
    </div>
  `).join("");

  // proof navigation state
  const state = new Map();
  const setImg = (row, dir) => {
    const idx = Number(row.dataset.ach);
    const proofs = normalized[idx].proofs || [];
    if (!proofs.length) return;
    const cur = state.get(idx) ?? 0;
    const next = (cur + dir + proofs.length) % proofs.length;
    state.set(idx, next);
    row.querySelector(".proofImg").src = safeText(proofs[next], "");
  };

  achGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-proof]");
    if (!btn) return;
    const row = e.target.closest(".proofRow");
    if (!row) return;
    setImg(row, btn.dataset.proof === "next" ? 1 : -1);
  });
}


// =====================
// Contact card
// =====================
// =====================
// Contact (card left + form right) + MAP + QR
// =====================
const contactCard = document.getElementById("contactCard");
if (contactCard){
  const mapSrc = safeText(PROFILE.mapEmbedUrl, "");
  const hasMap = mapSrc && !mapSrc.includes("ADD_GOOGLE_MAP");
  const hasQr = PROFILE.contactQrImg && !PROFILE.contactQrImg.includes("ADD_");

  contactCard.innerHTML = `
    <h3>Quick Info</h3>
    <div class="muted" style="margin-top:8px">I reply fastest on email / LinkedIn.</div>

    <div style="margin-top:16px; display:flex; flex-direction:column; gap:14px">
      <div><b>📍 Location</b><div class="muted">${escapeHtml(PROFILE.location)}</div></div>
      <div><b>✉️ Email</b><div class="muted">${escapeHtml(PROFILE.email)}</div></div>
      <div><b>📞 Phone</b><div class="muted">${escapeHtml(PROFILE.phone)}</div></div>
    </div>

    <!-- CONTACT MAP / QR (customizable)
         1) Map: paste the iframe SRC (only src) into PROFILE.mapEmbedUrl
         2) QR: change PROFILE.contactQrImg -->
    <div class="contactExtras">
      <div class="mapFrame">
        ${hasMap ? `<iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${mapSrc}" aria-label="Google map"></iframe>` : `<div style="height:100%;display:grid;place-items:center" class="muted">Add map embed URL in <b>script.js</b></div>`}
      </div>
      <div class="qrFrame" id="contactQr">
        ${hasQr ? `<img src="${safeText(PROFILE.contactQrImg,"")}" alt="Contact QR"/>` : `<div class="muted">Add QR image in <b>script.js</b></div>`}
      </div>
    </div>
  `;
}

// Footer QR
const footerQr = document.getElementById("footerQr");
if (footerQr){
  const ok = PROFILE.footerQrImg && !PROFILE.footerQrImg.includes("ADD_");
  footerQr.innerHTML = ok ? `<img src="${safeText(PROFILE.footerQrImg,"")}" alt="Footer QR"/>` : `<div class="muted" style="padding:10px;text-align:center">Add footer QR in <b>script.js</b></div>`;
}


// =====================
// Footer links (auto copy from navbar so both stay in sync)
// =====================
const footerLinks = document.getElementById("footerLinks");
if (footerLinks){
  const navLinks = document.querySelectorAll("#navLinks a");
  footerLinks.innerHTML = Array.from(navLinks).map(a => {
    const href = a.getAttribute("href");
    const label = a.textContent.trim();
    const token = a.getAttribute("data-i18n");
    return `<a href="${href}" ${token ? `data-i18n="${token}"` : ""}>${escapeHtml(label)}</a>`;
  }).join("");

  // Apply translation to new footer links too
  applyLanguage(localStorage.getItem("lang") || "en");
}

// =====================
// Footer socials
// =====================
const socialRow = document.getElementById("socialRow");
if (socialRow){
  socialRow.innerHTML = `
    <a class="social" href="${safeUrl(PROFILE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="social" href="${safeUrl(PROFILE.github)}" target="_blank" rel="noopener">GitHub</a>
    <a class="social" href="${safeUrl(PROFILE.scholar)}" target="_blank" rel="noopener">Scholar</a>
    <a class="social" href="${safeUrl(PROFILE.resumeUrl)}" target="_blank" rel="noopener">Resume</a>
  `;
}

// =====================
// Schedule meeting (demo)
// =====================
document.getElementById("meetBtn")?.addEventListener("click", () => {
  const name = document.getElementById("meetName")?.value || "";
  const email = document.getElementById("meetEmail")?.value || "";
  const when = document.getElementById("meetWhen")?.value || "";
  const topic = document.getElementById("meetTopic")?.value || "";
  alert(`Demo request sent!\n\nName: ${name}\nEmail: ${email}\nWhen: ${when}\nTopic: ${topic}\n\n(Connect Calendly/Backend later)`);
});

// =====================
// Optional: simple tilt
// =====================
function attachTilt(el, intensity = 12) {
  let rect = null;
  const onMove = (e) => {
    rect = rect || el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * intensity;
    const rotX = (0.5 - y) * intensity;
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
  };
  const onLeave = () => {
    rect = null;
    el.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
  };
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
}
document.querySelectorAll(".tilt").forEach((el) => attachTilt(el, 14));
document.querySelectorAll(".tilt-sm").forEach((el) => attachTilt(el, 10));
document.querySelectorAll(".card3d").forEach((el) => attachTilt(el, 16));

// =====================
// Navbar Search (NEW)
// - keyword type => suggestions
// - click => scroll to best match section
// =====================
const SEARCH_INDEX = [
  { id:"home", title:"Home", keywords:["hero","summary","profile","stats","banner"] },
  { id:"about", title:"About", keywords:["about","who i am","focus","tools"] },
  { id:"skills", title:"Skills", keywords:["skills","technical","stack","python","mern","react","node","docker"] },
  { id:"experience", title:"Experience", keywords:["experience","intern","geu","visit uttarakhand","work"] },
  { id:"education", title:"Education", keywords:["education","iit patna","geu","btech","mtech"] },
  { id:"projects", title:"Projects", keywords:["projects","github","live","deployed"] },
  { id:"media", title:"Media", keywords:["media","gallery","slider","photos"] },
  { id:"glimpse", title:"Video Glimpse", keywords:["video","glimpse","demo","showreel"] },
  { id:"blogs", title:"Blogs", keywords:["blog","articles","posts","medium","rss"] },
  { id:"linkedin", title:"LinkedIn Posts", keywords:["linkedin","posts","updates"] },
  { id:"publications", title:"Publications", keywords:["publication","paper","research","crc press"] },
  { id:"patents", title:"Patents", keywords:["patent","ipr","published"] },
  { id:"bookchapter", title:"Book Chapter", keywords:["book chapter","chapter"] },
  { id:"editedbook", title:"Edited Book", keywords:["edited book","editor"] },
  { id:"achievements", title:"Recognition", keywords:["achievement","award","recognition","speaker","reviewer","hackathon"] },
  { id:"contact", title:"Contact", keywords:["contact","email","phone","message"] },
];

const siteSearch = document.getElementById("siteSearch");
const searchDrop = document.getElementById("searchDrop");

function scoreMatch(q, item){
  const query = q.toLowerCase().trim();
  if (!query) return 0;
  let s = 0;
  if (item.title.toLowerCase().includes(query)) s += 10;
  item.keywords.forEach(k => {
    const kk = k.toLowerCase();
    if (kk.includes(query) || query.includes(kk)) s += 5;
  });
  return s;
}
function openDrop(){
  if (!searchDrop) return;
  searchDrop.style.display = "block";
  searchDrop.setAttribute("aria-hidden","false");
}
function closeDrop(){
  if (!searchDrop) return;
  searchDrop.style.display = "none";
  searchDrop.setAttribute("aria-hidden","true");
}
function scrollToSection(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior:"smooth", block:"start" });
  closeDrop();
  if (siteSearch) siteSearch.blur();
}

siteSearch?.addEventListener("input", () => {
  const q = siteSearch.value || "";
  const query = q.trim();
  if (!query){
    closeDrop();
    if (searchDrop) searchDrop.innerHTML = "";
    return;
  }

  const results = SEARCH_INDEX
    .map(it => ({...it, score: scoreMatch(query, it)}))
    .filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score)
    .slice(0, 6);

  if (!results.length){
    if (searchDrop){
      searchDrop.innerHTML = `<div class="searchItem"><div class="siTitle">No match</div><div class="siHint">Try: projects, patents, blogs, contact...</div></div>`;
      openDrop();
    }
    return;
  }

  if (searchDrop){
    searchDrop.innerHTML = results.map(r => `
      <div class="searchItem" data-id="${escapeHtml(r.id)}">
        <div class="siTitle">${escapeHtml(r.title)}</div>
        <div class="siHint">Jump to #${escapeHtml(r.id)}</div>
      </div>
    `).join("");
    openDrop();

    searchDrop.querySelectorAll(".searchItem").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        if (id) scrollToSection(id);
      });
    });
  }
});

siteSearch?.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    const q = (siteSearch.value || "").trim();
    if (!q) return;
    // best match
    const best = SEARCH_INDEX
      .map(it => ({...it, score: scoreMatch(q, it)}))
      .sort((a,b) => b.score - a.score)[0];
    if (best && best.score > 0) scrollToSection(best.id);
  }
  if (e.key === "Escape"){
    closeDrop();
    siteSearch.blur();
  }
});

document.addEventListener("click", (e) => {
  const t = e.target;
  if (!t) return;
  const inside = t.closest?.(".navSearch");
  if (!inside) closeDrop();
});


// =====================
// LOADER control (2.5s)
// =====================
const pageLoader = document.getElementById("pageLoader");
if (pageLoader){
  // Hide after 2.5s (as you requested). You can change this number anytime.
  const HIDE_AFTER_MS = 2500;
  setTimeout(() => pageLoader.classList.add("hide"), HIDE_AFTER_MS);

  // Also hide quickly after full load (whichever happens later is fine).
  window.addEventListener("load", () => {
    setTimeout(() => pageLoader.classList.add("hide"), 200);
  });
}
