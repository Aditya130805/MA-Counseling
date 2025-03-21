import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Book, Clock, Globe, Award } from "lucide-react";
import BriefcaseBusiness from "@/components/icons/BriefcaseBusiness";

const UKLawStudy = () => {
  const lawStudyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (lawStudyRef.current) {
      observer.observe(lawStudyRef.current);
    }

    return () => {
      if (lawStudyRef.current) {
        observer.unobserve(lawStudyRef.current);
      }
    };
  }, []);

  return (
    <section
      id="uk-law-study"
      className="py-12 md:py-16 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 relative overflow-hidden"
      ref={lawStudyRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
      <div className="absolute top-40 -left-24 w-64 h-64 bg-indigo-100/40 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div
        className="absolute bottom-32 -right-20 w-72 h-72 bg-purple-100/30 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl bg-gradient-to-br from-indigo-50/10 to-purple-50/10 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header - More elegant with subtle animation */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div
            className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-4 transform hover:scale-105 transition-transform"
            style={{ opacity: 0, animation: "fade-in 0.6s ease-out forwards" }}
          >
            <p className="text-sm font-medium bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Study in the UK
            </p>
          </div>

          <h2
            className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-4 leading-tight"
            style={{
              opacity: 0,
              animation: "fade-in 0.6s ease-out 0.2s forwards",
            }}
          >
            Alternative Pathways to a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Law Career</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-sm"></span>
            </span>
          </h2>

          <p
            className="text-gray-600 text-sm md:text-base max-w-xl mx-auto"
            style={{
              opacity: 0,
              animation: "fade-in 0.6s ease-out 0.4s forwards",
            }}
          >
            Discover exceptional opportunities for studying law in the UK,
            offering world-class education and global career prospects.
          </p>
        </div>

        {/* Main content - Improved layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image with caption - Enhanced */}
          <div
            className="group"
            style={{
              opacity: 0,
              animation: "fade-in 0.8s ease-out 0.6s forwards",
            }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg transform group-hover:scale-[1.01] transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Law School in the UK"
                className="w-full aspect-video object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex items-end">
                <div className="p-5 md:p-6 w-full">
                  <h3 className="text-white text-lg md:text-xl font-serif mb-2 group-hover:translate-y-[-2px] transition-transform">
                    Study LLB in the UK
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm max-w-md">
                    An exceptional alternative for those seeking quality legal
                    education and international exposure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CLAT Challenge - Redesigned */}
          <div
            style={{
              opacity: 0,
              animation: "fade-in 0.8s ease-out 0.8s forwards",
            }}
          >
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-block p-1.5 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
                  <Award className="h-4 w-4 text-indigo-600" />
                </span>
                <span>The CLAT Challenge</span>
              </h3>

              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                The Common Law Admission Test (CLAT) is highly competitive. In
                2025, approximately 75,000 students appeared for CLAT, but only
                10,000 secured admission to National Law Universities.
              </p>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-indigo-100 mb-5 transform hover:translate-y-[-2px] hover:shadow-md transition-all">
                <h4 className="font-medium text-gray-900 mb-2 text-sm">
                  What about the rest of the students?
                </h4>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  Many equally capable students were unable to clear CLAT and
                  settle for second-tier law colleges, compromising on education
                  quality and opportunities.
                </p>
              </div>

              <p className="text-gray-600 text-sm italic">
                There are excellent alternatives in the UK for students seeking
                better infrastructure and international exposure.
              </p>
            </div>
          </div>
        </div>

        {/* Universities - Elegant floating pills */}
        <div
          className="mb-12"
          style={{ opacity: 0, animation: "fade-in 0.8s ease-out 1s forwards" }}
        >
          <h3 className="text-xl font-serif font-medium text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <span className="inline-block p-1.5 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
              <Globe className="h-4 w-4 text-indigo-600" />
            </span>
            <span className="relative inline-block">
              <span className="relative z-10">Top UK Universities</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-sm"></span>
            </span>
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {[
              "Queen Mary",
              "Cambridge",
              "King's College",
              "Oxford",
              "University College London",
              "London School of Economics",
              "Warwick",
            ].map((university, index) => (
              <div
                key={index}
                className="px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-indigo-100 text-sm font-medium text-gray-800 transform hover:translate-y-[-2px] hover:shadow-md transition-all"
                style={{
                  opacity: 0,
                  animation: `fade-in 0.5s ease-out ${
                    1.1 + index * 0.1
                  }s forwards`,
                }}
              >
                {university}
              </div>
            ))}
          </div>
        </div>

        {/* Key Advantages - Redesigned cards */}
        <div
          className="mb-12"
          style={{
            opacity: 0,
            animation: "fade-in 0.8s ease-out 1.2s forwards",
          }}
        >
          <h3 className="text-xl font-serif font-medium text-gray-900 mb-6 text-center">
            Key Advantages of UK Law Study
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-indigo-100 hover:border-indigo-200 hover:shadow-md transform hover:translate-y-[-2px] transition-all"
              style={{
                opacity: 0,
                animation: "fade-in 0.6s ease-out 1.3s forwards",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg">
                  <Clock className="h-5 w-5 text-indigo-600" />
                </div>
                <h4 className="font-medium text-gray-900 text-base">
                  Shorter Duration
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                LLB courses in UK universities are typically three years long,
                compared to 6–7 years in India (including CLAT preparation).
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-indigo-100 hover:border-indigo-200 hover:shadow-md transform hover:translate-y-[-2px] transition-all"
              style={{
                opacity: 0,
                animation: "fade-in 0.6s ease-out 1.4s forwards",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg">
                  <BriefcaseBusiness className="h-5 w-5 text-indigo-600" />
                </div>
                <h4 className="font-medium text-gray-900 text-base">
                  Work Experience
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                The UK Government offers a two-year Graduate Route Visa,
                allowing graduates to work in the UK after completing their
                degree.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-indigo-100 hover:border-indigo-200 hover:shadow-md transform hover:translate-y-[-2px] transition-all"
              style={{
                opacity: 0,
                animation: "fade-in 0.6s ease-out 1.5s forwards",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg">
                  <Book className="h-5 w-5 text-indigo-600" />
                </div>
                <h4 className="font-medium text-gray-900 text-base">
                  BCI Recognition
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Bar Council of India recognizes LLB degrees from many top UK
                universities, allowing graduates to practice in India.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion - Enhanced */}
        {/* <div
          className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-indigo-100 max-w-2xl mx-auto text-center transform hover:shadow-lg transition-all"
          style={{
            opacity: 0,
            animation: "fade-in 0.8s ease-out 1.6s forwards",
          }}
        >
          <h3 className="text-lg font-serif font-medium text-gray-900 mb-3">
            <span className="relative inline-block">
              <span className="relative z-10">Conclusion</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-sm"></span>
            </span>
          </h3>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed max-w-lg mx-auto">
            For students seeking an international edge, pursuing an LLB from the
            UK offers faster completion, global exposure, and recognized
            qualifications.
          </p>
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-5 py-2 text-sm shadow-md flex items-center gap-2 group mx-auto transform hover:translate-y-[-2px] transition-all">
            Explore UK Law Programs
            <GraduationCap className="h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default UKLawStudy;
