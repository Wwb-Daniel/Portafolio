"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  const resizeCanvas = useCallback(() => {
    if (canvasRef.current) {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  }, [])

  useEffect(() => {
    resizeCanvas() // Set initial dimensions
    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [resizeCanvas])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = dimensions
    if (width === 0 || height === 0) return // Don't draw if dimensions are zero

    canvas.width = width
    canvas.height = height

    const fontSize = 15
    const columns = Math.floor(width / fontSize) + 1
    const ypos = Array(columns).fill(0)

    // Initial fill to clear any previous content
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, width, height)

    const matrix = () => {
      // Draw a semi-transparent black rectangle to create the fading trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)" // Reduced opacity for a more subtle fade
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = "#00ff41" // Green color for the characters
      ctx.font = `${fontSize}pt monospace`

      ypos.forEach((y, ind) => {
        // Get a random ASCII character
        const text = String.fromCharCode(Math.random() * 128)
        const x = ind * fontSize

        // Draw the character
        ctx.fillText(text, x, y)

        // Reset the column if it goes off screen, with a random chance
        if (y > height + Math.random() * 10000) {
          ypos[ind] = 0
        } else {
          ypos[ind] = y + fontSize
        }
      })

      animationFrameId.current = requestAnimationFrame(matrix)
    }

    // Start the animation
    animationFrameId.current = requestAnimationFrame(matrix)

    // Cleanup function
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [dimensions]) // Re-run effect if dimensions change

  return (
    <canvas
      ref={canvasRef}
      className="matrix-rain" // Use the existing CSS class for positioning and opacity
      aria-hidden="true"
    />
  )
}
