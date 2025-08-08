const Footer = () => {
  return (
    <footer
      className="bg-nexus-darker border-t border-nexus-blue/20 py-12"
      data-testid="footer"
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div
            className="font-mono font-bold text-2xl text-nexus-blue nexus-glow mb-4"
            data-testid="text-footer-title"
          >
            The Nexus Project
          </div>
          <p className="text-gray-400 mb-6" data-testid="text-footer-tagline">
            Where ambition meets action.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-gray-400 hover:text-nexus-blue transition-colors duration-300"
              data-testid="link-twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-nexus-blue transition-colors duration-300"
              data-testid="link-instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-nexus-blue transition-colors duration-300"
              data-testid="link-discord"
            >
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-nexus-blue transition-colors duration-300"
              data-testid="link-github"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
          <p
            className="text-gray-500 text-sm"
            data-testid="text-footer-copyright"
          >
            &copy; 2024 The Nexus Project. Built by students, for students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
