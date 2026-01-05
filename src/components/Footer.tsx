import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col items-center">
          <a href="#" className="text-2xl font-bold gradient-text mb-6">
            Portfolio
          </a>

          <div className="flex space-x-6 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Hirak-Debadhikary"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/hirak-debadhikary-374b9522b/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="debadhikaryhirak@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          <div className="text-center text-muted-foreground mb-8">
            <p>Designed and built with ❤️ by - Hirak Debadhikary</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full animate-bounce"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
