import React, { useState } from 'react';
import linkedinSvg from '../assets/svg/linkedin.svg';
import facebookSvg from '../assets/svg/facebook.svg';
import instaSvg from '../assets/svg/insta.svg';
import TechLab3D from '../components/TechLab3D';
import CVModal from '../components/CVModal';
import { Copy, Check, Sparkles, User, FileText, ArrowRight, Briefcase } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AboutMe() {
  const [viewMode, setViewMode] = useState<'3d' | 'photo'>('3d');
  const [copied, setCopied] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  const linkedin = () => {
    window.open('https://www.linkedin.com/in/jan-kurt-bayaras-25a10b16a/', '_blank');
  };

  const facebook = () => {
    window.open('https://www.facebook.com/JankurtB/', '_blank');
  };

  const instagram = () => {
    window.open('https://www.instagram.com/jan_kurt/', '_blank');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('j.kurtbayaras@gmail.com');
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <div className="cover lg:grid lg:grid-cols-12 lg:gap-8 lg:px-16 lg:mb-24 pt-24 md:pt-28">
        {/* Left Column: Intro, Current Role, Bio */}
        <div className="about lg:col-span-6 xl:col-span-6 sm:text-center md:text-center sm:pt-6 lg:mt-10 lg:px-10 lg:pl-12">
          {/* IBM Current Role Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d222a] border border-[#29a587]/40 mb-6 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0062ff] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              IBM &bull; Application Developer - Experience FullStack (5 Mos)
            </span>
          </div>

          <div className="mb-4">
            <span className="main-txt text-white text-2xl lg:text-3xl">HELLO, </span>
            <span className="main-txt teal text-2xl lg:text-3xl">MY NAME IS</span>
          </div>

          <div className="mb-4 flex flex-wrap items-center sm:justify-center md:justify-center gap-2">
            <span className="name main-txt teal text-4xl lg:text-7xl tracking-tight">JAN</span>
            <span className="name main-txt teal text-4xl lg:text-7xl tracking-tight">KURT</span>
            <span className="last main-txt text-4xl lg:text-7xl tracking-tight">BAYARAS</span>
          </div>

          <div className="mb-6">
            <span className="font-bold text-white text-xl lg:text-2xl">I'M AN </span>
            <span className="kalam text-white text-2xl lg:text-4xl text-[#29a587]">
              APPLICATION DEVELOPER
            </span>
          </div>

          <div className="description sm:px-4 sm:py-2 md:py-4 mb-6">
            <p className="text-center lg:text-left text-gray-300 leading-relaxed text-base lg:text-lg">
              Currently working at <strong className="text-white">IBM</strong> as an{' '}
              <span className="text-[#29a587] font-semibold">Application Developer - Experience FullStack</span> (5 months).
              Originally from Batanes, Philippines, I bring over 3.5 years of professional engineering experience across
              IBM, JFE Techno Manila (including 6 months dispatch in Japan), and enterprise web platforms.
              Specialized in scalable Vue.js, React, Node.js, Python/FastAPI, and Generative AI workflows.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-8 sm:px-2">
            <div className="bg-[#1d222a]/80 border border-white/5 p-3 rounded-xl text-center">
              <span className="block text-xl lg:text-2xl font-extrabold text-[#0062ff]">IBM</span>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider">Current (5 Mos)</span>
            </div>
            <div className="bg-[#1d222a]/80 border border-white/5 p-3 rounded-xl text-center">
              <span className="block text-xl lg:text-2xl font-extrabold text-[#29a587]">Full-Stack</span>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider">Vue 3 &bull; React &bull; Node</span>
            </div>
            <div className="bg-[#1d222a]/80 border border-white/5 p-3 rounded-xl text-center">
              <span className="block text-xl lg:text-2xl font-extrabold text-white">Cloud &amp; AI</span>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider">FastAPI &bull; AWS &bull; GenAI</span>
            </div>
          </div>

          {/* Social Links & Copy Email */}
          <div className="flex flex-wrap items-center sm:justify-center md:justify-center gap-4 mb-8">
            <div className="contact-icon flex gap-3">
              <img
                className="h-10 md:h-11 cursor-pointer transition-transform hover:scale-110 p-1.5 bg-[#1d222a] rounded-xl border border-white/10 hover:border-[#29a587]"
                src={linkedinSvg}
                alt="LinkedIn"
                onClick={linkedin}
                title="View LinkedIn Profile"
              />
              <img
                className="h-10 md:h-11 cursor-pointer transition-transform hover:scale-110 p-1.5 bg-[#1d222a] rounded-xl border border-white/10 hover:border-[#29a587]"
                src={facebookSvg}
                alt="Facebook"
                onClick={facebook}
                title="View Facebook"
              />
              <img
                className="h-10 md:h-11 cursor-pointer transition-transform hover:scale-110 p-1.5 bg-[#1d222a] rounded-xl border border-white/10 hover:border-[#29a587]"
                src={instaSvg}
                alt="Instagram"
                onClick={instagram}
                title="View Instagram"
              />
            </div>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-4 py-2 bg-[#1d222a] hover:bg-[#262c37] text-gray-300 hover:text-white rounded-xl border border-white/10 text-xs font-semibold transition-all cursor-pointer"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#29a587]" />
                  <span className="text-[#29a587]">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span>j.kurtbayaras@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center sm:justify-center md:justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={() => setIsCVOpen(true)}
              className="csv-btn py-3 px-7 text-sm font-bold text-white bg-[#29a587] hover:bg-[#22846d] rounded-full border border-[#29a587] shadow-lg shadow-[#29a587]/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW / DOWNLOAD CV</span>
            </button>

            <a
              href="#Contact"
              className="py-3 px-6 text-sm font-semibold text-gray-300 hover:text-white bg-[#1d222a] hover:bg-[#252b35] rounded-full border border-white/10 transition-colors flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Holographic Badge & Photo Showcase */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center p-4">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 mb-4 bg-[#1d222a] p-1.5 rounded-full border border-white/10 shadow-md">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === '3d'
                  ? 'bg-[#29a587] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>3D Hologram Badge &amp; Lab</span>
            </button>

            <button
              onClick={() => setViewMode('photo')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'photo'
                  ? 'bg-[#29a587] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Profile Card</span>
            </button>
          </div>

          {/* 3D Scene or Profile Photo View */}
          <div className="w-full max-w-[540px]">
            {viewMode === '3d' ? (
              <div className="animate-fadeIn">
                <TechLab3D />
              </div>
            ) : (
              <div className="animate-fadeIn flex flex-col items-center p-6 bg-[#1d222a]/85 rounded-2xl border border-white/10 shadow-2xl relative">
                {/* IBM Top Tag */}
                <div className="w-full flex justify-between items-center pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-xl text-[#0062ff] tracking-wider">IBM</span>
                    <span className="text-xs text-gray-400">Authorized Badge</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#29a587]/20 border border-[#29a587]/40 text-[#29a587] text-[10px] font-bold">
                    ACTIVE • 5 MOS
                  </span>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0062ff] via-[#29a587] to-cyan-400 opacity-70 blur-md"></div>
                  <img
                    className="relative w-64 h-64 md:w-72 md:h-72 object-cover object-top rounded-2xl border-4 border-[#1d222a] shadow-2xl"
                    src="/assets/aistudio/Bayaras_id_c0c5923e.jpg"
                    alt="Jan Kurt Bayaras"
                  />
                </div>

                <div className="mt-6 text-center w-full">
                  <h3 className="text-2xl font-bold text-white tracking-wide">Jan Kurt Bayaras</h3>
                  <p className="text-sm text-[#29a587] font-bold mt-1">
                    Application Developer - Experience FullStack
                  </p>
                  <p className="text-xs font-semibold text-gray-400 mt-0.5">
                    IBM Philippines &bull; 5 Months
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap justify-center gap-1.5">
                    {['Vue.js 3', 'React 19', 'FastAPI', 'Node.js', 'AWS', 'Docker'].map((tech) => (
                      <span key={tech} className="text-[10px] bg-[#161a20] px-2 py-0.5 rounded text-gray-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CV Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </>
  );
}
