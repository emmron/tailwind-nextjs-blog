'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPackageById, packages } from '@/data/packages'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return packages.map((pkg) => ({
    id: pkg.id,
  }))
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pkg = getPackageById(params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!pkg) {
    notFound()
  }

  const allImages = pkg.images

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/packages" className="hover:text-primary-600">Packages</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{pkg.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Enhanced Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              {/* Main Image with Navigation */}
              <div className="relative h-96 group">
                <Image
                  src={allImages[selectedImage]}
                  alt={`${pkg.name} - Image ${selectedImage + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Expand Button */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="View fullscreen"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {allImages.length}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-2 p-4">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-24 rounded overflow-hidden transition-all ${
                      selectedImage === idx
                        ? 'ring-4 ring-primary-500 scale-95'
                        : 'hover:ring-2 hover:ring-primary-300 hover:scale-95'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${pkg.name} - Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                onClick={() => setLightboxOpen(false)}
              >
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                  aria-label="Close lightbox"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full"
                  aria-label="Previous image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="relative w-full h-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                  <Image
                    src={allImages[selectedImage]}
                    alt={`${pkg.name} - Image ${selectedImage + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full"
                  aria-label="Next image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                  {selectedImage + 1} / {allImages.length}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Package</h2>
              <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Features & Inclusions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="text-gray-600 text-sm">Bedrooms</p>
                  <p className="text-2xl font-bold text-gray-900">{pkg.bedrooms}</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="text-gray-600 text-sm">Bathrooms</p>
                  <p className="text-2xl font-bold text-gray-900">{pkg.bathrooms}</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="text-gray-600 text-sm">Car Spaces</p>
                  <p className="text-2xl font-bold text-gray-900">{pkg.garages}</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="text-gray-600 text-sm">Land Size</p>
                  <p className="text-2xl font-bold text-gray-900">{pkg.landSize}m²</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="text-gray-600 text-sm">House Size</p>
                  <p className="text-2xl font-bold text-gray-900">{pkg.houseSize}m²</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="text-gray-600 text-sm">Location</p>
                  <p className="text-xl font-bold text-gray-900">{pkg.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{pkg.name}</h1>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  pkg.status === 'Available'
                    ? 'bg-green-500 text-white'
                    : pkg.status === 'Under Contract'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-red-500 text-white'
                }`}>
                  {pkg.status}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-1">Price</p>
                <p className="text-4xl font-bold text-primary-700">${pkg.price.toLocaleString()}</p>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-1">Type</p>
                <p className="text-lg font-semibold text-gray-900">{pkg.type}</p>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-1">Location</p>
                <p className="text-lg font-semibold text-gray-900">{pkg.location}</p>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-1">Builder</p>
                <p className="text-lg font-semibold text-gray-900">{pkg.builder}</p>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:1300123456"
                  className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="block w-full border-2 border-primary-600 text-primary-600 text-center py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  Enquire Now
                </Link>
                <button className="block w-full border-2 border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Book Inspection
                </button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 text-center">
                  Need help? Our team is ready to assist you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
