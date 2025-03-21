import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Map,
  Search,
  Star,
} from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <Card
      className="p-6 border border-indigo-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 rounded-xl bg-gradient-to-br from-white to-indigo-50/30 overflow-hidden group relative opacity-0"
      style={{
        animationName: "fade-in",
        animationDuration: "0.8s",
        animationFillMode: "forwards",
        animationDelay: `${0.3 + delay * 0.2}s`,
      }}
    >
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 ease-in-out"></div>

      <div className="mb-4 p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg inline-block">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>

      <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <a
        href="#contact"
        className="inline-flex items-center text-indigo-600 font-medium group-hover:underline"
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </Card>
  );
};

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 relative overflow-hidden"
      ref={servicesRef}
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
        <div className="text-center max-w-3xl mx-auto mb-16 staggered-animate">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
            <p className="text-sm font-medium text-indigo-700">My Services</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6 leading-tight">
            Expert Guidance Throughout Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Educational</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-indigo-200 to-purple-200"></span>
            </span>{" "}
            Journey
          </h2>

          <p className="text-gray-700 text-lg text-balance">
            Educational counseling is much like medical or legal advisory. Just
            as you wouldn't make crucial health or legal decisions without
            consulting the most experienced doctor or lawyer, educational
            choices also require expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={Search}
            title="University Selection"
            description="Personalized guidance to find the universities that best match your academic profile, career goals, and preferences in the UK and Singapore."
            delay={0}
          />

          <ServiceCard
            icon={BookOpen}
            title="Course Advisory"
            description="Expert advice on selecting the right courses and specializations aligned with your interests, aptitude, and future career opportunities."
            delay={1}
          />

          <ServiceCard
            icon={Map}
            title="Application Strategy"
            description="Strategic planning and support throughout the application process, including documentation, personal statements, and interview preparation."
            delay={2}
          />

          <ServiceCard
            icon={GraduationCap}
            title="Post-Admission Support"
            description="Continued guidance after admission, helping with visa procedures, accommodation arrangements, and pre-departure orientation."
            delay={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
