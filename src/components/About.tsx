import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Award, UserCheck, BookOpen, Star } from "lucide-react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-br from-purple-50 via-indigo-50 to-white relative overflow-hidden"
      ref={aboutRef}
    >
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-100/60 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-100/40 rounded-full filter blur-3xl opacity-40 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-amber-100/30 rounded-full filter blur-3xl opacity-30 animate-pulse-light" style={{ animationDelay: '2s' }}></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full md:w-5/12 lg:w-1/2">
            <div className="relative">
              <div
                className="aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden glass-panel p-2 shadow-xl opacity-0 bg-gradient-to-r from-indigo-100/50 to-purple-100/50"
                style={{
                  animationName: "fade-in",
                  animationDuration: "0.8s",
                  animationFillMode: "forwards",
                  animationDelay: "0.1s",
                }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Meenu Agarwal Education Counselor"
                    className="w-full h-full object-cover transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-purple-900/10 to-transparent"></div>
                </div>
              </div>

              <div
                className="absolute -bottom-5 -right-5 md:bottom-10 md:-right-10 bg-gradient-to-br from-white to-indigo-50 rounded-lg p-4 shadow-lg glass-panel opacity-0 border border-indigo-100"
                style={{
                  animationName: "fade-in",
                  animationDuration: "0.8s",
                  animationFillMode: "forwards",
                  animationDelay: "0.6s",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
                      <Award className="h-5 w-5 text-indigo-600" />
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Chartered Accountant
                    </p>
                    <p className="text-sm text-gray-600">
                      Professional Background
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-5 -left-5 md:top-10 md:-left-10 bg-gradient-to-br from-white to-purple-50 rounded-lg p-4 shadow-lg glass-panel opacity-0 border border-purple-100"
                style={{
                  animationName: "fade-in",
                  animationDuration: "0.8s",
                  animationFillMode: "forwards",
                  animationDelay: "0.8s",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
                      <UserCheck className="h-5 w-5 text-indigo-600" />
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">20+ Years</p>
                    <p className="text-sm text-gray-600">
                      Counseling Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 lg:w-1/2 staggered-animate">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
              <p className="text-sm font-medium text-indigo-700">About Me</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6 leading-tight">
              Passionate About <span className="relative inline-block"><span className="relative z-10">Shaping</span><span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-indigo-200 to-purple-200"></span></span> Educational Journeys
            </h2>

            <p className="text-gray-700 mb-6 text-balance">
              I am a qualified Chartered Accountant, but my true passion lies in
              education. I firmly believe that the best way to serve the world
              is by empowering the youth and being an integral part of their
              career-building journey.
            </p>

            <p className="text-gray-700 mb-8 text-balance">
              Education is one of the most significant life decisions for
              students and their families. With countless options
              available—spanning courses, universities, and countries—choosing
              the right path can often feel overwhelming and confusing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "One-on-one personalized guidance",
                "UK & Singapore university expertise",
                "Tailored study plans for each student",
                "20+ years of counseling experience",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 bg-white/70 p-2 rounded-lg shadow-sm border border-indigo-50">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <Button className="rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white flex items-center gap-2 group">
              My Approach
              <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
