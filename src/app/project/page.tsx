import { Metadata } from 'next';
import ProjectListClient from '@/components/layouts/projects/ProjectListClient';

export const metadata: Metadata = {
  title: "My Projects | Abiyan",
  description: "All this featured my works for portofolio and real project in company or community",
  keywords: ["Abiyan Mirza", "Abiyan", "Mirza", "Project", "kerjaan", "portofolio", "abiyan mirza"],
  icons: {
    icon: '/abiyan.jpg'
  },
};

export default function ProjectsWrapper() {
  return <ProjectListClient />;
}