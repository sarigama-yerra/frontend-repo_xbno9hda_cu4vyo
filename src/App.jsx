import React from 'react'
import Spline from '@splinetool/react-spline'
import { CheckCircle2, Linkedin, Mail, FileText, Award, Shield, Users, Sparkles } from 'lucide-react'

function Stat({ value, label }) {
  return (
    <div className="px-4 py-3 rounded-xl bg-white/70 border border-white/40 shadow-sm">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/70 border border-white/40 px-3 py-1 text-sm text-gray-800">
      <CheckCircle2 size={14} className="text-blue-600" /> {children}
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
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_10%_-10%,#dbeafe,transparent),radial-gradient(1200px_600px_at_110%_-10%,#ede9fe,transparent)] text-gray-900">
      {/* Top navigation */}
      <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 shadow-lg shadow-blue-500/30" />
            <span className="font-semibold">Engineering Leader</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#experience" className="hover:text-gray-700">Experience</a>
            <a href="#skills" className="hover:text-gray-700">Skills</a>
            <a href="#certs" className="hover:text-gray-700">Certifications</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a href="#resume" className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">
              <FileText size={16} /> Resume
            </a>
            <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <Mail size={16} /> Email
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Hero section with Spline 3D */}
      <section id="about" className="relative">
        <div className="relative h-[78vh] md:h-[82vh] overflow-hidden">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Overlay content */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 md:pb-0">
              <div className="pointer-events-auto md:max-w-2xl lg:max-w-3xl bg-white/70 backdrop-blur rounded-2xl border border-white/40 shadow-xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 text-sm text-blue-700 font-medium bg-blue-50 rounded-full px-3 py-1 mb-4">
                  <Shield size={16} /> Certified Scrum Master • Servant Leader
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Driving AI-enabled delivery with calm, clear communication
                </h1>
                <p className="mt-4 text-gray-700">
                  Technology leader with 11+ years orchestrating cross-functional teams across FinTech and SaaS. Expert in Agile and Scrum, cloud-native platforms, and data engineering. I enable high-performance cultures through clarity, empathy, and relentless improvement.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Pill>9-person teams led</Pill>
                  <Pill>83% scalability uplift</Pill>
                  <Pill>30% manual effort reduction via LLMs</Pill>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">
                    <Mail size={18} /> Contact
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                    <Linkedin size={18} /> Connect
                  </a>
                  <a href="#resume" className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                    <FileText size={18} /> Resume
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Stat value="11+ yrs" label="Experience" />
                  <Stat value="AI & Data" label="Platform Delivery" />
                  <Stat value="AWS/GCP" label="Cloud Native" />
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
            <Users className="text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="rounded-2xl bg-white/80 backdrop-blur border border-white/40 shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-gray-600">{exp.org}</p>
                  </div>
                  <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-md">{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
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
      <section id="skills" className="py-16 md:py-20 bg-gradient-to-b from-white to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold">Core Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/80 border border-white/40 shadow-sm text-sm">
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
            <Award className="text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/40 shadow-sm p-6">
              <p className="font-semibold">Certified Scrum Master (CSM)</p>
              <p className="text-sm text-gray-600 mt-1">Scrum Alliance • Nov 2023</p>
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/40 shadow-sm p-6">
              <p className="font-semibold">Certified Agile Leadership (CAL)</p>
              <p className="text-sm text-gray-600 mt-1">In Progress</p>
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/40 shadow-sm p-6">
              <p className="font-semibold">Cloud & Data Platforms</p>
              <p className="text-sm text-gray-600 mt-1">AWS • GCP • Kubernetes • Terraform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-t from-indigo-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/40 shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-bold">Let’s build something high-impact</h2>
            <p className="mt-2 text-gray-700 max-w-2xl">
              I lead with clarity, empathy, and accountability — aligning teams and stakeholders to deliver outcomes on time and at quality. Open to roles in engineering leadership, Agile delivery, and AI-platform programs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">
                <Mail size={18} /> Email Me
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="#resume" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                <FileText size={18} /> View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Engineering Leader • Agile & AI Delivery
      </footer>
    </div>
  )
}
