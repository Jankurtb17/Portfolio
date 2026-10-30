import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap, Code } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1d222a] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-white">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-[#161a20]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#29a587]" />
            <h2 className="text-lg font-bold">Curriculum Vitae — Jan Kurt Bayaras</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#29a587] hover:bg-[#238970] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-white/10 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-wide">
                JAN KURT <span className="text-[#29a587]">BAYARAS</span>
              </h1>
              <p className="text-lg text-gray-300 font-medium mt-1">
                Application Developer - Experience FullStack at IBM &bull; Full-Stack Engineer
              </p>
            </div>
            <div className="space-y-1 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#29a587]" />
                <span>j.kurtbayaras@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#29a587]" />
                <span>0956 501 1210 / 0998 279 7228</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#29a587]" />
                <span>Makati, Metro Manila &bull; Batanes, PH</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-[#29a587] mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Software Engineer with 3+ years of full-stack engineering experience delivering scalable web applications,
              APIs, and enterprise solutions. Expertise in modern frontend systems (Vue.js 3, React 19, TypeScript),
              backend architectures (Python/FastAPI, Node.js), cloud deployment (AWS CloudWatch, DynamoDB, S3, Docker),
              and Generative AI development (multimodal UI workflows, prompt template engineering). Overseas experience
              working in Japan as an intra-company dispatch developer.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-[#29a587] mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Experience
            </h3>
            <div className="space-y-4">
              <div className="bg-[#242b35] p-4 rounded-xl border border-white/5">
                <div className="flex flex-col md:flex-row justify-between mb-1">
                  <h4 className="font-bold text-white text-base">IBM</h4>
                  <span className="text-xs text-[#0062ff] font-bold">June 2026 – Present (5 months)</span>
                </div>
                <div className="text-xs text-gray-300 mb-2 font-medium">
                  Application Developer - Experience FullStack &bull; Metro Manila
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-2">
                  Serving as an Application Developer - Experience FullStack at IBM. Engineering resilient enterprise web architectures,
                  scalable API systems, and intuitive user experiences following enterprise cloud standards.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Vue.js 3', 'React 19', 'Node.js', 'Python / FastAPI', 'AWS', 'Docker', 'Enterprise Architecture'].map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] bg-[#161a20] text-[#29a587] rounded border border-[#29a587]/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#242b35] p-4 rounded-xl border border-white/5">
                <div className="flex flex-col md:flex-row justify-between mb-1">
                  <h4 className="font-bold text-white text-base">JFE Techno Manila</h4>
                  <span className="text-xs text-[#29a587] font-semibold">Jan 2022 – May 2026</span>
                </div>
                <div className="text-xs text-gray-400 mb-2 font-medium">
                  Deputy Software Developer &bull; Manila &amp; Japan Dispatch (6 months)
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-2">
                  Key developer on full-stack web and generative AI initiatives. Engineered responsive Vue.js 3 and React frontends,
                  FastAPI microservices, Docker container pipelines, and AWS integrations (S3, DynamoDB, CloudWatch).
                  Led frontend development of multimodal AI workflows and refined prompt templates.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Vue.js 3', 'FastAPI', 'React', 'Generative AI', 'AWS', 'Docker', 'TypeScript'].map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] bg-[#161a20] text-[#29a587] rounded border border-[#29a587]/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#242b35] p-4 rounded-xl border border-white/5">
                <div className="flex flex-col md:flex-row justify-between mb-1">
                  <h4 className="font-bold text-white text-base">Trend Micro</h4>
                  <span className="text-xs text-[#29a587] font-semibold">Feb 2020 – Apr 2021</span>
                </div>
                <div className="text-xs text-gray-400 mb-2 font-medium">Security Engineer</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Delivered advanced enterprise technical support for antivirus and cloud security suites, investigating malware,
                  performing log analysis, and assisting clients across communication channels.
                </p>
              </div>

              <div className="bg-[#242b35] p-4 rounded-xl border border-white/5">
                <div className="flex flex-col md:flex-row justify-between mb-1">
                  <h4 className="font-bold text-white text-base">RBT Consulting</h4>
                  <span className="text-xs text-[#29a587] font-semibold">Sep 2019 – Jan 2022</span>
                </div>
                <div className="text-xs text-gray-400 mb-2 font-medium">Project-Based Software Developer</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Developed end-to-end Human Resource Information System for Ateneo De Manila University, including leave tracking,
                  payroll computations, role-based security, and dynamic reporting.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-[#29a587] mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" /> Technical Proficiency
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#242b35] p-3 rounded-lg border border-white/5">
                <span className="font-bold text-white block mb-1">Frontend</span>
                <span className="text-gray-400">React, Vue.js 3, TypeScript, JavaScript, Tailwind CSS, HTML5/CSS3</span>
              </div>
              <div className="bg-[#242b35] p-3 rounded-lg border border-white/5">
                <span className="font-bold text-white block mb-1">Backend</span>
                <span className="text-gray-400">Node.js, Python (FastAPI), REST APIs, Express, Laravel</span>
              </div>
              <div className="bg-[#242b35] p-3 rounded-lg border border-white/5">
                <span className="font-bold text-white block mb-1">AI &amp; Cloud</span>
                <span className="text-gray-400">GenAI Multimodal Workflows, Prompt Engineering, AWS (S3, DynamoDB), Docker</span>
              </div>
              <div className="bg-[#242b35] p-3 rounded-lg border border-white/5">
                <span className="font-bold text-white block mb-1">Tools &amp; DB</span>
                <span className="text-gray-400">Git/GitHub, MongoDB, PostgreSQL, Three.js, Figma, Postman</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-[#29a587] mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h3>
            <div className="text-xs text-gray-300 space-y-1">
              <p><strong className="text-white">University of Perpetual Help System Dalta</strong> — Las Piñas, Metro Manila (2015 - 2019)</p>
              <p><strong className="text-white">Asia Technological School of Science and Arts</strong> — Sta. Rosa, Laguna (2014 - 2015)</p>
              <p><strong className="text-white">Batanes National Science High School</strong> — Basco, Batanes (2010 - 2014)</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-white/10 bg-[#161a20] flex justify-between items-center text-xs text-gray-400">
          <span>Ready for immediate deployment &bull; Full-time / Consulting</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
