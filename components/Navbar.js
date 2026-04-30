'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const links = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/services',  label: 'Services' },
  { href: '/speaking',  label: 'Speaking' },
  { href: '/media',     label: 'Media' },
  { href: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-28">
        <Link href="/" className="flex-shrink-0">
          <Logo className="h-24 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-brand-dark border-b-2 border-brand-dark pb-0.5'
                  : 'text-gray-600 hover:text-brand-dark'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 bg-brand-dark text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-brand-mid transition-colors"
          >
            Work With Me
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${
                pathname === href ? 'text-brand-dark font-semibold' : 'text-gray-600'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-brand-dark text-white text-sm font-semibold px-5 py-2 rounded-full text-center hover:bg-brand-mid transition-colors"
          >
            Work With Me
          </Link>
        </div>
      )}
    </header>
  );
}
