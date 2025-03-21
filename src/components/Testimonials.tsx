import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  content: string;
  name: string;
  title: string;
  university: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content:
      '"Ms. Meenu Agarwal has really assisted me with everything I could have needed - from the initial brainstorming on my applications to the fag end of the process. It has been an excellent journey and I am really thankful!"',
    name: "Tesuu Agarwal",
    title: "N/A",
    university: "Queen Mary University, London",
    image: "/testimonial1Profile.jpeg",
  },
  {
    id: 2,
    content:
      '"I am extremely grateful to you ma\'am and all the work you have put into helping me obtain a really significant scholarship for studying abroad. Thank you!"',
    name: "Jayesh Goel",
    title: "N/A",
    university: "University of Padua, Italy",
    image: "/testimonial2Profile.jpg",
  },
  {
    id: 3,
    content:
      '"I\'ve wanted to pursue construction management since a very tender age, and Ms. Meenu Agarwal has made it possible. At the University of Lincoln, I am really happy and I would suggest her to anybody who wants to study abroad."',
    name: "Amit Chavan",
    title: "N/A",
    university: "University of Lincoln, UK",
    image: "/testimonial3Profile.jpeg",
  },
];

const TestimonialCard = ({
  testimonial,
  isActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col md:flex-row gap-6 rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-500",
        "bg-white border border-indigo-100",
        isActive
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none absolute inset-0"
      )}
    >
      {/* Left column - Profile section */}
      <div className="md:w-1/3 flex flex-col items-center justify-center space-y-4 md:border-r md:border-indigo-100 md:pr-6">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md bg-gradient-to-br from-indigo-50 to-purple-50 p-0.5">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
          />
        </div>

        <div className="text-center w-full">
          <h4 className="font-serif text-lg md:text-xl font-medium text-gray-900">
            {testimonial.name}
          </h4>
          {testimonial.title !== "N/A" && (
            <p className="text-indigo-600 text-sm md:text-base font-medium">
              {testimonial.title}
            </p>
          )}
          <p className="text-xs md:text-sm text-gray-600 mt-1">
            {testimonial.university}
          </p>
        </div>
      </div>

      {/* Right column - Testimonial content */}
      <div className="md:w-2/3 flex flex-col justify-center">
        <div className="relative">
          <div className="pl-6 pt-2">
            <p className="text-gray-700 italic text-base md:text-lg leading-relaxed pr-2">
              {testimonial.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden"
      ref={testimonialRef}
    >
      <div className="absolute top-20 left-0 w-1/3 h-1/3 bg-indigo-100/50 rounded-full filter blur-3xl opacity-40 animate-pulse-light"></div>
      <div
        className="absolute bottom-20 right-0 w-1/3 h-1/3 bg-purple-100/50 rounded-full filter blur-3xl opacity-50 animate-pulse-light"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-1/4 h-1/4 bg-amber-100/30 rounded-full filter blur-3xl opacity-30 animate-pulse-light"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20 staggered-animate">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
            <p className="text-sm font-medium text-indigo-700">
              Student Success Stories
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6 leading-tight">
            Hear From{" "}
            <span className="relative inline-block">
              <span className="relative z-10">My Students</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-indigo-200 to-purple-200"></span>
            </span>
          </h2>

          <p className="text-gray-700 text-lg text-balance">
            Today, I take pride in seeing my students excel in top corporations
            and renowned research institutions across the globe.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Testimonial Card Container */}
          <div
            className="relative mb-10 rounded-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={activeIndex === index}
              />
            ))}

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-2 md:px-4">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-indigo-600 hover:bg-white hover:text-indigo-700 transition-all pointer-events-auto"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-indigo-600 hover:bg-white hover:text-indigo-700 transition-all pointer-events-auto"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 scale-100"
                    : "bg-gray-200 scale-90 hover:bg-gray-300"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
