"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ComponentsHeaderHome() {
  const roles = [
    "Fullstack Web Developer",
    "Mobile App Developer",
    "Game Developer",
  ];

  const rolesLoop = [...roles, roles[0]];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === rolesLoop.length - 1) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
        setTimeout(() => setAnimate(true), 50);
      }, 500);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="
        min-h-screen 
        grid 
        grid-cols-1 md:grid-cols-2 
        items-center
        gap-12
        px-8 sm:px-12 md:px-20 lg:px-36 
        pt-16 md:pt-24 
        bg-gray-900
      "
    >
      {/* LEFT CONTENT */}
      <div className="w-full text-center md:text-left space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Abiyan Mirza
          </span>
        </h1>

        {/* Animated Text */}
        <div className="h-8 overflow-hidden mx-auto md:mx-0 w-fit md:w-full">
          <div
            className={`${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ transform: `translateY(-${index * 40}px)` }}
          >
            {rolesLoop.map((role, i) => (
              <p
                key={i}
                className="text-xl sm:text-2xl h-10 flex items-center font-semibold text-purple-300"
              >
                {role}
              </p>
            ))}
          </div>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          Code like you’re solving a mystery. Build like you’re changing the world.
        </p>

        <Link
          href="https://www.instagram.com/abiyanm_/"
          target="_blank"
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-lg w-fit mx-auto md:mx-0"
        >
          Contact Me
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full flex justify-center md:justify-end">
        <div className="relative p-[4px] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-move"></div>

          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/abiyan.jpg"
              alt="Abiyan Mirza"
              width={375}
              height={375}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
