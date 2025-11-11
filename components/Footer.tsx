export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Scott Park Group</h3>
            <p className="text-gray-400">
              Building dreams, creating communities. Your trusted partner in house and land packages.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/packages" className="hover:text-white transition-colors">Packages</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mindarie</li>
              <li>Eglinton</li>
              <li>Brabham</li>
              <li>Bushmead</li>
              <li>Byford</li>
              <li>Baldivis</li>
              <li>Aveley</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: 1300 123 456</li>
              <li>Email: info@scottparkgroup.com.au</li>
              <li>Hours: Mon-Fri 9am-5pm</li>
              <li>Sat-Sun 10am-4pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Scott Park Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
