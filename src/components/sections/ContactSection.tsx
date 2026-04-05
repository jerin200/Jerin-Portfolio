import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section className="relative min-h-[90vh] px-8 lg:px-32 z-10 flex flex-col justify-end pb-24 bg-[#020202] border-t border-white/10 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,_#ff0044_0%,_transparent_60%)] opacity-[0.03] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[90rem] w-full mx-auto"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-end pb-16 border-b border-white/20">
          
          <div className="lg:col-span-8">
            <h2 className="text-6xl md:text-[8rem] font-bold uppercase tracking-tighter leading-[0.8] mb-8 relative z-10 opacity-90 mix-blend-difference hover:opacity-100 transition-opacity cursor-default">
              Initiate <br/> Contact.
            </h2>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-8 pb-4">
            <p className="font-mono text-xs tracking-widest text-white/40 uppercase leading-loose border-l border-white/20 pl-6">
              Awaiting protocol execution. Claim your space in the digital expanse. Transmit coordinates.
            </p>
            <a href="mailto:hello@example.com" className="group relative w-full border border-white/20 hover:border-white p-6 font-mono text-[10px] tracking-[0.3em] uppercase overflow-hidden transition-colors duration-500 flex justify-between items-center bg-[#050505]">
              <span className="relative z-10 text-white">Execute.Mail</span>
              <span className="relative z-10 text-white group-hover:translate-x-2 transition-transform duration-300">-{'>'}</span>
              <div className="absolute inset-y-0 left-0 bg-white w-0 group-hover:w-full transition-all duration-700 ease-in-out opacity-10" />
            </a>
          </div>

        </div>

        <footer className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] gap-8">
          <div className="flex gap-12 text-white/50">
            <a href="#" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              Behance
            </a>
            <a href="#" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              Data Node
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff0044] animate-pulse" />
            SECURE CONNECTION
          </div>
        </footer>

      </motion.div>
    </section>
  );
};
