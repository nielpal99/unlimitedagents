import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-display text-xl font-bold mb-1">Unlimited Agents</h3>
            <p className="text-muted-foreground text-sm">
              © 2025 All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
