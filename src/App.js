import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [showScreensaver, setShowScreensaver] = useState(true);
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Generate random particles for the screensaver
  useEffect(() => {
    if (showScreensaver) {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
      setParticles(newParticles);
    }
  }, [showScreensaver]);

  // Animate particles
  useEffect(() => {
    if (!showScreensaver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Update position
          const newX = particle.x + particle.vx;
          const newY = particle.y + particle.vy;
          
          // Bounce off walls
          let newVx = particle.vx;
          let newVy = particle.vy;
          
          if (newX <= 0 || newX >= canvas.width) {
            newVx = -particle.vx;
          }
          if (newY <= 0 || newY >= canvas.height) {
            newVy = -particle.vy;
          }
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(
            newX <= 0 ? 0 : newX >= canvas.width ? canvas.width : newX,
            newY <= 0 ? 0 : newY >= canvas.height ? canvas.height : newY,
            particle.size,
            0,
            2 * Math.PI
          );
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();
          
          return {
            ...particle,
            x: newX <= 0 ? 0 : newX >= canvas.width ? canvas.width : newX,
            y: newY <= 0 ? 0 : newY >= canvas.height ? canvas.height : newY,
            vx: newVx,
            vy: newVy
          };
        })
      );
      
      // Draw connecting lines between nearby particles
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showScreensaver, particles]);

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-hide screensaver after 10 seconds
  useEffect(() => {
    if (showScreensaver) {
      const timer = setTimeout(() => {
        setShowScreensaver(false);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [showScreensaver]);

  // Handle click to hide screensaver
  const handleClick = () => {
    setShowScreensaver(false);
  };

  if (showScreensaver) {
    return (
      <div className="screensaver" onClick={handleClick}>
        <canvas
          ref={canvasRef}
          className="screensaver-canvas"
          onClick={handleClick}
        />
        <div className="screensaver-text">
          <h1>Welcome to Disco Test</h1>
          <p>Click anywhere or wait 10 seconds to continue</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to Disco Test with CI CD working</h1>
        <p>Your React website with custom screensaver</p>
      </header>
      
      <main className="app-main">
        <div className="content">
          <h2>About This Project</h2>
          <p>
            This is a React website that features a custom screensaver animation
            created entirely with vanilla JavaScript and HTML5 Canvas. No external
            libraries were used for the animation effects.
          </p>
          
          <div className="features">
            <div className="feature">
              <h3>🎨 Custom Animation</h3>
              <p>Particle system with bouncing balls and connecting lines</p>
            </div>
            <div className="feature">
              <h3>⚡ Pure JavaScript</h3>
              <p>Built without any animation libraries</p>
            </div>
            <div className="feature">
              <h3>🎯 Interactive</h3>
              <p>Click to skip or wait for auto-transition</p>
            </div>
          </div>
          
          <button 
            className="restart-button"
            onClick={() => setShowScreensaver(true)}
          >
            Restart Screensaver
          </button>
        </div>
      </main>
    </div>
  );
}

export default App; 