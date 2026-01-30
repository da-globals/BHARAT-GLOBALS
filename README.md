# Mother Ecosystem | Bharat Globals

A futuristic, multi-division technological ecosystem website centered around **Mother AI** - an advanced ethical and human-centric artificial intelligence designed for social, physical, and mental well-being.

## Overview

The Mother Ecosystem is a holistic platform by Bharat Globals featuring four core divisions:

- **Mother AI** - Central ethical AI for well-being support
- **Mother Drones** - AI-guided aerial systems for humanitarian operations
- **Haptic Systems** - Sensory feedback devices for therapy and training
- **Lacto Made Easy** - Smart nutrition dispensing for health management

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Components**: shadcn/ui
- **Typography**: Inter + JetBrains Mono
- **Icons**: Lucide React

## Project Structure

```
/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Theme & design tokens
│   ├── mother-ai/            # Mother AI division
│   ├── drones/               # Drones division
│   ├── haptic/               # Haptic Systems division
│   ├── lacto/                # Lacto Made Easy division
│   ├── about/                # About page
│   ├── research/             # Research page
│   ├── security/             # Security page
│   └── contact/              # Contact page
├── components/
│   ├── navigation.tsx        # Global navigation
│   ├── footer.tsx            # Global footer
│   ├── hero-section.tsx      # Homepage hero
│   ├── divisions-section.tsx # Division cards
│   ├── features-section.tsx  # Features overview
│   ├── cta-section.tsx       # Call to action
│   ├── mother-ai/            # Mother AI components
│   ├── drones/               # Drones components
│   ├── haptic/               # Haptic components
│   └── lacto/                # Lacto components
└── components/ui/            # shadcn/ui components
```

## Design System

The website features a **control room aesthetic** optimized for:

- Dark mode interfaces for operators and field units
- High-contrast accessibility-first UI
- Modular architecture visualization
- Balance of technology and warmth

### Color Palette

| Token | Description |
|-------|-------------|
| `--primary` | Teal/cyan accent for interactive elements |
| `--accent` | Secondary blue for highlights |
| `--background` | Deep navy for control room feel |
| `--muted` | Subtle backgrounds for cards |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with ecosystem overview |
| `/mother-ai` | Mother AI division dashboard |
| `/drones` | Drones mission control interface |
| `/haptic` | Haptic Systems product showcase |
| `/lacto` | Lacto Made Easy nutrition platform |
| `/about` | Company mission and values |
| `/research` | R&D and innovation initiatives |
| `/security` | Security protocols and compliance |
| `/contact` | Contact form and information |

## Key Features

- Responsive design for laptops, tablets, and rugged devices
- Dark mode optimized for control room environments
- Accessible UI with proper ARIA attributes
- Modular component architecture
- Real-time dashboard visualizations
- Interactive product configurators

## License

Copyright Bharat Globals. All rights reserved.

---

Built with care for humanity's future.
