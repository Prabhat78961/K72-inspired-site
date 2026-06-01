# K72 Clone

A frontend clone of k72.ca focusing on replicating its complex layout animations and interaction design. The core layout and motion mechanics remain identical to the original site, but with a modified color palette and custom theme configuration.

Built to experiment with advanced GSAP timelines and seamless page transitions within a React environment.

## Tech Stack

* React.js
* React Router DOM
* GSAP (with ScrollTrigger)
* TailwindCSS

## Core Features & Engineering Focus

### GSAP Animation & React Lifecycle

* **Trigger Cleanups:** Animation instances are carefully scoped inside React hooks, ensuring proper garbage collection and ScrollTrigger destruction on unmount to prevent memory leaks or layout clipping.
* **Performance Optimization:** Interactions rely on hardware-accelerated properties (transform, opacity) to maintain smooth performance during heavy scrolling sequences and pinning states.

### Routing & Custom Theming

* **Route Transitions:** Integrated GSAP with React Router DOM to manage entrance and exit states, delaying the unmounting phase so page transitions fully complete.
* **Design System Setup:** Remapped the original design tokens inside `tailwind.config.js` to swap the color scheme and typography while maintaining the exact spatial constraints of the source site.

## Getting Started

### Installation

```bash
git clone https://github.com/Prabhat78961/K72-inspired-site
cd K72-inspired-site
npm install

```

### Development

```bash
npm run build

```

### Build

```bash
npm run build

```

## Credits

Original design and interaction concepts belong to K72. This repository is strictly for educational purposes and frontend practice.
