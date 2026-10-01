import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiLayout, FiSmartphone, FiZap } from 'react-icons/fi'

const highlights = [
  { icon: FiCode, title: 'Clean Code', desc: 'Writing readable, maintainable, and well-structured code' },
  { icon: FiLayout, title: 'Pixel Perfect', desc: 'Translating designs into accurate, polished interfaces' },
  { icon: FiSmartphone, title: 'Responsive', desc: 'Building layouts that work beautifully on every screen' },
  { icon: FiZap, title: 'Performance', desc: 'Optimizing for speed and smooth user experiences' },
]

const infoItems = [
  { label: 'Name', value: 'Tauhidul Islam Pranto' },
  { label: 'Degree', value: 'BSc in CSE' },
  { label: 'University', value: 'Northern University Bangladesh' },
  { label: 'Location', value: 'Dhaka, Bangladesh' },
  { label: 'Email', value: 'pranto.nub.cse@gmail.com' },
  { label: 'Status', value: 'Open to Opportunities' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background orb */}
      <div className="orb w-[400px] h-[400px] bg-cyber-purple/6 top-1/2 left-[-100px] -translate-y-1/2" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center">
            <span className="w-8 h-px bg-cyber-cyan" />
            About Me
            <span className="w-8 h-px bg-cyber-cyan" />
          </span>
          <h2 className="section-title">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-cyber-subtle font-body max-w-xl mx-auto">
            A passionate developer with a love for building things that live on the internet
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-inter text-2xl font-bold text-cyber-text mb-6">
              Full Stack Developer &{' '}
              <span className="gradient-text">UI Enthusiast</span>
            </h3>
            <div className="space-y-4 text-cyber-subtle font-body leading-relaxed">
              <p>
                I'm <span className="text-cyber-text font-medium">Tauhidul Islam Pranto</span>, a
                Full Stack Developer from Dhaka, Bangladesh. I'm currently pursuing my BSc in Computer
                Science and Engineering (July 2023 – December 2026) from Northern University Bangladesh,
                where I discovered my passion for crafting beautiful web interfaces.
              </p>
              <p>
                I specialize in building responsive, accessible, and visually appealing web applications
                using <span className="text-cyber-cyan font-medium">React</span>,{' '}
                <span className="text-cyber-cyan font-medium">JavaScript</span>, and{' '}
                <span className="text-cyber-cyan font-medium">Tailwind CSS</span>. I love turning
                complex design problems into elegant, intuitive solutions.
              </p>
              <p>
                When I'm not coding, I'm exploring the latest frontend technologies, contributing
                to open-source projects, or improving my UI/UX design skills. I'm actively
                looking for opportunities to grow and contribute to a talented team.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {infoItems.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-cyber-muted text-xs font-body uppercase tracking-wider">{label}</span>
                  <span className={`text-sm font-body font-medium ${label === 'Status' ? 'text-green-400' : 'text-cyber-text'}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 px-7 py-3.5 rounded-xl bg-cyber-gradient text-white font-body font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-cyber"
            >
              Let's Talk →
            </button>
          </motion.div>

          {/* Right - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="cyber-border rounded-2xl p-6 group hover:shadow-cyber transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="w-12 h-12 rounded-xl bg-cyber-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white text-xl" />
                </div>
                <h4 className="font-inter font-semibold text-cyber-text mb-2">{title}</h4>
                <p className="text-cyber-muted text-sm font-body leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
