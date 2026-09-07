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
            className="h-5 w-auto object-contain text-ink"
          />
          <span className="font-display text-base font-medium tracking-tight text-ink">
            Landora
          </span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/60">
          Built in South Africa
        </p>
      </div>
    </footer>
  );
}
