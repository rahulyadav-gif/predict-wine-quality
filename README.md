# 🍷 VinoPredictⓇ - AI-Powered Wine Quality Prediction

A stunning, modern wine quality prediction website built with **React**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Material UI**. Features beautiful animations powered by **Framer Motion** and a sophisticated wine-themed design.

![Wine Quality Prediction](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-blue?style=flat-square&logo=tailwindcss)
![Material UI](https://img.shields.io/badge/MUI-7.3-blue?style=flat-square&logo=mui)

## ✨ Features

### 🎨 Design
- **Wine-Themed Color Palette** - Deep wine reds, golden accents, royal purple highlights
- **Glass Morphism Effects** - Frosted glass UI with backdrop blur
- **Gradient Text & Buttons** - Premium look with smooth color transitions
- **Dark Theme** - Elegant dark mode with cream-colored typography

### 🎬 Animations (Framer Motion)
- **Floating Particles** - Ambient gold particles in the Hero section
- **Mouse-Tracking Parallax** - Background elements follow cursor movement
- **Scroll-Triggered Animations** - Content animates as you scroll
- **Micro-Interactions** - Hover effects, button ripples, icon animations
- **Animated Counters** - Statistics count up as they come into view
- **Loading States** - Beautiful loading spinners and progress indicators

### 🧩 Components

#### UI Components (shadcn/ui style)
- `Button` - Multiple variants (default, gold, outline, ghost)
- `Input` - Form inputs with validation states
- `Card` - Glass morphism cards with hover effects
- `Badge` - Status badges with color variants
- `Toast` - Notification system with MUI Snackbar

#### Layout Components
- `Navbar` - Sticky header with glass effect, MUI Drawer for mobile
- `Footer` - Full footer with newsletter, links, social icons

#### Section Components
- `Hero` - Animated hero with floating wine glass
- `About` - Company info with animated counters
- `HowItWorks` - 3-step timeline visualization
- `Features` - Feature cards grid with hover effects
- `PredictionForm` - Full 11-field wine analysis form
- `FAQ` - Accordion-style questions
- `Contact` - Contact form with validation

### 🔧 Tech Stack
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety
- **Tailwind CSS 4** - Modern CSS framework with custom theme
- **Material UI 7** - MUI components (Drawer, Tooltip, Snackbar, etc.)
- **Framer Motion** - Animation library
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool

## 📦 Installation

```bash
# Clone the repository
cd wine-quality-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Wine Quality Prediction Form

The prediction form analyzes **11 chemical properties** of wine:

| Property | Unit | Description |
|----------|------|-------------|
| Fixed Acidity | g/dm³ | Most acids involved with wine |
| Volatile Acidity | g/dm³ | Amount of acetic acid |
| Citric Acid | g/dm³ | Adds freshness and flavor |
| Residual Sugar | g/dm³ | Sugar remaining after fermentation |
| Chlorides | g/dm³ | Amount of salt |
| Free Sulfur Dioxide | mg/dm³ | Prevents microbial growth |
| Total Sulfur Dioxide | mg/dm³ | Free and bound SO2 |
| Density | g/cm³ | Wine density |
| pH | - | Acidity level (0-14) |
| Sulphates | g/dm³ | Wine additive |
| Alcohol | % vol | Alcohol content |

### Quality Ratings
- **🔴 Poor** (1-4): Low quality wine
- **🟠 Average** (5): Below average wine
- **🟢 Good** (6): Good quality wine
- **🟡 Excellent** (7-10): Premium wine

## 🚀 API Integration

The form submits to `/predict` endpoint with `multipart/form-data`. Expected response:

```json
{
  "quality": 6,
  "confidence": 94
}
```

## 📁 Project Structure

```
wine-quality-frontend/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── PredictionForm.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Toast.tsx
│   │       └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Colors (in `index.css`)
```css
--color-wine-600: #d22651;   /* Primary wine color */
--color-gold-400: #d4af37;   /* Gold accent */
--color-purple-700: #6b2d5c; /* Purple highlight */
--color-cream-100: #f9f6f0;  /* Text color */
```

### MUI Theme (in `App.tsx`)
The MUI theme is customized to match the wine design with custom tooltips, drawers, and component styles.

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **MUI Drawer** for mobile navigation
- Fully responsive form and card layouts

## 🔗 Links

- **LinkedIn**: [boktiarahmed73](https://www.linkedin.com/in/boktiarahmed73/)
- **YouTube**: [dswithbappy](https://www.youtube.com/dswithbappy)
- **GitHub**: [entbappy](https://github.com/entbappy)

## 📄 License

MIT License - feel free to use this project for your own purposes!

---

Made with ❤️ for wine lovers and AI enthusiasts
