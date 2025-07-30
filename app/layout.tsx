import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hana Nabhan Sawan - AI Computer Engineer",
  description:
    "Portfolio of Hana Nabhan Sawan, an aspiring AI computer engineer with expertise in deep learning, computer vision, and embedded systems.",
  keywords: "AI, Computer Engineering, Machine Learning, Deep Learning, Computer Vision, Embedded Systems, Portfolio",
  authors: [{ name: "Hana Nabhan Sawan" }],
  openGraph: {
    title: "Hana Nabhan Sawan - AI Computer Engineer",
    description: "Portfolio showcasing AI and computer engineering projects, experience, and achievements.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
