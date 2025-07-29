"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Eye } from "lucide-react"

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
      className="overflow-hidden transition-all duration-500 h-[320px] relative group glass-card subtle-border glow-effect"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110 opacity-20 blur-sm" : "opacity-50"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-70"
          }`}
        />
      </div>

      {/* Efecto de brillo en hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-700 ${
          isHovered ? "translate-x-full" : "-translate-x-full"
        }`}
      />

      <CardContent className="relative h-full flex flex-col justify-end p-6 z-10">
        <div
          className={`transition-all duration-500 transform ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-gray-300 mb-4 text-sm leading-relaxed backdrop-blur-sm bg-black/20 rounded-lg p-3">
            {description}
          </p>
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-all duration-300 text-sm font-medium bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30 hover:bg-purple-500/30 hover:scale-105"
          >
            <Eye className="w-4 h-4" />
            Ver proyecto
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <h3
          className={`text-xl font-semibold text-white transition-all duration-500 ${
            isHovered ? "mb-4 transform scale-105 text-purple-200" : "mb-0"
          }`}
        >
          {title}
        </h3>
      </CardContent>

      {/* Partículas de hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-ping"
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      )}
    </Card>
  )
}
