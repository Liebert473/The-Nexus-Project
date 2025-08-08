import { motion } from "framer-motion";

import {
  Lightbulb,
  Palette,
  Settings,
  Rocket,
  Heart,
  Brain,
  CheckCircle,
  User,
} from "lucide-react";

const WhyWeNeedYouSection = () => {
  const skillIcons = [
    { icon: Lightbulb, color: "nexus-purple", delay: 0 },
    { icon: Palette, color: "nexus-green", delay: 0.5 },
    { icon: Settings, color: "nexus-orange", delay: 1 },
    { icon: Rocket, color: "nexus-yellow", delay: 1.5 },
    { icon: Heart, color: "nexus-pink", delay: 2 },
    { icon: Brain, color: "nexus-blue", delay: 2.5 },
  ];

  const requirements = [
    "Creative problem solvers",
    "Collaborative team players",
    "Ambitious self-starters",
    "Diverse perspectives and backgrounds",
  ];

  return (
    <section
      id="why-you"
      className="py-20 bg-gradient-to-b from-nexus-darker to-nexus-dark"
      data-testid="section-why-you"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="font-mono text-4xl md:text-5xl font-bold mb-8 nexus-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-testid="text-why-you-title"
            >
              The Missing Piece
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p
                className="text-xl text-gray-300 leading-relaxed"
                data-testid="text-why-you-paragraph-1"
              >
                <b>
                  The Nexus Project isn’t just about what you can get, it’s
                  about what you can bring.
                </b>
                <br />
                Your ideas, skills, and creativity aren’t just welcome, they’re
                the spark that can set this whole thing in motion.
              </p>

              <p
                className="text-lg text-gray-300"
                data-testid="text-why-you-paragraph-2"
              >
                Innovation happens when different minds collide. Everyone sees
                the world differently, and that’s exactly what makes this
                powerful. Your coding skills, your art, your problem-solving
                brain, it all adds something no one else can.
              </p>

              <p
                className="text-lg text-gray-300"
                data-testid="text-why-you-paragraph-3"
              >
                We’re building a crew of bold thinkers who aren’t afraid to
                break the mold, try wild ideas, and make something that’s never
                existed before.
              </p>

              <div
                className="bg-nexus-darker/50 backdrop-blur border border-nexus-blue/30 rounded-lg p-6 mt-8"
                data-testid="requirements-box"
              >
                <h3
                  className="font-mono text-xl font-semibold mb-4 text-nexus-blue"
                  data-testid="text-requirements-title"
                >
                  What We're Looking For:
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {requirements.map((requirement, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-testid={`requirement-${index}`}
                    >
                      <CheckCircle
                        className="text-nexus-green mr-3"
                        size={16}
                      />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-testid="skill-connections-diagram"
            >
              <div className="relative w-64 h-64">
                {/* Central silhouette */}
                <div className="absolute inset-0 bg-gradient-to-b from-nexus-blue to-nexus-purple rounded-full opacity-20" />
                <motion.div
                  className="absolute inset-4 bg-nexus-dark rounded-full border-2 border-nexus-blue nexus-pulse-glow flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  data-testid="central-user-icon"
                >
                  <User className="text-6xl text-nexus-blue" />
                </motion.div>

                {/* Floating skill icons */}
                {skillIcons.map((skill, index) => {
                  const positions = [
                    { top: "-2rem", left: "-2rem" },
                    { top: "-1rem", right: "-3rem" },
                    { bottom: "-2rem", right: "-2rem" },
                    { bottom: "-1rem", left: "-3rem" },
                    {
                      top: "50%",
                      left: "-4rem",
                      transform: "translateY(-50%)",
                    },
                    {
                      top: "50%",
                      right: "-4rem",
                      transform: "translateY(-50%)",
                    },
                  ];

                  return (
                    <motion.div
                      key={index}
                      className={`absolute w-12 h-12 bg-${skill.color}/20 rounded-full flex items-center justify-center nexus-float`}
                      style={{
                        ...positions[index],
                        animationDelay: `${skill.delay}s`,
                      }}
                      data-testid={`skill-icon-${index}`}
                    >
                      <skill.icon className={`text-${skill.color}`} />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <motion.div
              className="p-6 bg-nexus-darker/50 backdrop-blur border border-nexus-purple/30 rounded-lg max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-testid="quote-why-you"
            >
              <p className="text-lg italic text-nexus-purple">
                "Knowing yourself is the beginning of all wisdom."
              </p>
              <p className="text-sm text-gray-400 mt-2">— Aristotle</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeNeedYouSection;
