'use client'

import { useState, useMemo } from 'react'
import PackageCard from '@/components/PackageCard'
import { packages, Package } from '@/data/packages'

type PackageType = 'All Types' | 'House & Land' | 'House Only' | 'Land Only'
type BuilderType = 'All Builders' | 'B1 Homes' | '101 Residential' | 'Redink Homes'
type StatusType = 'All Status' | 'Available' | 'Under Contract' | 'Sold'
type SortOption = 'price-low' | 'price-high' | 'bedrooms' | 'land-size'

export default function PackagesPage() {
  const [filterType, setFilterType] = useState<PackageType>('All Types')
  const [filterBuilder, setFilterBuilder] = useState<BuilderType>('All Builders')
  const [filterStatus, setFilterStatus] = useState<StatusType>('All Status')
  const [sortBy, setSortBy] = useState<SortOption>('price-low')

  const filteredAndSortedPackages = useMemo(() => {
    // Filter packages
    let filtered = packages.filter(pkg => {
      const typeMatch = filterType === 'All Types' || pkg.type === filterType
      const builderMatch = filterBuilder === 'All Builders' || pkg.builder === filterBuilder
      const statusMatch = filterStatus === 'All Status' || pkg.status === filterStatus
      return typeMatch && builderMatch && statusMatch
    })

    // Sort packages
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'bedrooms':
          return b.bedrooms - a.bedrooms
        case 'land-size':
          return b.landSize - a.landSize
        default:
          return 0
      }
    })

    return sorted
  }, [filterType, filterBuilder, filterStatus, sortBy])

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">House & Land Packages</h1>
          <p className="text-xl text-primary-100">
            Browse our complete collection of quality homes across Perth from B1 Homes, 101 Residential, and Redink Homes
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Package Type
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as PackageType)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option>All Types</option>
                  <option>House & Land</option>
                  <option>House Only</option>
                  <option>Land Only</option>
                </select>
              </div>

              {/* Builder Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Builder
                </label>
                <select
                  value={filterBuilder}
                  onChange={(e) => setFilterBuilder(e.target.value as BuilderType)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option>All Builders</option>
                  <option>B1 Homes</option>
                  <option>101 Residential</option>
                  <option>Redink Homes</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as StatusType)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option>All Status</option>
                  <option>Available</option>
                  <option>Under Contract</option>
                  <option>Sold</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="bedrooms">Bedrooms (Most)</option>
                  <option value="land-size">Land Size (Largest)</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(filterType !== 'All Types' || filterBuilder !== 'All Builders' || filterStatus !== 'All Status') && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {filterType !== 'All Types' && (
                    <button
                      onClick={() => setFilterType('All Types')}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-primary-200 transition-colors"
                    >
                      {filterType}
                      <span className="ml-1">×</span>
                    </button>
                  )}
                  {filterBuilder !== 'All Builders' && (
                    <button
                      onClick={() => setFilterBuilder('All Builders')}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-primary-200 transition-colors"
                    >
                      {filterBuilder}
                      <span className="ml-1">×</span>
                    </button>
                  )}
                  {filterStatus !== 'All Status' && (
                    <button
                      onClick={() => setFilterStatus('All Status')}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-primary-200 transition-colors"
                    >
                      {filterStatus}
                      <span className="ml-1">×</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setFilterType('All Types')
                      setFilterBuilder('All Builders')
                      setFilterStatus('All Status')
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredAndSortedPackages.length} of {packages.length} package{filteredAndSortedPackages.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Package Grid */}
          {filteredAndSortedPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPackages.map(pkg => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-500 text-lg mb-4">No packages match your filters</p>
              <button
                onClick={() => {
                  setFilterType('All Types')
                  setFilterBuilder('All Builders')
                  setFilterStatus('All Status')
                }}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
