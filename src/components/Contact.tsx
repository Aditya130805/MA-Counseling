import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 relative overflow-hidden"
      ref={contactRef}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
      <div
        className="absolute top-1/4 right-0 w-80 h-80 bg-purple-100/20 rounded-full filter blur-3xl opacity-40 animate-pulse-light"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-0 w-60 h-60 bg-indigo-100/30 rounded-full filter blur-3xl opacity-30 animate-pulse-light"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 staggered-animate">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
              <p className="text-sm font-medium text-indigo-700">
                Get in Touch
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6 leading-tight">
              Let's Start Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Educational Journey</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-indigo-200 to-purple-200"></span>
              </span>{" "}
              Together
            </h2>

            <p className="text-gray-700 mb-8 text-lg text-balance">
              Let me help you navigate your study abroad journey—with expert
              advice, personal attention, and unwavering support at every step.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-sm">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900 font-medium">
                    meenuipc@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-sm">
                  <Phone className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900 font-medium">+91 97129-24902</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-sm">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office</p>
                  <p className="text-gray-900 font-medium">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 opacity-0"
            style={{
              animationName: "fade-in",
              animationDuration: "0.8s",
              animationFillMode: "forwards",
              animationDelay: "0.4s",
            }}
          >
            <div className="bg-gradient-to-br from-white to-indigo-50/30 p-8 rounded-2xl shadow-lg border border-indigo-100">
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-6">
                Leave us a message
              </h3>

              <form
                className="space-y-5"
                action="https://formsubmit.co/meenuipc@gmail.com"
                method="POST"
                autoComplete="off"
              >
                {/* First row - First name and Last name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all outline-none bg-white/80"
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all outline-none bg-white/80"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                {/* Second row - Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all outline-none bg-white/80"
                      placeholder="Email address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all outline-none bg-white/80"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                </div>

                {/* Third row - Course and Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="course"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Course
                    </label>
                    <input
                      type="text"
                      name="course"
                      id="course"
                      className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all outline-none bg-white/80"
                      placeholder="Course of interest"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all outline-none bg-white/80"
                      placeholder="Country of interest"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all outline-none resize-none bg-white/80"
                    placeholder="Any extra remarks you would like to add"
                  ></textarea>
                </div>

                {/* Hidden honeypot field to prevent spam */}
                <input type="text" name="_honey" style={{ display: "none" }} />

                {/* Disable captcha */}
                <input type="hidden" name="_captcha" value="false" />

                {/* Redirect after submission */}
                <input
                  type="hidden"
                  name="_next"
                  value={window.location.href}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg py-6 flex items-center justify-center gap-2 group shadow-md"
                >
                  Submit
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
