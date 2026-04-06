import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiFacebook, FiDownload, FiArrowRight } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'
import prantoImg from '../assets/pranto.png'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: FiFacebook, href: 'https://facebook.com/', label: 'Facebook' },
]

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '1+', label: 'Years Learning' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-cyber-cyan/8 top-[-100px] right-[-100px]" />
      <div className="orb w-[500px] h-[500px] bg-cyber-purple/8 bottom-[-150px] left-[-100px]" />

      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-card border border-cyber-border">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-cyber-subtle text-sm font-body">Available for work</span>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-1.5 text-cyber-muted text-sm font-body mb-4"
            >
              <HiLocationMarker className="text-cyber-cyan" />
              <span>Dhaka, Bangladesh</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-inter text-5xl sm:text-6xl lg:text-7xl font-bold text-cyber-text leading-tight mb-3"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Pranto</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-2xl sm:text-3xl font-inter font-semibold text-cyber-subtle mb-6 h-12"
            >
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'JavaScript Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyber-cyan-light"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-cyber-subtle font-body text-lg leading-relaxed mb-10 max-w-lg"
            >
              Crafting <span className="text-cyber-cyan font-medium">beautiful</span> and{' '}
              <span className="text-cyber-purple-light font-medium">performant</span> web experiences with modern tools.
              Passionate about turning ideas into pixel-perfect reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyber-gradient text-white font-body font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-cyber"
              >
                Hire Me
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl cyber-border text-cyber-text font-body font-semibold text-base hover:text-cyber-cyan hover:scale-105 transition-all duration-300"
              >
                <FiDownload />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4 mb-12"
            >
              <span className="text-cyber-muted text-sm font-body">Follow me:</span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-subtle hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-cyber transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex gap-8 pt-6 border-t border-cyber-border"
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-inter text-3xl font-bold gradient-text">{value}</p>
                  <p className="font-body text-sm text-cyber-muted mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-[-20px] rounded-full border border-cyber-cyan/10 animate-spin-slow" />
              <div className="absolute inset-[-40px] rounded-full border border-cyber-purple/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

              {/* Glow effects */}
              <div className="absolute inset-0 rounded-full bg-glow-cyan opacity-50 blur-3xl scale-110" />
              <div className="absolute inset-0 rounded-full bg-glow-purple opacity-30 blur-3xl scale-110" />

              {/* Image container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 border-2 border-cyber-cyan/30 shadow-cyber">
                  <img
                    src={prantoImg}
                    alt="Md Tauhidul Islam Pranto"
                    className="w-full h-full object-cover object-top scale-110"
                    style={{ mixBlendMode: 'normal' }}
                  />
                  {/* Overlay gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyber-navy/60 to-transparent" />
                </div>

                {/* Floating tech badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -right-4 top-8 px-3 py-2 bg-cyber-card border border-cyber-border rounded-xl shadow-card flex items-center gap-2"
                >
                  <span className="text-lg">⚛️</span>
                  <span className="text-xs font-body font-medium text-cyber-text">React Dev</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -left-4 bottom-12 px-3 py-2 bg-cyber-card border border-cyber-border rounded-xl shadow-card flex items-center gap-2"
                >
                  <span className="text-lg">🚀</span>
                  <span className="text-xs font-body font-medium text-cyber-text">Fresher</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-cyber-muted text-xs font-body tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-cyber-border flex items-start justify-center pt-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-cyber-cyan"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
