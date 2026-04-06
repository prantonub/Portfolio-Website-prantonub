import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { RiCodeSSlashLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cyber-navy/95 backdrop-blur-md border-b border-cyber-border shadow-card'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-lg bg-cyber-gradient flex items-center justify-center">
                <RiCodeSSlashLine className="text-white text-lg" />
              </div>
              <span className="font-inter font-bold text-xl text-cyber-text group-hover:gradient-text transition-all duration-300">
                Pranto<span className="text-cyber-cyan">.</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 relative group ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyber-cyan'
                      : 'text-cyber-subtle hover:text-cyber-text'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyber-gradient rounded-full"
                    />
                  )}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="ml-4 px-5 py-2 rounded-lg bg-cyber-gradient text-white font-body text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-cyber"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-cyber-subtle hover:text-cyber-cyan transition-colors"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-cyber-navy/98 backdrop-blur-md border-b border-cyber-border shadow-card"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-left px-4 py-3 rounded-xl font-body text-base font-medium transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyber-cyan bg-cyber-cyan/10'
                      : 'text-cyber-subtle hover:text-cyber-text hover:bg-cyber-card'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="mt-2 px-4 py-3 rounded-xl bg-cyber-gradient text-white font-body font-semibold hover:opacity-90 transition-all duration-200 text-center"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
