"use client";

import React, { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiFlutter,
  SiGodotengine,
  SiJavascript,
  SiDart,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

/* ---------------------------
   Types
   --------------------------- */
type TabKey = "web" | "mobile" | "game";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  /** optional short label or version */
  meta?: string;
}

interface SkillCategory {
  title: string;
  desc: string;
  stack: TechItem[];
}

interface SkillData {
  [key: string]: SkillCategory;
}

interface ComponentsSkillHomeProps {
  /** initial active tab (web | mobile | game) */
  initialTab?: TabKey;
  /** optional callback ketika tab berubah */
  onChangeTab?: (tab: TabKey) => void;
}

/* ---------------------------
   Component
   --------------------------- */
export default function ComponentsSkillHome({
  initialTab = "web",
  onChangeTab,
}: ComponentsSkillHomeProps): JSX.Element {
  const [active, setActive] = useState<TabKey>(initialTab);

  const skillData: SkillData = {
    web: {
      title: "Fullstack Web Developer",
      desc: "As a fullstack web developer, I focus on creating modern, efficient, and high performance web apps. I combine clean UI, optimized backend systems, and reliable databases to ensure every project is fast, secure, and scalable. I enjoy turning ideas into real products with smooth functionality and a consistent user experience.",
      stack: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "Typescript", icon: <BiLogoTypescript /> },
        { name: "Tailwind", icon: <RiTailwindCssFill /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Firebase", icon: <IoLogoFirebase /> },
      ],
    },
    mobile: {
      title: "Mobile Developer (Flutter)",
      desc: "As a Mobile Developer fucused on Flutter, I build cross-platform mobile apps that feel natural and perform extremely well on both Android and iOS. And I focus on intuitive UI, stable architecture, and reusable components to keep apps clean, maintainable, and future proof.",
      stack: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    game: {
      title: "Game Developer (Godot)",
      desc: "As a game developer, I focus first on pixel art game before entering 3D Game. I use Godot to build 2D games with classic charm and modern polish. I focus on fluid player movement, hand-crafted animations, satisfying game feel, and clean modular code structure. My work often involves level design, state machines, NPC interactions, UI games, and small details that make pixel-art worlds feel alive.",
      stack: [
        { name: "Godot Engine", icon: <SiGodotengine /> },
        { name: "GDScript", icon: <SiGodotengine /> },
      ],
    },
  };

  const current = skillData[active];

  function changeTab(tab: TabKey) {
    setActive(tab);
    if (onChangeTab) onChangeTab(tab);
  }

  return (
    <section id="skill" className="w-full py-14 relative bg-gray-900">
      {/* BACKGROUND BLOB */}
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl">
        <div className="w-72 h-72 bg-purple-500 rounded-full absolute top-10 left-20 mix-blend-multiply" />
        <div className="w-72 h-72 bg-blue-500 rounded-full absolute bottom-10 right-20 mix-blend-multiply" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Skills</h2>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-12 px-10">
          {([
            { key: "web", label: "Web Developer" },
            { key: "mobile", label: "Mobile Developer" },
            { key: "game", label: "Game Developer" },
          ] as { key: TabKey; label: string }[]).map((btn) => (
            <button
              key={btn.key}
              onClick={() => changeTab(btn.key)}
              className={`px-6 py-2 rounded-full text-sm transition-all border ${
                active === btn.key
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg"
                  : "bg-white/10 text-gray-300 border-white/20 hover:bg-white/20"
              }`}
              aria-pressed={active === btn.key}
              aria-label={`Show ${btn.label}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — DESCRIPTION */}
          <div className="space-y-4 -mt-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                {current.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{current.desc}</p>
          </div>

          {/* RIGHT — TECHNOLOGIES */}
          <div className="grid grid-cols-2 gap-4">
            {current.stack.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl hover:scale-[1.03] transition"
              >
                <div className="text-xl text-white">{item.icon}</div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-200">{item.name}</span>
                  {item.meta && <small className="text-xs text-gray-400">{item.meta}</small>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
