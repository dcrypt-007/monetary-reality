"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "The Thesis", href: "/thesis" },
  { label: "Money vs Goods", href: "/money-vs-goods" },
  { label: "Monetary Plumbing", href: "/monetary-plumbing" },
  { label: "Asset Inflation", href: "/asset-inflation" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Deep Dives", href: "/deep-dives" },
  { label: "Sources", href: "/sources" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Site Name */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-semibold tracking-tight text-stone-900">
              Monetary Reality
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-md hover:bg-stone-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-stone-100 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
