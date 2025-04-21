import React, { JSX } from "react"
import Image from "next/image"
import { FaReact, FaGithub } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si"
import { Github } from 'lucide-react'

export type Project = {
  id: number
  title: string
  description: string
  img: string
  iconList: { name: string; icon: JSX.Element }[]
  link: string
  githubLink: string
}

type PinContainerProps = {
  project: Project
}

export const PinContainer: React.FC<PinContainerProps> = ({ project }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl h-full flex flex-col justify-between border border-white/10 hover:shadow-2xl transition-shadow duration-300">
      {/* Image de présentation */}
      <div className="w-full h-64 relative overflow-hidden rounded-xl mb-6">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover scale-105 transition-transform duration-300"
        />
      </div>

      {/* Titre et description */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-base text-gray-300">{project.description}</p>
      </div>

      {/* Tech stack (icônes dans des cercles) */}
      <div className="flex flex-wrap gap-3 mt-6">
        {project.iconList.map((tech) => (
          <div
            key={tech.name}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
            title={tech.name}
          >
            <span className="text-black text-xl">{tech.icon}</span>
          </div>
        ))}
      </div>

      {/* Liens */}
      <div className="mt-6 flex justify-between text-base text-blue-400">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-500 transition-all duration-200 font-medium"
        >
          <span>Voir le projet</span>
          <span>&rarr;</span>
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-500 transition-all duration-200 font-medium"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  )
}
