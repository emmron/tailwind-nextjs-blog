# Scott Park Group - House and Land Packages Website

A modern, responsive website built with Next.js 14 and Tailwind CSS showcasing house and land packages for Scott Park Group.

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

Package information is stored in `data/packages.ts` and includes:
- Package name and type
- Price and location
- Specifications (bedrooms, bathrooms, garages)
- Land and house sizes
- Features and inclusions
- Status (Available, Under Contract, Sold)
- Images

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
