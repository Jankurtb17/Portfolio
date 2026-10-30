import React, { useEffect } from 'react';
import AOS from 'aos';
import AppHeader from './views/AppHeader';
import AboutMe from './views/AboutMe';
import ProfSkills from './views/ProfSkills';
import MyProjects from './views/MyProjects';
import EducationHistory from './views/EducationHistory';
import ContactMe from './views/ContactMe';
import AppFooter from './views/AppFooter';
import AmbientCanvas3D from './components/AmbientCanvas3D';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-[#232931] overflow-x-hidden selection:bg-[#29a587] selection:text-white">
      <AmbientCanvas3D />
      <div className="relative z-10">
        <div className="nav-header">
          <AppHeader />
        </div>
        <main>
          <AboutMe />
          <ProfSkills />
          <MyProjects />
          <EducationHistory />
          <ContactMe />
        </main>
        <AppFooter />
      </div>
    </div>
  );
}
