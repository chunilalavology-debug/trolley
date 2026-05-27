"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { navLinks, contactInfo } from "@/lib/data";
import { registerGsapPlugins } from "@/lib/gsap";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    registerGsapPlugins();
    gsap.from(".header-item", {
      y: -16,
      opacity: 0,
      duration: 0.7,
      stagger: 0.06,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md">
      <div className="section-container flex items-center justify-between gap-4 py-4 lg:py-5">
        <Link href="#home" className="header-item shrink-0" aria-label="E-Trolley home">
          <Image
            src="/logo.png"
            alt="E-Trolley"
            width={196}
            height={83}
            className="h-12 w-auto sm:h-14 lg:h-[68px]"
            priority
          />
        </Link>

        <nav
          className="header-item hidden items-center gap-6 xl:gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 text-sm transition-colors ${
                "active" in link && link.active
                  ? "font-semibold text-teal"
                  : "text-foreground/80 hover:text-teal"
              }`}
            >
              {link.label}
              {"hasDropdown" in link && link.hasDropdown && (
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
          ))}
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-foreground/80 hover:text-teal"
          >
            English
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </nav>

        <div className="header-item hidden items-center gap-4 md:flex lg:gap-6">
          <div className="hidden items-center gap-2 lg:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
              <svg className="h-4 w-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div className="text-xs leading-tight">
              <span className="text-muted">Call us at:</span>
              <a href={`tel:${contactInfo.phone.replace(/\D/g, "")}`} className="block font-medium text-foreground hover:text-teal">
                {contactInfo.phone}
              </a>
            </div>
          </div>
          <Link href="#contact" className="btn-teal whitespace-nowrap">
            Create a store
          </Link>
        </div>

        <button
          type="button"
          className="header-item flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-white px-5 py-6 lg:hidden" aria-label="Mobile navigation">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base ${"active" in link && link.active ? "font-semibold text-teal" : "text-foreground"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`tel:${contactInfo.phone}`} className="text-sm text-muted">
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <Link href="#contact" className="btn-teal mt-2" onClick={() => setMenuOpen(false)}>
                Create a store
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
