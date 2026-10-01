import { FiGithub, FiLinkedin, FiFacebook, FiMapPin, FiChevronUp } from 'react-icons/fi'
import { RiCodeSSlashLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/prantonub', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/pranto-nub/', label: 'LinkedIn' },
  { icon: FiFacebook, href: 'https://www.facebook.com/pranto.nub/', label: 'Facebook' },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-cyber-border bg-cyber-navy/60 backdrop-blur-sm">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cyber-gradient flex items-center justify-center">
                <RiCodeSSlashLine className="text-white text-lg" />
              </div>
              <span className="font-inter font-bold text-lg text-cyber-text">
                Tauhidul Islam Pranto
              </span>
            </div>
            <p className="text-cyber-muted font-body text-sm leading-relaxed max-w-xs">
              Full Stack Developer from Dhaka, Bangladesh. Building beautiful, functional web experiences with modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-inter font-semibold text-cyber-text mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-cyber-muted hover:text-cyber-cyan text-sm font-body transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-inter font-semibold text-cyber-text mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-subtle hover:text-cyber-cyan hover:border-cyber-cyan transition-all duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <p className="text-cyber-muted text-sm font-body">pranto.nub.cse@gmail.com</p>
            <p className="text-cyber-muted text-sm font-body flex items-center gap-1.5">
              <FiMapPin size={13} className="text-cyber-cyan shrink-0" />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cyber-muted text-sm font-body">
            © {new Date().getFullYear()} Tauhidul Islam Pranto. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-cyber-gradient flex items-center justify-center text-white shadow-cyber hover:scale-110 transition-transform duration-300 z-40"
        aria-label="Back to top"
      >
        <FiChevronUp size={20} />
      </button>
    </footer>
  )
}
