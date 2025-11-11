'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PackageCard from '@/components/PackageCard'
import { packages } from '@/data/packages'

export default function Home() {
  const featuredPackages = packages.filter(pkg => pkg.status === 'Available').slice(0, 3)
  const [stats, setStats] = useState({
    homes: 0,
    families: 0,
    locations: 0,
    experience: 0,
  })

  // Animate stats on mount
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setStats({
        homes: Math.floor(2500 * progress),
        families: Math.floor(3200 * progress),
        locations: Math.floor(15 * progress),
        experience: Math.floor(20 * progress),
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-800/50 to-primary-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">29 Available Packages • 3 Premium Builders</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
              Find Your Dream Home
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                In Perth's Best Locations
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Discover exceptional house and land packages across Perth from B1 Homes, 101 Residential, and Redink Homes. Quality homes from $377,990.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link
                href="/packages"
                className="group relative bg-white text-primary-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Browse All Packages
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary-700 transition-all shadow-xl hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get In Touch
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary-700 mb-2">
                {stats.homes.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-semibold">Homes Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary-700 mb-2">
                {stats.families.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-semibold">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary-700 mb-2">
                {stats.locations}+
              </div>
              <div className="text-gray-600 font-semibold">Perth Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary-700 mb-2">
                {stats.experience}+
              </div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Builders */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              TRUSTED BUILDERS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Premium Builders</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Three award-winning brands, one commitment to exceptional quality and service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* B1 Homes */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-200 hover:border-blue-400">
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                First Home Experts
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-xl p-6 mb-6 shadow-lg group-hover:shadow-xl transition-shadow w-full h-32 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <div className="relative w-full h-full">
                    <Image
                      src="/logos/b1-homes-logo.svg"
                      alt="B1 Homes Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 text-gray-900">B1 Homes</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Affordable first home ownership with quality inclusions and smart designs
                </p>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-3 mb-4 w-full">
                  <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Price Range</div>
                  <div className="text-lg font-black text-blue-700">$614,999 - $845,000</div>
                </div>
                <Link
                  href="/packages"
                  className="group/link text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-2"
                >
                  View Packages
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 101 Residential */}
            <div className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200 hover:border-slate-400">
              <div className="absolute top-4 right-4 bg-slate-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Two Storey Masters
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-xl p-6 mb-6 shadow-lg group-hover:shadow-xl transition-shadow w-full h-32 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <div className="relative w-full h-full">
                    <Image
                      src="/logos/101-residential-logo.svg"
                      alt="101 Residential Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 text-gray-900">101 Residential</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Perth's leading two storey home builder, maximizing space on compact blocks
                </p>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-3 mb-4 w-full">
                  <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Price Range</div>
                  <div className="text-lg font-black text-slate-700">$575,990 - $1,150,000</div>
                </div>
                <Link
                  href="/packages"
                  className="group/link text-slate-600 font-bold hover:text-slate-800 transition-colors flex items-center gap-2"
                >
                  View Packages
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Redink Homes */}
            <div className="group relative bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-200 hover:border-red-400">
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Award Winners
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-xl p-6 mb-6 shadow-lg group-hover:shadow-xl transition-shadow w-full h-32 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <div className="relative w-full h-full">
                    <Image
                      src="/logos/redink-homes-logo.svg"
                      alt="Redink Homes Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 text-gray-900">Redink Homes</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Award-winning custom designs with architectural excellence since 2006
                </p>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-3 mb-4 w-full">
                  <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Price Range</div>
                  <div className="text-lg font-black text-red-700">$377,990 - $975,000</div>
                </div>
                <Link
                  href="/packages"
                  className="group/link text-red-600 font-bold hover:text-red-800 transition-colors flex items-center gap-2"
                >
                  View Packages
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              AVAILABLE NOW
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Featured Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our handpicked selection of premium house and land packages ready for you to move in</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPackages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/packages"
              className="group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              View All 29 Packages
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              WHY US
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose Scott Park Group?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're committed to making your home ownership dreams a reality with exceptional service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3 text-center">Quality Assured</h3>
              <p className="text-gray-600 text-center leading-relaxed">All our homes are built to the highest standards with premium fixtures and fittings. We never compromise on quality.</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-green-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3 text-center">Best Value</h3>
              <p className="text-gray-600 text-center leading-relaxed">Get the best value for money with our transparent pricing and no hidden costs. Quality homes at competitive prices.</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-purple-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3 text-center">Expert Support</h3>
              <p className="text-gray-600 text-center leading-relaxed">Our experienced team guides you through every step of your home buying journey with personalized service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-primary-100 max-w-2xl mx-auto">
            Contact us today to discuss your dream home and explore our available packages. Our team is ready to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300123456"
              className="group inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 1300 123 456
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary-700 transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Send a Message
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <p className="text-primary-200 text-sm mt-8">
            Mon-Fri: 9am-5pm • Sat-Sun: 10am-4pm • info@scottparkgroup.com.au
          </p>
        </div>
      </section>
    </div>
  )
}
