import React from 'react';
import { SmoothScroll } from '../components/layout/SmoothScroll';
import { CustomCursor } from '../components/ui/CustomCursor';
import { SceneManager } from '../components/canvas/SceneManager';
import { CinematicHero } from '../components/sections/CinematicHero';
import { StaggeredMenu } from '../components/ui/StaggeredMenu';

export const Home: React.FC = () => {
  return (
    <SmoothScroll>
      <CustomCursor />
      <SceneManager />
      
      {/* High-end Staggered Overlay Navigation */}
      <StaggeredMenu 
        isFixed={true} 
        position="right"
        accentColor="#fc42ff"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        logoUrl="" // Hidden for massive absolute design minimalism
        items={[
          { label: 'Work', ariaLabel: 'View our work', link: '#work' },
          { label: 'Studio', ariaLabel: 'About the studio', link: '#studio' },
          { label: 'Capabilities', ariaLabel: 'Our capabilities', link: '#capabilities' },
          { label: 'Insights', ariaLabel: 'Latest insights', link: '#insights' },
          { label: 'Contact', ariaLabel: 'Contact us', link: '#contact' }
        ]}
        socialItems={[
          { label: 'Twitter', link: '#' },
          { label: 'Instagram', link: '#' },
          { label: 'LinkedIn', link: '#' }
        ]}
      />

      <main className="relative z-10 w-full overflow-hidden">
        <CinematicHero />
      </main>
    </SmoothScroll>
  );
};
