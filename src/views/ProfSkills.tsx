import React, { useState } from 'react';
import { Code, Server, Cpu, Layers } from 'lucide-react';

interface Skill {
  language: string;
  category: 'frontend' | 'backend' | 'ai-cloud';
  level: string;
  text: string;
  percent: number;
}

export default function ProfSkills() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'ai-cloud'>('all');

  const skills: Skill[] = [
    {
      language: "Vue.js 3",
      category: "frontend",
      level: "Production Core (3+ Years)",
      text: "Vue 3 Composition API, Single File Components, Pinia/Vuex state management, reactive systems, and scalable UI architectures.",
      percent: 90,
    },
    {
      language: "React 19",
      category: "frontend",
      level: "Advanced",
      text: "Modern React with hooks, functional component architecture, state machines, custom hooks, and high-performance rendering.",
      percent: 85,
    },
    {
      language: "JavaScript / TypeScript",
      category: "frontend",
      level: "Advanced",
      text: "Strict TypeScript typing, modern ECMAScript standards, asynchronous concurrency, DOM manipulation, and API clients.",
      percent: 88,
    },
    {
      language: "FastAPI / Python",
      category: "backend",
      level: "Production (1+ Year)",
      text: "FastAPI microservices, asynchronous request handling, Pydantic schemas, RESTful endpoint architectures, and AI integrations.",
      percent: 75,
    },
    {
      language: "Node.js & Express",
      category: "backend",
      level: "Advanced",
      text: "Backend API design, authentication middlewares, MongoDB / PostgreSQL querying, and asynchronous event-driven pipelines.",
      percent: 82,
    },
    {
      language: "Generative AI & Multimodal",
      category: "ai-cloud",
      level: "Specialized Focus",
      text: "Prompt engineering, multimodal model integrations, dynamic streaming responses, and production AI frontend workflows.",
      percent: 85,
    },
    {
      language: "AWS & Docker",
      category: "ai-cloud",
      level: "Intermediate",
      text: "Containerization with Docker, deploying services with AWS S3, DynamoDB, and monitoring logs with CloudWatch.",
      percent: 70,
    },
    {
      language: "Tailwind CSS",
      category: "frontend",
      level: "Expert",
      text: "Modern utility-first styling, design token systems, responsive fluid layouts, and dark mode theming.",
      percent: 92,
    },
    {
      language: "HTML5 & Modern CSS",
      category: "frontend",
      level: "Expert",
      text: "Semantic web markup, accessibility compliance (WCAG), CSS Grid, Flexbox, transitions, and keyframe animations.",
      percent: 95,
    },
  ];

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  return (
    <section className="py-16 lg:py-24" id="Skills">
      <div className="text-center mb-10" data-aos="fade-up">
        <span className="inner-font text-white uppercase text-3xl lg:text-6xl font-bold tracking-tight">
          PROFESSIONAL{' '}
        </span>
        <span className="inner-font text-white uppercase text-3xl lg:text-6xl font-bold tracking-tight">
          SKILLS
        </span>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm lg:text-base px-4">
          Battle-tested tech stack spanning modern frontends, robust backends, and generative AI integrations.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 px-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#29a587] text-white shadow-lg shadow-[#29a587]/20'
                : 'bg-[#1d222a] text-gray-300 hover:text-white border border-white/5'
            }`}
          >
            All Competencies ({skills.length})
          </button>
          <button
            onClick={() => setActiveFilter('frontend')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'frontend'
                ? 'bg-[#29a587] text-white shadow-lg shadow-[#29a587]/20'
                : 'bg-[#1d222a] text-gray-300 hover:text-white border border-white/5'
            }`}
          >
            Frontend &amp; UI
          </button>
          <button
            onClick={() => setActiveFilter('backend')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'backend'
                ? 'bg-[#29a587] text-white shadow-lg shadow-[#29a587]/20'
                : 'bg-[#1d222a] text-gray-300 hover:text-white border border-white/5'
            }`}
          >
            Backend &amp; APIs
          </button>
          <button
            onClick={() => setActiveFilter('ai-cloud')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'ai-cloud'
                ? 'bg-[#29a587] text-white shadow-lg shadow-[#29a587]/20'
                : 'bg-[#1d222a] text-gray-300 hover:text-white border border-white/5'
            }`}
          >
            AI, AWS &amp; Cloud
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20 max-w-7xl mx-auto">
        {filteredSkills.map((skill) => (
          <div
            key={skill.language}
            data-aos="fade-up"
            className="group relative bg-[#1d222a]/80 hover:bg-[#232932] border border-white/10 hover:border-[#29a587]/60 p-6 rounded-2xl transition-all duration-300 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="semi-white text-2xl font-bold group-hover:text-[#29a587] transition-colors">
                    {skill.language}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#29a587] uppercase tracking-wider block mt-0.5">
                    {skill.level}
                  </span>
                </div>
                <div className="text-right">
                  <span className="semi-white text-2xl font-bold">{skill.percent}</span>
                  <span className="teal text-2xl font-bold">%</span>
                </div>
              </div>

              <p className="inner-font text-gray-300 text-sm leading-relaxed mb-6">
                {skill.text}
              </p>
            </div>

            <div>
              <div className="w-full bg-[#12161c] rounded-full h-2.5 overflow-hidden p-0.5 border border-white/5">
                <div
                  className="bg-gradient-to-r from-[#22846d] to-[#29a587] h-full rounded-full transition-all duration-1000 shadow-sm"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
