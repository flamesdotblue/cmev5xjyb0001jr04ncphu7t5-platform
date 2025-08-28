import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-emerald-500 text-neutral-900 font-bold">{`</>`}</span>
            <span className="font-semibold tracking-tight">Dev Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-500 to-emerald-500 px-4 py-2 text-sm font-medium text-neutral-900 shadow hover:opacity-90"
            >
              Hire Me
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 bg-gradient-to-r from-orange-500 to-emerald-500 text-neutral-900 font-medium text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
