import { Button } from "../ui/button";
import { ServiceCard } from "../ServiceCard";
import { TestimonialCard } from "../TestimonialCard";
import { Droplets, Layers, Sparkles, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1666832252027-fe295fb557d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmxvb3Jpbmd8ZW58MXx8fHwxNzYxMTE5NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Construction work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/90 to-[#0A2342]/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Experts in Waterproofing, Epoxy & Terrazzo Flooring
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            ProShield Construction by Brandon delivers durable, high-quality finishes that stand the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleNavClick("services")}
              className="bg-[#F5A623] hover:bg-[#E09613] text-white rounded-full px-8 py-6 text-lg"
            >
              View Services
            </Button>
            <Button
              onClick={() => handleNavClick("contact")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A2342] rounded-full px-8 py-6 text-lg"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723969841586-77e09f0a7aa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBzaXRlfGVufDF8fHx8MTc2MTA3MjU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction team at work"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-[#0A2342] mb-6">
                Craftsmanship You Can Trust
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                With years of experience in construction and finishing, ProShield Construction by Brandon brings craftsmanship and reliability to every project.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in delivering premium waterproofing solutions, stunning epoxy floors, and elegant terrazzo finishes for homes and businesses across Kenya.
              </p>
              <Button
                onClick={() => handleNavClick("about")}
                className="bg-[#0A2342] hover:bg-[#0A2342]/90 text-white rounded-full px-6"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2342] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive construction solutions tailored to meet your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Droplets}
              title="Waterproofing Solutions"
              description="Long-lasting waterproofing for roofs, basements, and bathrooms to prevent leaks and moisture damage."
              image="https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3NjExMTk3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <ServiceCard
              icon={Sparkles}
              title="Epoxy Flooring"
              description="Stylish, seamless, and durable epoxy finishes for industrial and residential spaces."
              image="https://images.unsplash.com/photo-1741105820127-97dd1aaafe87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcG94eSUyMGZsb29yJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTExOTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <ServiceCard
              icon={Layers}
              title="Terrazzo Flooring"
              description="Elegant terrazzo finishes combining durability and design for modern interiors."
              image="https://images.unsplash.com/photo-1614494705729-96266717f53b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYXp6byUyMGZsb29yaW5nJTIwcGF0dGVybnxlbnwxfHx8fDE3NjExMTk3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => handleNavClick("services")}
              className="bg-[#0A2342] hover:bg-[#0A2342]/90 text-white rounded-full px-8"
            >
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2342] mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="James Mwangi"
              location="Westlands, Nairobi"
              feedback="Brandon and his team did an exceptional job waterproofing our basement. No more leaks! Highly professional and reliable."
            />
            <TestimonialCard
              name="Sarah Kimani"
              location="Karen, Nairobi"
              feedback="The epoxy flooring in our warehouse looks amazing and is incredibly durable. Great value for money and excellent customer service."
            />
            <TestimonialCard
              name="David Ochieng"
              location="Kiambu"
              feedback="Beautiful terrazzo work in our home. Brandon's attention to detail is impressive. Would definitely recommend ProShield Construction!"
            />
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => handleNavClick("testimonials")}
              variant="outline"
              className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white rounded-full px-8"
            >
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1638976892251-efab1145436a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwZmxvb3JpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYxMTE5NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Construction project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A2342]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-white mb-6">
            Looking for a Reliable Waterproofing Expert?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's get started today. Contact Brandon for a free consultation and quote.
          </p>
          <Button
            onClick={() => handleNavClick("contact")}
            className="bg-[#F5A623] hover:bg-[#E09613] text-white rounded-full px-10 py-6 text-lg"
          >
            Contact Brandon Now
          </Button>
        </div>
      </section>
    </div>
  );
}
