import React from 'react';
import AppAccordion from '../components/AppAccordion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  title: string;
  college?: boolean;
  school?: string;
  location?: string;
  time?: string;
}

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  from: string;
  to: string;
  badge?: string;
  location?: string;
  skills: string[];
  description: string;
}

export default function EducationHistory() {
  const education: EducationItem[] = [
    {
      id: 1,
      title: "College Education",
      college: true,
    },
    {
      id: 2,
      title: "High School",
      school: "Batanes National Science High School",
      location: "Basco, Batanes",
      time: "2010 - 2014",
    },
    {
      id: 3,
      title: "Elementary",
      school: "Diptan Elementary School",
      location: "Basco, Batanes",
      time: "2003 - 2010",
    },
  ];

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "IBM",
      position: "Application Developer - Experience FullStack",
      from: "June 2026",
      to: "Present (5 months)",
      badge: "Current Role • 5 Months",
      location: "Metro Manila, Philippines",
      skills: ["Vue.js 3", "React 19", "Node.js", "Python / FastAPI", "AWS", "Enterprise Architecture"],
      description:
        "Serving as an Application Developer - Experience FullStack at IBM for the past 5 months. Responsible for engineering enterprise-grade web applications, crafting resilient frontend and backend services, architecting scalable API workflows, and adhering to strict cloud security and high-performance design standards.",
    },
    {
      id: 2,
      company: "JFE Techno Manila",
      position: "Deputy Software Developer",
      from: "January 2022",
      to: "May 2026",
      badge: "Japan Dispatch & AI Lead",
      location: "Manila & Japan Dispatch (6 months)",
      skills: ["Vue.js 3", "FastAPI", "React", "AWS", "Docker", "Generative AI", "DynamoDB"],
      description:
        "Full-stack software developer leading frontend and backend development. Spent 6 months in Japan as an intra-company dispatch engineer working in an international engineering team. Focused on Generative AI systems: building multimodal AI user interfaces, crafting robust prompt workflows, optimizing inference pipelines, and managing AWS cloud infrastructure.",
    },
    {
      id: 3,
      company: "Trend Micro",
      position: "Security Engineer",
      from: "February 2020",
      to: "April 2021",
      badge: "Enterprise Security",
      location: "Pasig, Metro Manila",
      skills: ["Malware Analysis", "Endpoint Security", "Troubleshooting", "Customer Technical Operations"],
      description:
        "Technical support and security engineering for enterprise Trend Micro products. Investigated virus detection, malware removal, configuration, and security patch automation across diverse corporate client environments.",
    },
    {
      id: 4,
      company: "RBT Consulting",
      position: "Project-Based Software Developer",
      from: "September 2019",
      to: "January 2022",
      badge: "University HRIS",
      location: "Quezon City, Metro Manila",
      skills: ["Web Development", "Database Architecture", "Role-Based Auth", "Reporting Engine"],
      description:
        "Engineered a comprehensive Human Resource Information System for Ateneo De Manila University. Delivered employee management, leave tracking, automated payroll calculations, secure user authentication, and executive reporting modules.",
    },
  ];

  return (
    <section className="py-16 lg:py-24" id="Experiences">
      <div data-aos="fade-up" data-aos-duration="1000" className="text-center mb-12">
        <span className="inner-font text-white uppercase text-3xl lg:text-6xl font-bold tracking-tight">
          RESUME
        </span>
        <h2 className="text-xl lg:text-3xl font-bold teal mt-1 uppercase tracking-wider">
          Experience &amp; Education
        </h2>
        <p className="text-gray-400 mt-2 text-sm lg:text-base max-w-lg mx-auto px-4">
          Verified career journey across IBM, enterprise engineering, overseas dispatch in Japan, and university systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Education Column */}
        <div className="bg-[#1d222a]/70 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
            <GraduationCap className="w-6 h-6 text-[#29a587]" />
            <h3 className="inner-font uppercase text-xl font-bold teal tracking-wider">
              Education
            </h3>
          </div>

          <div className="space-y-4">
            {education.map((educ) => (
              <div
                key={educ.id}
                data-aos="fade-up"
                data-aos-duration="800"
                className="accordion-education"
              >
                <AppAccordion
                  title={
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold text-white">{educ.title}</h4>
                    </div>
                  }
                >
                  {educ.college ? (
                    <div className="space-y-4 pt-2">
                      <div className="bg-[#161a20] p-4 rounded-xl border border-white/5">
                        <span className="text-white font-bold text-base block">
                          University of Perpetual Help System Dalta
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[#29a587] font-semibold mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Las Piñas, Metro Manila</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>2015 – 2019</span>
                        </div>
                      </div>

                      <div className="bg-[#161a20] p-4 rounded-xl border border-white/5">
                        <span className="text-white font-bold text-base block">
                          Asia Technological School of Science and Arts
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[#29a587] font-semibold mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Sta. Rosa, Laguna</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>2014 – 2015</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-2">
                      <div className="bg-[#161a20] p-4 rounded-xl border border-white/5">
                        <span className="text-white font-bold text-base block">
                          {educ.school}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[#29a587] font-semibold mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{educ.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{educ.time}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </AppAccordion>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="bg-[#1d222a]/70 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
            <Briefcase className="w-6 h-6 text-[#29a587]" />
            <h3 className="inner-font uppercase text-xl font-bold teal tracking-wider">
              Experience
            </h3>
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                data-aos="fade-up"
                data-aos-duration="800"
                className="accordion-experience"
              >
                <AppAccordion
                  title={
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-4 gap-1">
                      <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                      {exp.badge && (
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit ${
                          exp.company === 'IBM'
                            ? 'bg-[#0062ff]/20 border border-[#0062ff]/40 text-[#5596ff]'
                            : 'bg-[#29a587]/20 border border-[#29a587]/40 text-[#29a587]'
                        }`}>
                          {exp.badge}
                        </span>
                      )}
                    </div>
                  }
                >
                  <div className="pt-2">
                    <div className="bg-[#161a20] p-4 rounded-xl border border-white/5 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[#29a587] font-bold text-base">
                          {exp.position}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                          {exp.from} – {exp.to}
                        </span>
                      </div>

                      {exp.location && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <MapPin className="w-3.5 h-3.5 text-[#29a587]" />
                          <span>{exp.location}</span>
                        </div>
                      )}

                      <p className="text-gray-300 text-xs lg:text-sm leading-relaxed text-justify pt-1">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] bg-[#1d222a] border border-white/10 text-gray-300 px-2 py-0.5 rounded"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AppAccordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
