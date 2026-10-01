import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink, FiCode, FiStar } from 'react-icons/fi'
import project1Img from '../assets/project-1.png'
import project2Img from '../assets/project-2.png'
import project3Img from '../assets/project-3.png'
import project4Img from '../assets/project-4.png'

const projects = [
  {
    id: 1,
    title: 'ARZ International',
    subtitle: 'Study Abroad Consultancy Platform',
    description:
      'A modern, full-stack study abroad consultancy platform built to help students explore international education opportunities, apply to universities, and connect with professional counselors. The platform also includes a comprehensive admin dashboard for managing applications, inquiries, universities, and website content.',
    image: project1Img,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/prantonub/ARZ-International',
    live: 'https://www.arzinternational.net/',
    category: 'Full Stack',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accent: '#06B6D4',
    featured: true,
  },
  {
    id: 2,
    title: 'FinanceHub',
    subtitle: 'Personal Finance Tracker',
    description:
      'An industry-grade MERN personal finance platform — track income and expenses, set per-category budgets with color-coded alerts, schedule recurring transactions via cron jobs, and explore interactive charts. Includes JWT + Google OAuth authentication, an AI finance chatbot (Groq + Llama 3.3), CSV/PDF reports, and dark mode.',
    image: project2Img,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/prantonub/web-development-bootcamp-may-2026',
    live: 'https://financehub-prantonub.vercel.app/',
    category: 'Full Stack',
    gradient: 'from-emerald-500/20 to-teal-600/20',
    accent: '#10B981',
    featured: false,
  },
  {
    id: 3,
    title: 'AI Poster Maker',
    subtitle: 'AI-Powered Poster Generator',
    description:
      'A full-stack platform that produces ready-to-print Bangla posters — victory day, tribute, campaign, and festival greetings — from a short form. An AI model suggests styling while the layout is rendered server-side and screenshotted to print-resolution PNG via Puppeteer, keeping Bangla text perfectly spelled. Includes a full admin console.',
    image: project3Img,
    tags: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Puppeteer'],
    github: 'https://github.com/prantonub/AI-Poster-Maker',
    live: 'https://ai-poster-maker-prantonub.vercel.app',
    category: 'AI',
    gradient: 'from-violet-500/20 to-purple-600/20',
    accent: '#8B5CF6',
    featured: true,
  },
  {
    id: 4,
    title: 'HopeFund BD',
    subtitle: 'Smart Donation Platform',
    description:
      'A region-specific smart donation platform built with Firebase Authentication (email/password + Google sign-in). Donors can support causes with validated amounts, see real-time balance updates, and track donation history per cause — with DaisyUI confirmation modals and a clean, fully responsive interface.',
    image: project4Img,
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Firebase', 'DaisyUI'],
    github: 'https://github.com/prantonub/HopeFund-BD',
    live: 'https://hope-fund-bd.vercel.app/',
    category: 'Frontend',
    gradient: 'from-rose-500/20 to-pink-600/20',
    accent: '#F43F5E',
    featured: false,
  },
]

const categories = ['All', 'Full Stack', 'AI', 'Frontend']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-cyber-cyan/5 bottom-0 right-[-100px]" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center">
            <span className="w-8 h-px bg-cyber-cyan" />
            Portfolio
            <span className="w-8 h-px bg-cyber-cyan" />
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-cyber-subtle font-body max-w-xl mx-auto">
            A showcase of projects I've built while growing as a full stack developer
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-cyber-gradient text-white shadow-cyber'
                  : 'bg-cyber-card border border-cyber-border text-cyber-subtle hover:text-cyber-cyan hover:border-cyber-cyan'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group cyber-border rounded-2xl overflow-hidden hover:shadow-cyber transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Card visual header */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                {/* Project screenshot */}
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />

                {/* Category badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-semibold"
                  style={{ backgroundColor: `${project.accent}30`, color: project.accent, border: `1px solid ${project.accent}50` }}
                >
                  {project.category}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyber-gradient text-white text-xs font-body font-semibold flex items-center gap-1.5">
                    <FiStar size={11} className="fill-current" />
                    Featured
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyber-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyber-gradient text-white font-body text-sm font-semibold hover:opacity-90 transition-opacity"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyber-card border border-cyber-border text-cyber-text font-body text-sm font-semibold hover:border-cyber-cyan hover:text-cyber-cyan transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={14} />
                    Code
                  </a>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="mb-3">
                  <p className="text-xs font-body text-cyber-muted uppercase tracking-wider mb-1">{project.subtitle}</p>
                  <h3 className="font-inter text-xl font-bold text-cyber-text group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-cyber-subtle font-body text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-cyber-card border border-cyber-border text-cyber-muted text-xs font-body font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links row */}
                <div className="flex items-center gap-4 pt-4 border-t border-cyber-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-cyber-muted hover:text-cyber-cyan text-sm font-body transition-colors duration-200"
                  >
                    <FiGithub size={15} />
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-cyber-muted hover:text-cyber-cyan text-sm font-body transition-colors duration-200"
                  >
                    <FiExternalLink size={15} />
                    Live Preview
                  </a>
                  <div className="ml-auto flex items-center gap-1.5 text-cyber-muted text-xs font-body">
                    <FiCode size={13} />
                    {project.tags.length} techs
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/prantonub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-cyber-border text-cyber-subtle hover:text-cyber-cyan hover:border-cyber-cyan font-body font-semibold transition-all duration-300 hover:shadow-cyber"
          >
            <FiGithub size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
