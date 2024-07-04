import type { Metadata } from "next";

// Components
import CopyHomeComponents from "@/components/layouts/home/copy";

export const metadata: Metadata = {
  title: "Abiyan Mirza",
  description: "Personal website portofolio Abiyan Mirza",
  keywords: ["Abiyan Mirza", "Abiyan", "Mirza"],
  icons: {
    icon: '/abiyan.jpg'
  },
};

export default function Home() {
  return (
    <>
      <CopyHomeComponents />
    </>
  )
}