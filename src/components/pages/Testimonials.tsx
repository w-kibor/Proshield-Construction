import { TestimonialCard } from "../TestimonialCard";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    location: "Westlands, Nairobi",
    feedback: "Brandon and his team did an exceptional job waterproofing our basement. No more leaks! Highly professional and reliable.",
    rating: 5,
  },
  {
    name: "Sarah Kimani",
    location: "Karen, Nairobi",
    feedback: "The epoxy flooring in our warehouse looks amazing and is incredibly durable. Great value for money and excellent customer service.",
    rating: 5,
  },
  {
    name: "David Ochieng",
    location: "Kiambu",
    feedback: "Beautiful terrazzo work in our home. Brandon's attention to detail is impressive. Would definitely recommend ProShield Construction!",
    rating: 5,
  },
  {
    name: "Mary Wanjiru",
    location: "Kilimani, Nairobi",
    feedback: "We had our bathroom waterproofed and the results are outstanding. No more moisture issues. Very satisfied with the quality of work.",
    rating: 5,
  },
  {
    name: "Peter Kariuki",
    location: "Industrial Area, Nairobi",
    feedback: "ProShield installed epoxy flooring in our factory. It's holding up perfectly despite heavy use. Excellent workmanship and fair pricing.",
    rating: 5,
  },
  {
    name: "Grace Akinyi",
    location: "Lavington, Nairobi",
    feedback: "The terrazzo flooring in our office is stunning. Brandon was professional throughout the project and delivered exactly what we wanted.",
    rating: 5,
  },
  {
    name: "Michael Omondi",
    location: "Parklands, Nairobi",
    feedback: "Fast, efficient, and professional service. Our roof waterproofing was completed on time and the quality is top-notch.",
    rating: 5,
  },
  {
    name: "Lucy Njeri",
    location: "Runda, Nairobi",
    feedback: "Brandon transformed our garage floor with beautiful epoxy coating. The team was respectful, clean, and very skilled.",
    rating: 5,
  },
  {
    name: "John Kamau",
    location: "Ngong Road, Nairobi",
    feedback: "Outstanding service from start to finish. The waterproofing work has solved all our leakage problems. Highly recommend!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0A2342] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <Quote className="h-32 w-32" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Quote className="h-32 w-32" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-white mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #0A2342 0, #0A2342 1px, transparent 0, transparent 50%)`,
            backgroundSize: '10px 10px',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                feedback={testimonial.feedback}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Our Track Record</h2>
            <p className="text-gray-300">Numbers that speak for themselves</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#F5A623] mb-2">150+</div>
              <p className="text-xl">Happy Clients</p>
            </div>
            <div>
              <div className="text-[#F5A623] mb-2">200+</div>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <div className="text-[#F5A623] mb-2">100%</div>
              <p className="text-xl">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-[#F5A623] mb-2">10+</div>
              <p className="text-xl">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#0A2342] mb-6">Ready to Join Our Happy Clients?</h2>
          <p className="text-gray-700 text-xl mb-8">
            Experience the quality and professionalism that has earned us these glowing reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <button className="bg-[#F5A623] hover:bg-[#E09613] text-white rounded-full px-8 py-4 transition-colors">
                Get Your Free Quote
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
