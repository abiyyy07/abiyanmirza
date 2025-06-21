import { FaGitAlt } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiDart, SiGetx } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

const skills = [
    { name: "Dart", icon: <SiDart />, desc: "Dart Language" },
    { name: "Flutter", icon: <RiFlutterFill />, desc: "Mobile Framework" },
    { name: "GetX", icon: <SiGetx />, desc: "Flutter Package" },
    { name: "Firebase", icon: <RiFirebaseFill />, desc: "Backend-as-a-Service" },
    { name: "Git", icon: <FaGitAlt />, desc: "Version Control System" },
];

export default function Skills() {
  return (
    <div className="bg-gray-800 text-white py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-purple-500 text-center">
        My Programming Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-40 h-35 transition transform hover:scale-105 hover:shadow-lg"
          >
            <div className="text-4xl text-purple-500 mb-2">{skill.icon}</div>
            <h3 className="text-lg font-bold text-purple-600">{skill.name}</h3>
            <p className="text-gray-600 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
