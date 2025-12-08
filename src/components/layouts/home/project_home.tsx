"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComponentsProjectHome() {
  const projects = [
    {
      id: "rid",
      title: "Record and Indentification Division",
      desc: "A website functionally for manage any record and license who used for Police Department RID SSRP",
      image: "/projek/rid.jpg",
      tags: ["Website", "Next.js", "Typescript", "Tailwind", "Firebase"],
    },
    {
      id: "afago",
      title: "Afago - Easy Car Rent App",
      desc: "An application designed to make it easier to rent vehicles and track payments, as well as vehicle location..",
      image: "/projek/afago.jpg",
      tags: ["Mobile App", "Flutter", "GetX", "Firebase"],
    },
    {
      id: "afarush",
      title: "Afarush - Fast Typing Race App",
      desc: "A simple application to test typing competitions with other players or typing competitions against time.",
      image: "/projek/afarush.jpg",
      tags: ["Mobile App", "Flutter", "GetX", "Firebase"],
    },
  ];

  return (
    <div id="project" className="bg-gray-900 py-8">

      <div className="text-center text-white text-3xl font-bold">
        Completed Project
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full py-8 px-6 md:px-12 bg-gray-900">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-800/60 border border-purple-500/20 shadow-purple-900/20 rounded-2xl shadow-lg p-5 flex flex-col hover:shadow-xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="w-full h-40 bg-gray-700 rounded-xl mb-4 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TAGS */}
            <div className="flex gap-2 mb-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-neutral-300 mb-4">
              {project.desc}
            </p>

            {/* BUTTON */}
            <Link
              href={`/project/${project.id}`}
              className="mt-auto inline-block text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-medium transition"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>

      {/* VIEW ALL PROJECTS BUTTON */}
      <div className="text-center mb-8">
        <Link
          href="/project"
          className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:opacity-90 text-white rounded-xl font-semibold shadow-lg transition"
        >
          View All Projects Here →
        </Link>
      </div>
    </div>
  );
}
