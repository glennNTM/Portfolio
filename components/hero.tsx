"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  }

  const sentence =
    "Étudiant passionné par le développement web, je conçois des sites web modernes et des API robustes."
  const words = sentence.split(" ")

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-indigo-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Texte et bouton */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-left flex-1 order-2 md:order-1"
          >
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight"
            >
              Bonjour, je suis <br />
              <span className="text-indigo-300">Glenn NTOUTOUME</span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 mb-6"
            >
              Développeur backend
            </motion.h2>

            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8 max-w-3xl">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={item}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <motion.div variants={item}>
              <Button
                variant="outline"
                className="text-lg sm:text-xl mt-2 bg-gradient-to-r from-indigo-800 to-white hover:from-indigo-600 hover:to-gray-100 border-none text-black hover:text-violet-900 px-6 py-4"
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                En savoir plus <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden border-2 border-white/20">
              <img
                src="/placeholder.svg?height=384&width=384"
                alt="Glenn Ange-Emmanuel NTOUTOUME"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
