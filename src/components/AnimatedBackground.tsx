
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme } = useTheme();
  
  useEffect(() => {
    // Create initial particles
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = window.innerWidth < 768 ? 15 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 5 + 2,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Handle window resize
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    let animationFrame: number;
    
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y - particle.speed,
          // Reset particle when it goes off the top of the screen
          ...(particle.y < -particle.size ? {
            y: window.innerHeight + particle.size,
            x: Math.random() * window.innerWidth
          } : {})
        }))
      );
      
      animationFrame = requestAnimationFrame(animateParticles);
    };
    
    animationFrame = requestAnimationFrame(animateParticles);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`particle ${theme === 'dark' ? 'dark-particles' : 'light-particles'}`}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
