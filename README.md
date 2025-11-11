# OK Computer - Immersive Tribute Website

An artistic tribute to Radiohead's groundbreaking 1997 album **OK Computer**, featuring advanced web design techniques to capture the album's themes of technological anxiety, alienation, and dystopian atmosphere.

## Features

### Visual Design
- **Multi-layer Parallax Scrolling**: Background, midground, and foreground elements move at different speeds
- **Horizontal Scrolling**: Track showcase section with smooth momentum-based scrolling
- **Glitch Effects**: Digital artifacts and retro-futuristic UI elements
- **Custom Cursor**: Computerized cursor that responds to interactions
- **Animated Elements**: Floating shapes, pulsing glows, scan lines, and geometric patterns

### Sections
1. **Hero Section**: Immersive entry with animated album artwork
2. **Track Listing**: Horizontal scrolling showcase of all 12 tracks
3. **Themes Exploration**: Deep dive into the album's core themes
4. **Textual Fragments**: Parallax-enabled content display
5. **Credits**: Band information and technical details

### Technical Highlights
- Built with **React 18** and **Vite**
- Smooth **60fps animations** using CSS transforms and GPU acceleration
- **Intersection Observer API** for scroll-triggered animations
- **Responsive design** for mobile and desktop
- Performance-optimized with `will-change` and passive event listeners
- Accessibility support with `prefers-reduced-motion`

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- **React 18**: Component-based UI
- **Vite**: Fast build tool and dev server
- **CSS3**: Advanced animations and transforms
- **Intersection Observer API**: Scroll-triggered effects
- **Google Fonts**: Inter and Space Mono

## Color Palette

- Primary Blue: `#1a4d6d`
- Teal: `#3b9a9c`
- Gray Dark: `#1a1a1a`
- Accent Red: `#d93636`
- Accent Yellow: `#e8b923`

## Performance Optimizations

- GPU-accelerated animations using `transform` and `opacity`
- Passive event listeners for scroll events
- `will-change` CSS property for animated elements
- Reduced motion support for accessibility
- Optimized asset loading

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Copyright Notice

This is an **unofficial fan-made tribute website**. All rights to OK Computer, its music, and lyrics belong to Radiohead and their respective copyright holders. No copyright infringement intended.

For official Radiohead content, visit [radiohead.com](https://www.radiohead.com)

## Project Structure

```
ok-computer/
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── TracksHorizontal.jsx/css
│   │   ├── ParallaxLayers.jsx/css
│   │   ├── ThemesSection.jsx/css
│   │   ├── LyricsParallax.jsx/css
│   │   └── Credits.jsx/css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Development

The site uses modern CSS techniques including:
- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables)
- Keyframe animations
- Backdrop filters
- Clip-path for geometric shapes

## License

This project is for educational and tribute purposes only.

---

*"For a minute there, I lost myself"* - Radiohead, Karma Police
