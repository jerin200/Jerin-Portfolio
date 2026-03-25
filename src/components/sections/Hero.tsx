import React from 'react';
import SoftAurora from '../ui/SoftAurora';
import ShapeGrid from '../ui/ShapeGrid';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.4}
        />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <ShapeGrid
          speed={0}
          squareSize={40}
          borderColor="rgba(255, 255, 255, 0.03)"
          hoverFillColor="rgba(255, 255, 255, 0.1)"
          shape="square"
          hoverTrailAmount={4}
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="serif-caps">Jerin S Reji</span>
          <span className="serif-italic">UI/UX Engineer · Experience Designer</span>
        </h1>
        {/* <div className="hero-body">
          <p>
            I design and build engaging digital experiences that blend usability, performance, and visual storytelling.<br />
            From intuitive interfaces to interactive systems, my work helps products stand out and keep users engaged.<br />
            Focused on crafting meaningful interactions that drive impact in today’s attention-driven digital landscape.
          </p>
        </div> */}
        <div className="hero-divider"></div>
        <div className="hero-actions">
          <button className="text-btn">VIEW MY WORK</button>
        </div>
      </div>
    </section>
  );
};
