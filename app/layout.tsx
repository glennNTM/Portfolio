import type React from "react"
import "./globals.css"
import { Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Glenn Ange-Emmanuel NTOUTOUME | Développeur Backend",
  description: "Portfolio de Glenn Ange-Emmanuel NTOUTOUME, développeur backend",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider attribute="class" defaultTheme="" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
