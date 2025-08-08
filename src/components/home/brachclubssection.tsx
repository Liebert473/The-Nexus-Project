import { motion } from "framer-motion";
import {
  Code,
  Video,
  GraduationCap,
  Crown,
  Newspaper,
  Settings,
} from "lucide-react";

const BranchClubsSection = () => {
  const clubs = [
    {
      id: "coding",
      title: "Coding & Development",
      icon: Code,
      color: "nexus-purple",
      description:
        "Master programming fundamentals, web development, and build projects that develop in-demand technical skills for the modern world.",
      details: "• Full-stack development • Mobile apps • AI/ML projects",
    },
    {
      id: "content",
      title: "Content Creation",
      icon: Video,
      color: "nexus-green",
      description:
        "Focus on writing, video production, graphic design, and social media to publicize projects and school events with creative flair.",
      details: "• Video editing • Graphic design • Social media strategy",
    },
    {
      id: "academic",
      title: "Academic Study Group",
      icon: GraduationCap,
      color: "nexus-orange",
      description:
        "Collaborative peer tutoring and study sessions designed to support academic success across all subjects and grade levels.",
      details: "• Peer tutoring • Study groups • Academic workshops",
    },
    {
      id: "chess",
      title: "Chess & Strategy",
      icon: Crown,
      color: "nexus-yellow",
      description:
        "Develop critical thinking and problem-solving skills through chess and strategic games that sharpen analytical abilities.",
      details: "• Tournament chess • Strategy games • Logic puzzles",
    },
    {
      id: "journalism",
      title: "News & Journalism",
      icon: Newspaper,
      color: "nexus-pink",
      description:
        "Report on school events and produce a comprehensive school newsletter, giving students a powerful voice in their community.",
      details:
        "• Investigative reporting • Newsletter production • Media literacy",
    },
    {
      id: "management",
      title: "Central Office Management",
      icon: Settings,
      color: "nexus-blue",
      description:
        "Lead strategic oversight, coordinate between branch clubs, and manage organizational resources to ensure the Nexus Project operates effectively.",
      details:
        "• Strategic planning • Inter-club coordination • Resource management",
    },
  ];

  return (
    <section
      id="clubs"
      className="py-20 bg-gradient-to-b from-nexus-darker to-nexus-dark"
      data-testid="section-clubs"
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
              data-testid="text-clubs-title"
            >
              Forge Your Path
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="text-clubs-description"
            >
              Discover six specialized roles, each offering unique opportunities
              for growth, learning, and collaboration.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {clubs.map((club, index) => (
              <motion.div
                key={club.id}
                className={`group bg-nexus-darker/50 backdrop-blur border border-${club.color}/30 rounded-xl p-8 hover:border-${club.color}/60 hover:bg-nexus-darker/70 transition-all duration-300 cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                data-testid={`card-club-${club.id}`}
              >
                <div
                  className={`w-16 h-16 bg-${club.color}/20 rounded-full flex items-center justify-center mb-6 group-hover:nexus-pulse-glow`}
                >
                  <club.icon className={`text-2xl text-${club.color}`} />
                </div>
                <h3
                  className={`font-mono text-xl font-semibold mb-4 text-${club.color}`}
                  data-testid={`text-${club.id}-title`}
                >
                  {club.title}
                </h3>
                <p
                  className="text-gray-300 mb-4"
                  data-testid={`text-${club.id}-description`}
                >
                  {club.description}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`border-t border-${club.color}/30 pt-4`}>
                    <p
                      className={`text-sm text-${club.color}`}
                      data-testid={`text-${club.id}-details`}
                    >
                      {club.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              className="p-6 bg-nexus-darker/50 backdrop-blur border border-nexus-blue/30 rounded-lg max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-testid="quote-clubs"
            >
              <p className="text-lg italic text-nexus-blue">
                "The beginning of knowledge is the discovery of something we do
                not understand."
              </p>
              <p className="text-sm text-gray-400 mt-2">— Frank Herbert</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchClubsSection;
