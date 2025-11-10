import PackageCard from '@/components/PackageCard'
import { packages } from '@/data/packages'

export default function PackagesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">House & Land Packages</h1>
          <p className="text-xl text-primary-100">
            Browse our complete collection of quality homes across Perth from B1 Homes and 101 Residential
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing {packages.length} package{packages.length !== 1 ? 's' : ''}
            </p>
            <div className="flex gap-4">
              <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option>All Types</option>
                <option>House & Land</option>
                <option>House Only</option>
                <option>Land Only</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Bedrooms</option>
                <option>Sort by: Land Size</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
