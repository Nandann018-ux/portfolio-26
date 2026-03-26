# Nandan Acharya — Portfolio V1
### A Cinematic, Reveal-Based Digital Experience.

## ✦ The Vision
Inspired by the "Selected Chronology" aesthetic and high-end editorial design, this portfolio is built as a **"Void-to-Life"** experience. It moves away from standard web containers in favor of a central vertical anchor (The Spine) and physics-based motion.

### Key Interactions
- **The Cinematic Reveal**: A dormant "Void" state featuring a hanging lightbulb that, when toggled, illuminates the entire UI via a radial clip-path expansion.
- **The Spine**: A fixed 1px central axis that serves as the chronological anchor for all content.
- **Artistic Persistence**: A high-contrast, low-opacity background portrait that remains static while the editorial rail slides over it.
- **Fluid Motion**: Integration of Lenis for inertial, "heavy" scrolling that mimics physical momentum.

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS (Custom Type Scales & Noise Textures)
- **Animations**: Framer Motion (Clip-path transitions & Scroll-linked scaling)
- **Smooth Scroll**: Lenis
- **AI Orchestration**: Antigravity & Stitch

## 📂 Architecture
```plaintext
├── src/
│   ├── components/
│   │   ├── BulbReveal.tsx      # The "Void" interaction logic
│   │   ├── Spine.tsx           # The central 1px fixed anchor
│   │   ├── Chronology.tsx      # Vertical-aligned content nodes
│   │   └── SmoothScroll.tsx    # Lenis configuration wrapper
│   ├── styles/
│   │   └── globals.css         # Typography & Grainy textures
│   └── app/
│       └── page.tsx            # Main assembly
```

## 🚀 Getting Started
### Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

### Install dependencies:
```bash
npm install
```

### Run the development server:
```bash
npm run dev
```

## 🖋 Design Principles
- **Whitespace as Luxury**: Generous negative space to focus on typography.
- **Non-Linearity**: Content is discovered through interaction (the bulb) rather than immediate exposure.
- **Editorial Type**: Mixing high-contrast Serifs with technical Monospaced labels.
