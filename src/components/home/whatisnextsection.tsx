import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Network,
  Code,
  Video,
  GraduationCap,
  Crown,
  Newspaper,
} from "lucide-react";

const WhatIsNexusSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-nexus-dark"
      data-testid="section-about"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="font-mono text-4xl md:text-5xl font-bold mb-12 nexus-glow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="text-about-title"
          >
            What is The Nexus?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-nexus-darker/50 backdrop-blur border border-nexus-blue/30 rounded-lg p-8 hover:border-nexus-blue/60 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              data-testid="card-mission"
            >
              <div className="w-16 h-16 bg-nexus-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-2xl text-nexus-blue" />
              </div>
              <h3
                className="font-mono text-xl font-semibold mb-4 text-nexus-blue"
                data-testid="text-mission-title"
              >
                Mission
              </h3>
              <p
                className="text-gray-300"
                data-testid="text-mission-description"
              >
                A student organization fostering collaboration and innovation
                through a network of specialized branch clubs.
              </p>
            </motion.div>

            <motion.div
              className="bg-nexus-darker/50 backdrop-blur border border-nexus-purple/30 rounded-lg p-8 hover:border-nexus-purple/60 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="card-vision"
            >
              <div className="w-16 h-16 bg-nexus-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-2xl text-nexus-purple" />
              </div>
              <h3
                className="font-mono text-xl font-semibold mb-4 text-nexus-purple"
                data-testid="text-vision-title"
              >
                Vision
              </h3>
              <p
                className="text-gray-300"
                data-testid="text-vision-description"
              >
                To create a dynamic environment where students can pursue
                interests from technology to creative arts under one unified
                brand.
              </p>
            </motion.div>

            <motion.div
              className="bg-nexus-darker/50 backdrop-blur border border-nexus-green/30 rounded-lg p-8 hover:border-nexus-green/60 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              data-testid="card-structure"
            >
              <div className="w-16 h-16 bg-nexus-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="text-2xl text-nexus-green" />
              </div>
              <h3
                className="font-mono text-xl font-semibold mb-4 text-nexus-green"
                data-testid="text-structure-title"
              >
                Structure
              </h3>
              <p
                className="text-gray-300"
                data-testid="text-structure-description"
              >
                Two-tiered system: Central Office for strategy and management,
                Branch Clubs for focused, autonomous activities.
              </p>
            </motion.div>
          </div>

          {/* Organizational Structure Diagram */}
          <motion.div
            className="bg-nexus-darker/30 backdrop-blur border border-nexus-blue/20 rounded-xl p-12 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            data-testid="diagram-org-structure"
          >
            <h3
              className="font-mono text-2xl font-semibold mb-8 text-nexus-blue"
              data-testid="text-structure-diagram-title"
            >
              Organizational Structure
            </h3>
            <div className="relative max-w-4xl mx-auto">
              {/* Central Office */}
              <div
                className="bg-nexus-blue/20 border-2 border-nexus-blue rounded-lg p-6 mb-12 relative hover:bg-nexus-blue/30 transition-all duration-300 cursor-pointer"
                data-testid="box-central-office"
              >
                <h4
                  className="font-mono font-semibold text-xl text-nexus-blue"
                  data-testid="text-central-office"
                >
                  Central Office
                </h4>
                <p
                  className="text-gray-300 mt-2"
                  data-testid="text-central-office-description"
                >
                  Strategy • Oversight • Resource Management
                </p>
              </div>

              {/* Connection Lines */}
              <div className="absolute sm:top-28 top-34 left-1/2 w-px h-8 bg-nexus-blue transform -translate-x-1" />
              <div className="absolute sm:top-36 top-42 left-1/2 w-80 h-px bg-nexus-blue transform -translate-x-40" />

              {/* Branch Clubs */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div
                  className="bg-nexus-purple/20 border border-nexus-purple rounded-lg p-4 hover:bg-nexus-purple/30 transition-all duration-300"
                  data-testid="box-coding-club"
                >
                  <Code className="text-2xl text-nexus-purple mb-2 mx-auto" />
                  <h5
                    className="font-mono text-sm font-semibold"
                    data-testid="text-coding-club"
                  >
                    Coding & Dev
                  </h5>
                </div>
                <div
                  className="bg-nexus-green/20 border border-nexus-green rounded-lg p-4 hover:bg-nexus-green/30 transition-all duration-300"
                  data-testid="box-content-club"
                >
                  <Video className="text-2xl text-nexus-green mb-2 mx-auto" />
                  <h5
                    className="font-mono text-sm font-semibold"
                    data-testid="text-content-club"
                  >
                    Content Creation
                  </h5>
                </div>
                <div
                  className="bg-nexus-orange/20 border border-nexus-orange rounded-lg p-4 hover:bg-nexus-orange/30 transition-all duration-300"
                  data-testid="box-academic-club"
                >
                  <GraduationCap className="text-2xl text-nexus-orange mb-2 mx-auto" />
                  <h5
                    className="font-mono text-sm font-semibold"
                    data-testid="text-academic-club"
                  >
                    Academic Study
                  </h5>
                </div>
                <div
                  className="bg-nexus-yellow/20 border border-nexus-yellow rounded-lg p-4 hover:bg-nexus-yellow/30 transition-all duration-300"
                  data-testid="box-chess-club"
                >
                  <Crown className="text-2xl text-nexus-yellow mb-2 mx-auto" />
                  <h5
                    className="font-mono text-sm font-semibold"
                    data-testid="text-chess-club"
                  >
                    Chess & Strategy
                  </h5>
                </div>
                <div
                  className="bg-nexus-pink/20 border border-nexus-pink rounded-lg p-4 hover:bg-nexus-pink/30 transition-all duration-300"
                  data-testid="box-journalism-club"
                >
                  <Newspaper className="text-2xl text-nexus-pink mb-2 mx-auto" />
                  <h5
                    className="font-mono text-sm font-semibold"
                    data-testid="text-journalism-club"
                  >
                    News & Journalism
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-6 bg-nexus-darker/50 backdrop-blur border border-nexus-green/30 rounded-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            data-testid="quote-about"
          >
            <p className="text-lg italic text-nexus-green">
              "Everything we hear is an opinion, not a fact. Everything we see
              is a perspective, not the truth."
            </p>
            <p className="text-sm text-gray-400 mt-2">— Marcus Aurelius</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNexusSection;
