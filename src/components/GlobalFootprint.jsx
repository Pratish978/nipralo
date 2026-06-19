import React from 'react';
import worldMap from '../assets/World.png';

export default function GlobalFootprint() {
  return (
      <div className="">
        <img 
          src={worldMap} 
          alt="Global Footprint" 
          className="w-full h-auto"
        />
      </div>

  );
}