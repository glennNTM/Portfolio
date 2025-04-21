"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code } from "lucide-react"
import { GiBasketballBall, GiChessKnight } from "react-icons/gi"
import { FaGamepad } from "react-icons/fa"

export function About() {
  const hobbies = [
    { icon: <Code className="h-6 w-6" />, name: "Développement" },
    { icon: <FaGamepad className="h-6 w-6" />, name: "Jeux vidéo" },
    { icon: <GiBasketballBall className="h-6 w-6" />, name: "Basketball" },
    { icon: <GiChessKnight className="h-6 w-6" />, name: "Échecs" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">À propos</h2>
          <div className="h-1 w-20 bg-white/20 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Card className="bg-indigo-500/40 border border-white/10">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Mon parcours</h3>
              <p className="text-gray-300 mb-4">
                Je suis un étudiant passionné par le développement backend, actuellement en formation pour perfectionner
                mes compétences dans la conception d'APIs et de systèmes robustes.
              </p>
              <p className="text-gray-300 mb-4">
                Titulaire d'un BAC S & D, je poursuis ma formation dans le domaine du développement backend avec
                l'objectif de devenir un expert dans la création d'architectures serveur performantes et évolutives.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Card className="bg-indigo-500/40 border border-white/10">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Mes objectifs</h3>
              <p className="text-gray-300">
                Je souhaite approfondir mes connaissances en développement backend, maîtriser les frameworks modernes et
                contribuer à des projets innovants. Mon ambition est de concevoir des systèmes performants, sécurisés et
                évolutifs qui répondent aux besoins des utilisateurs.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Mes hobbies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="bg-indigo-500/40 border border-white/10">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <div className="mb-2 text-white">{hobby.icon}</div>
                  <p className="text-gray-300">{hobby.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
