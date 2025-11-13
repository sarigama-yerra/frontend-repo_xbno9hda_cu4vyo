import React from 'react'
import Spline from '@splinetool/react-spline'
import { CheckCircle2, Linkedin, Mail, FileText, Award, Shield, Users, Sparkles, MonitorCog, Cpu, Network, Cloud } from 'lucide-react'
import { SITE } from './config'

function Stat({ value, label }) {
  return (
    <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 shadow-sm">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-300">{label}</div>
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-gray-200">
      <CheckCircle2 size={14} className="text-cyan-400" /> {children}
    </span>
  )
}

export default function App() {
  const skills = [
    'Agile & Scrum Leadership',
    'Stakeholder Communication',
    'Risk & Dependency Mgmt',
    'Cloud (AWS, GCP)',
    'Data Engineering & ETL',
    'GenAI & Automation',
    'Microservices on Kubernetes',
    'DevOps Collaboration',
    'SAFe',
  ]

  const experience = [
    {
      role: 'Software Development Manager',
      org: 'Clearwater Analytics',
      period: 'Nov 2023 – Aug 2025',
      highlights: [
        'Led a 9-member team delivering AI-powered FinTech data platforms for 9000+ LPs',
        'Scaled microservices on AWS (Lambda, EKS, SQS, Terraform) with 83% scalability improvement',
        'Embedded LLMs to automate data workflows, cutting manual effort by 30%'
      ]
    },
    {
      role: 'Senior Software Engineer',
      org: 'Clearwater Analytics',
      period: 'Nov 2019 – Nov 2023',
      highlights: [
        'Scrum Master for multiple Agile teams with consistent, predictable delivery',
        'Built ETL and automated reporting systems improving accuracy and compliance',
        'Delivered FX and multi-GAAP unified accounting/reporting pipelines'
      ]
    },
    {
      role: 'Software Engineer Consultant',
      org: 'Genpact Headstrong Capital Markets',
      period: 'May 2018 – Nov 2019',
      highlights: [
        'Shipped enterprise search on Solr/Lucidworks for an analytics data lake',
        'Built ML-powered semantic search and portfolio insights platform'
      ]
    },
    {
      role: 'Software Engineer',
      org: 'Tech Mahindra',
      period: 'Jun 2014 – Apr 2018',
      highlights: [
        'AI-powered support portals improved ops efficiency by 40%',
        'NLP chatbots increased engagement by 37%'
      ]
    }
  ]

  return (
    <div className="min-h-screen text-gray-100 bg-slate-950 relative overflow-hidden">
      {/* subtle grid + gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,#0ea5e9,transparent),radial-gradient(1200px_600px_at_110%_-10%,#7c3aed,transparent)] opacity-20" />
        <div className="absolute inset-0" style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Top navigation */}
      <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 shadow-lg shadow-cyan-500/30 flex items-center justify-center">
              <Cpu className="text-white" size={18} />
            </div>
            <span className="font-semibold text-white">{SITE.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#certs" className="hover:text-white">Certifications</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a href={SITE.resumeUrl} className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-white/10 text-white hover:bg-white/15 transition border border-white/10">
              <FileText size={16} /> Resume
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-white/10 hover:bg-white/10 transition">
              <Mail size={16} /> Email
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-white/10 hover:bg-white/10 transition">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Hero section with Spline 3D */}
      <section id="about" className="relative">
        <div className="relative h-[78vh] md:h-[82vh] overflow-hidden">
          <Spline scene={SITE.splineScene} style={{ width: '100%', height: '100%' }} />

          {/* Overlay content */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 md:pb-0">
              <div className="pointer-events-auto md:max-w-2xl lg:max-w-3xl bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 text-sm text-cyan-300 font-medium bg-cyan-500/10 rounded-full px-3 py-1 mb-4 border border-cyan-400/20">
                  <Shield size={16} /> Certified Scrum Master • Servant Leader
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                  Calm leadership for high-velocity, AI-enabled delivery
                </h1>
                <p className="mt-4 text-gray-200">
                  Engineering leader with 11+ years orchestrating cross-functional teams across FinTech and SaaS. Expert in Agile and Scrum, cloud-native platforms, and data engineering. I enable high-performance cultures through clarity, empathy, and relentless improvement.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Pill>9-person teams led</Pill>
                  <Pill>83% scalability uplift</Pill>
                  <Pill>30% manual effort reduction via LLMs</Pill>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-gray-100 transition">
                    <Mail size={18} /> Contact
                  </a>
                  <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition">
                    <Linkedin size={18} /> Connect
                  </a>
                  <a href={SITE.resumeUrl} className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition">
                    <FileText size={18} /> Resume
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Stat value="11+ yrs" label="Experience" />
                  <Stat value="AI & Data" label="Platform Delivery" />
                  <Stat value="AWS/GCP" label="Cloud Native" />
                </div>

                {/* Tech/office quick highlight cards */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <MonitorCog className="text-cyan-300" size={18} />
                    <span className="text-sm text-gray-200">Office setups & DX</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Network className="text-indigo-300" size={18} />
                    <span className="text-sm text-gray-200">Microservices</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Cloud className="text-blue-300" size={18} />
                    <span className="text-sm text-gray-200">AWS • GCP</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Sparkles className="text-purple-300" size={18} />
                    <span className="text-sm text-gray-200">GenAI delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Users className="text-cyan-300" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Experience</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-gray-300">{exp.org}</p>
                  </div>
                  <span className="text-xs font-medium text-gray-200 bg-white/10 px-2 py-1 rounded-md border border-white/10">{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-200">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-20 bg-gradient-to-b from-transparent to-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="text-cyan-300" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Core Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm text-sm text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-cyan-300" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Certifications</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-sm p-6">
              <p className="font-semibold text-white">Certified Scrum Master (CSM)</p>
              <p className="text-sm text-gray-300 mt-1">Scrum Alliance • Nov 2023</p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-sm p-6">
              <p className="font-semibold text-white">Certified Agile Leadership (CAL)</p>
              <p className="text-sm text-gray-300 mt-1">In Progress</p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-sm p-6">
              <p className="font-semibold text-white">Cloud & Data Platforms</p>
              <p className="text-sm text-gray-300 mt-1">AWS • GCP • Kubernetes • Terraform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-t from-slate-900/60 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Let’s build something high-impact</h2>
            <p className="mt-2 text-gray-200 max-w-2xl">
              I lead with clarity, empathy, and accountability — aligning teams and stakeholders to deliver outcomes on time and at quality. Open to roles in engineering leadership, Agile delivery, and AI-platform programs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-gray-100 transition">
                <Mail size={18} /> Email Me
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={SITE.resumeUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <FileText size={18} /> View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {SITE.name} • Agile & AI Delivery
      </footer>
    </div>
  )
}
