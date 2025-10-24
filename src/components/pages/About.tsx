import { Award, Target, Users, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0A2342] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">About ProShield Construction by Brandon</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building excellence, one project at a time
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723969841586-77e09f0a7aa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBzaXRlfGVufDF8fHx8MTc2MTA3MjU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Brandon and construction team"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-[#0A2342] mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-4 text-lg">
                ProShield Construction by Brandon is a trusted name in Kenya's construction industry, specializing in waterproofing, epoxy flooring, and terrazzo finishing services.
              </p>
              <p className="text-gray-600 mb-4">
                Founded by Brandon, a seasoned construction professional with a passion for quality and innovation, our company has grown from a small team to a leading provider of specialized construction services across Nairobi and surrounding regions.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that every surface tells a story, and our mission is to ensure that story is one of durability, beauty, and lasting value. From residential homes to commercial spaces, we bring expertise and dedication to every square meter we work on.
              </p>
              <p className="text-gray-600">
                Our team is committed to staying at the forefront of construction technology and techniques, ensuring that our clients receive the best solutions available in the market today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-[#F5A623]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-[#F5A623]" />
            </div>
            <h2 className="text-[#0A2342] mb-6">Our Mission</h2>
            <p className="text-gray-700 text-xl mb-6">
              To deliver quality, durability, and precision in every project.
            </p>
            <p className="text-gray-600">
              We are committed to exceeding client expectations through exceptional craftsmanship, reliable service, and innovative solutions. Our goal is to protect and enhance every space we work on, creating finishes that not only look beautiful but also stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2342] mb-4">Why Choose ProShield Construction</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand out from the competition through our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0A2342] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#F5A623]" />
              </div>
              <h3 className="text-[#0A2342] mb-3">Quality Materials</h3>
              <p className="text-gray-600">
                We use only premium, industry-approved materials for lasting results
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0A2342] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#F5A623]" />
              </div>
              <h3 className="text-[#0A2342] mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Skilled professionals with years of hands-on experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0A2342] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[#F5A623]" />
              </div>
              <h3 className="text-[#0A2342] mb-3">Reliability</h3>
              <p className="text-gray-600">
                On-time delivery and transparent communication throughout
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0A2342] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#F5A623]" />
              </div>
              <h3 className="text-[#0A2342] mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority, always
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-[#F5A623] mb-2">10+</div>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div>
              <div className="text-[#F5A623] mb-2">150+</div>
              <p className="text-xl">Completed Projects</p>
            </div>
            <div>
              <div className="text-[#F5A623] mb-2">100%</div>
              <p className="text-xl">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2342] mb-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-[#0A2342] mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty and transparency, building trust with every client and partner.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-[#0A2342] mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every detail, ensuring our work exceeds industry standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-[#0A2342] mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new techniques and materials to provide cutting-edge solutions for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
