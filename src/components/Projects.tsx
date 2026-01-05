import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
      image:
        "https://devtorium.com/wp-content/webp-express/webp-images/uploads/2021/08/blog_internal-image_-_10_Best_eCommerce_Platforms-5.png.webp",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A responsive task management application with drag-and-drop functionality, user collaboration, and real-time updates.",
      image:
        "https://cdn.prod.website-files.com/60c0cec90f57824353f55893/629897cfc77f0da4e04396c7_Task%20Management%20Blog%20(1).png",
      tags: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather dashboard that provides real-time weather information, forecasts, and interactive maps for locations worldwide.",
      image:
        "https://www.figma.com/community/resource/e4e8d4bb-1143-4ead-a4ce-c99b0cdde93b/thumbnail",
      tags: ["React", "Redux", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
  ];

  const cardColors = [
    { primary: 'rgba(79,70,229,1)', secondary: 'rgba(139,92,246,1)', gradient: 'from-indigo-500 to-purple-500' },
    { primary: 'rgba(236,72,153,1)', secondary: 'rgba(244,114,182,1)', gradient: 'from-pink-500 to-rose-500' },
    { primary: 'rgba(59,130,246,1)', secondary: 'rgba(96,165,250,1)', gradient: 'from-blue-500 to-cyan-500' },
  ];

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    
    setMousePosition({ x, y });
  };

  const getCardStyle = (index: number) => {
    const isHovered = hoveredCard === index;
    const colors = cardColors[index % cardColors.length];
    
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible 
        ? isHovered 
          ? `perspective(1000px) rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateY(-15px) scale(1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)'
        : 'perspective(1000px) rotateX(10deg) translateY(50px) scale(0.9)',
      transitionDelay: `${index * 150}ms`,
      boxShadow: isHovered 
        ? `0 25px 50px -12px ${colors.primary}40, 0 0 40px ${colors.primary}20` 
        : 'none',
    };
  };

  return (
    <section
      id="projects"
      className="section-padding bg-animated"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-16 transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-text">My Projects</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Here are some of my recent projects. Each one presented unique
            challenges that I enjoyed solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects.map((project, index) => {
            const colors = cardColors[index % cardColors.length];
            const isHovered = hoveredCard === index;
            
            return (
              <Card
                key={project.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative overflow-hidden transition-all duration-500 cursor-pointer ${
                  theme === "dark" ? "border-gray-800" : ""
                }`}
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setMousePosition({ x: 0, y: 0 });
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Animated border gradient */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    background: `linear-gradient(135deg, ${colors.primary}30, transparent 50%, ${colors.secondary}30)`,
                  }}
                />
                
                {/* Sparkle effect */}
                <div className="absolute top-2 right-2 z-20 opacity-0 transition-all duration-500"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
                  }}
                >
                  <Sparkles 
                    className="h-5 w-5 animate-pulse" 
                    style={{ color: colors.primary }}
                  />
                </div>

                <div className="h-36 sm:h-48 bg-muted flex items-center justify-center overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      transform: isHovered ? 'scale(1.15) rotate(2deg)' : 'scale(1) rotate(0deg)',
                      filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                    }}
                  />
                  {/* Image overlay gradient */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${theme === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.3)'}, transparent)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                </div>

                <CardHeader className="relative p-4 sm:p-6">
                  <CardTitle 
                    className="text-base sm:text-lg transition-all duration-500 flex items-center gap-2"
                    style={{
                      color: isHovered ? colors.primary : undefined,
                      transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
                    }}
                  >
                    <span 
                      className="inline-block w-0 h-0.5 transition-all duration-500"
                      style={{
                        width: isHovered ? '20px' : '0px',
                        backgroundColor: colors.primary,
                      }}
                    />
                    {project.title}
                  </CardTitle>
                  <CardDescription 
                    className="text-sm transition-all duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0.8,
                    }}
                  >
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="transition-all duration-500"
                        style={{
                          transitionDelay: `${tagIndex * 50}ms`,
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? isHovered 
                              ? `translateY(-3px) scale(1.05)` 
                              : "translateY(0) scale(1)"
                            : "translateY(20px) scale(0.8)",
                          boxShadow: isHovered ? `0 4px 12px ${colors.primary}20` : 'none',
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between p-4 sm:p-6 pt-0 sm:pt-0 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="transition-all duration-300 group/btn text-xs sm:text-sm"
                    style={{
                      borderColor: isHovered ? colors.primary : undefined,
                    }}
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="transition-all duration-300 group/btn text-xs sm:text-sm overflow-hidden relative"
                    style={{
                      background: isHovered 
                        ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` 
                        : undefined,
                    }}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Button
            asChild
            variant="outline"
            className="transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <a
              href="https://github.com/Hirak-Debadhikary"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
