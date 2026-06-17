"use client";

import React, { useState } from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import {SiNextdotjs,SiFlutter,SiGodotengine,SiDart,SiReact,SiNodedotjs,} from "react-icons/si";

// Types
type TabKey = "web" | "mobile" | "game";

interface TechItem {
  name: string;
  icon: React.ReactNode;
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
  initialTab?: TabKey;
  onChangeTab?: (tab: TabKey) => void;
}

// Component Starts Here
export default function ComponentsSkillHome({
  initialTab = "web",
  onChangeTab,
}: ComponentsSkillHomeProps): JSX.Element {
  const [active, setActive] = useState<TabKey>(initialTab);

  const skillData: SkillData = {
    web: {
      title: "Fullstack Web Developer",
      desc: "Focusing on creating modern, efficient, and high-performance web apps. I combine clean UI layouts, optimized backend architecture, and reliable databases to ensure every project is fast, secure, and scalable. I enjoy turning complex system logic into functional web products.",
      stack: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "React", icon: <SiReact /> },
        { name: "Typescript", icon: <BiLogoTypescript /> },
        { name: "Tailwind", icon: <RiTailwindCssFill /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
        { name: "Firebase", icon: <IoLogoFirebase /> },
        { name: "Supabase", icon: <RiSupabaseFill /> }
      ],
    },
    mobile: {
      title: "Hobbyist Mobile App Developer",
      desc: "Building cross-platform mobile apps using Flutter that perform seamlessly across Android and iOS platforms. I focus on implementing stable component architectures and crafting smooth, responsive interfaces to ensure long-term code maintainability.",
      stack: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Firebase", icon: <IoLogoFirebase /> },
      ],
    },
    game: {
      title: "Hobbyist Game Developer",
      desc: "Creating 2D games for fun using the Godot Engine. I focus heavily on 2D pixel art environments, crafting smooth character controllers, fine-tuning hand-drawn state animations, and implementing clean modular systems to bring small virtual worlds to life.",
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
    <section id="skill" className="w-full py-20 relative bg-zinc-900 font-mono text-white overflow-hidden">
      {/* Dekorasi Garis Grid Latar Belakang */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10 uppercase tracking-tight">
          My Skills
        </h2>

        {/* FILTER BUTTONS (RETRO ARCADES TABS) */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 max-w-2xl mx-auto">
          {([
            { key: "web", label: "Web Dev" },
            { key: "mobile", label: "Mobile Dev" },
            { key: "game", label: "Game Dev" },
          ] as { key: TabKey; label: string }[]).map((btn) => {
            const isSelected = active === btn.key;
            return (
              <button
                key={btn.key}
                onClick={() => changeTab(btn.key)}
                className={`px-5 py-2 text-sm font-black uppercase tracking-wider border-4 border-black transition-all ${
                  isSelected
                    ? "bg-emerald-400 text-black shadow-[4px_4px_0px_0px_#000] translate-x-[-2px] translate-y-[-2px]"
                    : "bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-800 shadow-[2px_2px_0px_0px_#000] active:translate-y-[2px] active:shadow-none"
                }`}
                aria-pressed={isSelected}
                aria-label={`Show ${btn.label}`}
              >
                [ {btn.label} ]
              </button>
            );
          })}
        </div>

        {/* DISPLAY BOX INTERFACE */}
        <div className="grid md:grid-cols-12 gap-8 items-start bg-zinc-950 p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000]">
          
          {/* LEFT — COMPONENT STATUS LOG / DESCRIPTION (4 Columns) */}
          <div className="md:col-span-5 space-y-4 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-zinc-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
              Skill Description
            </div>
            <h3 className="text-xl font-black uppercase text-white tracking-wide">
              {current.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed tracking-wide text-justify">
              {current.desc}
            </p>
          </div>

          {/* RIGHT — ITEM GRID SLOT (7 Columns) */}
          <div className="md:col-span-7 space-y-4 md:pl-2">
            <div className="text-xs font-bold text-zinc-500 tracking-widest uppercase mb-2">
              -- Tech Stack List ({current.stack.length}) --
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.stack.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-zinc-800 transition-colors group select-none"
                >
                  <div className="text-2xl text-emerald-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-zinc-200 tracking-wide uppercase">
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}