
import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { toast } from 'sonner';

const Contact = () => {
  const { toast: toastShad } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Creating a mailto link with the form data
      const mailtoLink = `mailto:debadhikaryhirak@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      
      // Open the default email client
      window.location.href = mailtoLink;
      
      // Show success message
      toast.success("Email client opened!", {
        description: "Your message is ready to be sent from your default email client.",
        duration: 5000,
      });
      
      toastShad({
        title: "Message prepared!",
        description: "Your email has been prepared in your default email client.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again or contact directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'India',
      details: 'Alipurduar, West Bengal'
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      details: 'debadhikaryhirak@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: 'Phone',
      details: '+91 8918217327'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-text">Get In Touch</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start hover:-translate-y-1 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 animate-pulse-slow">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">{item.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm break-all">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Card className="animate-float shadow-lg transition-all duration-500 hover:shadow-xl">
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Career Opportunities</h4>
                <p className="text-muted-foreground text-sm mb-3 sm:mb-4">
                  Looking for a talented developer to join your team? Let's talk about how I can contribute to your success.
                </p>
                <Button asChild variant="outline" className="transition-all duration-300 hover:scale-105 text-sm">
                  <a href="mailto:debadhikaryhirak@gmail.com">
                    Send Job Details
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-7 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <Card className="shadow-lg transition-all duration-500 hover:shadow-xl hover:border-primary/50">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 gradient-text">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                      <label htmlFor="name" className="block text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    
                    <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                      <label htmlFor="email" className="block text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="I'd like to discuss a project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full transition-all duration-300 hover:scale-105 animate-fade-in" 
                    style={{ animationDelay: '0.9s' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
