"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Instagram, Mail, Phone, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"

export default function Portfolio() {
  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Header animation
    gsap.fromTo(headerRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // About section animation
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      },
    )

    // Projects section animation
    gsap.fromTo(
      projectsRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
      },
    )

    // Contact section animation
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      },
    )
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

  // Separate featured and regular projects
  const featuredProjects = projects.filter((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl floating-element" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header
        ref={headerRef}
        className="glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold gradient-text">
              Líder SK
            </h1>
          </div>
          <nav className="flex gap-6">
            <a href="#about" className="glass-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              Sobre mí
            </a>
            <a href="#projects" className="glass-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              Proyectos
            </a>
            <a href="#contact" className="glass-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center text-center relative">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8 glass-card p-2 floating-element">
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/perfi.png"
              alt="Victor De Jesús"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Victor De Jesús</h1>
        <h2 className="text-2xl md:text-3xl mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Desarrollador de Sistemas y apps
        </h2>
        <p className="max-w-3xl text-gray-300 mb-10 text-lg leading-relaxed">
          Joven desarrollador con pasión por crear interfaces modernas, interactivas y responsivas.
        </p>
        <Button className="glass-button ios-gradient px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300">
          <a href="#contact">Contáctame</a>
        </Button>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Sobre mí</span>
        </h2>

        <Card className="glass-card">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quién soy</h3>
                <p className="text-gray-300 mb-4">
                  Soy Victor De Jesús, mejor conocido como Líder SK, un joven de 18 años con un nivel de aprendizaje
                  intermedio en desarrollo web. Actualmente soy estudiante y me he destacado por mi gran espíritu de
                  superación y pasión por la programación.
                </p>
                <p className="text-gray-300">
                  Me especializo en el desarrollo de interfaces modernas, interactivas y responsivas, aplicando
                  tecnologías como Glassmorphism, gradientes modernos y el estilo visual Bento UI. Mi objetivo es seguir
                  creciendo profesionalmente y aportar soluciones digitales impactantes y funcionales.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tecnologías dominadas</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <h4 className="font-medium bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">Frontend</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• HTML5 & CSS3</li>
                      <li>• JavaScript</li>
                      <li>• TypeScript</li>
                      <li>• React.js</li>
                      <li>• Next.js</li>
                      <li>• Tailwind CSS</li>
                      <li>• Bases de datos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">En aprendizaje</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Flutter</li>
                      <li>• React Native</li>
                      <li>• Node.js</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent mb-2">Especialidades</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Glassmorphism y diseños modernos</li>
                    <li>• Interfaces responsivas e interactivas</li>
                    <li>• Animaciones y transiciones</li>
                    <li>• Estilo visual Bento UI</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">
            Proyectos Destacados
          </span>
        </h2>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Trabajos Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            ))}
          </div>
        </div>

        {/* Regular Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Otros Proyectos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Contacto</span>
        </h2>

        <Card className="glass-card max-w-3xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Información de contacto</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="mailto:danielfffreefire0@gmail.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 glass-button p-3 rounded-lg"
                    >
                      <Mail className="w-5 h-5" />
                      <span>danielfffreefire0@gmail.com</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+18293507459"
                      className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-300 glass-button p-3 rounded-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>1 (829) 350-7459</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Redes sociales</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="https://github.com/knymkhkyhkbq"
                      target="_blank"
                      className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition-all duration-300 glass-button p-3 rounded-lg"
                    >
                      <Github className="w-5 h-5" />
                      <span>github.com/knymkhkyhkbq</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com/danielnunez4021"
                      target="_blank"
                      className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-all duration-300 glass-button p-3 rounded-lg"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>@danielnunez4021</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://youtube.com/@daniel_13ff38"
                      target="_blank"
                      className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-all duration-300 glass-button p-3 rounded-lg"
                    >
                      <Youtube className="w-5 h-5" />
                      <span>@daniel_13ff38</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="glass-nav py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Daniel Núñez (Líder SK). Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
