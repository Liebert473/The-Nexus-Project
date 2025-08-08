import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nexus-darker/95 backdrop-blur-md"
          : "bg-nexus-darker/90 backdrop-blur-md"
      } border-b border-nexus-blue/20`}
      data-testid="navigation-bar"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="font-mono font-bold text-xl text-nexus-blue nexus-glow cursor-pointer"
            onClick={() => scrollToSection("hero")}
            data-testid="logo-nexus"
          >
            NEXUS
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-nexus-blue transition-colors duration-300"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-nexus-blue transition-colors duration-300"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("clubs")}
              className="text-gray-300 hover:text-nexus-blue transition-colors duration-300"
              data-testid="nav-clubs"
            >
              Clubs
            </button>
            <button
              onClick={() => scrollToSection("join")}
              className="text-gray-300 hover:text-nexus-blue transition-colors duration-300"
              data-testid="nav-join"
            >
              Join
            </button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-300 hover:text-nexus-blue transition-colors duration-300 text-left"
                data-testid="nav-mobile-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-nexus-blue transition-colors duration-300 text-left"
                data-testid="nav-mobile-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("clubs")}
                className="text-gray-300 hover:text-nexus-blue transition-colors duration-300 text-left"
                data-testid="nav-mobile-clubs"
              >
                Clubs
              </button>
              <button
                onClick={() => scrollToSection("join")}
                className="text-gray-300 hover:text-nexus-blue transition-colors duration-300 text-left"
                data-testid="nav-mobile-join"
              >
                Join
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
