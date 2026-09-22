import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-signal">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl italic tracking-tight text-ink sm:text-5xl">
        This page doesn’t exist.
      </h1>
      <p className="mt-4 text-base text-ink-soft">
        The page you’re looking for may have moved, retired, or never existed.
      </p>
      <Link
        href="/demos"
        className="mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink-soft"
      >
        Back to demos
      </Link>
    </main>
  );
}
