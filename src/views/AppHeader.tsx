import React, { useState, useEffect } from 'react';
import dot2Svg from '../assets/svg/dot-2.svg';
import stickPng from '../assets/img/stick.png';
import { Send } from 'lucide-react';

export default function AppHeader() {
  const [isToggle, setIsToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    { id: '#Skills', name: 'Skills' },
    { id: '#Portfolio', name: 'Portfolio' },
    { id: '#Experiences', name: 'Experiences' },
    { id: '#Contact', name: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsToggle(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="header relative z-40">
        <div
          className={`flex items-center justify-between p-4 w-full fixed top-0 left-0 right-0 px-6 md:px-12 lg:px-16 transition-all duration-300 ${
            isScrolled
              ? 'navbar-scroll backdrop-blur-md bg-[#1d222a]/95 py-3 shadow-xl'
              : 'bg-transparent py-5'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#29a587] group-hover:scale-125 transition-transform" />
            <span className="text-white z-10 self-center text-2xl font-black tracking-wider uppercase">
              JK<span className="text-[#29a587]">WORKS</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.id}
                onClick={(e) => handleLinkClick(e, menu.id)}
                className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-[#29a587] transition-colors"
              >
                {menu.name}
              </a>
            ))}

            <a
              href="#Contact"
              onClick={(e) => handleLinkClick(e, '#Contact')}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#29a587] hover:bg-[#22846d] text-white rounded-full transition-all shadow-md shadow-[#29a587]/20 flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <Send className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile & Drawer Hamburger */}
          <div
            className="cross z-50 md:hidden"
            onClick={() => setIsToggle(!isToggle)}
            role="button"
            aria-label="Toggle navigation menu"
          >
            <div
              className="cross-line"
              style={{
                top: '30%',
                transformOrigin: '0% 40%',
                transform: isToggle ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            />
            <div
              className="cross-line"
              style={{
                top: '100%',
                transformOrigin: '0% 40%',
                transform: isToggle ? 'rotate(-45deg)' : 'rotate(0deg)',
              }}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Right Drawer */}
      <div
        className={`drawer fixed top-0 right-0 h-screen p-6 w-80 z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isToggle ? 'translate-x-0' : 'translate-x-full'
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <div>
          <img className="-top-72 absolute pointer-events-none opacity-40" src={dot2Svg} alt="" />
        </div>
        <div>
          <img className="top-32 absolute pointer-events-none opacity-40" src={stickPng} alt="" />
        </div>

        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 mt-12 relative z-10">
          <span className="text-xl font-bold text-white">Navigation</span>
          <button
            onClick={() => setIsToggle(false)}
            className="text-xs uppercase font-bold text-[#29a587] tracking-wider"
          >
            Close
          </button>
        </div>

        <ul className="flex flex-col gap-5 relative z-10">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                className="text-xl uppercase font-bold text-gray-200 hover:text-[#29a587] transition-colors block py-1"
                href={menu.id}
                onClick={(e) => handleLinkClick(e, menu.id)}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 relative z-10">
          <a
            href="#Contact"
            onClick={(e) => handleLinkClick(e, '#Contact')}
            className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-[#29a587] text-white rounded-xl block shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      {isToggle && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity md:hidden"
          onClick={() => setIsToggle(false)}
        />
      )}
    </>
  );
}
