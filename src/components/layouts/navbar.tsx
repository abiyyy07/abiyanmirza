"use client";

import { FaCode, FaHome, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CgProfile, CgWebsite } from "react-icons/cg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  // posisi id
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "about", "skill", "project"];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      // threshold 0.3
      rootMargin: "-20% 0px -60% 0px", 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Close sidebar pas di-scroll
  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    document.addEventListener("scroll", close);
    return () => document.removeEventListener("scroll", close);
  }, [isOpen]);

  // Handler klik navigasi universal (Desktop & Mobile)
  const handleNavClick = (id: string) => {
    setIsOpen(false);

    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }
  };

  return (
    <>
      {/* NAVBAR RETRO STYLE */}
      <nav className="fixed top-0 left-0 right-0 bg-zinc-900 border-b-4 border-black text-white z-50 font-mono">
        <div className="max-w-7xl mx-auto px-5 h-16 flex justify-between items-center">
          
          {/* Brand ala Arcade Text */}
          <div className="text-xl font-bold uppercase tracking-wider select-none flex items-center gap-2">
            <span>Abiyan</span>
            <span className="bg-emerald-400 text-black px-1 py-0.5 shadow-[2px_2px_0px_0px_#000]">Mirza</span>
          </div>

          {/* Desktop Menu - Menu Pilihan ala RPG dengan deteksi Active State */}
          <div className="hidden md:flex items-center gap-6 font-bold">
            <button 
              onClick={() => handleNavClick("home")} 
              className={`hover:text-emerald-400 transition-all ${
                activeSection === "home" && pathname === "/"
                  ? "text-emerald-400" 
                  : ""
              }`}
            >
              [ HOME ]
            </button>
            <button 
              onClick={() => handleNavClick("about")} 
              className={`hover:text-emerald-400 transition-all ${
                activeSection === "about" && pathname === "/"
                  ? "text-emerald-400" 
                  : ""
              }`}
            >
              [ ABOUT ]
            </button>
            <button 
              onClick={() => handleNavClick("skill")} 
              className={`hover:text-emerald-400 transition-all ${
                activeSection === "skill" && pathname === "/"
                  ? "text-emerald-400" 
                  : ""
              }`}
            >
              [ SKILLS ]
            </button>
            <button 
              onClick={() => handleNavClick("project")} 
              className={`hover:text-emerald-400 transition-all ${
                activeSection === "project" && pathname === "/"
                  ? "text-emerald-400" 
                  : ""
              }`}
            >
              [ PROJECTS ]
            </button>

            {/* Button Custom: Neo-Brutalisme / Retro Push Button */}
            <Link 
              href="https://www.instagram.com/abiyanm_/" 
              target="_blank"
              className="px-4 py-1.5 bg-emerald-400 text-black font-extrabold border-2 border-black uppercase tracking-tight shadow-[4px_4px_0px_0px_#000] hover:bg-emerald-300 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Button - Boxy Menu */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden bg-zinc-800 text-white p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-y-[1px] active:shadow-none focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU (RETRO INVENTORY STYLE) */}
      <div
        className={`fixed top-0 w-80 max-w-[75vw] -left-1 h-full bg-zinc-950 text-white z-[9999] border-r-4 border-black transform transition-transform duration-200 font-mono
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header Sidebar */}
        <div className="mt-8 px-6 border-b-2 border-dashed border-zinc-700 pb-4">
          <h1 className="text-2xl font-black tracking-tighter text-emerald-400 uppercase">
            Menu Selection
          </h1>
        </div>

        {/* Menu Items dengan Efek Active & Hover Khas Game Retro */}
        <div className="flex flex-col gap-3 text-lg font-bold mt-4 px-6">
          <button 
            className={`flex items-center gap-3 p-2 border-2 text-left transition-all group ${
              activeSection === "home" && pathname === "/"
                ? "border-black bg-zinc-900 text-emerald-400"
                : "border-transparent text-zinc-300 hover:border-black hover:bg-zinc-900 hover:text-emerald-400"
            }`}
            onClick={() => handleNavClick("home")}
          >
            <FaHome className={`transition-colors ${activeSection === "home" && pathname === "/" ? "text-emerald-400" : "text-zinc-500 group-hover:text-emerald-400"}`} /> 
            <span>01. HOME</span>
          </button>

          <button 
            onClick={() => handleNavClick("about")} 
            className={`flex items-center gap-3 p-2 border-2 text-left transition-all group ${
              activeSection === "about" && pathname === "/"
                ? "border-black bg-zinc-900 text-emerald-400"
                : "border-transparent text-zinc-300 hover:border-black hover:bg-zinc-900 hover:text-emerald-400"
            }`}
          >
            <CgProfile className={`transition-colors ${activeSection === "about" && pathname === "/" ? "text-emerald-400" : "text-zinc-500 group-hover:text-emerald-400"}`} /> 
            <span>02. ABOUT ME</span>
          </button>

          <button 
            onClick={() => handleNavClick("skill")} 
            className={`flex items-center gap-3 p-2 border-2 text-left transition-all group ${
              activeSection === "skill" && pathname === "/"
                ? "border-black bg-zinc-900 text-emerald-400"
                : "border-transparent text-zinc-300 hover:border-black hover:bg-zinc-900 hover:text-emerald-400"
            }`}
          >
            <FaCode className={`transition-colors ${activeSection === "skill" && pathname === "/" ? "text-emerald-400" : "text-zinc-500 group-hover:text-emerald-400"}`} /> 
            <span>03. TECH SKILL</span>
          </button>

          <button 
            onClick={() => handleNavClick("project")} 
            className={`flex items-center gap-3 p-2 border-2 text-left transition-all group ${
              activeSection === "project" && pathname === "/"
                ? "border-black bg-zinc-900 text-emerald-400"
                : "border-transparent text-zinc-300 hover:border-black hover:bg-zinc-900 hover:text-emerald-400"
            }`}
          >
            <CgWebsite className={`transition-colors ${activeSection === "project" && pathname === "/" ? "text-emerald-400" : "text-zinc-500 group-hover:text-emerald-400"}`} /> 
            <span>04. PROJECTS</span>
          </button>

          <Link 
            href="https://www.instagram.com/abiyanm_/"
            target="_blank"
            className="flex items-center gap-3 p-2 border-2 border-transparent hover:border-black hover:bg-zinc-900 text-zinc-300 hover:text-emerald-400 transition-all group"
            onClick={() => setIsOpen(false)}
          >
            <FaInstagram className="text-zinc-500 group-hover:text-emerald-400" /> 
            <span>05. CONTACT ME</span>
          </Link>
        </div>

        {/* Footer Sidebar Variasi */}
        <div className="absolute bottom-6 left-6 right-6 text-[10px] text-zinc-600 tracking-wider">
          abiyanmirza.my.id
        </div>
      </div>

      {/* Overlay Gelap Kaku */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-[9998] transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}