import React, { useState } from 'react';

interface AppAccordionProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function AppAccordion({ title, children }: AppAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`flex justify-between items-center border-b py-5 px-2 transition-all duration-300 ${
          isOpen ? 'border-none' : ''
        }`}
      >
        <div className="text-xl font-medium text-white">{title}</div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`transform transition-transform duration-300 text-white hover:text-[#29a587] focus:outline-none ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-label="Toggle accordion"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="px-4 py-2 border-b duration-300 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}
