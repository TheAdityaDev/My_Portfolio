import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Server,
  Wrench,
  Code,
  User,
  Linkedin,
  Github,
  Mail,
  PanelRight,
  Database,
  ShieldCheck,
  Zap,
  Sparkles,
  Terminal,
  Compass,
  Eye,
  RefreshCw,
  Send,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Award,
  Layers,
  HelpCircle,
  Download,
  FileText,
} from "lucide-react";

// Cosmic visual configurations corresponding to user selectable theme states
const cosmicThemes = {
  andromeda: {
    name: "Andromeda Violet",
    bg: "radial-gradient(circle at center, #1E1233 0%, #080312 100%)",
    accent: "text-purple-400",
    accentBg: "bg-purple-500/10",
    border: "border-purple-500/30",
    buttonBg: "bg-purple-900/40 hover:bg-purple-800/60",
    particleColor: "#a78bfa",
    nebulaGlow: "rgba(139, 92, 246, 0.15)",
    hologramColor: "#a78bfa",
    ringColor: "rgba(167, 139, 250, 0.4)",
    pulseColor: "bg-purple-500",
  },
  supernova: {
    name: "Supernova Amber",
    bg: "radial-gradient(circle at center, #291207 0%, #0A0300 100%)",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    border: "border-amber-500/30",
    buttonBg: "bg-amber-900/40 hover:bg-amber-800/60",
    particleColor: "#fbbf24",
    nebulaGlow: "rgba(245, 158, 11, 0.15)",
    hologramColor: "#fbbf24",
    ringColor: "rgba(251, 191, 36, 0.4)",
    pulseColor: "bg-amber-500",
  },
  deepspace: {
    name: "Deep Horizon Cyan",
    bg: "radial-gradient(circle at center, #0B1D28 0%, #02070A 100%)",
    accent: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    buttonBg: "bg-cyan-900/40 hover:bg-cyan-800/60",
    particleColor: "#22d3ee",
    nebulaGlow: "rgba(6, 182, 212, 0.15)",
    hologramColor: "#22d3ee",
    ringColor: "rgba(34, 211, 238, 0.4)",
    pulseColor: "bg-cyan-500",
  },
};

const combinedData = {
  Name: "Aditya Patil",
  Contact: {
    Phone: "+91 8855040187",
    Email: "adityadev21@gmail.com",
    Location: "Pune, India",
  },
  LinkedIn: "www.linkedin.com/in/aditya-patil-014404343",
  GitHub: "github.com/TheAdityaDev",
  ResumeLink:
    "https://drive.google.com/file/d/1B6_b80j8uR70tLzX3h-yV069G917X69V/view?usp=sharing", // Dedicated Google Drive Resume node
  ResumeDownload:
    "https://docs.google.com/uc?export=download&id=1B6_b80j8uR70tLzX3h-yV069G917X69V", // Direct raw delivery payload endpoint
  Stats: [
    { label: "Code Optimization", value: "+35%" },
    { label: "Message Delivery", value: "<200ms" },
    { label: "Lighthouse Score", value: "95+" },
    { label: "Architectures Built", value: "Multi-Tier" },
  ],
  "Technical Skills": {
    Frontend: {
      icon: Code,
      color: "from-amber-400 to-orange-500",
      shadow: "shadow-amber-500/50",
      border: "border-amber-400",
      bg: "bg-amber-400/10",
      text: "text-amber-400",
      description: "Crafting beautiful, snappy, and fluid user interfaces",
      skills: [
        "React.js",
        "Redux Toolkit",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Responsive Web Design",
        "HTML5",
        "CSS3",
        "GSAP",
      ],
    },
    Backend: {
      icon: Database,
      color: "from-purple-500 to-indigo-600",
      shadow: "shadow-purple-500/50",
      border: "border-purple-400",
      bg: "bg-purple-400/10",
      text: "text-purple-400",
      description: "Engineering robust pipelines, APIs, and microservices",
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "WebSockets",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "Prisma ORM",
      ],
    },
    Security: {
      icon: ShieldCheck,
      color: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-500/50",
      border: "border-emerald-400",
      bg: "bg-emerald-400/10",
      text: "text-emerald-400",
      description: "Securing modern web infrastructures & user data",
      skills: [
        "JWT",
        "OAuth 2.0",
        "Data Validation",
        "Encryption",
        "Helmet.js",
        "CORS",
      ],
    },
    Performance: {
      icon: Zap,
      color: "from-rose-400 to-red-500",
      shadow: "shadow-rose-500/50",
      border: "border-rose-400",
      bg: "bg-rose-400/10",
      text: "text-rose-400",
      description: "Scaling databases, caching, and distribution protocols",
      skills: ["Caching (Redis)", "Load Balancing", "Docker", "AWS", "CI/CD"],
    },
    "UI/UX & Tools": {
      icon: User,
      color: "from-cyan-400 to-blue-500",
      shadow: "shadow-cyan-500/50",
      border: "border-cyan-400",
      bg: "bg-cyan-400/10",
      text: "text-cyan-400",
      description:
        "Architecting interactive designs and deployment configurations",
      skills: [
        "Figma",
        "Wireframing",
        "Accessibility (WCAG)",
        "Git",
        "GitHub",
        "Vite",
        "Postman",
      ],
    },
  },
  roles: {
    frontend: {
      Title: "Frontend Architect",
      icon: PanelRight,
      Projects: [
        {
          Title: "Automated Code Optimizer UI",
          Description:
            "Developed a high-fidelity web interface supporting multi-language analysis. Integrated elegant visualizations and visual metrics, improving code performance perception. Automated refactoring actions dynamically on visual editor canvases.",
          Metrics: ["95+ Lighthouse Score", "35% performance gain view"],
          Tech: ["React.js", "Tailwind CSS", "GSAP Animations", "Vite"],
        },
        {
          Title: "GTA 6 Immersive Clone",
          Description:
            "Built an award-grade interactive clone of the official Rockstar GTA 6 teaser website with extreme responsive parallax layouts, fully tracking cursor physics, custom sound decks, and stellar cinematic CSS layouts.",
          Metrics: ["100k+ Potential Reach", "GSAP Mouse Tracking"],
          Tech: [
            "JavaScript ES6+",
            "GSAP Core",
            "Parallax Engines",
            "HTML5 Canvas API",
          ],
        },
      ],
    },
    backend: {
      Title: "Backend Systems Engineer",
      icon: Server,
      Projects: [
        {
          Title: "Code Optimizer Core API",
          Description:
            "Designed a server system to ingest multi-language snippets, applying modern AST parser pipelines to optimize compilation targets. Configured reliable image manipulation pipelines secured by custom JWT systems.",
          Metrics: ["35% Faster Code Executions", "Rate Limiter Configured"],
          Tech: ["Node.js", "Express", "AST Parser Modules", "JWT Security"],
        },
        {
          Title: "Low-Latency Live Chat Engine",
          Description:
            "Engineered a low-latency chat hub running WebSocket streams. Configured multi-room support, security token validation on handshakes, and caching message delivery loops with state integrity checks.",
          Metrics: ["Sub-200ms Latency", "10k+ concurrent packets"],
          Tech: [
            "Socket.io",
            "Redis WebSockets",
            "Node.js Server",
            "MongoDB Store",
          ],
        },
      ],
    },
  },
};

function ParticleBackground({ activeTheme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = Math.min(Math.floor((width * height) / 9000), 160);
    const particles = [];
    const color = cosmicThemes[activeTheme].particleColor;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
        glow: Math.random() > 0.85,
        alpha: Math.random() * 0.6 + 0.2,
        alphaDir: Math.random() > 0.5 ? 0.003 : -0.003,
      });
    }

    let mouse = { x: null, y: null, radius: 130 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        40,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.7,
      );
      gradient.addColorStop(0, cosmicThemes[activeTheme].nebulaGlow);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Web aesthetic cosmic coordinate graph markings
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const step = 90;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Interactive gravity mechanics
        if (mouse.x !== null && mouse.y !== null) {
          const distX = p.x - mouse.x;
          const distY = p.y - mouse.y;
          const distance = Math.sqrt(distX * distX + distY * distY);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            p.x += (distX / distance) * force * 1.2;
            p.y += (distY / distance) * force * 1.2;
          }
        }

        p.alpha += p.alphaDir;
        if (p.alpha > 0.95 || p.alpha < 0.15) {
          p.alphaDir = -p.alphaDir;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.alpha;

        if (p.glow) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 block pointer-events-none"
    />
  );
}

function FuturisticAvatar({ activeTheme, size = "w-16 h-16" }) {
  const currentTheme = cosmicThemes[activeTheme] || cosmicThemes.andromeda;
  const mainColor = currentTheme.hologramColor;

  return (
    <div
      className={`relative ${size} flex items-center justify-center select-none`}
    >
      {/* Dynamic spinning orbital telemetry matrices */}
      <div
        className="absolute inset-0 border border-dashed rounded-full animate-spin [animation-duration:18s]"
        style={{ borderColor: `${mainColor}33` }}
      />
      <div
        className="absolute inset-1 border rounded-full animate-spin [animation-duration:11s] [animation-direction:reverse]"
        style={{ borderColor: `${mainColor}22` }}
      />
      <div
        className="absolute inset-2 rounded-full blur-md opacity-30"
        style={{
          background: `radial-gradient(circle, ${mainColor} 0%, transparent 85%)`,
        }}
      />

      {/* Futuristic Cyborg Cybernetic Core SVG Structure */}
      <svg
        viewBox="0 0 100 100"
        className="w-[85%] h-[85%] relative z-10 drop-shadow-[0_0_6px_rgba(99,102,241,0.35)]"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="#080c16"
          stroke={`${mainColor}44`}
          strokeWidth="1.2"
        />
        <path
          d="M 50 5 L 50 95 M 5 50 L 95 50"
          stroke={`${mainColor}11`}
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke={`${mainColor}22`}
          strokeWidth="0.8"
        />
        <rect
          x="47"
          y="56"
          width="6"
          height="8"
          rx="1.2"
          fill={`${mainColor}22`}
          stroke={`${mainColor}44`}
          strokeWidth="0.8"
        />
        <line
          x1="47"
          y1="60"
          x2="53"
          y2="60"
          stroke={mainColor}
          strokeWidth="0.8"
        />
        <path
          d="M 25 82 C 25 70, 34 62, 50 62 C 66 62, 75 70, 75 82 Z"
          fill={`${mainColor}18`}
          stroke={`${mainColor}99`}
          strokeWidth="1.2"
        />
        <path
          d="M 34 66 L 40 75 M 66 66 L 60 75"
          stroke={mainColor}
          strokeWidth="0.8"
          opacity="0.5"
        />
        <circle
          cx="50"
          cy="36"
          r="15"
          fill="#0f1422"
          stroke={`${mainColor}aa`}
          strokeWidth="1.2"
        />
        <path
          d="M 35 36 C 35 25, 42 20, 50 20 C 58 20, 65 25, 65 36 C 65 36, 61 28, 50 28 C 39 28, 35 36, 35 36 Z"
          fill={`${mainColor}33`}
        />
        <circle cx="63" cy="39" r="1.5" fill={mainColor} />
        <path d="M 63 39 L 57 43" stroke={mainColor} strokeWidth="0.8" />
        <rect
          x="38"
          y="30"
          width="24"
          height="6"
          rx="3"
          fill={mainColor}
          className="animate-pulse"
        />
        <path
          d="M 37 33 L 38 33 M 62 33 L 63 33"
          stroke={mainColor}
          strokeWidth="1.8"
        />
        <path
          d="M 41 32 L 49 32"
          stroke="#ffffff"
          strokeWidth="1.0"
          strokeLinecap="round"
          opacity="0.75"
        />
        <circle cx="56" cy="33" r="0.8" fill="#ffffff" />
      </svg>
    </div>
  );
}

function SpaceTerminal() {
  const [history, setHistory] = useState([
    { type: "sys", text: "SYSTEM INGESTION MAIN COMM PORT READY." },
    {
      type: "sys",
      text: 'Type "help" or select commands from prompt row below.',
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef(null);

  const commandPresets = [
    "about",
    "skills",
    "projects",
    "contact",
    "resume",
    "clear",
  ];

  const handleCommandRun = (cmdStr) => {
    const rawInput = cmdStr.trim();
    if (!rawInput) return;
    const cleanCmd = rawInput.toLowerCase();

    let outputResult = [];
    switch (cleanCmd) {
      case "help":
        outputResult = [
          { type: "input", text: rawInput },
          { type: "output", text: "Terminal Mainframe System Codes:" },
          {
            type: "output",
            text: "  - about     : Learn who Aditya is and basic metrics",
          },
          {
            type: "output",
            text: "  - skills    : Pull active technical stack nodes",
          },
          {
            type: "output",
            text: "  - projects  : Map and extract cosmic project developments",
          },
          {
            type: "output",
            text: "  - contact   : Secure contact coordination pathways",
          },
          {
            type: "output",
            text: "  - resume    : Display options to pull secure resume payload",
          },
          {
            type: "output",
            text: "  - clear     : Wipe screen logs from view",
          },
        ];
        break;
      case "about":
        outputResult = [
          { type: "input", text: rawInput },
          { type: "output", text: `CODENAME: ${combinedData.Name}` },
          {
            type: "output",
            text: "ROLE: Web Systems Dev & Full Stack Performance Optimizer",
          },
          { type: "output", text: "GEOLOCATION: Pune, India" },
          {
            type: "output",
            text: "SUMMARY: Building interactive, extremely detailed interfaces with lightning-fast APIs.",
          },
        ];
        break;
      case "skills":
        outputResult = [
          { type: "input", text: rawInput },
          { type: "output", text: "Decompiling core engineering skills..." },
          ...Object.entries(combinedData["Technical Skills"]).map(
            ([category, details]) => ({
              type: "output",
              text: `[${category.toUpperCase()}]: ${details.skills.join(", ")}`,
            }),
          ),
        ];
        break;
      case "projects":
        outputResult = [
          { type: "input", text: rawInput },
          {
            type: "output",
            text: "Fetching operational galaxy constellations...",
          },
          ...Object.entries(combinedData.roles).flatMap(([rKey, value]) =>
            value.Projects.map((p) => ({
              type: "output",
              text: `🌟 [${value.Title}] ${p.Title}: ${p.Description} [Core Tech: ${p.Tech.join(", ")}]`,
            })),
          ),
        ];
        break;
      case "contact":
        outputResult = [
          { type: "input", text: rawInput },
          { type: "output", text: "Coordinate protocols established:" },
          {
            type: "output",
            text: `  - Phone No : ${combinedData.Contact.Phone}`,
          },
          {
            type: "output",
            text: `  - Email ID : ${combinedData.Contact.Email}`,
          },
          { type: "output", text: `  - GitHub   : ${combinedData.GitHub}` },
          { type: "output", text: `  - LinkedIn : ${combinedData.LinkedIn}` },
        ];
        break;
      case "resume":
        outputResult = [
          { type: "input", text: rawInput },
          { type: "output", text: "ACCESSING CLOUD STORAGE DECK..." },
          {
            type: "output",
            text: `CHECK SYSTEM PREVIEW: ${combinedData.ResumeLink}`,
          },
          {
            type: "output",
            text: `DIRECT HARD DOWNLOAD: ${combinedData.ResumeDownload}`,
          },
          {
            type: "output",
            text: "Redirect triggered to live web check standard.",
          },
        ];
        window.open(combinedData.ResumeLink, "_blank");
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        outputResult = [
          { type: "input", text: rawInput },
          {
            type: "output",
            text: `Code sequence "${rawInput}" unrecognized. Type "help" to display presets.`,
          },
        ];
    }

    setHistory((prev) => [...prev, ...outputResult]);
    setInputVal("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="bg-black/90 border border-slate-800/80 rounded-xl p-4 font-mono text-xs sm:text-sm shadow-2xl backdrop-blur-md h-[340px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-2 text-slate-500">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
          <span className="text-[10px] uppercase tracking-wider font-semibold ml-2">
            aditya_mainframe_secure.sh
          </span>
        </div>
        <div className="flex items-center space-x-1 text-[10px] text-slate-600">
          <Terminal size={10} />
          <span>SH_SECURE_LINK</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 text-slate-300 custom-scrollbar">
        {history.map((log, index) => (
          <div key={index} className="leading-relaxed">
            {log.type === "input" && (
              <span className="text-teal-400">
                <span className="text-slate-600">aditya@terminal-deck:~$</span>{" "}
                {log.text}
              </span>
            )}
            {log.type === "output" && (
              <span className="text-indigo-200 block pl-3 border-l border-indigo-500/20">
                {log.text}
              </span>
            )}
            {log.type === "sys" && (
              <span className="text-amber-400 font-semibold block">
                {log.text}
              </span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>


      <div className="py-2 border-t border-slate-900 flex flex-wrap gap-1.5 items-center">
        <span className="text-[9px] text-slate-600 uppercase font-bold mr-1">
          Hotkeys:
        </span>
        {commandPresets.map((preset) => (
          <button
            key={preset}
            onClick={() => handleCommandRun(preset)}
            className="px-2 py-0.5 rounded bg-slate-900/90 hover:bg-slate-800 text-[10px] font-bold text-slate-400 hover:text-white transition-colors border border-slate-800/60"
          >
            {preset}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommandRun(inputVal);
        }}
        className="flex items-center border-t border-slate-900 pt-2 text-slate-300 mt-1"
      >
        <span className="text-slate-600 mr-1.5 font-bold">
          aditya@terminal-deck:~$
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Input operational mainframe command code..."
          className="bg-transparent border-none  outline-none flex-1 text-teal-300 placeholder-slate-700 font-mono text-xs"
        />
        <button
          type="submit"
          className="p-1 hover:text-white text-slate-500 transition-colors"
        >
          <Send size={12} />
        </button>
      </form>
    </div>
  );
}

const PlanetNode = ({
  category,
  categoryInfo,
  index,
  total,
  onSelect,
  active,
  orbitRadius,
}) => {
  const Icon = categoryInfo.icon;
  const angle = (index / total) * 2 * Math.PI;
  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div className="absolute transition-transform duration-300 ease-out z-10">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ x, y, scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 55,
          damping: 11,
          delay: index * 0.08,
        }}
      >
        <svg
          className="absolute top-1/2 left-1/2 -z-10 overflow-visible pointer-events-none"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <line
            x1="0"
            y1="0"
            x2={-x}
            y2={-y}
            className="stroke-slate-700/30 stroke-[1]"
            strokeDasharray="3 3"
          />
        </svg>

        <motion.div
          onTap={() => onSelect(category)}
          whileHover={{ scale: 1.1, y: -2 }}
          className="relative group cursor-pointer flex flex-col items-center justify-center"
        >
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${categoryInfo.color} p-[1.5px] transition-all duration-300 shadow-md ${active ? `scale-110 ring-2 ring-offset-2 ring-offset-slate-950 ring-indigo-400 ${categoryInfo.shadow}` : "hover:shadow-lg hover:shadow-indigo-500/20"}`}
          >
            <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-1.5 text-center select-none">
              <Icon
                className={`w-5 h-5 sm:w-6 sm:h-6 ${categoryInfo.text} mb-1 group-hover:scale-110 transition-transform`}
              />
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-300 leading-none tracking-tight">
                {category}
              </span>
            </div>
          </div>

          <div className="absolute inset-0 -m-2 border border-indigo-400/10 rounded-full animate-pulse pointer-events-none group-hover:scale-105 transition-all duration-300" />

          {active && (
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-amber-400"
              animate={{
                x: [20, -20, 20],
                y: [-20, 20, -20],
              }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

function ConstellationView({ activeRole }) {
  const currentRoleData = combinedData.roles[activeRole];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between border-b border-slate-900 pb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400 animate-spin [animation-duration:10s]" />
            Development Constellation
          </h3>
          <p className="text-[11px] text-slate-500">
            Connected system blueprints
          </p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 rounded-full border border-slate-800 text-amber-400 uppercase tracking-wider font-semibold">
          {currentRoleData.Title}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {currentRoleData.Projects.map((proj, index) => (
          <motion.div
            key={proj.Title}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            className="group relative bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-900 hover:border-slate-800 rounded-xl p-4 transition-all shadow-md hover:shadow-lg overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/8 transition-colors" />

            <div className="flex items-start justify-between mb-2 relative z-10">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-indigo-950/40 border border-indigo-950 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-black transition-colors duration-250">
                  <Layers size={14} />
                </div>
                <h4 className="font-bold text-slate-200 group-hover:text-amber-400 transition-colors duration-250 text-base">
                  {proj.Title}
                </h4>
              </div>
              <div className="flex gap-1 flex-wrap justify-end">
                {proj.Metrics.map((met, mIdx) => (
                  <span
                    key={mIdx}
                    className="text-[9px] font-mono bg-slate-900 text-teal-400 px-1.5 py-0.5 rounded border border-slate-800"
                  >
                    {met}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-3 pl-1">
              {proj.Description}
            </p>

            <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-950">
              {proj.Tech.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/10 text-indigo-300 border border-indigo-900/30 hover:border-indigo-500/30 transition-colors duration-150"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function DeveloperUniverse() {
  const [activeTab, setActiveTab] = useState("universe");
  const [activeRole, setActiveRole] = useState("frontend");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTheme, setActiveTheme] = useState("andromeda");
  const [copiedText, setCopiedText] = useState(false);

  const currentRoleData = combinedData.roles[activeRole];
  const skillCategories = Object.keys(combinedData["Technical Skills"]);

  const orbitRadius = 125;

  const handleSelectCategory = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const copyEmailToClipboard = () => {
    const email = combinedData.Contact.Email;
    // Robust copy implementation for secure / unsecure Canvas iFrame sandbox integrations
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    } catch (err) {
      console.error("Failed to execute clipboard write: ", err);
    }
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden font-sans text-slate-200 flex flex-col transition-all duration-700 select-none pb-12"
      style={{ background: cosmicThemes[activeTheme].bg }}
    >
      <ParticleBackground activeTheme={activeTheme} />

      {/* Dynamic structural HUD layout */}
      <main className="relative z-10 mt-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Core Deck controller section */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex bg-slate-950/80 border border-slate-900 p-1 rounded-xl gap-1.5 shadow-xl">
            <button
              onClick={() => {
                setActiveTab("universe");
                setSelectedCategory(null);
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "universe" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15" : "hover:bg-slate-900 text-slate-500"}`}
            >
              <Compass size={14} />
              Orbit Deck
            </button>
            <button
              onClick={() => setActiveTab("constellation")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "constellation" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15" : "hover:bg-slate-900 text-slate-500"}`}
            >
              <Layers size={14} />
              Projects
            </button>
            <button
              onClick={() => setActiveTab("terminal")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "terminal" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15" : "hover:bg-slate-900 text-slate-500"}`}
            >
              <Terminal size={14} />
              Console Terminal
            </button>
          </div>

          <div className="relative bg-slate-950/40 border border-slate-900/80 rounded-xl p-5 h-[440px] sm:h-[480px] flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-md">
            <AnimatePresence mode="wait">
              {activeTab === "universe" && (
                <motion.div
                  key="universe-deck"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full h-full relative flex items-center justify-center"
                >
                  {selectedCategory ? (
                    <motion.div
                      key="skill-expanded"
                      className="absolute inset-2 sm:inset-4 bg-slate-950/95 rounded-xl border border-slate-800 p-5 flex flex-col justify-between backdrop-blur-xl"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div>
                        <div className="flex items-center justify-between border-b border-slate-900 pb-2.5 mb-3.5">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`p-1.5 rounded bg-gradient-to-br ${combinedData["Technical Skills"][selectedCategory].color} text-black`}
                            >
                              {React.createElement(
                                combinedData["Technical Skills"][
                                  selectedCategory
                                ].icon,
                                { size: 16 },
                              )}
                            </div>
                            <div>
                              <h3 className="text-base font-extrabold text-white tracking-wide">
                                {selectedCategory}
                              </h3>
                              <p className="text-[10px] text-slate-500 mt-0.5">
                                {
                                  combinedData["Technical Skills"][
                                    selectedCategory
                                  ].description
                                }
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedCategory(null)}
                            className="px-2 py-0.5 hover:bg-slate-900 rounded text-xs text-slate-400 hover:text-white transition-colors border border-slate-900"
                          >
                            Close
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {combinedData["Technical Skills"][
                            selectedCategory
                          ].skills.map((skill, index) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.04 }}
                              className="flex items-center gap-2 bg-slate-950/85 p-2 rounded border border-slate-900 hover:border-slate-800 transition-all group"
                            >
                              <CheckCircle2
                                size={12}
                                className="text-indigo-400 group-hover:scale-110 transition-transform"
                              />
                              <span className="text-[11px] sm:text-xs text-slate-300 group-hover:text-white transition-colors">
                                {skill}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="text-[9px] font-mono text-slate-600 border-t border-slate-900 pt-2.5 flex items-center justify-between">
                        <span>
                          MODULE: CORE_SKILL_MATRIX_
                          {selectedCategory.toUpperCase()}
                        </span>
                        <span className="text-indigo-400 animate-pulse">
                          INTEGRITY ONLINE
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="orbit-deck-view"
                      className="relative w-full h-full flex items-center justify-center"
                      initial={{ scale: 0.98, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.98, opacity: 0 }}
                    >
                      <div className="absolute w-[240px] h-[240px] border border-dashed border-slate-800/25 rounded-full pointer-events-none animate-spin [animation-duration:140s]" />
                      <div className="absolute w-[320px] h-[320px] border border-slate-900/25 rounded-full pointer-events-none" />

                      <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-950 border border-indigo-500/20 flex flex-col items-center justify-center text-center p-2 shadow-2xl">
                        <div className="absolute inset-0 bg-indigo-500/5 rounded-full blur-md animate-pulse pointer-events-none" />

                        <FuturisticAvatar
                          activeTheme={activeTheme}
                          size="w-12 h-12 sm:w-14 sm:h-14"
                        />

                        <h2 className="text-[10px] sm:text-xs font-black text-white mt-1">
                          {combinedData.Name}
                        </h2>
                        <p className="text-[8px] uppercase tracking-wider text-amber-400 font-mono font-semibold">
                          {currentRoleData.Title}
                        </p>
                      </div>

                      {skillCategories.map((category, idx) => (
                        <PlanetNode
                          key={category}
                          category={category}
                          categoryInfo={
                            combinedData["Technical Skills"][category]
                          }
                          index={idx}
                          total={skillCategories.length}
                          onSelect={handleSelectCategory}
                          active={selectedCategory === category}
                          orbitRadius={orbitRadius}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              )}

              {activeTab === "constellation" && (
                <motion.div
                  key="constellation-deck"
                  className="w-full h-full overflow-y-auto pr-2 custom-scrollbar"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <ConstellationView activeRole={activeRole} />
                </motion.div>
              )}

              {activeTab === "terminal" && (
                <motion.div
                  key="terminal-deck"
                  className="w-full h-full"
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                >
                  <SpaceTerminal />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Supporting telemetry metrics sidebar column */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-3.5 flex flex-col gap-2">
            <span className="text-[9px] uppercase font-bold tracking-widest text-slate-600">
              Active Sector Control
            </span>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setActiveRole("frontend");
                  setSelectedCategory(null);
                }}
                className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-bold transition-all border ${activeRole === "frontend" ? "bg-amber-400/10 border-amber-400/40 text-amber-400 shadow-sm shadow-amber-400/5" : "bg-slate-950/50 border-slate-900 text-slate-500 hover:text-slate-300"}`}
              >
                <PanelRight size={12} />
                Frontend Dev
              </button>

              <button
                onClick={() => {
                  setActiveRole("backend");
                  setSelectedCategory(null);
                }}
                className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-bold transition-all border ${activeRole === "backend" ? "bg-purple-400/10 border-purple-400/40 text-purple-400 shadow-sm shadow-purple-400/5" : "bg-slate-950/50 border-slate-900 text-slate-500 hover:text-slate-300"}`}
              >
                <Server size={12} />
                Backend Dev
              </button>
            </div>
          </div>

          <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 border-b border-slate-900 pb-2.5 mb-3.5 justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <h4 className="text-[10px] uppercase font-extrabold text-slate-500 tracking-wider">
                  Metrics Monitoring
                </h4>
              </div>
              <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                OPERATIONAL
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {combinedData.Stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-950/50 border border-slate-900 p-2.5 rounded-lg flex flex-col justify-between"
                >
                  <span className="text-[9px] text-slate-600 font-mono font-semibold uppercase">
                    {stat.label}
                  </span>
                  <span className="text-xl font-black text-white mt-1 tracking-tight">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-950/15 to-purple-950/15 border border-indigo-950/40 rounded-xl p-4.5 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />

            <h4 className="text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <User size={12} className="text-indigo-400" />
              Mainframe Decodes
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3.5">
              Refactoring digital pipelines to minimize lag coordinates and
              elevate high lighthouse audit ratings. Connect securely.
            </p>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] bg-slate-950/50 p-2 rounded border border-slate-900 font-mono">
                <span className="text-slate-600">GEOLOCATION:</span>
                <span className="text-slate-400 font-semibold">
                  {combinedData.Contact.Location}
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] bg-slate-950/50 p-2 rounded border border-slate-900 font-mono">
                <span className="text-slate-600">COORDINATE LINK:</span>
                <span
                  className="text-indigo-400 hover:underline cursor-pointer"
                  onClick={copyEmailToClipboard}
                >
                  {combinedData.Contact.Email}
                </span>
              </div>

              <div className="flex justify-between items-center mt-5">
                {/* Dynamic theme, coordination switches, and Resume split controllers */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-slate-950/80 border border-slate-900 rounded-lg p-1 gap-1">
                    <span className="text-[9px] uppercase font-bold text-slate-600 px-1.5">
                    Theme:
                    </span>
                    {Object.keys(cosmicThemes).map((themeKey) => (
                      <button
                        key={themeKey}
                        onClick={() => setActiveTheme(themeKey)}
                        className={`px-2.5 py-0.5 rounded text-[10px] transition-all ${activeTheme === themeKey ? "bg-indigo-600 text-white font-semibold" : "hover:bg-slate-900 text-slate-500 hover:text-slate-300"}`}
                      >
                        {themeKey === "andromeda"
                          ? "Violet"
                          : themeKey === "supernova"
                            ? "Amber"
                            : "Cyan"}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-950/80 border border-slate-900 rounded-lg p-1">
                    <a
                      href={`https://${combinedData.LinkedIn}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-slate-900 text-slate-500 hover:text-slate-200 rounded transition"
                      title="LinkedIn Node"
                    >
                      <Linkedin size={14} />
                    </a>
                    <a
                      href={`https://${combinedData.GitHub}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-slate-900 text-slate-500 hover:text-slate-200 rounded transition"
                      title="GitHub Node"
                    >
                      <Github size={14} />
                    </a>
                    <button
                      onClick={copyEmailToClipboard}
                      className="p-1.5 hover:bg-slate-900 text-slate-500 hover:text-slate-200 rounded transition relative mr-1"
                      title="Copy transmission IP mail"
                    >
                      <Mail size={14} />
                      {copiedText && (
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[9px] px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </button>

                    {/* Futuristic Split Control Key - Check Online OR Direct Download */}
                    <div className="flex items-center bg-slate-900/60 border border-slate-800 rounded-md p-0.5 overflow-hidden">
                      <a
                        href={combinedData.ResumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 text-[9px] font-bold uppercase transition duration-150"
                        title="View Resume Online (New Window)"
                      >
                        <Eye size={10} />
                        <span>Check</span>
                      </a>
                      <span className="w-px h-3 bg-slate-800" />
                      <a
                        href={combinedData.ResumeDownload}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded text-amber-300 hover:text-amber-200 hover:bg-amber-400/10 text-[9px] font-bold uppercase transition duration-150"
                        title="Download Raw PDF File Payload"
                      >
                        <Download size={10} className="animate-pulse" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dual-action cybernetic resume control unit block */}
              <div className="bg-slate-950/75 border border-slate-900/90 rounded-lg p-2.5 mt-2 space-y-2">
                <div className="flex items-center gap-1.5 border-b border-slate-900 pb-1.5">
                  <FileText
                    size={12}
                    className="text-indigo-400 animate-pulse"
                  />
                  <span className="text-slate-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                    RESUME_CONTROL_UNIT.EXE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={combinedData.ResumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-[10px] font-bold text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition duration-150"
                  >
                    <Eye size={11} className="text-indigo-400" />
                    <span>Check View</span>
                  </a>

                  <a
                    href={combinedData.ResumeDownload}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 rounded bg-amber-400/10 hover:bg-amber-400/20 text-[10px] font-bold text-amber-300 hover:text-amber-200 border border-amber-400/30 hover:border-amber-400/60 transition duration-150"
                  >
                    <Download
                      size={11}
                      className="text-amber-400 animate-bounce"
                    />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 border-t border-slate-900 mt-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-600 font-mono">
        <div>
          <span>// MAIN DECK SYS: </span>
          <span className="text-slate-400">ADITYA PATIL PORTFOLIO v5.3</span>
        </div>
        <div>
          <span>COSMIC SHADERS ONLINE // PUNE, INDIA</span>
        </div>
      </footer>
    </div>
  );
}
