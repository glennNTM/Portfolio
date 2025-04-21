"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const languages = [
    {
      name: "Python",
      level: 85,
      icon: (
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-white"
          >
            <path d="M12 9H7.5a2.5 2.5 0 0 0 0 5H12m0-5v5m0-5V5.5a2.5 2.5 0 0 1 5 0V11M12 14v3.5a2.5 2.5 0 0 0 5 0V14" />
          </svg>
        </div>
      ),
      color: "bg-blue-500",
    },
    {
      name: "JavaScript",
      level: 75,
      icon: (
        <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-white"
          >
            <path d="M7 7v10" />
            <path d="M15 7v10" />
            <path d="M15 13h-2.5a2 2 0 1 0 0 4H15" />
            <path d="M11 7H9.5a2.5 2.5 0 0 0 0 5H11" />
          </svg>
        </div>
      ),
      color: "bg-yellow-500",
    },
    {
      name: "SQL",
      level: 80,
      icon: (
        <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-white"
          >
            <ellipse cx="12" cy="6" rx="8" ry="3" />
            <path d="M4 6v6a8 3 0 0 0 16 0V6" />
            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
          </svg>
        </div>
      ),
      color: "bg-cyan-600",
    },
  ]

  const frameworks = [
    {
      name: "Django",
      level: 80,
      icon: (
        <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-white"
          >
            <path d="M2 16V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
            <path d="M2 12h20" />
          </svg>
        </div>
      ),
      color: "bg-green-600",
    },
    {
      name: "NextJS",
      level: 70,
      icon: (
        <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-white"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
      ),
      color: "bg-gray-800",
    },
  ]

  const others = [
    {
      name: "Git",
      level: 75,
      icon: (
        <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-white"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-9 9h1" />
          </svg>
        </div>
      ),
      color: "bg-orange-600",
    },
    {
      name: "Docker",
      level: 65,
      icon: (
        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-white"
          >
            <path d="M22 12.5a2.5 2.5 0 0 0-3.9-2.1l-1.1-1.1-1 1.2v-1a2.5 2.5 0 0 0-3.9-2.1L9 4.2 7.9 5.5 5 2.5" />
            <path d="M14.5 11.5 19 7" />
            <path d="M9.5 16.5 5 21" />
            <path d="M5 12.5l4.5-4.5" />
            <path d="M19 12.5l-4.5 4.5" />
          </svg>
        </div>
      ),
      color: "bg-blue-600",
    },
    {
      name: "Linux",
      level: 70,
      icon: (
        <div className="w-6 h-6 rounded-full bg-yellow-700 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-white"
          >
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
        </div>
      ),
      color: "bg-yellow-700",
    },
  ]

  const allSkills = [
    { category: "Langages", skills: languages },
    { category: "Frameworks", skills: frameworks },
    { category: "Autres", skills: others },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Compétences</h2>
          <div className="h-1 w-20 bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <Card className="bg-black/40 border border-white/10 h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Compétences techniques</h3>

                {allSkills.map((skillGroup, groupIndex) => (
                  <div key={groupIndex} className="mb-8">
                    <h4 className="text-lg font-medium mb-4">{skillGroup.category}</h4>
                    <div className="space-y-4">
                      {skillGroup.skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              {skill.icon}
                              <span className="text-gray-300">{skill.name}</span>
                            </div>
                            <span className="text-gray-400">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className={`h-2 bg-white/10`}>
                            <div
                              className={`h-full ${skill.color} rounded-full`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </Progress>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <Card className="bg-black/40 border border-white/10 h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Technologies maîtrisées</h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {languages.map((lang, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`${lang.color} bg-opacity-20 hover:bg-opacity-30 text-white border-none`}
                    >
                      <span className="flex items-center gap-1">
                        {lang.icon}
                        <span>{lang.name}</span>
                      </span>
                    </Badge>
                  ))}
                </div>

                <h4 className="text-lg font-medium mb-4">Frameworks & Librairies</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {frameworks.map((fw, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`${fw.color} bg-opacity-20 hover:bg-opacity-30 text-white border-none`}
                    >
                      <span className="flex items-center gap-1">
                        {fw.icon}
                        <span>{fw.name}</span>
                      </span>
                    </Badge>
                  ))}
                </div>

                <h4 className="text-lg font-medium mb-4">Outils & Environnements</h4>
                <div className="flex flex-wrap gap-2">
                  {others.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`${tool.color} bg-opacity-20 hover:bg-opacity-30 text-white border-none`}
                    >
                      <span className="flex items-center gap-1">
                        {tool.icon}
                        <span>{tool.name}</span>
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
