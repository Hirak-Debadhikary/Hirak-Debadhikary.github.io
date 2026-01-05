
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TechBackground from '@/components/TechBackground';
import GitHubCalendarSection from '@/components/GitHubCalendar';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <TechBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <GitHubCalendarSection />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
