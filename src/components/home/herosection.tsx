import AnimatedNodes from "@/components/home/animatednodes";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("missing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-nexus-dark via-nexus-darker to-nexus-dark"
      data-testid="section-hero"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nexus-dark/80 to-nexus-darker/90" />

      <AnimatedNodes />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          className="font-mono text-6xl md:text-8xl font-bold mb-6 nexus-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          data-testid="text-hero-title"
        >
          The Nexus Project
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          data-testid="text-hero-tagline"
        >
          The hub where ambition meets action. Your journey begins.
        </motion.p>
        <motion.div
          className="mb-12 p-6 bg-nexus-darker/50 backdrop-blur border border-nexus-blue/30 rounded-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          data-testid="quote-hero"
        >
          <p className="text-lg italic text-nexus-blue">
            "The greatest danger for most of us is not that our aim is too high
            and we miss it, but that it is too low and we reach it."
          </p>
          <p className="text-sm text-gray-400 mt-2">— Michelangelo</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-nexus-blue to-nexus-purple hover:from-nexus-purple hover:to-nexus-blue px-10 py-6 rounded-full font-semibold text-lg nexus-pulse-glow transform hover:scale-105 transition-all duration-300"
            data-testid="button-discover-more"
          >
            Discover More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
