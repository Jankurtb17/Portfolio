import React, { useState } from 'react';
import contactSvg from '../assets/svg/contact.svg';
import emailSvg from '../assets/svg/email.svg';
import locationSvg from '../assets/svg/location.svg';
import { Send, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormState {
  email: string;
  subject: string;
  message: string;
}

export default function ContactMe() {
  const [form, setForm] = useState<FormState>({
    email: '',
    subject: '',
    message: '',
  });
  const [copiedInfo, setCopiedInfo] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const quickTemplates = [
    {
      label: "💼 Job Opportunity",
      subject: "Exciting Engineering Opportunity for Jan Kurt",
      message: "Hi Jan Kurt,\n\nWe came across your portfolio and were impressed with your full-stack experience in Vue, React, and Generative AI. We'd love to schedule a time to chat about an open role on our engineering team.",
    },
    {
      label: "🚀 Project Collaboration",
      subject: "Project Inquiry / Freelance Web Build",
      message: "Hi Jan Kurt,\n\nI have an upcoming web application project and would like to consult with you on frontend architecture and backend API implementation.",
    },
    {
      label: "☕ General Inquiry",
      subject: "Connecting with Jan Kurt",
      message: "Hi Jan Kurt,\n\nI came across your portfolio and wanted to connect and discuss your work in web engineering and Generative AI.",
    },
  ];

  const applyTemplate = (t: typeof quickTemplates[0]) => {
    setForm({
      ...form,
      subject: t.subject,
      message: t.message,
    });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedInfo(label);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    setTimeout(() => setCopiedInfo(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    const mailtoUrl = `mailto:j.kurtbayaras@gmail.com?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `From: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-20 max-w-7xl mx-auto" id="Contact">
      <div className="text-center mb-12">
        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          className="inner-font text-white uppercase text-3xl lg:text-6xl font-bold tracking-tight mb-2"
        >
          LET'S TALK
        </h2>
        <h3
          data-aos="fade-right"
          data-aos-duration="1000"
          className="kalam inner-font uppercase text-2xl lg:text-4xl font-bold text-[#29a587]"
        >
          ABOUT YOUR NEXT HIGH-IMPACT PROJECT
        </h3>
        <p className="text-gray-400 mt-2 text-sm max-w-md mx-auto">
          Currently open for full-time engineering positions, consulting, or technical discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form Column */}
        <div data-aos="fade-up" className="lg:col-span-7 bg-[#1d222a]/80 border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h4 className="inner-font text-white uppercase text-2xl font-bold">
              SEND A MESSAGE
            </h4>
            <span className="text-xs text-[#29a587] font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Fast Response
            </span>
          </div>

          {/* Recruiter Quick Fill Templates */}
          <div className="mb-6">
            <span className="text-xs text-gray-400 block mb-2 font-medium">
              Quick Subject Presets for Recruiters:
            </span>
            <div className="flex flex-wrap gap-2">
              {quickTemplates.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => applyTemplate(t)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-[#242b35] hover:bg-[#29a587]/30 border border-white/10 hover:border-[#29a587] text-gray-300 hover:text-white transition-all cursor-pointer"
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="form-txt text-white pb-2 text-xs font-semibold block">
                YOUR WORK EMAIL
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="recruiter@company.com"
                className="inputs w-full py-3.5 rounded-xl border border-white/10 text-white px-5 outline-none transition-all focus:border-[#29a587]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="form-txt text-white pb-2 text-xs font-semibold block">
                SUBJECT
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Engineering Opportunity at ..."
                className="inputs w-full py-3.5 rounded-xl border border-white/10 text-white px-5 outline-none transition-all focus:border-[#29a587]"
              />
            </div>

            <div>
              <label htmlFor="message" className="form-txt text-white pb-2 text-xs font-semibold block">
                MESSAGE
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hi Jan Kurt, we would love to connect regarding..."
                className="inputs w-full py-4 rounded-xl border border-white/10 text-white px-5 outline-none transition-all focus:border-[#29a587]"
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="btn-send px-8 py-3.5 rounded-full bg-[#29a587] hover:bg-[#22846d] text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#29a587]/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <span className="text-xs text-[#29a587] font-semibold flex items-center gap-1 animate-fadeIn">
                  <Check className="w-4 h-4" /> Launching default email client...
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-5 bg-[#1d222a]/80 border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <h4 className="inner-font text-white uppercase text-2xl font-bold mb-6">
              DIRECT REACH
            </h4>

            <div className="space-y-6">
              {/* Phone card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#161a20] border border-white/5 hover:border-[#29a587]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#242b35] flex items-center justify-center shrink-0">
                  <img src={contactSvg} alt="Phone" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase font-semibold text-[#29a587] block">Phone / Mobile</span>
                  <span className="text-white font-medium text-sm block mt-0.5">0956 501 1210</span>
                  <span className="text-gray-400 font-medium text-xs block">0998 279 7228</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('09565011210', 'phone')}
                  className="p-2 text-gray-400 hover:text-[#29a587] rounded-lg hover:bg-white/5 cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedInfo === 'phone' ? <Check className="w-4 h-4 text-[#29a587]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#161a20] border border-white/5 hover:border-[#29a587]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#242b35] flex items-center justify-center shrink-0">
                  <img src={emailSvg} alt="Email" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase font-semibold text-[#29a587] block">Official Email</span>
                  <span className="text-white font-medium text-sm block mt-0.5 break-all">
                    j.kurtbayaras@gmail.com
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('j.kurtbayaras@gmail.com', 'email')}
                  className="p-2 text-gray-400 hover:text-[#29a587] rounded-lg hover:bg-white/5 cursor-pointer"
                  title="Copy Email"
                >
                  {copiedInfo === 'email' ? <Check className="w-4 h-4 text-[#29a587]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#161a20] border border-white/5 hover:border-[#29a587]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#242b35] flex items-center justify-center shrink-0">
                  <img src={locationSvg} alt="Location" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase font-semibold text-[#29a587] block">Base Location</span>
                  <span className="text-white font-medium text-sm block mt-0.5">
                    9391 Felipe Street, Guadalupe Nuevo
                  </span>
                  <span className="text-gray-400 text-xs block">
                    Makati, Metro Manila 1212 &bull; Batanes, PH
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-[#242b35]/70 border border-[#29a587]/30 text-xs text-gray-300">
            <span className="text-white font-bold block mb-1">⚡ Engineering Availability</span>
            Available for technical interview screens, coding tests, and architectural deep-dives. Responses typically within 24 hours.
          </div>
        </div>
      </div>
    </section>
  );
}
