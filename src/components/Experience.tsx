import { Briefcase, Calendar, Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState, useRef } from "react";
import Resume from "../assets/HirakDebadhikary-resume.pdf";

const Experience = () => {
  const workExperience = [
    {
      title: "Software Developer",
      company: "Open Platform for Automation and Innovation",
      period: "Apr 2024 - Present",
      description: [
        "Engineered and maintained high-performance web applications using React.js, TypeScript, and Node.js, ensuring modularity, scalability, and maintainability.",
        "Built fully responsive, cross-browser-compatible, and scalable applications following modern development standards, leveraging React.js, Node.js, and RESTful APIs.",
        "Designed and implemented CI/CD pipelines using tools like GitHub Actions and Docker, reducing deployment time by 40% and increasing release efficiency.",
        "Led code reviews and mentored junior developers, fostering best practices and improving overall code quality and team productivity.",
        "Optimized frontend and backend performance, achieving a 30% reduction in page load times through efficient component architecture, lazy loading, and backend query tuning.",
        "Integrated Redux Toolkit for scalable state management, collaborated effectively in Agile/Scrum teams, and utilized Git for streamlined version control and continuous delivery.",
      ],
    },
    {
      title: "Web Developer",
      company: "Primewise Consulting",
      period: "Jan 2024 - Mar 2024",
      description: [
        "Developed intelligent chatbot applications with features such as user authentication, session management, and feedback collection, demonstrating proficiency in dynamic front-end development and API integration.",
        "Designed and managed complex conversation flows and dynamic response handling using conditional logic and state management, enhancing user engagement and overall chatbot performance.",
      ],
    },
  ];

  const education = [
    {
      degree: "Full Stack Developer",
      institution: "Masai School",
      period: "2022 - 2023",
      description:
        "Full Stack Development Course (MERN Stack) with 1000+ hours of coding practice and 10+ projects",
    },
    {
      degree: "B.A. in Education",
      institution: "Netaji Subhas Open University",
      period: "2021 - 2023",
      description: "B.A. in Education, Focus on Early Childhood Education",
    },
    {
      degree: "Higher Secondary",
      institution: "Salsalabari Model High School",
      period: "2017 - 2018",
      // description: 'Graduated with honors. Focused on Programming and Algorithms'
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="experience"
      className="section-padding bg-animated"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-16 transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-text">
            Experience & Education
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Work Experience */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="flex items-center mb-4 sm:mb-8">
              <Briefcase className="text-primary mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              <h3 className="text-xl sm:text-2xl font-semibold">
                Work Experience
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-8">
              {workExperience.map((job, index) => (
                <Card
                  key={index}
                  className="relative highlight-card"
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <CardHeader className="relative p-4 sm:p-6">
                    <div className="hidden sm:block absolute -left-3 top-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary z-20 lg:-left-7" />
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <CardTitle className="text-base sm:text-lg">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <CardDescription className="text-sm sm:text-base font-medium">
                      {job.company}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <ul className="list-disc ml-4 sm:ml-5 space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education and Resume */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-500 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex items-center mb-4 sm:mb-8">
              <GraduationCap className="text-primary mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="highlight-card"
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <CardTitle className="text-base sm:text-lg">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <CardDescription className="text-sm sm:text-base font-medium">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-secondary/70 rounded-lg p-4 sm:p-6 text-center glass animate-float">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Download My Resume</h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                For a complete overview of my experience, skills, and
                qualifications, please download my resume.
              </p>
              <Button
                asChild
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a
                  href={Resume}
                  download="Hirak_Debadhikary_Resume.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
