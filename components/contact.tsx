"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:your.email@example.com", label: "Email" },
    { icon: <Download className="h-5 w-5" />, href: "/cv.pdf", label: "CV", download: true },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="h-1 w-20 bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 border border-white/10 h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black/30 border-white/10"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black/30 border-white/10"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Votre message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-black/30 border-white/10 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-violet-700 to-white hover:from-violet-600 hover:to-gray-100 border-none text-white hover:text-violet-900"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </Button>

                  {submitSuccess && <p className="text-green-400 text-sm mt-2">Message envoyé avec succès !</p>}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 border border-white/10 h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Retrouvez-moi</h3>

                <p className="text-gray-300 mb-6">
                  N'hésitez pas à me contacter pour discuter de projets, d'opportunités de collaboration ou simplement
                  pour échanger sur le développement backend.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.download ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      download={link.download}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className="bg-white/10 p-2 rounded-full">{link.icon}</div>
                      <span>{link.label}</span>
                    </a>
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
