"use client";

import Link from "next/link";

export default function ComponentsCollaboreteHome() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-emerald-950/80 text-center font-mono text-white border-black relative overflow-hidden">
      

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        
        {/* RETRO NOTIFICATION HEADER */}
        <div className="text-center animate-bounce">
          <span className="text-xs font-black bg-emerald-400 text-black px-2 py-0.5 uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_#000]">
            ! End of Page !
          </span>
        </div>

        {/* TITLE ALA END-GAME SCREEN */}
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
          Want to Collaborate?
        </h2>

        {/* CONTEXT LOG DESCRIPTION */}
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto">
          I’m currently open for new projects, freelance contracts, and long-term tech partnerships. 
          If you need someone extra to implement your ideas in creating an application, 
          let's connect and have a discussion together.
        </p>

        {/* BRUTALIST CALL-TO-ACTION BUTTON */}
        <div className="pt-4">
          <Link
            href="https://www.instagram.com/abiyanm_/"
            target="_blank"
            className="inline-block px-8 py-3.5 bg-emerald-400 text-black font-black uppercase text-sm border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:bg-emerald-300 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0px_0px_#000] transition-all tracking-wider group"
          >
            <span>Contact me on Instagram</span> 
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">==&gt;</span>
          </Link>
        </div>

        {/* APPRECIATION SUBTEXT / COPYRIGHT */}
        <div className="text-[11px] text-white uppercase tracking-widest pt-12">
          Thank you for visiting
        </div>
      </div>
    </section>
  );
}