import {
  Code2,
  Database,
  Server,
  Github,
  Layers,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Tools = () => {
  return (
    <section className="bg-[#0b0f19] py-20">

      {/* 🔥 Heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-14">
        <p className="text-purple-400 mb-3">● My Tools</p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
          Build, scale & deliver with{" "}
          <span className="text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-400 to-cyan-400">
            my tech stack
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-12">

        {/* FRONTEND */}
        <Section
          title="Frontend"
          tools={[
            { name: "HTML5", desc: "Structure of web", icon: <Code2 />, percent: "98%" },
            { name: "CSS3 / Bootstrap", desc: "Responsive styling", icon: <Layers />, percent: "95%" },
            { name: "JavaScript", desc: "Core logic", icon: <Cpu />, percent: "96%" },
            { name: "React.js", desc: "Frontend framework", icon: <Code2 />, percent: "95%" },
            { name: "Tailwind CSS", desc: "Modern UI design", icon: <Layers />, percent: "97%" },
          ]}
        />

        {/* BACKEND */}
        <Section
          title="Backend & API"
          tools={[
            { name: "Node.js", desc: "Backend runtime", icon: <Server />, percent: "92%" },
            { name: "Express.js", desc: "API framework", icon: <Cpu />, percent: "90%" },
            { name: "Flask", desc: "Python backend", icon: <Server />, percent: "85%" },
            { name: "REST API", desc: "API architecture", icon: <Server />, percent: "93%" },
            { name: "JWT Auth", desc: "Secure authentication", icon: <ShieldCheck />, percent: "91%" },
          ]}
        />

        {/* DATABASE */}
        <Section
          title="Database"
          tools={[
            { name: "MongoDB", desc: "NoSQL database", icon: <Database />, percent: "88%" },
            { name: "MySQL", desc: "Relational database", icon: <Database />, percent: "93%" },
            { name: "JSON", desc: "Data format", icon: <Database />, percent: "97%" },
          ]}
        />

        {/* TOOLS */}
        <Section
          title="Tools"
          tools={[
            { name: "Git & GitHub", desc: "Version control", icon: <Github />, percent: "94%" },
          ]}
        />

      </div>

    </section>
  );
};

export default Tools;



// 🔥 SECTION COMPONENT
const Section = ({ title, tools }) => (
  <div>
    <h3 className="text-xl text-purple-400 mb-6">{title}</h3>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool, i) => (
        <Card key={i} tool={tool} delay={i * 100} />
      ))}
    </div>
  </div>
);



// 🔥 CARD COMPONENT (SCROLL COUNT)
const Card = ({ tool, delay }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef();

  const finalValue = parseInt(tool.percent);

  // 👀 Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 🔢 Counting logic
  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = finalValue / (1500 / 16);

    const counter = setInterval(() => {
      current += increment;

      if (current >= finalValue) {
        setCount(finalValue);
        clearInterval(counter);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, finalValue]);

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={delay}
      className="relative p-6 rounded-2xl 
      bg-white/5 backdrop-blur-xl

      shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]

      hover:-translate-y-2 hover:scale-105
      transition-all duration-300"
    >

      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl 
      bg-gradient-to-r from-purple-500/10 to-cyan-400/10 
      opacity-0 hover:opacity-100 blur-xl transition"></div>

      {/* Top */}
      <div className="flex items-center gap-4 relative z-10">

        <div className="p-3 rounded-xl bg-white/5 
        text-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.4)]">
          {tool.icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-200">
            {tool.name}
          </h3>
          <p className="text-sm text-gray-400">
            {tool.desc}
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-6 flex justify-between items-center relative z-10">

        {/* Progress */}
        <div className="w-[70%] h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"
            style={{ width: `${count}%` }}
          ></div>
        </div>

        {/* 🔥 COUNT */}
        <span className="text-xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-purple-400 to-cyan-400">
          {count}%
        </span>

      </div>

    </div>
  );
};