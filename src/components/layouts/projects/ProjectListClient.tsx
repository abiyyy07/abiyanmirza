"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogleDrive, FaLock, FaGlobe, FaSearch } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { projects } from "@/lib/projects/allProject";

export default function ProjectListClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const types = ["All", "Web App", "Mobile App"];

  // Logic Filtering
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === "All" || project.tags.includes(selectedType);

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const getLinkContent = (type?: string) => {
    switch (type) {
      case "drive":
        return { label: "Try App", icon: <FaGoogleDrive className="text-emerald-400" /> };
      case "playstore":
        return { label: "PlayStore", icon: <BiLogoPlayStore className="text-blue-400" /> };
      case "web":
        return { label: "Visit Web", icon: <FaGlobe className="text-cyan-400" /> };
      default:
        return { label: "Launch", icon: <FaGlobe className="text-zinc-400" /> };
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-mono selection:bg-emerald-400/30 pb-20 relative">
      {/* Dekorasi Garis Kotak-Kotak Latar Belakang */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 lg:pt-28">
        
        {/* HEADER TITLE */}
        <header className="mb-8">
          <div className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-2 text-center md:text-left">
            &gt;_ All Projects
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center md:text-left mt-2">
            Features All Completed Projects.
          </h1>

          {/* SEARCH BAR — BRUTALIST STYLE */}
          <div className="relative mt-4 w-full group">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" />
            <input
              type="text"
              placeholder="Search projects by title..."
              className="w-full bg-zinc-950 border-4 border-black py-4 pl-14 pr-4 focus:outline-none focus:border-emerald-400 shadow-[4px_4px_0px_0px_#000] transition-all text-zinc-200 placeholder-zinc-600 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        {/* MAIN TWO-COLUMN SYSTEM INTERFACE */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">
          
          {/* LEFT: MAIN DATABASE PROJECTS GRID (3/4 Width) */}
          <div className="flex-grow w-full lg:w-3/4">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((item, i) => (
                  <div
                    key={item.id}
                    className="group bg-zinc-950 border-4 border-black p-4 flex flex-col shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                  >
                    {/* VISUAL FILE CAPSULE */}
                    <div className="relative aspect-video bg-zinc-900 border-2 border-black overflow-hidden mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="group-hover:scale-102 transition-all duration-300 contrast-110"
                      />
                    </div>

                    {/* METADATA TAGS */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800 uppercase tracking-tight"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* PROJECT TITLE */}
                    <h3 className="text-lg font-black uppercase mb-1.5 group-hover:text-emerald-400 transition-colors tracking-wide">
                      {item.title}
                    </h3>
                    
                    {/* EXTRACTED LOG DESCRIPTION */}
                    <p className="text-zinc-400 text-xs leading-relaxed mb-6 line-clamp-2">
                      {item.description}
                    </p>

                    {/* ACTION BUTTONS */}
                    <div className="mt-auto flex gap-3">
                      <Link
                        href={item.detailLink}
                        className="flex-[1.2] text-center py-2 bg-zinc-100 text-black font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-black hover:border-zinc-100 hover:text-zinc-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                      >
                        View Detail
                      </Link>
                      
                      {item.isPrivate ? (
                        <button className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-zinc-900 text-zinc-600 border-2 border-zinc-800 text-xs font-bold uppercase cursor-not-allowed select-none">
                          <FaLock size={9} /> Private
                        </button>
                      ) : (
                        <Link
                          href={item.externalLink || "#"}
                          target="_blank"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-zinc-950 text-zinc-300 font-bold border-2 border-black text-xs uppercase shadow-[2px_2px_0px_0px_#000] hover:bg-emerald-400 hover:text-black active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                        >
                          {getLinkContent(item.linkType).icon}
                          <span>{getLinkContent(item.linkType).label}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-zinc-950 border-4 border-black border-dashed shadow-[4px_4px_0px_0px_#000]">
                <p className="text-zinc-600 font-bold uppercase text-xs tracking-widest animate-pulse">
                  [!] No Matching Searches
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: FILTER SIDEBAR COMPONENT */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24">
            <div className="bg-zinc-950 border-4 border-black p-5 shadow-[4px_4px_0px_0px_#000]">
              <h4 className="text-xs uppercase tracking-widest font-black text-zinc-500 mb-4 border-b border-zinc-800 pb-2">
                -- Filter Based on Category --
              </h4>
              <div className="flex flex-col gap-2.5">
                {types.map((type) => {
                  const isSelected = selectedType === type;
                  return (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`text-left px-4 py-3 font-black text-xs uppercase tracking-wider border-2 border-black transition-all ${
                        isSelected
                          ? "bg-emerald-400 text-black shadow-[3px_3px_0px_0px_#000] translate-x-[-1px] translate-y-[-1px]"
                          : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
              
              {/* STATUS MONITOR INFO */}
              <div className="mt-4 pt-4 border-t-2 border-dashed border-zinc-800 text-[10px] text-zinc-500 leading-normal uppercase tracking-wider">
                <div className="mt-1 text-emerald-500/80">Showed: {filteredProjects.length} Projects</div>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}