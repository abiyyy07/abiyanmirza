import Link from "next/link";

export default function ComponentsCollaboreteHome() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-700 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Looking to Collaborate?
        </h2>

        <p className="text-neutral-300 text-lg mb-6">
          I’m open for new projects, freelance work, and long-term partnerships.
          If you’re looking for someone who can help build or improve your
          product, let’s make it real and create something great together.
        </p>

        <Link
          href="https://www.instagram.com/abiyanm_/"
          target="_blank"
          className="inline-block px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 via-violet-600 to-blue-600 hover:opacity-90 transition shadow-lg"
        >
          Contact for Collaboration →
        </Link>
      </div>
    </section>
  );
}
