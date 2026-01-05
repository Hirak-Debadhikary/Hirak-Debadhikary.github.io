import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
}

const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize nodes
    const nodeCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 25000), 60);
    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      
      time += 0.01;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid pattern
      const gridSize = 50;
      const gridOpacity = theme === 'dark' ? 0.03 : 0.05;
      ctx.strokeStyle = theme === 'dark' 
        ? `rgba(100, 150, 255, ${gridOpacity})` 
        : `rgba(50, 100, 200, ${gridOpacity})`;
      ctx.lineWidth = 1;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw animated scan lines
      const scanLineY = (time * 100) % (canvas.height + 200) - 100;
      const scanGradient = ctx.createLinearGradient(0, scanLineY - 50, 0, scanLineY + 50);
      scanGradient.addColorStop(0, 'transparent');
      scanGradient.addColorStop(0.5, theme === 'dark' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.03)');
      scanGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanLineY - 50, canvas.width, 100);

      // Update and draw nodes
      const nodes = nodesRef.current;
      const connections: Connection[] = [];

      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Mouse interaction
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          node.vx -= (dx / dist) * force * 0.02;
          node.vy -= (dy / dist) * force * 0.02;
        }

        // Damping
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Find connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const cdx = other.x - node.x;
          const cdy = other.y - node.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          
          if (cdist < 150) {
            connections.push({
              from: i,
              to: j,
              opacity: 1 - cdist / 150,
            });
          }
        }

        // Update pulse
        node.pulsePhase += 0.02;
      });

      connectionsRef.current = connections;

      // Draw circuit-like connections with colorful gradients
      const colors = [
        { r: 255, g: 100, b: 150 },  // Pink
        { r: 100, g: 200, b: 255 },  // Cyan
        { r: 150, g: 100, b: 255 },  // Purple
        { r: 100, g: 255, b: 200 },  // Teal
        { r: 255, g: 180, b: 100 },  // Orange
        { r: 100, g: 255, b: 150 },  // Green
        { r: 255, g: 100, b: 100 },  // Red
        { r: 200, g: 150, b: 255 },  // Lavender
      ];

      connections.forEach(({ from, to, opacity }) => {
        const nodeA = nodes[from];
        const nodeB = nodes[to];
        
        const colorA = colors[from % colors.length];
        const colorB = colors[to % colors.length];
        
        const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
        gradient.addColorStop(0, `rgba(${colorA.r}, ${colorA.g}, ${colorA.b}, ${opacity * 0.4})`);
        gradient.addColorStop(0.5, `rgba(${(colorA.r + colorB.r) / 2}, ${(colorA.g + colorB.g) / 2}, ${(colorA.b + colorB.b) / 2}, ${opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(${colorB.r}, ${colorB.g}, ${colorB.b}, ${opacity * 0.4})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        
        // Draw circuit-like path (horizontal then vertical)
        const midX = (nodeA.x + nodeB.x) / 2;
        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(midX, nodeA.y);
        ctx.lineTo(midX, nodeB.y);
        ctx.lineTo(nodeB.x, nodeB.y);
        ctx.stroke();

        // Draw data pulse traveling along connection with rainbow effect
        const pulsePos = (time * 2 + from * 0.5) % 1;
        let pulseX, pulseY;
        
        if (pulsePos < 0.33) {
          pulseX = nodeA.x + (midX - nodeA.x) * (pulsePos * 3);
          pulseY = nodeA.y;
        } else if (pulsePos < 0.66) {
          pulseX = midX;
          pulseY = nodeA.y + (nodeB.y - nodeA.y) * ((pulsePos - 0.33) * 3);
        } else {
          pulseX = midX + (nodeB.x - midX) * ((pulsePos - 0.66) * 3);
          pulseY = nodeB.y;
        }

        // Rainbow pulse with glow
        const pulseColor = colors[(from + Math.floor(time * 5)) % colors.length];
        
        // Outer glow
        const pulseGlow = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 8);
        pulseGlow.addColorStop(0, `rgba(${pulseColor.r}, ${pulseColor.g}, ${pulseColor.b}, ${opacity * 0.8})`);
        pulseGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = pulseGlow;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
        ctx.fill();

        // Core pulse
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw nodes with matching colors
      nodes.forEach((node) => {
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const size = node.size * pulse;
        const nodeColor = colors[node.id % colors.length];
        
        // Outer glow with node's color
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, size * 6
        );
        gradient.addColorStop(0, `rgba(${nodeColor.r}, ${nodeColor.g}, ${nodeColor.b}, 0.4)`);
        gradient.addColorStop(0.5, `rgba(${nodeColor.r}, ${nodeColor.g}, ${nodeColor.b}, 0.1)`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core node with color
        ctx.fillStyle = `rgba(${nodeColor.r}, ${nodeColor.g}, ${nodeColor.b}, ${0.7 + pulse * 0.3})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright point
        ctx.fillStyle = `rgba(255, 255, 255, ${pulse * 0.9})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw hexagon decorations in corners with colors
      const drawHexagon = (cx: number, cy: number, radius: number, rotation: number, colorIndex: number) => {
        const hexColor = colors[colorIndex % colors.length];
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i + rotation;
          const x = cx + radius * Math.cos(angle);
          const y = cy + radius * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(${hexColor.r}, ${hexColor.g}, ${hexColor.b}, 0.15)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      };

      // Animated hexagons with different colors
      [
        { x: 100, y: 100, size: 60, color: 0 },
        { x: canvas.width - 100, y: 150, size: 80, color: 2 },
        { x: 150, y: canvas.height - 150, size: 70, color: 4 },
        { x: canvas.width - 150, y: canvas.height - 100, size: 50, color: 6 },
      ].forEach((hex, i) => {
        drawHexagon(hex.x, hex.y, hex.size, time * 0.5 + i, hex.color);
        drawHexagon(hex.x, hex.y, hex.size * 0.7, -time * 0.3 + i, hex.color + 1);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, theme]);

  return (
    <>
      {/* Base gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(ellipse at 50% 0%, rgba(30, 58, 138, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(79, 70, 229, 0.1) 0%, transparent 40%), radial-gradient(ellipse at 0% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 40%)'
            : 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(139, 92, 246, 0.05) 0%, transparent 40%), radial-gradient(ellipse at 0% 100%, rgba(59, 130, 246, 0.05) 0%, transparent 40%)',
        }}
      />
      
      {/* Canvas for animated elements */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.8 }}
      />
      
      {/* Vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 100%)',
          opacity: theme === 'dark' ? 0.5 : 0.15,
        }}
      />
    </>
  );
};

export default TechBackground;
