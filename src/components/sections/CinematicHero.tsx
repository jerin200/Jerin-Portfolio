import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { Pointer } from '../ui/pointer';
import { TextHoverEffect } from '../ui/TextHoverEffect';
import { HyperText } from '../ui/hyper-text';
import NeuButton from '../ui/NeuButton';

export const CinematicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!elementsRef.current || !title1Ref.current || !title2Ref.current) return;

    if (title1Ref.current) {
      const chars1 = title1Ref.current.querySelectorAll('.char');
      gsap.fromTo(chars1,
        { y: 150, opacity: 0, rotateX: -80, scale: 0.8 },
        { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 1.8, stagger: 0.03, ease: 'expo.out', delay: 0.2 }
      );
    }

    if (title1Ref.current) {
      gsap.fromTo(title1Ref.current,
        { scale: 0.9, opacity: 0, filter: 'blur(20px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 2, ease: 'power3.out', delay: 0.5, clearProps: "filter,transform" }
      );
    }
    
    if (title2Ref.current) {
      gsap.fromTo(title2Ref.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out', delay: 1.0, clearProps: "filter,transform" }
      );
    }

    // Fade in structural elements
    gsap.fromTo(
      elementsRef.current.children,
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', duration: 2, stagger: 0.2, ease: 'power2.out', delay: 1.2, clearProps: "filter,transform" }
    );
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const [time, setTime] = useState(new Date());
  const [coords, setCoords] = useState<{ lat: string; lon: string } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Fetch location silently via IP to avoid browser permission prompts
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.latitude && data.longitude) {
          const latitude = parseFloat(data.latitude);
          const longitude = parseFloat(data.longitude);
          setCoords({
            lat: Math.abs(latitude).toFixed(4) + (latitude >= 0 ? 'N' : 'S'),
            lon: Math.abs(longitude).toFixed(4) + (longitude >= 0 ? 'E' : 'W')
          });
        } else {
          setCoords({ lat: '40.7128N', lon: '74.0060W' });
        }
      })
      .catch(() => {
        setCoords({ lat: '40.7128N', lon: '74.0060W' });
      });
  }, []);

  const formatTime = (date: Date) => {
    const timeString = date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const offset = -date.getTimezoneOffset();
    const sign = offset >= 0 ? '+' : '-';
    // Instead of raw hours/mins, commonly formatted like GMT+05:30
    const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0');
    const minutes = String(Math.abs(offset) % 60).padStart(2, '0');
    return `${timeString} GMT${sign}${hours}:${minutes}`;
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden z-10 px-8 text-center pt-10">

      {/* Bottom Metadata Bar (Distributed Inwards) */}
      <div className="absolute bottom-12 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 flex justify-between font-mono text-[10px] text-white/50 tracking-[0.2em] uppercase hidden md:flex z-[100] pointer-events-auto">
        <div className="w-1/3 flex justify-start">
          <HyperText className="py-0 text-[10px] font-normal leading-normal text-white/50 whitespace-nowrap overflow-visible interactive cursor-pointer" animateOnHover={true}>
            {`LAT_${coords ? coords.lat : 'DETECTING...'}`}
          </HyperText>
        </div>
        <div className="w-1/3 flex justify-center">
          <HyperText className="py-0 text-[10px] font-normal leading-normal text-white/50 whitespace-nowrap overflow-visible interactive cursor-pointer" animateOnHover={true}>
            {formatTime(time)}
          </HyperText>
        </div>
        <div className="w-1/3 flex justify-end">
          <HyperText className="py-0 text-[10px] font-normal leading-normal text-white/50 whitespace-nowrap overflow-visible interactive cursor-pointer" animateOnHover={true}>
            {`LON_${coords ? coords.lon : 'DETECTING...'}`}
          </HyperText>
        </div>
      </div>

      <motion.div
        style={{ opacity, y, scale }}
        className="w-full flex flex-col items-center relative z-20 gap-12 md:gap-16"
      >
        {/* Massive text structured for wide headline */}
        <div className="flex flex-col items-center perspective-1000 w-full max-w-[1200px] text-center overflow-visible">
          <h1 ref={title1Ref} style={{ fontFamily: '"Anton", sans-serif' }} className="text-[5.5vw] sm:text-[4.5vw] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-bold uppercase leading-[1.05] tracking-[0.05em] md:tracking-widest text-white relative z-10 whitespace-nowrap">
            {splitText('DESIGNING EXPERIENCES')}
          </h1>
          <div ref={title2Ref} className="w-full max-w-[800px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[90px] mt-[-25px] md:mt-[-40px] lg:mt-[-55px] relative z-10 flex justify-center items-center">
            <TextHoverEffect text="THAT FEEL EFFORTLESS." />
          </div>
        </div>

        <div ref={elementsRef} className="flex flex-col items-center w-full gap-8 md:gap-12">

          <p className="text-xs md:text-sm text-white/60 max-w-2xl font-mono uppercase leading-[2.2] tracking-widest px-4">
            I’m <span className="text-white font-bold tracking-[0.2em]">Jerin S Reji</span> — a UX Designer & UI Developer crafting intuitive, high-performance digital products that balance aesthetics with usability.
          </p>

          <NeuButton />

        </div>
      </motion.div>

      {/* --- Creative Architectural Grid Framework --- */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-70 z-30">

        {/* --- HORIZONTAL GRID LINES --- */}
        <div className="w-[100vw] h-px bg-white/10 absolute top-[20%] overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 h-[300px] w-[50vw] left-[-50%] rounded-full opacity-70 z-0"
            style={{ background: `radial-gradient(circle, #e4ff4e, transparent 10%)`, animation: 'star-movement-top 6s linear infinite alternate' }} />
        </div>
        <div className="w-[100vw] h-px bg-white/10 absolute top-[40%] overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 h-[300px] w-[50vw] right-[-50%] rounded-full opacity-70 z-0"
            style={{ background: `radial-gradient(circle, rgba(228,255,78,0.6), transparent 10%)`, animation: 'star-movement-bottom 8s linear infinite alternate' }} />
        </div>
        <div className="w-[100vw] h-px bg-white/10 absolute top-[60%] overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 h-[300px] w-[50vw] left-[-50%] rounded-full opacity-70 z-0"
            style={{ background: `radial-gradient(circle, #e4ff4e, transparent 10%)`, animation: 'star-movement-top 7s linear infinite alternate' }} />
        </div>
        <div className="w-[100vw] h-px bg-white/10 absolute top-[80%] overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 h-[300px] w-[50vw] right-[-50%] rounded-full opacity-70 z-0"
            style={{ background: `radial-gradient(circle, rgba(228,255,78,0.6), transparent 10%)`, animation: 'star-movement-bottom 5s linear infinite alternate' }} />
        </div>

        {/* --- VERTICAL GRID LINES --- */}
        <div className="h-[100vh] w-px bg-white/10 absolute left-[20%] hidden md:block overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[50vh] top-[-50%] rounded-full opacity-50 z-0"
            style={{ background: `radial-gradient(circle, #e4ff4e, transparent 10%)`, animation: 'star-movement-y-down 7s linear infinite alternate' }} />
        </div>
        <div className="h-[100vh] w-px bg-white/10 absolute left-[40%] hidden md:block overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[50vh] bottom-[-50%] rounded-full opacity-50 z-0"
            style={{ background: `radial-gradient(circle, rgba(228,255,78,0.6), transparent 10%)`, animation: 'star-movement-y-up 9s linear infinite alternate' }} />
        </div>
        <div className="h-[100vh] w-px bg-white/10 absolute left-[60%] hidden md:block overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[50vh] top-[-50%] rounded-full opacity-50 z-0"
            style={{ background: `radial-gradient(circle, #e4ff4e, transparent 10%)`, animation: 'star-movement-y-down 5s linear infinite alternate' }} />
        </div>
        <div className="h-[100vh] w-px bg-white/10 absolute left-[80%] hidden md:block overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[50vh] bottom-[-50%] rounded-full opacity-50 z-0"
            style={{ background: `radial-gradient(circle, rgba(228,255,78,0.6), transparent 10%)`, animation: 'star-movement-y-up 6s linear infinite alternate' }} />
        </div>

        {/* Intersection Crosses [+] */}
        {[20, 40, 60, 80].map((top) =>
          [20, 40, 60, 80].map((left) => (
            <div
              key={`${top}-${left}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 hidden md:block text-white/50 text-[10px] font-mono"
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              +
            </div>
          ))
        )}



      </div>

      <Pointer color="#e4ff4e" />
    </section>
  );
};
