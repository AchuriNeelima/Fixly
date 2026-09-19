export default function Footer() {
  return (
    <footer className="bg-fixly-dark text-fixly-text-on-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8">
          {/* Top row left: Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-fixly-accent mr-2"></span>
              <span className="text-xl font-bold text-white">Fixly</span>
            </div>
            <p className="text-sm text-fixly-text-on-dark-secondary max-w-sm">
              Don't replace it. Know what it needs.
            </p>
          </div>

          {/* Top row right: Links */}
          <div className="grid grid-cols-2 gap-8 md:justify-end">
            {/* Column 1: Product */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white mb-1">Product</h4>
              <a href="#how-it-works" className="text-sm text-fixly-text-on-dark-secondary hover:text-white transition-colors">How it works</a>
              <a href="#demo" className="text-sm text-fixly-text-on-dark-secondary hover:text-white transition-colors">Demo</a>
              <span className="text-sm text-fixly-text-on-dark-secondary opacity-60">Pricing (Coming soon)</span>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white mb-1">Company</h4>
              <a href="#about" className="text-sm text-fixly-text-on-dark-secondary hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-sm text-fixly-text-on-dark-secondary hover:text-white transition-colors">Contact</a>
              <span className="text-sm text-fixly-text-on-dark-secondary opacity-60">Blog (Coming soon)</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-fixly-dark-border pt-8 mt-12 gap-4 text-sm text-fixly-text-on-dark-secondary">
          <p>© 2026 Fixly. A concept by Protofine.</p>
          <p>Built with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
