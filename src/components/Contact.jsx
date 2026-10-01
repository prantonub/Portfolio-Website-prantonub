import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFacebook, FiSend, FiCheck } from 'react-icons/fi'

// Get your free access key at https://web3forms.com (sent to your email)
const WEB3FORMS_ACCESS_KEY = 'b031f939-4745-4c18-a1f0-96987cbd7682'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'pranto.nub.cse@gmail.com',
    href: 'mailto:pranto.nub.cse@gmail.com',
    color: 'text-cyber-cyan',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+880 1787-771585',
    href: 'tel:+8801787771585',
    color: 'text-cyber-purple-light',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: 'https://maps.google.com/?q=Dhaka,Bangladesh',
    color: 'text-amber-400',
  },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/prantonub', label: 'GitHub', color: 'hover:text-white hover:border-white' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/pranto-nub/', label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400' },
  { icon: FiFacebook, href: 'https://www.facebook.com/pranto.nub/', label: 'Facebook', color: 'hover:text-blue-500 hover:border-blue-500' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setError('')
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'Tauhidul Islam Pranto — Portfolio',
          botcheck: false,
          ...formData,
          subject: formData.subject
            ? `${formData.name} — ${formData.subject}`
            : `New message from ${formData.name}`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-cyber-cyan/6 top-[-50px] right-[-80px]" />
      <div className="orb w-[300px] h-[300px] bg-cyber-purple/6 bottom-0 left-[-50px]" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center">
            <span className="w-8 h-px bg-cyber-cyan" />
            Contact
            <span className="w-8 h-px bg-cyber-cyan" />
          </span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-cyber-subtle font-body max-w-xl mx-auto">
            Have a project in mind or want to say hello? I'd love to hear from you. My inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* CTA card */}
            <div className="p-8 rounded-2xl bg-cyber-gradient relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h3 className="font-inter text-2xl font-bold text-white mb-3">
                  Let's Build Something Amazing
                </h3>
                <p className="text-white/80 font-body text-sm leading-relaxed">
                  I'm actively looking for full stack developer roles. If you have an opportunity
                  or just want to chat, feel free to reach out!
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 cyber-border rounded-xl hover:shadow-cyber transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-cyber-card border border-cyber-border flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-cyber-muted text-xs font-body uppercase tracking-wider">{label}</p>
                    <p className="text-cyber-text text-sm font-body font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-cyber-muted text-xs font-body uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-12 h-12 rounded-xl bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted ${color} transition-all duration-300 hover:scale-110`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="cyber-border rounded-2xl p-8">
              <h3 className="font-inter text-xl font-bold text-cyber-text mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-cyber-muted text-xs font-body uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-cyber-card border border-cyber-border text-cyber-text font-body text-sm placeholder-cyber-muted focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/50 transition-all duration-200"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-cyber-muted text-xs font-body uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-cyber-card border border-cyber-border text-cyber-text font-body text-sm placeholder-cyber-muted focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/50 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-cyber-muted text-xs font-body uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-cyber-card border border-cyber-border text-cyber-text font-body text-sm placeholder-cyber-muted focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/50 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-cyber-muted text-xs font-body uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-cyber-card border border-cyber-border text-cyber-text font-body text-sm placeholder-cyber-muted focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/50 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 ${
                    submitted
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                      : 'bg-cyber-gradient text-white hover:opacity-90 hover:scale-[1.02] shadow-cyber'
                  } ${loading ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {submitted ? (
                    <>
                      <FiCheck size={18} />
                      Message Sent Successfully!
                    </>
                  ) : loading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-red-400 text-sm font-body text-center">{error}</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
