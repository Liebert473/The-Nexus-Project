import { motion } from "framer-motion";
import { Code, Newspaper, Megaphone } from "lucide-react";

const InitialProjectsSection = () => {
  const projects = [
    {
      title: "Technical Skills Development",
      icon: Code,
      color: "nexus-purple",
      description:
        "Coding & Development projects focus on building valuable technical skills through hands-on programming challenges, web development, and software engineering practices.",
    },
    {
      title: "Digital Content Production",
      icon: Megaphone,
      color: "nexus-green",
      description:
        "Content Creation projects produce high-quality digital content to publicize the Nexus Project and promote school events through multimedia storytelling.",
    },
    {
      title: "School Newsletter Launch",
      icon: Newspaper,
      color: "nexus-pink",
      description:
        "News & Journalism projects focus on reporting school events and launching a comprehensive newsletter that amplifies student voices and stories.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-nexus-dark"
      data-testid="section-projects"
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
              data-testid="text-projects-title"
            >
              Our First Missions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="text-projects-description"
            >
              Each branch club launches with focused projects designed to build
              skills, create value, and establish our presence in the school
              community.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern workspace with multiple screens showing development projects"
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                data-testid="img-workspace"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-nexus-blue/20 to-transparent rounded-xl" />
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`bg-nexus-darker/50 backdrop-blur border border-${project.color} rounded-lg p-6`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`card-project-${index}`}
                >
                  <div className="flex items-center mb-4">
                    <project.icon
                      className={`text-2xl text-${project.color} mr-4`}
                    />
                    <h3
                      className={`font-mono text-xl font-semibold text-${project.color}`}
                      data-testid={`text-project-title-${index}`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <p
                    className="text-gray-300"
                    data-testid={`text-project-description-${index}`}
                  >
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              className="p-6 bg-nexus-darker/50 backdrop-blur border border-nexus-orange/30 rounded-lg max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-testid="quote-projects"
            >
              <p className="text-lg italic text-nexus-orange">
                "It is not the mountain we conquer, but ourselves."
              </p>
              <p className="text-sm text-gray-400 mt-2">— Sir Edmund Hillary</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitialProjectsSection;
