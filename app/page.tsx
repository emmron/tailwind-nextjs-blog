import Link from 'next/link'
import Image from 'next/image'
import PackageCard from '@/components/PackageCard'
import { packages } from '@/data/packages'

export default function Home() {
  const featuredPackages = packages.filter(pkg => pkg.status === 'Available').slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Discover exceptional house and land packages across Perth from B1 Homes, 101 Residential, and Redink Homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/packages"
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Packages
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Builders */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Builders</h2>
            <p className="text-xl text-gray-600">Three trusted brands, one commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* B1 Homes */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-lg p-6 mb-6 shadow-md w-full h-32 flex items-center justify-center">
                  {/* B1 Homes Logo - Add b1-homes-logo.png to /public/logos/ */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/logos/b1-homes-logo.svg"
                      alt="B1 Homes Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">B1 Homes</h3>
                <p className="text-gray-700 mb-4">
                  Affordable first home ownership with quality inclusions and smart designs
                </p>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Price Range:</strong> $614,999 - $845,000
                </div>
                <Link
                  href="/packages"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  View B1 Homes Packages →
                </Link>
              </div>
            </div>

            {/* 101 Residential */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-lg p-6 mb-6 shadow-md w-full h-32 flex items-center justify-center">
                  {/* 101 Residential Logo - Add 101-residential-logo.png to /public/logos/ */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/logos/101-residential-logo.svg"
                      alt="101 Residential Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">101 Residential</h3>
                <p className="text-gray-700 mb-4">
                  Perth's leading two storey home builder, maximizing space on compact blocks
                </p>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Price Range:</strong> $575,990 - $1,150,000
                </div>
                <Link
                  href="/packages"
                  className="text-slate-600 font-semibold hover:text-slate-800 transition-colors"
                >
                  View 101 Residential Packages →
                </Link>
              </div>
            </div>

            {/* Redink Homes */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-lg p-6 mb-6 shadow-md w-full h-32 flex items-center justify-center">
                  {/* Redink Homes Logo - Add redink-homes-logo.png to /public/logos/ */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/logos/redink-homes-logo.svg"
                      alt="Redink Homes Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Redink Homes</h3>
                <p className="text-gray-700 mb-4">
                  Award-winning custom designs with architectural excellence since 2006
                </p>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Price Range:</strong> $377,990 - $975,000
                </div>
                <Link
                  href="/packages"
                  className="text-red-600 font-semibold hover:text-red-800 transition-colors"
                >
                  View Redink Homes Packages →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Packages</h2>
            <p className="text-xl text-gray-600">Explore our handpicked selection of premium house and land packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Scott Park Group?</h2>
            <p className="text-xl text-gray-600">We're committed to making your home ownership dreams a reality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">All our homes are built to the highest standards with premium fixtures and fittings</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Get the best value for money with our transparent pricing and no hidden costs</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">Our experienced team guides you through every step of your home buying journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today to discuss your dream home and explore our available packages
          </p>
          <a
            href="tel:1300123456"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call 1300 123 456
          </a>
        </div>
      </section>
    </div>
  )
}
