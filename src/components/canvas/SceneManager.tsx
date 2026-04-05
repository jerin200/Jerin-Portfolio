import { useEffect, useState } from 'react';

export const SceneManager = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
      {/* CSS-based grain instead of heavy SVG Noise Filter */}
      <div
        className="absolute inset-0 z-10 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url("/noise.svg")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#020202_100%)] opacity-80" />

      {/* HUD Reticle */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center opacity-[0.03]">
        <div className="w-[60vh] h-[60vh] border-[0.5px] border-white rounded-full relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-4 bg-white" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1px] h-4 bg-white" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[1px] w-4 bg-white" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-[1px] w-4 bg-white" />
        </div>
      </div>
    </div>
  );
};
