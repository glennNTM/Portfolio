"use client"

import { motion } from "framer-motion"
import { PinContainer, type Project } from "./ui/3d-pin-container"
import { FaDocker, FaPython, FaReact, FaNodeJs, FaGithub } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSqlite, SiDocker, SiDjango  } from "react-icons/si"


export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Mon Portfolio",
      description:
        "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/placeholder.svg?height=400&width=600&text=Solar+System+3D",
      iconList: [
        
        
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
        {
          name: "React",
          icon: <FaReact />,
        },
      ],
      link: "https://example.com/solar-system",
      githubLink: "https://github.com/username/solar-system",
    },
    {
      id: 2,
      title: "Ecole 241 Web Site",
      description:
        "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/ecole241web.png",
      iconList: [
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
        {
          name: "React",
          icon: <FaReact />,
        },
      ],
      link: "https://example.com/yoom",
      githubLink: "https://github.com/username/yoom",
    },
    {
      id: 3,
      title: "Systeme de Gestion des ordinateurs",
      description:
        "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/ordinateurs.png?height=400&width=600&text=Solar+System+3D",
      iconList: [
        {
          name: "Python",
          icon: <FaPython />,
        },
        {
          name: "Django",
          icon: <SiDjango />,
        },
        {
          name: "Docker",
          icon: <SiDocker />,
        },
        {
          name: "SQLite",
          icon: <SiSqlite />,
        },
       
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
        },
      ],
      link: "https://example.com/solar-system",
      githubLink: "https://github.com/username/solar-system",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projets</h2>
          <div className="h-1 w-20 bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="h-[500px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PinContainer project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
