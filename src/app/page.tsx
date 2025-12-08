import type { Metadata } from "next";

// Components
import ComponentsHeaderHome from "@/components/layouts/home/header_home";
import ComponentsAboutHome from "@/components/layouts/home/about_home";
import ComponentsSkillHome from "@/components/layouts/home/skill_home";
import ComponentsProjectHome from "@/components/layouts/home/project_home";
import ComponentsCollaboreteHome from "@/components/layouts/home/collaborate_home";

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
      <ComponentsHeaderHome />
      <ComponentsAboutHome />
      <ComponentsSkillHome />
      <ComponentsProjectHome />
      <ComponentsCollaboreteHome />
    </>
  )
}