export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-anime-gradient font-display text-sm font-black">
              N
            </div>
            <span className="font-display text-lg font-bold tracking-wider">
              Nexus<span className="text-nexus-cyan">OS</span>
            </span>
          </div>

          <p className="font-body text-sm text-white/40">
            © {new Date().getFullYear()} NexusOS. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#features"
              className="font-body text-sm text-white/40 transition-colors hover:text-white"
            >
              Features
            </a>
            <a
              href="#founding"
              className="font-body text-sm text-white/40 transition-colors hover:text-white"
            >
              Founding Offer
            </a>
            <a
              href="#faq"
              className="font-body text-sm text-white/40 transition-colors hover:text-white"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
