export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Scott Park Group</h1>
          <p className="text-xl text-primary-100">
            Building communities and creating homes for over 20 years
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Scott Park Group has been a trusted name in property development across Perth for over two decades. Through our three premier building brands - B1 Homes, 101 Residential, and Redink Homes - we specialize in creating high-quality house and land packages that combine exceptional design, premium finishes, and outstanding value.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              B1 Homes focuses on affordable first home ownership with smart designs and quality inclusions. 101 Residential specializes in impressive single and double storey homes that maximize every square metre. Redink Homes brings award-winning architecturally driven designs, having won Home Builder of the Year in 2018 and over 21 service awards for their custom home expertise.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Together, our three brands offer an unparalleled range of options - from affordable turnkey packages to custom architectural masterpieces. Our commitment to excellence has helped thousands of families achieve their dream of home ownership across Perth's most sought-after locations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We understand that buying a home is one of life's biggest decisions, and we're dedicated to making the process as smooth and rewarding as possible.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver exceptional house and land packages that exceed our customers' expectations while building vibrant, sustainable communities where families can thrive for generations to come.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">Quality</h3>
                <p className="text-gray-700">We never compromise on quality, ensuring every home is built to the highest standards.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">Integrity</h3>
                <p className="text-gray-700">We operate with transparency and honesty in all our dealings with customers and partners.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">Innovation</h3>
                <p className="text-gray-700">We continuously seek new ways to improve our homes and enhance the customer experience.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">Customer Focus</h3>
                <p className="text-gray-700">Our customers are at the heart of everything we do, and their satisfaction is our priority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
