import React, { useEffect } from 'react';
import { Github, Mail, ArrowRight } from 'lucide-react';

const SPLINE_URL = 'https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode';

export default function Hero() {
  useEffect(() => {
    const scriptId = 'spline-viewer-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.65/build/spline-viewer.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer
          style={{ width: '100%', height: '100%', display: 'block' }}
          loading-anim
          events-target="global"
          url={SPLINE_URL}
        />
        {/* Subtle overlays for readability, without hiding the model */}
        <div className="pointer-events-none absolute inset-0 bg-black/30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_55%,#050505_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-800 bg-black/40 px-3 py-1 text-xs text-neutral-300 shadow">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance work
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Building delightful apps with clean code and immersive UIs
        </h1>

        <p className="max-w-2xl text-neutral-300">
          I’m a full‑stack developer who crafts performant web experiences. From scalable APIs to 3D, motion, and elegant design systems.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-emerald-500 px-5 py-3 font-medium text-neutral-900 shadow hover:opacity-90"
          >
            View Projects
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-black/40 px-5 py-3 text-sm text-neutral-200 hover:bg-black/60"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-black/40 px-5 py-3 text-sm text-neutral-200 hover:bg-black/60"
          >
            <Mail size={18} />
            Contact
          </a>
        </div>

        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat title="Years Experience" value="5+" />
          <Stat title="Projects Delivered" value="30+" />
          <Stat title="Tech Stack" value="TS · React · Node · ThreeJS" />
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-xl border border-neutral-800/80 bg-black/30 p-4 backdrop-blur">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-sm text-neutral-400">{title}</div>
    </div>
  );
}
