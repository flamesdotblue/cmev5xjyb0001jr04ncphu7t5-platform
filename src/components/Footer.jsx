import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-900/80 bg-neutral-950/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-emerald-500 text-neutral-900 font-bold">{`</>`}</span>
              <span className="font-semibold tracking-tight">Dev Portfolio</span>
            </div>
            <p className="mt-2 text-sm text-neutral-400">
              © {new Date().getFullYear()} Built with React, Vite & Tailwind.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@yourdomain.dev"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-200 hover:bg-black/60"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-200 hover:bg-black/60"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-neutral-200 hover:bg-black/60"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
