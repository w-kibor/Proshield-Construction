import { Shield, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <div className="bg-[#0A2342] p-2 rounded-lg">
              <Shield className="h-6 w-6 text-[#F5A623]" />
            </div>
            <div>
              <div className="text-[#0A2342]">ProShield Construction</div>
              <div className="text-xs text-gray-600">by Brandon</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors ${
                  currentPage === link.id
                    ? "text-[#0A2342]"
                    : "text-gray-600 hover:text-[#0A2342]"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contact")}
              className="bg-[#F5A623] hover:bg-[#E09613] text-white rounded-full px-6"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#0A2342]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0A2342]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-3 px-4 transition-colors ${
                  currentPage === link.id
                    ? "text-[#0A2342] bg-gray-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => handleNavClick("contact")}
                className="w-full bg-[#F5A623] hover:bg-[#E09613] text-white rounded-full"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
