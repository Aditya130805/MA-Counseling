import React, { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
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
      "Ms. Meenu Agarwal has really assisted me with everything I could have needed - from the initial brainstorming on my applications to the fag end of the process. It has been an excellent journey and I am really thankful!",
    name: "Tesuu Agarwal",
    title: "N/A",
    university: "Queen Mary University, London",
    image: "/testimonial1Profile.jpeg",
  },
  {
    id: 2,
    content:
      "I am extremely grateful to you ma'am and all the work you have put into helping me obtain a really significant scholarship for studying abroad. Thank you!",
    name: "Jayesh Goel",
    title: "N/A",
    university: "University of Padua, Italy",
    image: "/testimonial2Profile.jpg",
  },
  {
    id: 3,
    content:
      "I've wanted to pursue construction management since a very tender age, and Ms. Meenu Agarwal has made it possible. At the University of Lincoln, I am really happy and I would suggest her to anybody who wants to study abroad.",
    name: "Amit Chavan",
    title: "N/A",
    university: "University of Lincoln, UK",
    image: "/testimonial3Profile.jpeg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

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
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
          <div className="relative h-[400px] md:h-[320px] mb-10">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 rounded-2xl p-8 shadow-lg bg-gradient-to-br from-white to-indigo-50/30 border border-indigo-100",
                  activeIndex === index
                    ? "opacity-100 translate-x-0 z-20"
                    : index < activeIndex ||
                      (activeIndex === 0 && index === TESTIMONIALS.length - 1)
                    ? "opacity-0 -translate-x-full z-10"
                    : "opacity-0 translate-x-full z-10"
                )}
              >
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-gradient-to-r from-indigo-100 to-purple-100 shadow-md">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <Quote className="h-10 w-10 text-indigo-200 mx-auto md:mx-0" />
                  </div>

                  <p className="text-gray-700 mb-6 italic text-lg text-balance">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <h4 className="font-serif text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-indigo-600">{testimonial.title}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 scale-100"
                    : "bg-gray-200 scale-90"
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
