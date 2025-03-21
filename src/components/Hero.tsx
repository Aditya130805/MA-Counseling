import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  GraduationCap,
  Map,
  BookOpen,
  Star,
} from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      ref={heroRef}
    >
      {/* Abstract shapes */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-200/60 rounded-full filter blur-3xl opacity-50 animate-pulse-light"></div>
      <div
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-200/40 rounded-full filter blur-3xl opacity-40 animate-pulse-light"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-60 h-60 bg-amber-100/30 rounded-full filter blur-3xl opacity-30 animate-pulse-light"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-6">
          <div className="w-full lg:w-1/2 staggered-animate">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100 border border-indigo-200">
              <p className="text-sm font-medium text-indigo-700">
                Expert Education Consultancy
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-medium tracking-tight text-gray-900 mb-6 leading-tight text-balance">
              One-on-One Guidance for Your
              <span className="relative inline-block px-2 ml-2">
                <span className="relative z-10">Journey</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-indigo-200 to-purple-200"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl text-balance">
              Personalized educational counseling to help you navigate your path
              to top universities in the UK and Singapore with confidence and
              clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-all flex items-center gap-2"
                >
                  Learn More
                  <BookOpen className="h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm text-gray-600 mt-2">
              <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg shadow-sm">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg shadow-sm">
                <Globe className="h-5 w-5 text-indigo-600" />
                <span>UK & Singapore Focus</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg shadow-sm">
                <Star className="h-5 w-5 text-amber-500" />
                <span>Tailored Guidance</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md opacity-0 animate-fade-in-slow">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-panel p-1.5 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 shadow-xl">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src="/concert.jpg"
                    alt="Education Counseling Session"
                    className="w-full h-full object-cover object-center transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-purple-900/20 to-transparent"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 glass-panel animate-float border border-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Personalized Plans
                    </p>
                    <p className="text-xs text-gray-600">
                      Tailored to your needs
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-4 glass-panel animate-float border border-indigo-100"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Global Success
                    </p>
                    <p className="text-xs text-gray-600">Students worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
