import React, { useState } from 'react';
import taskAppPng from '../assets/img/task-app.png';
import { ExternalLink, Layers, CheckCircle2, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string[];
  features: string[];
  link: string;
  image: string;
  aosDuration: number;
}

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "task-application",
      title: "Task Application",
      tagline: "Full-Stack Productivity & Work Task Management System",
      description:
        "A full-stack task application where users can log, track, and categorize tasks for personal productivity or enterprise work. Features JWT authentication, MongoDB persistent database storage, and a responsive Vue 3 frontend.",
      architecture: ["Vue 3", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "JWT Auth"],
      features: [
        "User registration & secure session management",
        "Categorized task board with status tracking",
        "REST API endpoints with validation and error handling",
        "Fast response times hosted on Vercel cloud",
      ],
      link: "https://todo-frontend-dun-one.vercel.app/",
      image: taskAppPng,
      aosDuration: 1020,
    },
    {
      id: "batanes-travel",
      title: "Batanes Travel & Tourism",
      tagline: "High-Performance Cultural & Tourism Portal",
      description:
        "A travel and tourism guide showcasing the breathtaking scenery, cultural heritage, and local tour attractions in Batanes, Philippines. Built with modern web technologies, responsive layouts, interactive route guides, and rich visual presentation.",
      architecture: ["Vue.js 3", "Node.js", "Tailwind CSS", "REST APIs", "Vercel"],
      features: [
        "Interactive destinations and itinerary planning",
        "Optimized asset loading for mobile travel users",
        "Responsive grid presentation across all screen sizes",
        "Direct inquiry integration for local tours",
      ],
      link: "https://todo-frontend-dun-one.vercel.app/",
      image: taskAppPng,
      aosDuration: 800,
    },
  ];

  return (
    <>
      <section className="mt-10 lg:mt-20 py-10" id="Portfolio">
        <div data-aos="fade-right" data-aos-duration="500" className="text-center mb-12">
          <span className="inner-font text-white uppercase text-3xl lg:text-6xl font-bold tracking-tight">
            PORTFOLIO
          </span>
          <h2
            data-aos="fade-up"
            data-aos-duration="100"
            className="inner-font uppercase text-2xl lg:text-4xl font-bold teal mt-1"
          >
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-400 mt-2 text-sm lg:text-base max-w-lg mx-auto px-4">
            Real-world full-stack web applications deployed and tested with active users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-20 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration={project.aosDuration}
              className="card rounded-2xl border border-white/10 hover:border-[#29a587]/60 p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="mb-6 overflow-hidden rounded-xl border border-white/10 relative">
                  <img
                    className="card-img rounded-xl w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute top-3 right-3 bg-[#1d222a]/85 border border-[#29a587]/40 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#29a587] shadow">
                    Live Project
                  </div>
                </div>

                <h3 className="mb-1 text-2xl font-bold tracking-tight teal group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-gray-400 mb-3">
                  {project.tagline}
                </p>
                <p className="mb-4 text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.architecture.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-[#1d222a] border border-white/10 text-gray-300 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-5 text-sm font-bold text-white bg-[#29a587] hover:bg-[#22846d] rounded-full transition-all shadow-md shadow-[#29a587]/20"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-gray-400 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  View Architecture &amp; Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#1d222a] border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold text-[#29a587] uppercase tracking-wider">
                  Case Study &bull; Technical Overview
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#29a587]" /> Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.architecture.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-[#242b35] border border-[#29a587]/30 text-white rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Core Engineering Deliverables
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#29a587] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/10 rounded-lg cursor-pointer"
              >
                Close
              </button>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 text-xs font-bold text-white bg-[#29a587] hover:bg-[#22846d] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
