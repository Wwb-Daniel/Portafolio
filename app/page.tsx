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
      description: "Plataforma de contenido interactivo inspirada en TikTok, diseñada para comunidades de gaming y entretenimiento digital",
      link: "https://onmiplay.vercel.app/",
      image: "/images/onmiplay.png",
    },
    {
      title: "EDHEX",
      description: "Sistema de entradas digitales seguras e imposibles de falsificar",
      link: "https://edhex.vercel.app/",
      image: "/images/edhex entradas.png",
    },
    {
      title: "EDHEX ADMIM",
      description: "Sistema de Graduación • Control Total de Entradas",
      link: "https://edhex-admim.vercel.app/",
      image: "/images/ehdex admin.png",
    },
    {
      title: "YouTube Clone",
      description: "Plataforma de videos inspirada en YouTube",
      link: "https://v0-youtube-clone-with-api-alpha.vercel.app/",
      image: "/images/YT.png",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a0033] to-[#330066] text-white">
      {/* Header */}
      <header
        ref={headerRef}
        className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center"
      >
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Líder SK
          </h1>
        </div>
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-purple-400 transition-colors">
            Sobre mí
          </a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">
            Proyectos
          </a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">
            Contacto
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-purple-500 p-1 bg-purple-900/30">
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/perfi.png"
              alt="Victor de Jesus"
              width={128}
              height={128}
              className="w-full h-full object-cover object-center"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Victor de Jesus</h1>
        <h2 className="text-xl md:text-2xl text-purple-400 mb-6">Desarrollador de Sistemas y apps</h2>
        <p className="max-w-2xl text-gray-300 mb-8">
          Joven desarrollador con pasión por crear interfaces modernas, interactivas y responsivas.
        </p>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <a href="#contact">Contáctame</a>
        </Button>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Sobre mí</span>
        </h2>

        <Card className="bg-black/40 backdrop-blur-md border-purple-900/50">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Quién soy</h3>
                <p className="text-gray-300 mb-4">
                  Soy Victor de Jesus, mejor conocido como Líder SK, un joven de 18 años con un nivel de aprendizaje
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
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Estado actual</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>Edad: 18 años</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>Nivel de aprendizaje: Intermedio y de manera Autodidacta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>Reconocido por mi dedicación, creatividad y capacidad de aprendizaje rápido</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">🧠 Habilidades <span className="text-base">(Desarrollador Web/App Full Stack)</span></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Habilidad 1 */}
          <Card className="bg-black/50 border-purple-900/40 shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-8 animate-fadein-slideup [animation-delay:0ms]">
            <CardContent className="flex flex-col items-center p-6">
              <span className="text-4xl mb-3">💻</span>
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">Frontend & Web Apps</h3>
              <p className="text-gray-300 text-center text-base">Desarrollo con HTML, CSS, JavaScript, TypeScript y frameworks modernos como Flutter (en proceso de aprendizaje).</p>
            </CardContent>
          </Card>
          {/* Habilidad 2 */}
          <Card className="bg-black/50 border-purple-900/40 shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-8 animate-fadein-slideup [animation-delay:150ms]">
            <CardContent className="flex flex-col items-center p-6">
              <span className="text-4xl mb-3">📱</span>
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">Aplicaciones Estilo TikTok</h3>
              <p className="text-gray-300 text-center text-base">Experiencia creando plataformas interactivas tipo TikTok, con reproductores de video, subida de archivos, audio personalizado y funciones sociales (likes, comentarios, explorar, etc.).</p>
            </CardContent>
          </Card>
          {/* Habilidad 3 */}
          <Card className="bg-black/50 border-purple-900/40 shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-8 animate-fadein-slideup [animation-delay:300ms]">
            <CardContent className="flex flex-col items-center p-6">
              <span className="text-4xl mb-3">🧩</span>
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">Bases de Datos</h3>
              <p className="text-gray-300 text-center text-base">Diseño e implementación de bases de datos complejas usando Supabase, SQL y Flask, aplicando reglas de seguridad (RLS) y alta eficiencia.</p>
            </CardContent>
          </Card>
          {/* Habilidad 4 */}
          <Card className="bg-black/50 border-purple-900/40 shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-8 animate-fadein-slideup [animation-delay:450ms]">
            <CardContent className="flex flex-col items-center p-6">
              <span className="text-4xl mb-3">🔧</span>
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">Backend Lógico</h3>
              <p className="text-gray-300 text-center text-base">Capacidad para construir sistemas funcionales completos en pocos días, incluyendo APIs, autenticación de usuarios y almacenamiento de medios.</p>
            </CardContent>
          </Card>
          {/* Habilidad 5 */}
          <Card className="bg-black/50 border-purple-900/40 shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-8 animate-fadein-slideup [animation-delay:600ms]">
            <CardContent className="flex flex-col items-center p-6">
              <span className="text-4xl mb-3">📋</span>
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">Formularios Avanzados</h3>
              <p className="text-gray-300 text-center text-base">Creación de formularios complejos, intuitivos y responsivos, como los utilizados en Bacano RP, adaptados para la mejor experiencia de usuario.</p>
            </CardContent>
          </Card>
          {/* Habilidad 6 */}
          <Card className="bg-black/50 border-purple-900/40 shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-8 animate-fadein-slideup [animation-delay:750ms]">
            <CardContent className="flex flex-col items-center p-6">
              <span className="text-4xl mb-3">⚙️</span>
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">Optimización y Compatibilidad</h3>
              <p className="text-gray-300 text-center text-base">Resolución de errores críticos, adaptando apps para funcionar en iPhone, Android y escritorio sin problemas.</p>
            </CardContent>
          </Card>
          {/* Habilidad 7 */}
          <Card className="bg-black/50 border-purple-900/40 shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-8 animate-fadein-slideup [animation-delay:900ms]">
            <CardContent className="flex flex-col items-center p-6">
              <span className="text-4xl mb-3">🚀</span>
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">Productividad y Velocidad</h3>
              <p className="text-gray-300 text-center text-base">Capacidad para entregar funcionalidades reales y completas en tiempo récord.</p>
            </CardContent>
          </Card>
          {/* Habilidad 8 */}
          <Card className="bg-black/50 border-purple-900/40 shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-8 animate-fadein-slideup [animation-delay:1050ms]">
            <CardContent className="flex flex-col items-center p-6">
              <span className="text-4xl mb-3">🧪</span>
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-center">Aprendiz Rápido</h3>
              <p className="text-gray-300 text-center text-base">Dominando nuevas herramientas como Flutter, Next.js o C++ según las necesidades del proyecto.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Proyectos Destacados
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Contacto</span>
        </h2>

        <Card className="bg-black/40 backdrop-blur-md border-purple-900/50 max-w-3xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-purple-400">Información de contacto</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="mailto:danielfffreefire0@gmail.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>danielfffreefire0@gmail.com</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+18293507459"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>1 (829) 548-6367</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-purple-400">Redes sociales</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="https://github.com/knymkhkyhkbq"
                      target="_blank"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>github.com/knymkhkyhkbq</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com/danielnunez4021"
                      target="_blank"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>@danielnunez4021</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://youtube.com/@daniel_13ff38"
                      target="_blank"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
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
      <footer className="bg-black/60 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Victor de Jesus (Líder SK). Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
