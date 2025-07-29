"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Instagram, Mail, Phone, Youtube, Code, Zap, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { MatrixCanvas } from "@/components/matrix-canvas" // Import the new component

export default function Portfolio() {
  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Scroll effect para navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    // Animaciones GSAP mejoradas
    gsap.fromTo(headerRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // Animación de entrada para secciones
    const sections = [aboutRef.current, projectsRef.current, contactRef.current]
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Removed the GSAP parallax for .matrix-rain as canvas handles its own animation

    return () => {
      window.removeEventListener("scroll", handleScroll)
      // No need to cleanup matrix here, MatrixCanvas component handles its own lifecycle
    }
  }, [])

  const projects = [
    {
      title: "OmniPlay",
      description: "Plataforma de entretenimiento multimedia con múltiples funcionalidades",
      link: "https://onmiplay.vercel.app/",
      image: "/images/onmiplay.png",
      featured: true,
    },
    {
      title: "YT Clone",
      description: "Clon de YouTube con API funcional y diseño moderno",
      link: "https://v0-youtube-clone-with-api-alpha.vercel.app/",
      image: "/images/YT.png",
      featured: true,
    },
    {
      title: "CinemaDB",
      description: "Pagina de peliculas con API funcional y diseño moderno",
      link: "https://v0-fork-of-cinema-dbtv-main.vercel.app/",
      image: "/images/CinemaDB.png",
      featured: true,
    },
    {
      title: "EDHEX Admin",
      description: "Sistema de administración para graduaciones educativas",
      link: "https://edhex-admim.vercel.app/",
      image: "/images/ehdex admin.png",
      featured: true,
    },
    {
      title: "EDHEX Generator",
      description: "Generador de tickets y validación para eventos educativos",
      link: "https://edhex.vercel.app/",
      image: "/images/edhex entradas.png",
      featured: true,
    },
    {
      title: "BioEnergía RD",
      description: "Plataforma sobre energías limpias y sostenibles",
      link: "https://bio-energ-a-rd.vercel.app",
      image: "/images/bio.png",
    },
    {
      title: "EchoStream",
      description: "Plataforma de streaming inspirada en YouTube",
      link: "https://echostream-cmd.github.io/.YT",
      image: "/images/echo.png",
    },
    {
      title: "Comunidad Creativa",
      description: "Red social para estudiantes y creadores",
      link: "https://same-3ps70kkh0jl-latest.netlify.app/login",
      image: "/images/creativa.png",
    },
    {
      title: "Feria de STEAM",
      description: "Sitio para presentar proyectos educativos",
      link: "https://feria-de-steam.vercel.app",
      image: "/images/feria.png",
    },
    {
      title: "Bacano RP",
      description: "Página para servidor de rol en MTA (Multi Theft Auto)",
      link: "https://v0-new-project-y5mtcbgkxol.vercel.app",
      image: "/images/Bacano_RP.png",
    },
    {
      title: "LOOK STORE",
      description: "Tienda digital con diseño moderno y animaciones",
      link: "https://v0-new-project-kputxvgsiwc-xuqhjw.vercel.app",
      image: "/images/Look_store.png",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a0033] to-[#330066] text-white relative">
      {/* Matrix Rain Canvas Background */}
      <MatrixCanvas />

      {/* Header - Navbar interactivo */}
      <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container mx-auto py-4 px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0 glow-effect">
            <Code className="w-6 h-6 mr-2 text-purple-400" />
            <h1 className="text-xl font-semibold gradient-text">Líder SK</h1>
          </div>
          <nav className="flex gap-8">
            <a href="#about" className="text-sm font-medium subtle-hover flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Sobre mí
            </a>
            <a href="#projects" className="text-sm font-medium subtle-hover flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Proyectos
            </a>
            <a href="#contact" className="text-sm font-medium subtle-hover">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section con animaciones */}
      <section className="container mx-auto px-4 py-32 flex flex-col items-center text-center relative z-10">
        {/* Floating dots decoration */}
        <div className="absolute top-20 left-10 floating-dots" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-40 right-20 floating-dots" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/4 floating-dots" style={{ animationDelay: "4s" }}></div>

        <div className="w-32 h-32 rounded-full overflow-hidden mb-8 subtle-border p-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 pulse-effect glow-effect">
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/perfi.png"
              alt="Victor De Jesús"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text bounce-in">Victor De Jesús</h1>

        <div className="text-xl md:text-2xl text-purple-300 mb-8 fade-in-up">
          <span className="typing-effect">Desarrollador de Sistemas y Apps</span>
        </div>

        <p className="max-w-2xl text-gray-300 mb-10 text-lg leading-relaxed smooth-entrance">
          Joven desarrollador con pasión por crear interfaces modernas, interactivas y responsivas.
        </p>

        <Button className="elegant-button px-8 py-3 rounded-full text-white font-medium shake-hover">
          <a href="#contact" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Contáctame
          </a>
        </Button>
      </section>

      {/* About Section con interacciones */}
      <section id="about" ref={aboutRef} className="container mx-auto px-4 py-20 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Sobre mí</h2>

        <Card className="glass-card rounded-2xl subtle-border max-w-6xl mx-auto glow-effect">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="fade-in-up">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Quién soy
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Soy Victor De Jesús, mejor conocido como Líder SK, un joven de 18 años con un nivel de aprendizaje
                  intermedio en desarrollo web. Actualmente soy estudiante y me he destacado por mi gran espíritu de
                  superación y pasión por la programación.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Me especializo en el desarrollo de interfaces modernas, interactivas y responsivas, aplicando
                  tecnologías como Glassmorphism, gradientes modernos y el estilo visual Bento UI. Mi objetivo es seguir
                  creciendo profesionalmente y aportar soluciones digitales impactantes y funcionales.
                </p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-2">
                  <Code className="w-6 h-6" />
                  Tecnologías
                </h3>
                <div className="space-y-6">
                  <div className="glass-card rounded-xl p-6 subtle-border shake-hover">
                    <h4 className="font-semibold text-purple-200 mb-4">Frontend</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <span className="subtle-hover">• HTML5 & CSS3</span>
                      <span className="subtle-hover">• JavaScript</span>
                      <span className="subtle-hover">• TypeScript</span>
                      <span className="subtle-hover">• React.js</span>
                      <span className="subtle-hover">• Next.js</span>
                      <span className="subtle-hover">• Tailwind CSS</span>
                    </div>
                  </div>
                  <div className="glass-card rounded-xl p-6 subtle-border shake-hover">
                    <h4 className="font-semibold text-purple-200 mb-4">Especialidades</h4>
                    <div className="text-sm text-gray-300 space-y-1">
                      <div className="subtle-hover">• Glassmorphism y diseños modernos</div>
                      <div className="subtle-hover">• Interfaces responsivas e interactivas</div>
                      <div className="subtle-hover">• Animaciones y transiciones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section con animaciones */}
      <section id="projects" ref={projectsRef} className="container mx-auto px-4 py-20 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Proyectos Destacados</h2>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center text-purple-200 flex items-center justify-center gap-2">
            <Zap className="w-6 h-6" />
            Trabajos Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Regular Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-10 text-center text-purple-200">Otros Proyectos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section con efectos */}
      <section id="contact" ref={contactRef} className="container mx-auto px-4 py-20 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Contacto</h2>

        <Card className="glass-card rounded-2xl subtle-border max-w-4xl mx-auto glow-effect">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="fade-in-up">
                <h3 className="text-2xl font-semibold mb-8 text-purple-300 flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  <Link
                    href="mailto:danielfffreefire0@gmail.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors p-4 glass-card rounded-xl subtle-border subtle-hover shake-hover"
                  >
                    <Mail className="w-5 h-5" />
                    <span>danielfffreefire0@gmail.com</span>
                  </Link>
                  <Link
                    href="tel:+18293507459"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors p-4 glass-card rounded-xl subtle-border subtle-hover shake-hover"
                  >
                    <Phone className="w-5 h-5" />
                    <span>1 (829) 350-7459</span>
                  </Link>
                </div>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-semibold mb-8 text-purple-300">Redes sociales</h3>
                <div className="space-y-4">
                  <Link
                    href="https://github.com/knymkhkyhkbq"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors p-4 glass-card rounded-xl subtle-border subtle-hover shake-hover"
                  >
                    <Github className="w-5 h-5" />
                    <span>github.com/knymkhkyhkbq</span>
                  </Link>
                  <Link
                    href="https://instagram.com/danielnunez4021"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors p-4 glass-card rounded-xl subtle-border subtle-hover shake-hover"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@danielnunez4021</span>
                  </Link>
                  <Link
                    href="https://youtube.com/@daniel_13ff38"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors p-4 glass-card rounded-xl subtle-border subtle-hover shake-hover"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>@daniel_13ff38</span>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer con efectos */}
      <footer className="border-t border-white/10 py-8 mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 subtle-hover">
            © {new Date().getFullYear()} Daniel Núñez (Líder SK). Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
