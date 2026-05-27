"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { navLinks, contactInfo } from "@/lib/data";
import { revealOnMount } from "@/lib/animate";
import { assetPath } from "@/lib/asset";
import { registerGsapPlugins } from "@/lib/gsap";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      revealOnMount(".header-item", {
        y: -16,
        duration: 0.7,
        delay: 0.1,
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 h-[84px] border-b border-border/60 bg-white/95 backdrop-blur-md">
      <div className="section-container flex h-full items-center justify-between gap-6">
        <Link href="#home" className="header-item flex h-full shrink-0 items-center" aria-label="E-Trolley home">
          <Image
            src={assetPath("/logo.png")}
            alt="E-Trolley"
            width={196}
            height={83}
            className="h-[52px] w-auto"
            priority
          />
        </Link>

        <nav
          className="header-item hidden h-full items-center gap-7 xl:gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex h-full items-center gap-1 text-[14px] leading-none transition-colors ${
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
            className="flex h-full items-center gap-1 text-[14px] leading-none text-foreground/80 hover:text-teal"
          >
            English
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </nav>

        <div className="header-item hidden h-full items-center gap-4 md:flex lg:gap-5">
          <div className="hidden h-full items-center gap-2.5 lg:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f5c99a] bg-[#f5c99a]">
              <svg className="h-4 w-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div className="leading-tight">
              <span className="text-[9px] text-muted">Call us at:</span>
              <a href={`tel:${contactInfo.phone.replace(/\D/g, "")}`} className="block text-[11px] font-medium text-foreground hover:text-teal">
                {contactInfo.phone}
              </a>
            </div>
          </div>
          <Link href="#contact" className="btn-teal h-10 min-w-[158px] whitespace-nowrap px-7">
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
