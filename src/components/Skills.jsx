import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTypescript,
  SiTailwindcss, SiVite, SiFirebase, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiDocker, SiGit, SiNpm, SiFigma,
} from 'react-icons/si'
import { FiGitBranch, FiCode } from 'react-icons/fi'
import { RiRocketLine } from 'react-icons/ri'

const skillCategories = [
  {
    title: 'Core Technologies',
    color: 'cyan',
    skills: [
      { name: 'HTML5', level: 90, icon: SiHtml5, brand: '#E34F26' },
      { name: 'CSS3', level: 85, icon: SiCss, brand: '#1572B6' },
      { name: 'JavaScript (ES6+)', level: 78, icon: SiJavascript, brand: '#F7DF1E' },
      { name: 'React.js', level: 75, icon: SiReact, brand: '#61DAFB' },
    ],
  },
  {
    title: 'Frontend Frameworks',
    color: 'purple',
    skills: [
      { name: 'Next.js (Currently Working)', level: 75, icon: SiNextdotjs, brand: '#FFFFFF' },
      { name: 'TypeScript', level: 65, icon: SiTypescript, brand: '#3178C6' },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, brand: '#38BDF8' },
      { name: 'Vite / CRA', level: 70, icon: SiVite, brand: '#646CFF' },
      { name: 'Firebase', level: 65, icon: SiFirebase, brand: '#FFCA28' },
    ],
  },
  {
    title: 'Backend & Databases',
    color: 'cyan',
    skills: [
      { name: 'Node.js', level: 75, icon: SiNodedotjs, brand: '#339933' },
      { name: 'Express.js', level: 70, icon: SiExpress, brand: '#FFFFFF' },
      { name: 'MongoDB', level: 70, icon: SiMongodb, brand: '#47A248' },
      { name: 'PostgreSQL', level: 60, icon: SiPostgresql, brand: '#4169E1' },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'purple',
    skills: [
      { name: 'Docker', level: 55, icon: SiDocker, brand: '#2496ED' },
      { name: 'CI/CD', level: 50, icon: FiGitBranch, brand: '#FF6B6B' },
      { name: 'Git & GitHub', level: 72, icon: SiGit, brand: '#F05032' },
      { name: 'npm', level: 70, icon: SiNpm, brand: '#CB3837' },
    ],
  },
]

const techIcons = [
  { name: 'HTML5', icon: SiHtml5, bg: '#E34F26' },
  { name: 'CSS3', icon: SiCss, bg: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, bg: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, bg: '#3178C6' },
  { name: 'React', icon: SiReact, bg: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, bg: '#FFFFFF' },
  { name: 'Tailwind', icon: SiTailwindcss, bg: '#38BDF8' },
  { name: 'Node.js', icon: SiNodedotjs, bg: '#339933' },
  { name: 'Express', icon: SiExpress, bg: '#FFFFFF' },
  { name: 'MongoDB', icon: SiMongodb, bg: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, bg: '#4169E1' },
  { name: 'Docker', icon: SiDocker, bg: '#2496ED' },
  { name: 'CI/CD', icon: FiGitBranch, bg: '#FF6B6B' },
  { name: 'Firebase', icon: SiFirebase, bg: '#FFCA28' },
  { name: 'Git', icon: SiGit, bg: '#F05032' },
  { name: 'VS Code', icon: FiCode, bg: '#007ACC' },
  { name: 'Figma', icon: SiFigma, bg: '#F24E1E' },
  { name: 'npm', icon: SiNpm, bg: '#CB3837' },
]

function SkillBar({ name, level, icon: Icon, brand, color, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon size={17} className="shrink-0" style={{ color: brand }} />
          <span className="font-body text-sm font-medium text-cyber-text">{name}</span>
        </div>
        <span className={`font-body text-xs font-semibold ${color === 'cyan' ? 'text-cyber-cyan' : 'text-cyber-purple-light'}`}>
          {level}%
        </span>
      </div>
      <div className="h-2 bg-cyber-card rounded-full overflow-hidden border border-cyber-border/50">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
          className={`h-full rounded-full progress-bar ${
            color === 'cyan'
              ? 'bg-gradient-to-r from-cyber-cyan to-cyan-400'
              : 'bg-gradient-to-r from-cyber-purple to-violet-400'
          }`}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-cyber-navy/30">
      <div className="orb w-[350px] h-[350px] bg-cyber-cyan/6 top-10 right-[-50px]" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center">
            <span className="w-8 h-px bg-cyber-cyan" />
            My Skills
            <span className="w-8 h-px bg-cyber-cyan" />
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-cyber-subtle font-body max-w-xl mx-auto">
            Technologies and tools I've been working with on my journey as a full stack developer
          </p>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map(({ title, color, skills }) => (
            <div
              key={title}
              className="cyber-border rounded-2xl p-8"
            >
              <h3 className={`font-inter text-lg font-semibold mb-6 ${color === 'cyan' ? 'text-cyber-text' : 'text-cyber-purple-light'}`}>
                {title}
              </h3>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} color={color} index={i} inView={inView} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech icon pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-cyber-muted text-sm font-body mb-6 uppercase tracking-widest">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map(({ name, icon: Icon, bg }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-cyber-card border border-cyber-border rounded-full text-sm font-body text-cyber-subtle hover:text-cyber-cyan hover:border-cyber-cyan transition-all duration-200 cursor-default hover:scale-105"
              >
                <Icon size={16} style={{ color: bg }} />
                <span>{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 cyber-border rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="text-cyber-cyan shrink-0"><RiRocketLine size={36} /></div>
          <div>
            <h4 className="font-inter font-semibold text-cyber-text mb-1">Currently Working</h4>
            <p className="text-cyber-subtle font-body text-sm">
              Next.js daily · building full stack apps with Node.js, Express, MongoDB, PostgreSQL, Docker & CI/CD — always expanding my stack!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
