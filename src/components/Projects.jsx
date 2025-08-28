import React from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Desk Dashboard',
    desc: 'Retro-futuristic admin panel with real-time charts and 3D interactions.',
    stack: ['React', 'TypeScript', 'Three.js', 'Tailwind'],
    live: '#',
    repo: '#',
    accent: 'from-emerald-500 to-orange-500',
  },
  {
    title: 'Code Canvas',
    desc: 'Collaborative code editor with CRDT syncing and AI pair-programming.',
    stack: ['Next.js', 'tRPC', 'Postgres', 'Prisma'],
    live: '#',
    repo: '#',
    accent: 'from-orange-500 to-rose-500',
  },
  {
    title: 'Photon Commerce',
    desc: 'Headless e-commerce with server components, image CDN, and checkout.',
    stack: ['Remix', 'Stripe', 'Cloudflare'],
    live: '#',
    repo: '#',
    accent: 'from-violet-500 to-emerald-500',
  },
];

export default function Projects() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 max-w-2xl text-neutral-400">
            A selection of work that blends strong engineering with engaging user experiences.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-black/40 px-4 py-2 text-sm text-neutral-200 hover:bg-black/60"
        >
          Start a project
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-lg backdrop-blur-sm"
          >
            <div className={`absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl`} />
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-neutral-400">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-neutral-800 bg-black/40 px-2.5 py-1 text-xs text-neutral-300">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={p.live}
                className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10"
              >
                <ExternalLink size={16} /> Live
              </a>
              <a
                href={p.repo}
                className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </article>
        ))}
      </div>

      <CTA />
    </div>
  );
}

function CTA() {
  return (
    <div id="contact" className="mt-16 overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Have an idea in mind?</h3>
          <p className="mt-1 max-w-xl text-neutral-400">
            Let’s build something memorable together. I can help from product thinking to implementation and launch.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="mailto:hello@yourdomain.dev?subject=Project%20Inquiry%20—%20Portfolio"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-emerald-500 px-5 py-3 font-medium text-neutral-900 shadow hover:opacity-90"
          >
            Email Me
          </a>
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-black/40 px-5 py-3 text-sm text-neutral-200 hover:bg-black/60"
          >
            Book a call
          </a>
        </div>
      </div>
    </div>
  );
}
