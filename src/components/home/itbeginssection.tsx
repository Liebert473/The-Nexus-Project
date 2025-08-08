import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { JointSession } from "@/components/JointSession";

const ItBeginsSection = () => {
  const handleJoinNexus = () => {
    // This would typically open a registration form or redirect to a signup page
    alert("Join the Nexus form would open here!");
  };

  return (
    <section
      id="join"
      className="py-20 bg-nexus-dark"
      data-testid="section-join"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-mono text-4xl md:text-6xl font-bold mb-8 nexus-glow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="text-join-title"
          >
            The Time is Now.
          </motion.h2>

          <div className="mb-12 space-y-6 text-lg text-gray-300">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="text-join-paragraph-2"
            >
              You have the chance to be part of something that transcends the
              ordinary, to help create a movement that will inspire generations
              of students to come. This is your moment to step forward, to
              contribute your unique gifts, and to be part of a legacy that
              matters.
            </motion.p>
            <motion.p
              className="text-nexus-blue font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              data-testid="text-join-paragraph-3"
            >
              The Nexus awaits. Your journey begins now.
            </motion.p>
          </div>

          {/* Animated Nexus Logo Formation */}
          <motion.div
            className="mb-12 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            data-testid="animated-logo"
          >
            <div className="w-32 h-32 mx-auto relative">
              <motion.div
                className="absolute inset-0 border-4 border-nexus-blue rounded-full opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 border-2 border-nexus-purple rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-mono text-2xl font-bold text-white nexus-glow"
                  data-testid="text-logo-nexus"
                >
                  NEXUS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleJoinNexus}
              className="group relative bg-gradient-to-r from-nexus-blue via-nexus-purple to-nexus-green hover:from-nexus-green hover:via-nexus-blue hover:to-nexus-purple px-12 py-6 rounded-full font-mono font-bold text-xl nexus-pulse-glow shadow-2xl transform hover:scale-110 transition-all duration-500"
              data-testid="button-join-nexus"
            >
              <span className="relative z-10">Join the Nexus</span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>

          {/* Joined Participants Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12 mt-10"
          >
            <JointSession />
          </motion.div>

          <motion.div
            className="mt-16 p-6 bg-nexus-darker/50 backdrop-blur border border-nexus-green/30 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            data-testid="quote-join"
          >
            <p className="text-lg italic text-nexus-green">
              "Change your thoughts and you change your world."
            </p>
            <p className="text-sm text-gray-400 mt-2">— Norman Vincent Peale</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ItBeginsSection;
