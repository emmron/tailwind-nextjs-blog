'use client'

import { useState } from 'react'
import { packages } from '@/data/packages'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    builder: '',
    message: '',
    inspectionDate: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form submission:', formData)
    setSubmitted(true)
    setLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        builder: '',
        message: '',
        inspectionDate: '',
      })
      setSubmitted(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const availablePackages = packages.filter(pkg => pkg.status === 'Available').sort((a, b) =>
    a.builder.localeCompare(b.builder) || a.name.localeCompare(b.name)
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100">
            Get in touch with our team - we're here to help you find your dream home
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Thank you!</h3>
                  <p className="text-green-700">
                    Your enquiry has been received. A member of our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="04XX XXX XXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="builder" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Builder
                    </label>
                    <select
                      id="builder"
                      name="builder"
                      value={formData.builder}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Any builder</option>
                      <option value="B1 Homes">B1 Homes</option>
                      <option value="101 Residential">101 Residential</option>
                      <option value="Redink Homes">Redink Homes</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Package
                    </label>
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a package (optional)</option>
                      {availablePackages.map(pkg => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} - {pkg.location} ({pkg.builder}) - ${pkg.price.toLocaleString()}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inspectionDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Inspection Date
                    </label>
                    <input
                      type="date"
                      id="inspectionDate"
                      name="inspectionDate"
                      value={formData.inspectionDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, budget, timeline, or any questions you have..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by Scott Park Group regarding your enquiry.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:1300123456" className="hover:text-primary-600">1300 123 456</a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri: 9am-5pm, Sat-Sun: 10am-4pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@scottparkgroup.com.au" className="hover:text-primary-600">
                          info@scottparkgroup.com.au
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Head Office</h3>
                      <p className="text-gray-600">23 Frobisher Street</p>
                      <p className="text-gray-600">Osborne Park, WA 6017</p>
                      <p className="text-sm text-gray-500 mt-1">Perth, Western Australia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Our Builders</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-primary-600">B1 Homes:</span>
                      <span className="text-gray-600 ml-2">(08) 9261 3131</span>
                    </div>
                    <div>
                      <span className="font-medium text-primary-600">101 Residential:</span>
                      <span className="text-gray-600 ml-2">(08) 9208 9101</span>
                    </div>
                    <div>
                      <span className="font-medium text-primary-600">Redink Homes:</span>
                      <span className="text-gray-600 ml-2">(08) 9208 1111</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-700 text-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold mb-4">Display Homes Open</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>2:00pm - 5:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>12:00pm - 5:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Holidays</span>
                    <span>12:00pm - 5:00pm</span>
                  </div>
                </div>
                <p className="text-sm text-primary-100 mt-4">
                  Visit our display homes in Darch, Treeby, Bushmead, Mindarie, and more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
