import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiDocker,
  SiNextdotjs,
  SiRedux,
  SiChakraui,
  SiMongoose,
  SiMysql,
  SiSupabase,
  SiSlack,
  SiNotion,
  SiVercel,
  SiNetlify,
  SiRender,
  SiPrettier,
  SiEslint,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
  const frontendSkills = [
    {
      name: "HTML",
      icon: SiHtml5,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: SiCss3,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "React.js",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "#764ABC",
    },
    {
      name: "Redux Toolkit",
      icon: SiRedux,
      color: "#764ABC",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "Chakra UI",
      icon: SiChakraui,
      color: "#319795",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "#000000",
    },
    {
      name: "JWT Auth",
      icon: SiJsonwebtokens,
      color: "#000000",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      name: "Mongoose",
      icon: SiMongoose,
      color: "#47A248",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#00758F",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#336791",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      color: "#336791",
    },
  ];

  const otherSkills = [
    {
      name: "Git & GitHub",
      icon: SiGithub,
      color: "#181717",
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
    },
    // {
    //   name: "Testing (Jest)",
    //   icon: SiJest,
    //   color: "#C21325",
    // },
    // {
    //   name: "E2E Testing (Cypress)",
    //   icon: SiCypress,
    //   color: "#17202C",
    // },
    // {
    //   name: "UI Design (Figma)",
    //   icon: SiFigma,
    //   color: "#F24E1E",
    // },
    {
      name: "Postman",
      icon: SiPostman,
      color: "#FF6C37",
    },
    {
      name: "VS Code",
      icon: TbBrandVscode,
      color: "#007ACC",
    },
    {
      name: "Prettier",
      icon: SiPrettier,
      color: "#F7B93E",
    },
    {
      name: "ESLint",
      icon: SiEslint,
      color: "#4B32C3",
    },

    {
      name: "Vercel",
      icon: SiVercel,
      color: "#000000",
    },
    {
      name: "Netlify",
      icon: SiNetlify,
      color: "#00C7B7",
    },
    {
      name: "Render",
      icon: SiRender,
      color: "#46E3B7",
    },
    // {
    //   name: "Nginx",
    //   icon: SiNginx,
    //   color: "#009639",
    // },
    // {
    //   name: "Linux",
    //   icon: SiLinux,
    //   color: "#FCC624",
    // },
    {
      name: "Slack",
      icon: SiSlack,
      color: "#4A154B",
    },
    {
      name: "Notion",
      icon: SiNotion,
      color: "#000000",
    },
  ];

  const SkillGrid = ({
    skills,
    categoryIndex,
  }: {
    skills: {
      name: string;
      icon: React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
      }>;
      color: string;
    }[];
    categoryIndex: number;
  }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
      {skills.map((skill, index) => {
        const delay = (categoryIndex * skills.length + index) * 50;
        const isHovered = hoveredSkill === skill.name;
        
        return (
          <div
            key={skill.name}
            className="group relative flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg bg-muted transition-all duration-500 cursor-pointer overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? isHovered 
                  ? 'translateY(-8px) scale(1.05)' 
                  : 'translateY(0) scale(1)' 
                : 'translateY(30px) scale(0.8)',
              transitionDelay: isVisible ? `${delay}ms` : '0ms',
              boxShadow: isHovered 
                ? `0 15px 30px -10px ${skill.color}40, 0 0 20px ${skill.color}20` 
                : 'none',
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Animated background glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
              }}
            />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    backgroundColor: skill.color,
                    left: `${20 + i * 30}%`,
                    bottom: '0%',
                    animation: isHovered ? `float-up ${1 + i * 0.3}s ease-out infinite` : 'none',
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            
            <skill.icon 
              className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" 
              style={{ 
                color: skill.color,
                filter: isHovered ? `drop-shadow(0 0 8px ${skill.color}80)` : 'none',
              }} 
            />
            <span className="relative z-10 text-xs sm:text-sm font-medium text-center transition-all duration-300 group-hover:font-semibold">
              {skill.name}
            </span>
            
            {/* Bottom border animation */}
            <div 
              className="absolute bottom-0 left-1/2 h-0.5 transition-all duration-500 -translate-x-1/2"
              style={{
                width: isHovered ? '80%' : '0%',
                backgroundColor: skill.color,
              }}
            />
          </div>
        );
      })}
    </div>
  );

  const cardVariants = [
    { rotate: 'hover:rotate-1', shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(79,70,229,0.3)]' },
    { rotate: 'hover:rotate-[-0.5deg]', shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(236,72,153,0.3)]' },
    { rotate: 'hover:rotate-[0.5deg]', shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)]' },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/50 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          className="text-center mb-8 sm:mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-text">Skills & Expertise</h2>
          <div 
            className="h-1 bg-primary mx-auto mb-4 sm:mb-6 transition-all duration-1000 delay-300"
            style={{
              width: isVisible ? '5rem' : '0rem',
            }}
          />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Here's an overview of my technical skills and tools I regularly use.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-10">
          {[
            { title: 'Frontend Development', skills: frontendSkills, index: 0 },
            { title: 'Backend Development', skills: backendSkills, index: 1 },
            { title: 'Other Skills & Tools', skills: otherSkills, index: 2 },
          ].map((category, idx) => (
            <Card 
              key={category.title}
              className={`transition-all duration-700 ${cardVariants[idx].rotate} ${cardVariants[idx].shadow} hover:-translate-y-2`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translateX(0) rotateY(0deg)' 
                  : `translateX(${idx % 2 === 0 ? '-50px' : '50px'}) rotateY(${idx % 2 === 0 ? '-5deg' : '5deg'})`,
                transitionDelay: `${idx * 200}ms`,
              }}
            >
              <CardContent className="p-4 sm:pt-6 space-y-3 sm:space-y-4">
                <h3 
                  className="text-lg sm:text-xl font-semibold flex items-center gap-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'all 0.5s ease',
                    transitionDelay: `${idx * 200 + 100}ms`,
                  }}
                >
                  <span 
                    className="inline-block w-2 h-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: idx === 0 ? '#61DAFB' : idx === 1 ? '#339933' : '#007ACC',
                    }}
                  />
                  {category.title}
                </h3>
                <SkillGrid skills={category.skills} categoryIndex={idx} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
