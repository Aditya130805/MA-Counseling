import React from "react";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span className="font-serif text-xl font-medium">
                Meenu Agarwal
              </span>
            </div>

            <p className="text-gray-400 mb-6">
              Expert education counseling for UK and Singapore universities,
              providing personalized guidance for your academic journey.
            </p>

            <div className="flex space-x-4">
              <a
                // href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary/20 transition-colors relative group"
              >
                <Twitter className="h-5 w-5 text-gray-300" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-px w-12 bg-red-500/80 rotate-45 transform origin-center"></div>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Not available
                </span>
              </a>
              <a
                // href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary/20 transition-colors relative group"
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-px w-12 bg-red-500/80 rotate-45 transform origin-center"></div>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Not available
                </span>
              </a>
              <a
                // href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary/20 transition-colors relative group"
              >
                <Github className="h-5 w-5 text-gray-300" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-px w-12 bg-red-500/80 rotate-45 transform origin-center"></div>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Not available
                </span>
              </a>
              <a
                // href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary/20 transition-colors relative group"
              >
                <Instagram className="h-5 w-5 text-gray-300" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-px w-12 bg-red-500/80 rotate-45 transform origin-center"></div>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Not available
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Testimonials", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "University Selection",
                "Course Advisory",
                "Application Strategy",
                "Post-Admission Support",
                "Career Guidance",
              ].map((item) => (
                <li key={item}>
                  <a
                    // href="#services"
                    className="text-gray-400 hover:text-primary flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-400">meenuipc@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-400">+91 97129-24902</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-400">Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Meenu Agarwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
