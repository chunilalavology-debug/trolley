"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { registerGsapPlugins } from "@/lib/gsap";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    registerGsapPlugins();
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    gsap.from(".header-animate", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.2,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 py-4 backdrop-blur-xl border-b border-border"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <Link
          href="/"
          className="header-animate display-heading text-xl md:text-2xl text-foreground"
          aria-label="Etrolley home"
        >
          Etrolley
        </Link>

        <nav
          className="header-animate hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-animate hidden lg:block">
          <Button href="#contact" variant="outline">
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          className="header-animate relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="display-heading text-3xl text-foreground transition-colors hover:text-accent"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Button href="#contact" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
}
