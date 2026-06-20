"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComponentsProjectHome() {
  const projects = [
    {
      id: "rid",
      title: "RID - License Management Apps",
      desc: "A functional system built to manage and audit database records, credentials, and active licensing for the RID Department within SSRP.",
      image: "/projek/rid/RID1.png",
      tags: ["Web_App", "Next.js", "Tailwind", "Firebase"],
    },
    {
      id: "afago",
      title: "Afago - Easy Car Rent",
      desc: "A mobile terminal designed to streamline vehicle fleet renting, integrated payment pipelines tracking, and live coordinate mapping.",
      image: "/projek/afago.jpg",
      tags: ["Mobile", "Flutter", "GetX", "Firebase"],
    },
    {
      id: "afarush",
      title: "Afarush - Speed Typer",
      desc: "A mobile application designed as a fast typing application between players to see who is the fastest.",
      image: "/projek/afarush.jpg",
      tags: ["Mobile", "Flutter", "GetX", "Firebase"],
    },
  ];

  return (
    <div id="project" className="bg-zinc-900 py-20 font-mono text-white relative overflow-hidden">
      {/* Dekorasi Grid Latar Belakang */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER ACCENT */}
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 bg-zinc-950 border-2 border-emerald-400 text-xs text-emerald-400 uppercase mb-4">
            Highlight 3 projects
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Completed Projects
          </h2>
        </div>

        {/* PROJECTS GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 mb-14">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-zinc-950 border-4 border-black shadow-[4px_4px_0px_0px_#000] p-4 flex flex-col hover:shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 group"
            >
              {/* STAGE IMAGE FRAME */}
              <div className="w-full h-44 bg-zinc-900 border-2 border-black mb-4 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-300 contrast-110"
                />
              </div>

              {/* CLASSIFICATION TAGS (Retro Badges) */}
              <div className="flex flex-wrap gap-1.5 mb-4 select-none">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold px-2 py-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 uppercase tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-black uppercase text-white tracking-wide mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              {/* DESCRIPTION LOG */}
              <p className="text-xs text-zinc-400 leading-relaxed tracking-wide mb-6 flex text-justify">
                {project.desc}
              </p>

              {/* PUSH ACTION BUTTON */}
              <Link
                href={`/project/${project.id}`}
                className="mt-auto block w-full text-center bg-zinc-900 text-zinc-300 font-bold text-xs uppercase border-2 border-black py-2 shadow-[2px_2px_0px_0px_#000] hover:bg-emerald-400 hover:text-black hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                View More
              </Link>
            </div>
          ))}
        </div>

        {/* BOTTOM GLOBAL VIEW ALL BUTTON */}
        <div className="text-center px-6">
          <Link
            href="/project"
            className="inline-block px-6 py-3.5 bg-emerald-400 text-black font-black uppercase border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:bg-emerald-300 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0px_0px_#000] transition-all tracking-wide text-sm"
          >
            Browse All Completed Projects
          </Link>
        </div>

      </div>
    </div>
  );
}