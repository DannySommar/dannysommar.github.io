import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import CardPanel from './CardPanel';

export default function Contact() {
  return (
    <CardPanel id="contact" title="Get in touch" highlightWords="touch">
      <p className="animate-fade-in text-xl mg:text-2xl">
        Are you interesting in hiring me, or have a project you wish me to collaborate? Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:danny.sommar@gmail.com"
                  >
                    danny.sommar@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    +44 7342 904977
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Glasgow, United Kingdom
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">
              Follow me:
            </h3>
            <div className="flex justify-center gap-4">
              <a className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
                href="https://www.linkedin.com/in/danny-shevchuk/"
                target="_blank"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
                href="https://github.com/DannySommar"
                target="_blank"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
          
      </div>
    </CardPanel>
  );
}