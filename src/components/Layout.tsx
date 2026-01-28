import React, { ReactNode, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const navSections = [
  {
    title: 'Home',
    links: [{ label: 'Home', href: '#' }],
  },
  {
    title: 'Craft',
    links: [
      { label: 'Experience', href: '#experience' },
      { label: 'Writing', href: '#blog' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

const socialLinks = [
  { label: 'X', href: 'https://twitter.com/rheagalfire' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aarish-alam' },
  { label: 'GitHub', href: 'https://github.com/aarishalam' },
];

export function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-60 flex-col justify-between border-r border-[var(--border)] bg-[var(--surface)] px-6 py-8 z-40">
        {/* Logo */}
        <div>
          <a href="#" className="text-lg font-semibold tracking-tight no-underline">
            Aarish Alam
          </a>

          {/* Navigation */}
          <nav className="mt-12 space-y-8">
            {navSections.map((section) => (
              <div key={section.title}>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  {section.title}
                </p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] no-underline transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="space-y-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] no-underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-4 h-4" />
                <span>Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4" />
                <span>Light</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 border-b border-[var(--border)] bg-[var(--surface)] px-4 flex items-center justify-between z-40">
        <a href="#" className="text-base font-semibold tracking-tight no-underline">
          Aarish Alam
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-14 bg-[var(--surface)] z-30 overflow-y-auto">
          <nav className="px-6 py-8 space-y-8">
            {navSections.map((section) => (
              <div key={section.title}>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  {section.title}
                </p>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] no-underline transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Mobile Social Links */}
            <div className="pt-8 border-t border-[var(--border)]">
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] no-underline transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-60 pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
