export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-zinc-950 py-8 mt-20 block text-gray-400">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-sm text-center md:text-left text-white">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Likhith Sai Kondreddi</span>. All rights reserved.
        </div>

        {/* Center: Live Availability Status Badge */}
        <div className="flex items-center gap-2.5 bg-blue-500/5 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs text-blue-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new opportunities
        </div>

        {/* Right Side: Personalized Creative Tagline */}
        <div className="text-xs tracking-wide text-zinc-500 text-center md:text-right italic">
          Designing experiences, <span className="text-zinc-400 not-italic">one pixel at a time.</span>
        </div>

      </div>
    </footer>
  );
};
