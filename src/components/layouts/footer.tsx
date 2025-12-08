import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-purple-700 to-purple-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* TOP: NAME & SOCIAL */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* NAME */}
          <h3 className="text-2xl font-bold">Abiyan Mirza</h3>

          {/* SOCIAL */}
          <div className="flex items-center gap-6 text-sm text-purple-100/90">
            <Link
              href="https://www.instagram.com/abiyanm_/"
              target="_blank"
              className="hover:text-white transition"
            >
              Instagram
            </Link>

            <Link
              href="https://github.com/abiyyy07"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/abiyan-mirza-a468552b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:abiyy0206@gmail.com"
              target="_blank"
              className="hover:text-white transition"
            >
              Email
            </Link>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 text-center text-sm text-purple-100/70 border-t border-purple-400/20 pt-4">
          © {new Date().getFullYear()} Abiyan Mirza — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
