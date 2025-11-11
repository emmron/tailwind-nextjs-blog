# Scott Park Group - House and Land Packages Website

A modern, responsive website built with Next.js 14 and Tailwind CSS showcasing real house and land packages from B1 Homes and 101 Residential, both part of the Scott Park Group.

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive Layout**: Fully responsive across all devices
- **Package Showcase**: Browse all available house and land packages
- **Detailed Package Pages**: Individual pages for each package with specifications and features
- **Contact Forms**: Easy-to-use contact form for inquiries
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Images**: Next.js Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tailwind-nextjs-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
tailwind-nextjs-blog/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── packages/          # Package listing and details
│   │   └── [id]/         # Dynamic package detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Footer.tsx        # Footer component
│   ├── Header.tsx        # Header/Navigation component
│   └── PackageCard.tsx   # Package card component
├── data/                  # Data files
│   └── packages.ts       # Package data and types
└── public/               # Static assets
```

## Available Pages

- **Home** (`/`): Landing page with featured packages and company overview
- **Packages** (`/packages`): Complete listing of all house and land packages
- **Package Details** (`/packages/[id]`): Detailed view of individual packages
- **About** (`/about`): Information about Scott Park Group
- **Contact** (`/contact`): Contact form and company information

## Package Data

Real package information sourced from B1 Homes, 101 Residential, and Redink Homes websites is stored in `data/packages.ts` and includes:

- **18 Real Packages** from actual Perth house and land offerings
- Package name and type
- Real pricing from current market offerings
- Perth suburb locations (Mindarie, Eglinton, Brabham, Bushmead, Byford, Baldivis, Aveley, etc.)
- Specifications (bedrooms, bathrooms, garages)
- Land and house sizes in square meters
- Features and inclusions from actual packages
- Builder information (B1 Homes, 101 Residential, or Redink Homes)
- Status (Available, Under Contract, Sold)
- Images

### Featured Locations

- Mindarie (Coastal)
- Eglinton (Coastal)
- Brabham (North)
- Bushmead (South East)
- Currambine (North West)
- Piara Waters (South)
- Anketell (South)
- Byford (South East)
- Baldivis (South)
- Aveley (North East)
- Wembley Downs (Inner West)
- Ellenbrook (North East)

### Builders

**B1 Homes**: Specializes in affordable first home ownership with quality inclusions and smart designs. Packages range from $614,999 to $797,490.

**101 Residential**: Perth's leading two storey home builder, specializing in maximizing space on compact blocks. Packages range from $575,990 to $1,150,000.

**Redink Homes**: Award-winning custom home builder established in 2006, known for architecturally driven designs. Winner of Home Builder of the Year 2018 and over 21 service awards. Offers turnkey packages starting from $377,990 and premium custom designs up to $950,000.

## Customization

### Adding New Packages

Edit `data/packages.ts` and add new package objects to the `packages` array.

### Styling

Tailwind CSS configuration can be modified in `tailwind.config.ts`. Global styles are in `app/globals.css`.

### Color Scheme

The primary color scheme can be adjusted in `tailwind.config.ts` under `theme.extend.colors.primary`.

## Build for Production

```bash
npm run build
npm start
```

## Contact Information

For questions or support:
- Phone: 1300 123 456
- Email: info@scottparkgroup.com.au

## License

Copyright © 2024 Scott Park Group. All rights reserved.
