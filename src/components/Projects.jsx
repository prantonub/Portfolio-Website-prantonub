import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'DonateHope',
    subtitle: 'Donation Platform',
    description:
      'A full-stack donation platform connecting donors with meaningful causes. Features Firebase authentication, real-time database, campaign creation, and secure donation tracking. Users can browse campaigns, donate, and track their contribution history.',
    image: null,
    emoji: '❤️',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'React Router', 'Context API'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    category: 'Full Stack',
    gradient: 'from-rose-500/20 to-pink-600/20',
    accent: '#F43F5E',
    featured: true,
  },
  {
    id: 2,
    title: 'JobNest',
    subtitle: 'Job Portal Website',
    description:
      'A responsive job portal where recruiters can post openings and job seekers can filter by category, location, and salary. Includes user auth, application tracking, and a clean recruiter dashboard built with React and Firebase.',
    image: null,
    emoji: '💼',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'React Hook Form', 'Firestore'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    category: 'Web App',
    gradient: 'from-blue-500/20 to-indigo-600/20',
    accent: '#3B82F6',
    featured: true,
  },
  {
    id: 3,
    title: 'ShopSpark',
    subtitle: 'E-Commerce UI',
    description:
      'A pixel-perfect e-commerce frontend with product listings, cart management, category filtering, wishlist, and search. Features smooth animations, a fully responsive layout, and a polished checkout UI built with React and Context API.',
    image: null,
    emoji: '🛍️',
    tags: ['React', 'Tailwind CSS', 'Context API', 'React Router', 'LocalStorage'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    category: 'Frontend',
    gradient: 'from-amber-500/20 to-orange-600/20',
    accent: '#F59E0B',
    featured: false,
  },
  {
    id: 4,
    title: 'QuizMaster',
    subtitle: 'Interactive Quiz App',
    description:
      'A dynamic quiz application with category selection, timed questions, leaderboard, and score animation. Built with vanilla JavaScript and CSS animations — showcasing DOM manipulation, async data fetching, and clean state management.',
    image: null,
    emoji: '🧠',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Open Trivia API', 'LocalStorage'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    category: 'JavaScript',
    gradient: 'from-violet-500/20 to-purple-600/20',
    accent: '#8B5CF6',
    featured: false,
  },
]

const categories = ['All', 'Full Stack', 'Web App', 'Frontend', 'JavaScript']

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
            A showcase of projects I've built while growing as a frontend developer
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
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                {/* Large emoji */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  className="text-7xl"
                >
                  {project.emoji}
                </motion.div>

                {/* Category badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-semibold"
                  style={{ backgroundColor: `${project.accent}30`, color: project.accent, border: `1px solid ${project.accent}50` }}
                >
                  {project.category}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyber-gradient text-white text-xs font-body font-semibold">
                    ⭐ Featured
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
            href="https://github.com/"
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
