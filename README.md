# Disco Test - React Website with Custom Screensaver

A beautiful React website featuring a custom screensaver animation that plays when the website opens. Built entirely with vanilla JavaScript and HTML5 Canvas - no external animation libraries required!

## Features

- 🎨 **Custom Particle Animation**: Bouncing colored particles with connecting lines
- ⚡ **Pure JavaScript**: Built without any animation libraries
- 🎯 **Interactive**: Click to skip screensaver or wait for auto-transition
- 📱 **Responsive Design**: Works perfectly on all device sizes
- 🌈 **Beautiful UI**: Modern gradient design with glassmorphism effects

## Screensaver Animation

The screensaver features:
- 50 colorful particles bouncing around the screen
- Dynamic connecting lines between nearby particles
- Smooth 60fps animation using requestAnimationFrame
- Auto-hide after 10 seconds or click to skip
- Responsive canvas that adapts to window size

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd disco-test
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

The website will automatically show the screensaver animation when it loads!

## How It Works

### Screensaver Implementation

The screensaver is built using:
- **HTML5 Canvas**: For smooth 2D graphics rendering
- **requestAnimationFrame**: For optimal animation performance
- **React Hooks**: useState, useEffect, and useRef for state management
- **Particle System**: Each particle has position, velocity, color, and opacity
- **Collision Detection**: Particles bounce off screen boundaries
- **Proximity Lines**: Dynamic lines connect particles within 100px of each other

### Main Website

After the screensaver, users see:
- Modern gradient background
- Glassmorphism card design
- Feature highlights
- Restart screensaver button

## Customization

You can easily customize the screensaver by modifying the parameters in `src/App.js`:

- **Particle Count**: Change the number in the particle generation loop
- **Colors**: Modify the HSL color generation
- **Speed**: Adjust velocity ranges
- **Size**: Change particle size ranges
- **Connection Distance**: Modify the proximity threshold for connecting lines

## Technologies Used

- React 18
- HTML5 Canvas
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- No external animation libraries

## License

This project is open source and available under the MIT License.

---

Enjoy the disco vibes! 🕺✨ 