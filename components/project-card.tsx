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
      className="overflow-hidden transition-all duration-300 h-[300px] relative group bg-black/40 backdrop-blur-md border-purple-900/50 hover:border-purple-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-all duration-500 ${isHovered ? "scale-110 opacity-30" : "opacity-50"}`}
        />
      </div>

      <CardContent className="relative h-full flex flex-col justify-end p-6 z-10">
        <div
          className={`transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p className="text-gray-300 mb-4">{description}</p>
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Ver proyecto <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <h3 className={`text-xl font-bold transition-all duration-300 ${isHovered ? "mb-4" : "mb-0"}`}>{title}</h3>
      </CardContent>
    </Card>
  )
}
