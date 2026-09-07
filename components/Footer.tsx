export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-cream py-16 sm:py-20 text-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-6">
        <div className="flex items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100">
          <img
            src="/landora-mark.svg"
            alt="Landora mark"
            width={22}
            height={22}
            className="h-5 w-auto object-contain"
          />
          <span className="font-display text-base font-medium tracking-tight text-ink">
            Landora
          </span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/60">
          Built in South Africa
        </p>
        <div className="flex items-center justify-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft/60">
          <span>Powered by</span>
          <a
            href="https://launchgremlin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-signal"
          >
            <img
              src="/gremlin-mark-nav-currentcolor.svg"
              alt="LaunchGremlin mark"
              width={13}
              height={13}
              className="h-3 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
            />
            <span>LaunchGremlin</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
