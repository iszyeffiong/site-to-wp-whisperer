import { useState } from "react";
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
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="GeoTerrain Nigeria Limited" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
              HOME
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
              WHO WE ARE
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary font-medium transition-colors">
                SERVICES <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg">
                {services.map((service) => (
                  <DropdownMenuItem key={service} className="hover:bg-muted">
                    <a href="#" className="w-full">{service}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
              PROJECTS
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
              CONTACT US
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
              CAREER
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary font-medium">
                HOME
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium">
                WHO WE ARE
              </a>
              <div className="space-y-2">
                <div className="text-foreground font-medium">SERVICES</div>
                {services.map((service) => (
                  <a key={service} href="#" className="block pl-4 text-muted-foreground hover:text-primary">
                    {service}
                  </a>
                ))}
              </div>
              <a href="#" className="text-foreground hover:text-primary font-medium">
                PROJECTS
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium">
                CONTACT US
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium">
                CAREER
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;