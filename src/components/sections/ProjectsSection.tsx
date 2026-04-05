import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: '001', title: 'The Obsidian Core', category: 'SYSTEM ARCHITECTURE', detail: 'Dark minimal UI' },
  { id: '002', title: 'Ceremony of Data', category: 'WEBGL EXPERIENCE', detail: 'Immersive intelligence' },
  { id: '003', title: 'Silent Protocol', category: 'PRODUCT DESIGN', detail: 'Edge-node aesthetics' },
  { id: '004', title: 'Fractional Relics', category: 'BRAND IDENTITY', detail: 'High-end cyber concepts' }
];

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !containerRef.current) return;

    const items = gsap.utils.toArray('.project-card');
    
    gsap.to(items, {
      xPercent: -100 * (items.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (items.length - 1),
        end: () => '+=' + wrapperRef.current?.offsetWidth
      }
    });

  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center z-10 overflow-hidden bg-[#020202]">
      
      {/* Background massive typography */}
      <div className="absolute top-[20%] left-0 w-full pointer-events-none opacity-[0.02] flex whitespace-nowrap">
        <h2 className="text-[20rem] font-bold uppercase tracking-tighter mix-blend-difference">
          COLLECTION // RELICS // MODULES
        </h2>
      </div>

      <div ref={wrapperRef} className="flex px-12 lg:px-32 h-full items-center">
        {projects.map((project) => (
          <div key={project.id} className="project-card flex-shrink-0 w-[90vw] md:w-[65vw] h-[75vh] mr-16 relative cursor-pointer group">
            
            {/* Ominous Card Background */}
            <div className="absolute inset-0 bg-[#050505] border border-white/5 group-hover:border-white/20 transition-all duration-700 overflow-hidden">
               
               {/* Internal Image/Mesh Placeholder */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000_100%)] z-10 pointer-events-none" />
               <div className="w-full h-full flex flex-col items-center justify-center relative z-0">
                  <div className="text-[10rem] font-bold text-white/[0.02] uppercase tracking-tighter absolute">
                    {project.id}
                  </div>
                  <div className="w-1/3 aspect-[3/4] border border-white/10 group-hover:border-white/30 group-hover:scale-105 transition-all duration-1000 flex items-center justify-center relative overflow-hidden bg-white/5">
                     <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] relative z-10">[ CLASSIFIED ASSET ]</span>
                  </div>
               </div>

            </div>

            {/* Typography Overlay */}
            <div className="absolute bottom-12 left-12 mix-blend-difference z-20">
                <div className="flex items-center gap-4 mb-4 font-mono text-[10px] text-white/50 tracking-widest uppercase">
                    <span>{project.category}</span>
                    <span className="w-8 h-px bg-white/30" />
                    <span>{project.detail}</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                  {project.title}
                </h3>
            </div>
            
            {/* Top Right index */}
            <div className="absolute top-12 right-12 font-mono text-xs text-white/30 tracking-widest mix-blend-difference z-20">
               NO. {project.id}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
