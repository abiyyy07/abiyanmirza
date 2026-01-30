"use client";

import { FaCode, FaHome, FaInstagram } from "react-icons/fa";
import { CgProfile, CgWebsite } from "react-icons/cg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const router = useRouter();

  // Tutup menu jika klik luar atau scroll
  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    document.addEventListener("scroll", close);
    return () => document.removeEventListener("scroll", close);
  }, [isOpen]);

  const scrollToRef = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);

    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 backdrop-blur border-b border-gray-700 text-white z-50">
        <div className="max-w-7xl mx-auto px-5 h-16 flex justify-between items-center">
          {/* Brand */}
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-purple-500">Abiyan</span> Mirza
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => handleNavClick("home")} className="hover:text-purple-400 transition">Home</button>
            <button onClick={() => handleNavClick("about")} className="hover:text-purple-400 transition">About</button>
            <button onClick={() => handleNavClick("skill")} className="hover:text-purple-400 transition">Skill</button>
            <button onClick={() => handleNavClick("project")} className="hover:text-purple-400 transition">Projects</button>

            <Link 
              href="https://www.instagram.com/abiyanm_/" 
              target="_blank"
              className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-600 transition"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed top-0 w-3/4 -left-1 h-full bg-gray-900 text-white z-[9999] transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close + Branding */}
        <div className="flex justify-between items-center mt-8 px-6 ml-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Abiyan Mirza
            </h1>
            <p className="text-sm text-gray-400 mt-1 tracking-wide">
              Personal Portfolio
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-8 text-xl font-medium mt-6 ml-10">
          <Link className="flex items-center gap-3 hover:text-purple-400" href={"/"}>
            <FaHome /> Home
          </Link>

          <button onClick={() => scrollToRef("about")} className="flex items-center gap-3 hover:text-purple-400">
            <CgProfile /> About Me
          </button>

          <button onClick={() => scrollToRef("skill")} className="flex items-center gap-3 hover:text-purple-400">
            <FaCode /> Skill
          </button>

          <button onClick={() => scrollToRef("project")} className="flex items-center gap-3 hover:text-purple-400">
            <CgWebsite /> Projects
          </button>

          <Link 
            href="https://www.instagram.com/abiyanm_/"
            target="_blank"
            className="flex items-center gap-3 hover:text-purple-400"
          >
            <FaInstagram /> Contact Me
          </Link>
        </div>
      </div>

      {/* 🔥 Overlay Gelap + Klik = Tutup Sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

    </>
  );
}
