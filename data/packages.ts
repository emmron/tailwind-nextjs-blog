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
  builder: 'B1 Homes' | '101 Residential'
}

export const packages: Package[] = [
  // B1 Homes Packages
  {
    id: '1',
    name: 'Monarch - Bushmead',
    type: 'House & Land',
    price: 783500,
    location: 'Bushmead',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 375,
    houseSize: 240,
    description: 'The Monarch design at Bushmead offers contemporary family living with smart design and quality finishes. Part of B1 Homes commitment to affordable first home ownership.',
    features: [
      '4 spacious bedrooms with built-in robes',
      'Modern kitchen with stone benchtops',
      '900mm stainless steel appliances',
      'Open plan living and dining',
      'Master bedroom with ensuite and WIR',
      'Separate laundry',
      'Double garage with internal access',
      'Lifetime structural warranty',
      'HIA fixed price building contract',
      '30c high ceilings'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
    ],
    status: 'Available',
    builder: 'B1 Homes'
  },
  {
    id: '2',
    name: 'Airfield Place - Brabham',
    type: 'House & Land',
    price: 797490,
    location: 'Brabham',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 360,
    houseSize: 245,
    description: 'Premium house and land package in the growing suburb of Brabham. Designed for modern families seeking quality and convenience.',
    features: [
      'Four generous bedrooms',
      'Modern kitchen with walk-in pantry',
      'Master bedroom with ensuite and walk-in robe',
      'Open plan living areas',
      'Separate lounge room',
      'Stone benchtops throughout',
      'Quality appliances included',
      'Double garage',
      'Low maintenance landscaping',
      'Close to schools and amenities'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
    ],
    status: 'Available',
    builder: 'B1 Homes'
  },
  {
    id: '3',
    name: 'Coronation Way - Eglinton',
    type: 'House & Land',
    price: 835000,
    location: 'Eglinton',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 500,
    houseSize: 255,
    description: 'Spacious family home on a generous 500m² block in the coastal suburb of Eglinton. Close to beaches and parks.',
    features: [
      'Large 500m² land parcel',
      'Four bedrooms with robes',
      'Modern kitchen with quality appliances',
      'Master suite with ensuite',
      'Multiple living areas',
      'Alfresco area for entertaining',
      'Ducted air conditioning',
      'Stone benchtops',
      'Coastal lifestyle location',
      'Walk to local shops and schools'
    ],
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800'
    ],
    status: 'Available',
    builder: 'B1 Homes'
  },
  {
    id: '4',
    name: 'Pipon Way - Eglinton',
    type: 'House & Land',
    price: 820000,
    location: 'Eglinton',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 450,
    houseSize: 250,
    description: 'Modern family home in Eglinton with quality inclusions and a great floor plan. Perfect for families seeking coastal living.',
    features: [
      '450m² land size',
      'Four bedrooms plus study nook',
      'Two bathrooms including ensuite',
      'Open plan kitchen and living',
      'Walk-in pantry',
      'Master bedroom with WIR',
      'Outdoor alfresco',
      'Double car garage',
      'Split system air conditioning',
      'Quality fixtures and fittings'
    ],
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
    ],
    status: 'Available',
    builder: 'B1 Homes'
  },
  {
    id: '5',
    name: 'First Home Package - Piara Waters',
    type: 'House & Land',
    price: 614999,
    location: 'Piara Waters',
    bedrooms: 4,
    bathrooms: 2,
    garages: 4,
    landSize: 400,
    houseSize: 220,
    description: 'Affordable first home package perfect for young families and first home buyers. Generous 4-car garage for extra storage.',
    features: [
      'Affordable entry level pricing',
      'Four bedrooms',
      'Two bathrooms',
      'Massive 4-car garage',
      'Open plan living',
      'Modern kitchen',
      'Master with ensuite',
      'First Home Owner Grant eligible',
      'Quality inclusions',
      'Great value for money'
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800'
    ],
    status: 'Available',
    builder: 'B1 Homes'
  },
  {
    id: '6',
    name: 'The Terrarium - Bushmead Display',
    type: 'House & Land',
    price: 795000,
    location: 'Bushmead',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 380,
    houseSize: 235,
    description: 'Display home quality package featuring The Terrarium design. Modern, functional layout with premium upgrades throughout.',
    features: [
      'Display home quality finishes',
      'Four bedrooms with BIRs',
      'Two stylish bathrooms',
      'Gourmet kitchen with stone benchtops',
      'Open plan living and dining',
      'Alfresco entertaining area',
      'Master with luxury ensuite',
      'Premium fixtures and fittings',
      'Landscaped gardens',
      'Move-in ready quality'
    ],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
    ],
    status: 'Available',
    builder: 'B1 Homes'
  },

  // 101 Residential Packages
  {
    id: '7',
    name: 'Anketell Family Package',
    type: 'House & Land',
    price: 575990,
    location: 'Anketell',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 400,
    houseSize: 210,
    description: 'Outstanding value house and land package in Anketell. Perfect for first home buyers with premium inclusions at an affordable price.',
    features: [
      'Lifetime structural warranty',
      'HIA fixed price building contract',
      '900mm stainless steel appliances',
      'Stone benchtops throughout',
      '30c high ceilings',
      'Custom cabinetry',
      'Four bedrooms with robes',
      'Master with ensuite and WIR',
      'Double garage',
      'Close to freeway access'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
    ],
    status: 'Available',
    builder: '101 Residential'
  },
  {
    id: '8',
    name: 'Tulsa Court - Mindarie',
    type: 'House & Land',
    price: 875000,
    location: 'Mindarie',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 547,
    houseSize: 240,
    description: 'Spacious two-storey home with theatre and office on a generous 547m² block. Located in prestigious Mindarie close to the beach.',
    features: [
      'Large 547m² land parcel',
      'Two storey design',
      'Four bedrooms plus study',
      'Home theatre room',
      'Separate office',
      'Two bathrooms plus powder room',
      'Modern kitchen with walk-in pantry',
      'Multiple living zones',
      'Coastal location',
      'Close to Marina and beaches'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
    ],
    status: 'Available',
    builder: '101 Residential'
  },
  {
    id: '9',
    name: 'Catalina Estate - Mindarie',
    type: 'House & Land',
    price: 825000,
    location: 'Mindarie',
    bedrooms: 4,
    bathrooms: 2,
    garages: 2,
    landSize: 450,
    houseSize: 230,
    description: 'Laid-back coastal lifestyle in Catalina Estate. Modern comfort and seaside charm just moments from the beach.',
    features: [
      'Coastal lifestyle location',
      'Spacious design with open-plan living',
      'Generous bedrooms',
      'Sleek modern kitchen',
      'Premium inclusions',
      'High-quality fittings and fixtures',
      'Flexible design options',
      'Competitively priced',
      'Walk to beaches',
      'Close to shops and schools'
    ],
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800'
    ],
    status: 'Available',
    builder: '101 Residential'
  },
  {
    id: '10',
    name: 'Akin Currambine - Two Storey',
    type: 'House & Land',
    price: 895000,
    location: 'Currambine',
    bedrooms: 4,
    bathrooms: 2.5,
    garages: 2,
    landSize: 420,
    houseSize: 260,
    description: 'Boutique two-storey home in the heart of Currambine. Premium design featuring 2.5 bathrooms and modern amenities.',
    features: [
      'Two storey design',
      'Four bedrooms with robes',
      '2.5 bathrooms',
      'Master suite with ensuite and WIR',
      'Powder room on ground floor',
      'Gourmet kitchen',
      'Open plan living areas',
      'Turnkey package available',
      'Boutique community',
      'Premium location'
    ],
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
    ],
    status: 'Available',
    builder: '101 Residential'
  },
  {
    id: '11',
    name: 'Wembley Downs Premium',
    type: 'House & Land',
    price: 1150000,
    location: 'Wembley Downs',
    bedrooms: 5,
    bathrooms: 3,
    garages: 2,
    landSize: 600,
    houseSize: 320,
    description: 'Executive two-storey residence in prestigious Wembley Downs. Luxury finishes and spacious design for large families.',
    features: [
      'Five spacious bedrooms',
      'Three luxurious bathrooms',
      'Multiple living zones',
      'Home theatre or fifth bedroom',
      'Study nook',
      'Premium kitchen with butler\'s pantry',
      'High ceilings throughout',
      'Designer fixtures and fittings',
      'Landscaped gardens',
      'Prestigious location'
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800'
    ],
    status: 'Under Contract',
    builder: '101 Residential'
  },
  {
    id: '12',
    name: 'Single Storey - Value Package',
    type: 'House & Land',
    price: 649990,
    location: 'Ellenbrook',
    bedrooms: 3,
    bathrooms: 2,
    garages: 2,
    landSize: 375,
    houseSize: 195,
    description: 'Affordable single storey home perfect for first home buyers. Smart design maximizes space on a compact block.',
    features: [
      'Single storey living',
      'Three bedrooms',
      'Two bathrooms',
      'Open plan layout',
      'Modern kitchen',
      'Master with ensuite',
      'Double garage',
      'Low maintenance yard',
      'Great first home',
      'Affordable pricing'
    ],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
    ],
    status: 'Available',
    builder: '101 Residential'
  }
]

export function getPackageById(id: string): Package | undefined {
  return packages.find(pkg => pkg.id === id)
}

export function getAvailablePackages(): Package[] {
  return packages.filter(pkg => pkg.status === 'Available')
}
