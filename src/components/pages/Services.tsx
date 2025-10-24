import { ServiceCard } from "../ServiceCard";
import { Droplets, Sparkles, Layers, Hammer, Grid3x3, Paintbrush } from "lucide-react";
import { Button } from "../ui/button";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0A2342] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2342] mb-4">Core Specializations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flagship services that have made us a trusted name in construction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Droplets}
              title="Waterproofing Solutions"
              description="We provide long-lasting waterproofing for roofs, basements, and bathrooms to prevent leaks and moisture damage. Our advanced waterproofing systems ensure complete protection against water infiltration, extending the life of your structure."
              image="https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3NjExMTk3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              showButton
              onLearnMore={() => handleNavClick("contact")}
            />
            <ServiceCard
              icon={Sparkles}
              title="Epoxy Flooring"
              description="Stylish, seamless, and durable epoxy finishes for industrial and residential spaces. Our epoxy flooring solutions offer exceptional durability, easy maintenance, and stunning aesthetics that transform any space into a modern masterpiece."
              image="https://images.unsplash.com/photo-1741105820127-97dd1aaafe87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcG94eSUyMGZsb29yJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTExOTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              showButton
              onLearnMore={() => handleNavClick("contact")}
            />
            <ServiceCard
              icon={Layers}
              title="Terrazzo Flooring"
              description="Elegant terrazzo finishes combining durability and design for modern interiors. Our custom terrazzo work brings timeless beauty to any space, with endless design possibilities and a lifespan that lasts for decades."
              image="https://images.unsplash.com/photo-1614494705729-96266717f53b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYXp6byUyMGZsb29yaW5nJTIwcGF0dGVybnxlbnwxfHx8fDE3NjExMTk3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              showButton
              onLearnMore={() => handleNavClick("contact")}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2342] mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complementary services to complete your construction needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Grid3x3}
              title="Professional Tiling"
              description="Expert tile installation for floors, walls, and bathrooms. We work with ceramic, porcelain, and natural stone to create beautiful, functional surfaces."
            />
            <ServiceCard
              icon={Paintbrush}
              title="Surface Finishing"
              description="Premium surface preparation and finishing services including polishing, sealing, and protective coatings for all floor types."
            />
            <ServiceCard
              icon={Hammer}
              title="General Construction"
              description="Comprehensive construction services including renovations, repairs, and new construction projects for residential and commercial clients."
            />
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#0A2342] mb-6">Why Our Services Stand Out</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-[#F5A623] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0A2342]">Premium Quality Materials</p>
                    <p className="text-gray-600 text-sm">We source only the best materials from trusted suppliers to ensure long-lasting results.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#F5A623] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0A2342]">Experienced Professionals</p>
                    <p className="text-gray-600 text-sm">Our team brings years of expertise and technical knowledge to every project.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#F5A623] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0A2342]">Competitive Pricing</p>
                    <p className="text-gray-600 text-sm">Fair, transparent pricing with no hidden costs or surprises.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#F5A623] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0A2342]">Timely Completion</p>
                    <p className="text-gray-600 text-sm">We respect your time and complete projects on schedule.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#F5A623] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0A2342]">Warranty & Support</p>
                    <p className="text-gray-600 text-sm">We stand behind our work with comprehensive warranties and ongoing support.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1645334424307-6de7ff8f2f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGludGVyaW9yfGVufDF8fHx8MTc2MTA3OTQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A2342] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a free consultation and detailed quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleNavClick("contact")}
              className="bg-[#F5A623] hover:bg-[#E09613] text-white rounded-full px-8 py-6 text-lg"
            >
              Get a Free Quote
            </Button>
            <Button
              onClick={() => handleNavClick("projects")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A2342] rounded-full px-8 py-6 text-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
