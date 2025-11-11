'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/packages', label: 'Packages', icon: '🏘️' },
    { href: '/about', label: 'About', icon: '✨' },
    { href: '/contact', label: 'Contact', icon: '💬' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 shadow-md'
      }`}
    >
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all"></div>
              <div className={`relative w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-transform group-hover:scale-110 ${
                scrolled ? 'bg-primary-600' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                🏡
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tight transition-colors ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}>
                Scott Park Group
              </span>
              <span className={`text-xs font-medium tracking-wider uppercase ${
                scrolled ? 'text-primary-500' : 'text-white/80'
              }`}>
                Premium Home Builders
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-200 group ${
                  pathname === link.href
                    ? scrolled
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-white bg-white/20'
                    : scrolled
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </span>
                {pathname === link.href && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-current rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:1300123456"
              className={`group relative px-6 py-3 rounded-xl font-bold transition-all duration-300 overflow-hidden ${
                scrolled
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl'
                  : 'bg-white text-primary-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>1300 123 456</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-gradient-to-br from-primary-700 to-primary-900 shadow-2xl transform transition-transform duration-300 ease-out z-50 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl">
                🏡
              </div>
              <span className="text-white font-bold text-lg">Menu</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all group ${
                  pathname === link.href
                    ? 'bg-white text-primary-700 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-2xl transform group-hover:scale-125 transition-transform">
                  {link.icon}
                </span>
                <span className="text-lg font-semibold">{link.label}</span>
                {pathname === link.href && (
                  <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-white/10 bg-black/10 backdrop-blur-sm">
            <a
              href="tel:1300123456"
              className="block w-full text-center bg-white text-primary-700 px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call 1300 123 456</span>
              </span>
            </a>
            <p className="text-center text-white/70 text-sm mt-3">
              Mon-Fri 9am-5pm • Weekends 10am-4pm
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
