
import { Code, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">About Me</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg">
              Hi there! I'm a passionate software developer with a strong foundation in building web applications and a love for creating elegant solutions to complex problems.
            </p>
            <p className="text-base sm:text-lg">
              With expertise in modern JavaScript frameworks like React, I specialize in developing responsive, user-friendly interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-base sm:text-lg">
              My background in computer science has given me strong problem-solving abilities and attention to detail, while my industry experience has taught me how to collaborate effectively in agile environments.
            </p>
            <p className="text-base sm:text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Card className="highlight-card">
              <CardContent className="p-4 sm:pt-6">
                <div className="mb-3 sm:mb-4 bg-primary/10 rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
                  <Code className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Clean Code</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  I value clean, maintainable code and follow best practices and design patterns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="highlight-card">
              <CardContent className="p-4 sm:pt-6">
                <div className="mb-3 sm:mb-4 bg-primary/10 rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
                  <Heart className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Passionate</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  I'm passionate about creating software that makes a positive impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="highlight-card sm:col-span-2">
              <CardContent className="p-4 sm:pt-6">
                <div className="mb-3 sm:mb-4 bg-primary/10 rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
                  <Coffee className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Always Learning</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  I'm constantly expanding my knowledge and keeping up with the latest technologies and industry trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
