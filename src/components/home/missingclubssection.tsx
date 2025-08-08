import { motion } from "framer-motion";
const MissingClubsSection = () => {
  return (
    <section
      id="missing"
      className="py-20 bg-gradient-to-b from-nexus-dark to-nexus-darker"
      data-testid="section-missing-clubs"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-mono text-4xl md:text-5xl font-bold mb-8 text-white"
                data-testid="text-missing-title"
              >
                More Than a Club
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p data-testid="text-missing-paragraph-1">
                  <b>
                    Right now, innovation at our school feels like working alone
                    on an island.
                  </b>
                  <br />
                  Everyone’s got ideas, but there’s no shared space to bring
                  them together. No clubs. No network. Just scattered efforts
                  that fizzle out before they can grow.
                </p>
                <p data-testid="text-missing-paragraph-2">
                  We’re here to change that. Our platform connects students with
                  different skills, passions, and dreams, creating a place where
                  projects can take off and people can actually build together.
                </p>
                <p data-testid="text-missing-paragraph-3">
                  When creativity meets collaboration, isolation turns into
                  innovation.
                </p>
              </div>
              <div
                className="mt-8 p-6 bg-nexus-darker/50 backdrop-blur border border-nexus-purple/30 rounded-lg"
                data-testid="quote-missing"
              >
                <p className="text-lg italic text-nexus-purple">
                  "The mind is not a vessel to be filled, but a fire to be
                  kindled."
                </p>
                <p className="text-sm text-gray-400 mt-2">— Plutarch</p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/broken_circuit_board.png"
                alt="Broken circuit board representing disconnected systems"
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                data-testid="img-broken-circuit"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissingClubsSection;
