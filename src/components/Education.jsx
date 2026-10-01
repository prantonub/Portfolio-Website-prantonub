import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiCalendar, HiLocationMarker, HiBadgeCheck } from 'react-icons/hi'

const education = [
  {
    degree: 'BSc in Computer Science & Engineering',
    institution: 'Northern University Bangladesh',
    location: 'Dhaka, Bangladesh',
    period: 'July 2023 – December 2026',
    status: 'Running',
    statusColor: 'text-amber-400',
    description:
      'Currently pursuing my bachelor\'s degree in Computer Science and Engineering with a strong focus on software development, algorithms, data structures, and web technologies. Active in programming clubs and hackathons.',
    highlights: [
      'Data Structures & Algorithms',
      'Web Development',
      'Database Management',
      'Software Engineering',
      'Object-Oriented Programming',
      'Computer Networks',
    ],
    icon: '🎓',
    gradient: 'from-cyber-cyan/20 to-cyber-purple/20',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Ibrahim Khan Govt. College',
    location: 'Bhuapur, Tangail',
    period: '2020 – 2022',
    status: 'Completed',
    statusColor: 'text-green-400',
    description:
      'Completed HSC in the Science group with strong academic performance in Mathematics, Physics, and Chemistry. Developed foundational analytical and problem-solving skills.',
    highlights: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Information & Communication Technology'],
    icon: '🏫',
    gradient: 'from-blue-500/20 to-indigo-600/20',
  },
]

const certifications = [
  { name: 'Programming Hero — Level 1', issuer: 'Programming Hero', year: 'Completed', icon: '🏆' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-cyber-navy/30">
      <div className="orb w-[350px] h-[350px] bg-cyber-purple/6 top-1/2 left-[-80px]" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center">
            <span className="w-8 h-px bg-cyber-cyan" />
            Education
            <span className="w-8 h-px bg-cyber-cyan" />
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-cyber-subtle font-body max-w-xl mx-auto">
            My educational journey that shaped my technical foundation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className={`relative md:flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyber-gradient border-4 border-cyber-black items-center justify-center z-10 shadow-cyber">
                  <span className="text-lg">{edu.icon}</span>
                </div>

                {/* Card */}
                <div className={`md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                  <div className="cyber-border rounded-2xl p-6 hover:shadow-cyber transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-inter text-lg font-bold text-cyber-text mb-1">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-1.5 text-cyber-cyan font-body text-sm font-medium">
                          <HiAcademicCap size={15} />
                          {edu.institution}
                        </div>
                      </div>
                      <span className={`shrink-0 flex items-center gap-1 text-xs font-body font-semibold ${edu.statusColor}`}>
                        <HiBadgeCheck size={14} />
                        {edu.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-cyber-muted text-xs font-body">
                      <span className="flex items-center gap-1">
                        <HiCalendar size={12} />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiLocationMarker size={12} />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-cyber-subtle text-sm font-body leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map(h => (
                        <span
                          key={h}
                          className="px-2.5 py-1 rounded-md bg-cyber-card border border-cyber-border text-cyber-muted text-xs font-body"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty side (timeline balance) */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-inter text-2xl font-bold text-cyber-text text-center mb-8">
            Certifications & <span className="gradient-text">Courses</span>
          </h3>
          <div className="flex justify-center">
            {certifications.map(({ name, issuer, year, icon }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="cyber-border rounded-xl p-5 text-center hover:shadow-cyber transition-all duration-300 hover:scale-105 w-full max-w-xs"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h4 className="font-inter text-sm font-semibold text-cyber-text mb-1 leading-tight">{name}</h4>
                <p className="text-cyber-cyan text-xs font-body">{issuer}</p>
                <p className="text-cyber-muted text-xs font-body mt-1">{year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
