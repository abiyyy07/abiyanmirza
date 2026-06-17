"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-emerald-950/80 text-white font-mono border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP: NAME & SOCIAL */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* NAME (Terminal Brand Style) */}
          <div className="text-xl text-white font-black uppercase tracking-tight flex items-center gap-1.5 select-none">
            <span className="text-emerald-400 font-extrabold animate-pulse"></span>
            <span>Abiyan</span>
            <span>Mirza</span>
          </div>

          {/* SOCIAL LINKS (RPG Sub-Menu Style) */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <Link
              href="https://www.instagram.com/abiyanm_/"
              target="_blank"
              className="hover:text-emerald-400 text-white transition-all"
            >
              Instagram
            </Link>

            <Link
              href="https://github.com/abiyyy07"
              target="_blank"
              className="hover:text-emerald-400 text-white transition-all"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/abiyan-mirza-a468552b3"
              target="_blank"
              className="hover:text-emerald-400 text-white transition-all"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:abiyy0206@gmail.com"
              target="_blank"
              className="hover:text-emerald-400 text-white transition-all"
            >
              Email
            </Link>
          </div>
        </div>

        {/* BOTTOM: SYSTEM SHUTDOWN / COPYRIGHT */}
        <div className="mt-8 text-center text-[10px] text-zinc-100 uppercase tracking-widest border-t-2 border-dashed border-zinc-400 pt-6">
          <span>© 2025 Abiyan Mirza | All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}