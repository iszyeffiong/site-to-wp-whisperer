import { useState } from "react";home
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/geoterrain-logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    "Geology Services",
    "Environmental Services", 
    "Oceanography & Marine",
    "Geochemical Services",
    "New Ventures & Asset Mgt"
  ];

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="GeoTerrain Nigeria Limited" 
              className="h-14 w-auto transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Who we are
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary font-medium transition-all duration-300 group">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl rounded-xl p-2 mt-2">
                {services.map((service) => (
                  <DropdownMenuItem key={service} className="hover:bg-primary/10 rounded-lg transition-colors duration-200">
                    <a href="#" className="w-full py-2 px-3 text-sm font-medium">{service}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Pprojects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Contact us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Career
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Modern Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-xl">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <a href="#" className="block text-foreground hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all">
                Home
              </a>
              <a href="#" className="block text-foreground hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all">
                Who we are
              </a>
              <div className="space-y-2">
                <div className="text-foreground font-medium py-3 px-4">SERVICES</div>
                {services.map((service) => (
                  <a key={service} href="#" className="block pl-8 pr-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                    {service}
                  </a>
                ))}
              </div>
              <a href="#" className="block text-foreground hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all">
                Projects
              </a>
              <a href="#" className="block text-foreground hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all">
                Contact us
              </a>
              <a href="#" className="block text-foreground hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all">
                Career
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
