import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -100]);

  return (
    <section ref={sectionRef} className="relative py-40 px-8 lg:px-32 z-10 min-h-screen bg-[#020202] text-white flex items-center border-t border-white/10">
      
      <div className="absolute inset-0 bg-[#020202]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        <div className="lg:col-span-5 flex flex-col justify-end">
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/40 mb-12 uppercase flex items-center gap-4">
            <span className="w-12 h-[1px] bg-white/40" />
            The Foundation
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-12">
            Quiet <br/> Dominion.
          </h2>
          
          <div className="space-y-6 text-sm text-white/50 font-mono leading-relaxed pr-8">
            <p>
              We design monolithic structures of code and art. Blending the intense security and operational parameters of industrial systems with the untouchable aesthetic of high-fashion minimalism.
            </p>
            <p className="pl-6 border-l border-white/20">
              Each module is crafted like a bespoke relic. There is no excess. Only the essential components required to fulfill the mission. 
            </p>
          </div>
        </div>

        <motion.div style={{ y: y1 }} className="lg:col-span-7 relative h-[70vh] border border-white/10 bg-[#050505] flex items-center justify-center overflow-hidden group">
            {/* Ominous decorative element */}
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 translate-y-[-50%]" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-white/5 translate-x-[-50%]" />

            <div className="relative z-10 text-center">
               <span className="text-8xl md:text-[12rem] font-bold text-white/[0.03] uppercase tracking-tighter group-hover:text-white/10 transition-colors duration-1000">
                 OCCUPY
               </span>
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-[0.4em] text-white uppercase bg-black/50 px-4 py-2 border border-white/10">
                    System Manifest
                  </span>
               </div>
            </div>

            {/* Corner details */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-white/20">TRT-0X</div>
            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-white/20">END_SEQ</div>
        </motion.div>

      </div>
    </section>
  );
};
