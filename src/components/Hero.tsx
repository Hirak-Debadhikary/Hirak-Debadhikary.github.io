import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "../assets/profile.jpeg";
import Resume from "../assets/HirakDebadhikary-resume.pdf";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center section-padding pt-24 overflow-hidden bg-animated"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          className={`order-2 lg:order-1 transition-all duration-700 delay-300 transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-base sm:text-lg font-medium text-primary mb-2 sm:mb-3">
            Hello, I'm
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 gradient-text animate-pulse-slow">
            Hirak Debadhikary
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-4 sm:mb-6">
            <span className="inline-block animate-wave">👋</span> Software
            Engineer
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg animate-fade-in">
            I craft robust, scalable applications and enjoy solving complex
            problems with clean, efficient code.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <a href="#contact" className="relative z-10">
                Get in Touch
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="relative overflow-hidden transition-all duration-300 hover:border-primary"
            >
              <a href="#projects" className="relative z-10">
                View Projects
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="relative overflow-hidden transition-all duration-300 hover:border-primary"
            >
              <a
                href={Resume}
                download="Hirak_Debadhikary_Resume.pdf"
                className="relative z-10"
              >
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex space-x-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="animate-float"
            >
              <a
                href="https://github.com/Hirak-Debadhikary"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="https://www.linkedin.com/in/hirak-debadhikary-374b9522b/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="mailto:debadhikaryhirak@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>

        <div
          className={`order-1 lg:order-2 flex justify-center transition-all duration-700 delay-500 transform`}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
            <img
              src={Image}
              className="w-full h-full object-cover rounded-full"
              alt="Profile"
            />
            {/* Glowing effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-blue-400/40 blur-xl opacity-40 animate-pulse-slow"></div> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary animate-pulse-slow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
