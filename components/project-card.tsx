"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  image: string
}

export function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="project-card-glass overflow-hidden h-[320px] relative group rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? "scale-110 opacity-20" : "opacity-40"}`}
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />
      </div>

      <CardContent className="relative h-full flex flex-col justify-end p-6 z-10">
        <div
          className={`transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <p className="text-gray-200 mb-4 text-sm leading-relaxed">{description}</p>
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 glass-button px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
          >
            Ver proyecto <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <h3 className={`text-xl font-bold transition-all duration-500 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent ${isHovered ? "mb-4" : "mb-0"}`}>
          {title}
        </h3>
      </CardContent>
    </Card>
  )
}
