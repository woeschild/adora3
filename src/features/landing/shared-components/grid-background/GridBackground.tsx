'use client';

import React, { useState, useEffect } from 'react';

export default function GridBackground() {
  const [blocks, setBlocks] = useState<Array<{
    id: number;
    width: number;
    height: number;
    left: number;
    top: number;
    rotation: number;
  }>>([]);
  const [isClient, setIsClient] = useState(false);

  // Generate random blocks with varying sizes and positions
  const generateBlocks = () => {
    const newBlocks = [];
    const numberOfBlocks = 6; // Adjust number of blocks as needed
    
    for (let i = 0; i < numberOfBlocks; i++) {
      const width = Math.random() * 150 + 50; // Random width between 50-200px
      const height = Math.random() * 100 + 40; // Random height between 40-140px
      const left = Math.random() * 90; // Random position (0-90% to avoid edge cutoff)
      const top = Math.random() * 80; // Random position (0-80% to avoid edge cutoff)
      const rotation = Math.random() * 10 - 5; // Slight random rotation
      
      newBlocks.push({
        id: i,
        width,
        height,
        left,
        top,
        rotation,
      });
    }
    
    return newBlocks;
  };

  useEffect(() => {
    setIsClient(true);
    setBlocks(generateBlocks());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0
        [background-image:linear-gradient(to_right,hsl(0,0%,90%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0,0%,90%)_1px,transparent_1px)]
        [background-size:40px_40px]"
      />
      
      {/* Random Accent Blocks - Only render on client */}
      {isClient && blocks.map((block) => (
        <div
          key={block.id}
          className="absolute bg-accent opacity-10 rounded-sm"
          style={{
            width: `${block.width}px`,
            height: `${block.height}px`,
            left: `${block.left}%`,
            top: `${block.top}%`,
            transform: `rotate(${block.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}