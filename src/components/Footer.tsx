import { Shield, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#F5A623] p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div>ProShield Construction</div>
                <div className="text-sm text-gray-300">by Brandon</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 italic">
              "Built to Last, Sealed to Protect"
            </p>
            <p className="text-gray-400 text-sm max-w-md">
              Expert waterproofing, epoxy flooring, and terrazzo solutions across Kenya.
              Delivering quality craftsmanship and durable finishes for residential and commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(link.toLowerCase())}
                    className="text-gray-400 hover:text-[#F5A623] transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+254726878628</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@proshieldconstruction.co.ke</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#F5A623] p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#F5A623] p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#F5A623] p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 ProShield Construction by Brandon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
