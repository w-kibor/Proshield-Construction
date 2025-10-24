import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0A2342] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Get in Touch with Brandon</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Contact us for a free consultation and quote
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-[#0A2342] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#0A2342] mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-lg border-gray-300 focus:border-[#F5A623] focus:ring-[#F5A623]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#0A2342] mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border-gray-300 focus:border-[#F5A623] focus:ring-[#F5A623]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#0A2342] mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 XXX XXX XXX"
                    className="w-full rounded-lg border-gray-300 focus:border-[#F5A623] focus:ring-[#F5A623]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#0A2342] mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-lg border-gray-300 focus:border-[#F5A623] focus:ring-[#F5A623]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#F5A623] hover:bg-[#E09613] text-white rounded-full py-6 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-[#0A2342] mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#F5A623]/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="text-[#0A2342] mb-1">Phone</h3>
                    <p className="text-gray-600">+254726878628</p>
                    <p className="text-sm text-gray-500">Available Mon-Sat, 8AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#F5A623]/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="text-[#0A2342] mb-1">Email</h3>
                    <p className="text-gray-600">info@proshieldconstruction.co.ke</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#F5A623]/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="text-[#0A2342] mb-1">Location</h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                    <p className="text-sm text-gray-500">Serving Nairobi and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#F5A623]/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="text-[#0A2342] mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Saturday</p>
                    <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2342] mb-4">Prefer Direct Contact?</h2>
            <p className="text-gray-600">
              Choose your preferred way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="tel:+254726878628"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="bg-[#F5A623]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F5A623] transition-colors">
                <Phone className="h-8 w-8 text-[#F5A623] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[#0A2342] mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">Get immediate assistance</p>
            </a>

            <a
              href="https://wa.me/254726878628"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="bg-[#25D366]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#25D366] transition-colors">
                <svg className="h-8 w-8 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-[#0A2342] mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm">Chat with us directly</p>
            </a>

            <a
              href="mailto:info@proshieldconstruction.co.ke"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="bg-[#F5A623]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F5A623] transition-colors">
                <Mail className="h-8 w-8 text-[#F5A623] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[#0A2342] mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">Send us an email</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
