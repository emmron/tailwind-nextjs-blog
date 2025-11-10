export interface Package {
  id: string
  name: string
  type: 'House & Land' | 'House Only' | 'Land Only'
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  garages: number
  landSize: number // in sqm
  houseSize: number // in sqm
  description: string
  features: string[]
  image: string
  images: string[]
  status: 'Available' | 'Sold' | 'Under Contract'
}

export const packages: Package[] = [
  {
    id: '1',
    name: 'The Hamptons',
    type: 'House & Land',
    price: 785000,
    location: 'Clyde North',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 450,
    houseSize: 285,
    description: 'A stunning contemporary home featuring spacious living areas, modern kitchen with walk-in pantry, and luxurious master suite with ensuite and walk-in robe.',
    features: [
      'Open plan living and dining',
      'Gourmet kitchen with stone benchtops',
      'Master bedroom with ensuite and WIR',
      'Ducted heating and cooling',
      'Double glazed windows',
      'Landscaped front yard',
      'Alfresco entertainment area',
      '900mm stainless steel appliances'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
    ],
    status: 'Available'
  },
  {
    id: '2',
    name: 'The Newport',
    type: 'House & Land',
    price: 695000,
    location: 'Cranbourne East',
    bedrooms: 3,
    bathrooms: 2,
    garages: 2,
    landSize: 400,
    houseSize: 245,
    description: 'Modern family home with smart design and quality finishes throughout. Perfect for first home buyers or investors.',
    features: [
      'Three generous bedrooms',
      'Modern kitchen with breakfast bar',
      'Separate living and dining zones',
      'Master with ensuite',
      'Ducted heating',
      'Split system cooling',
      'Low maintenance yard',
      'Remote garage with internal access'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
    ],
    status: 'Available'
  },
  {
    id: '3',
    name: 'The Riviera',
    type: 'House & Land',
    price: 925000,
    location: 'Officer',
    bedrooms: 5,
    bathrooms: 3,
    garages: 2,
    landSize: 600,
    houseSize: 380,
    description: 'Luxury family living with resort-style amenities. This executive home features multiple living zones, premium finishes, and a stunning outdoor entertaining area.',
    features: [
      'Five spacious bedrooms',
      'Three modern bathrooms',
      'Multiple living zones',
      'Gourmet kitchen with butler\'s pantry',
      'Home theatre room',
      'Study nook',
      'Outdoor alfresco with built-in BBQ',
      'Landscaped gardens',
      'Premium fixtures and fittings',
      'Smart home technology ready'
    ],
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800'
    ],
    status: 'Available'
  },
  {
    id: '4',
    name: 'The Madison',
    type: 'House & Land',
    price: 625000,
    location: 'Pakenham',
    bedrooms: 3,
    bathrooms: 2,
    garages: 1,
    landSize: 350,
    houseSize: 215,
    description: 'Affordable first home package featuring quality inclusions and smart design. Perfect for young families.',
    features: [
      'Open plan living',
      'Modern kitchen',
      'Master with walk-in robe',
      'Central bathroom with separate toilet',
      'Single car garage',
      'Ducted heating',
      'Split system air conditioning',
      'Fenced yard'
    ],
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
    ],
    status: 'Under Contract'
  },
  {
    id: '5',
    name: 'The Bayview',
    type: 'House & Land',
    price: 850000,
    location: 'Clyde',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 500,
    houseSize: 310,
    description: 'Contemporary coastal-inspired design with high ceilings and abundant natural light. Features premium upgrades throughout.',
    features: [
      'High ceilings throughout',
      'Designer kitchen with Caesarstone benchtops',
      'Premium appliances',
      'Master suite with luxury ensuite',
      'Three additional bedrooms with BIRs',
      'Separate lounge room',
      'Alfresco with café blinds',
      'Landscaped gardens with automated irrigation',
      'Video intercom',
      'Double glazed windows'
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800'
    ],
    status: 'Available'
  },
  {
    id: '6',
    name: 'The Aspen',
    type: 'House & Land',
    price: 745000,
    location: 'Cranbourne West',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 420,
    houseSize: 265,
    description: 'Family-friendly home with flexible floor plan and quality finishes. Located in a sought-after estate with great amenities.',
    features: [
      'Spacious master bedroom',
      'Walk-in pantry',
      'Stone benchtops',
      'Quality carpet and tiles',
      'Separate laundry',
      'Ducted heating and cooling',
      'Outdoor entertaining area',
      'Low maintenance landscaping'
    ],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
    ],
    status: 'Available'
  }
]

export function getPackageById(id: string): Package | undefined {
  return packages.find(pkg => pkg.id === id)
}

export function getAvailablePackages(): Package[] {
  return packages.filter(pkg => pkg.status === 'Available')
}
