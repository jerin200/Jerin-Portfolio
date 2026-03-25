import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TextType from '../components/ui/TextType';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleSentenceComplete = useCallback((_sentence: string, index: number) => {
    // There are 3 sentences (indices 0, 1, 2)
    // When the last one stops typing, we wait briefly then navigate.
    if (index === 2) {
      setTimeout(() => {
        navigate('/home', { replace: true });
      }, 1500); // 1.5 seconds pause after last sentence
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-[#00ff41]" style={{ fontFamily: '"JetBrains Mono", "Space Mono", monospace' }}>
      <div className="text-2xl md:text-3xl font-bold tracking-widest uppercase">
        <TextType
          text={["Loading…", "Crafting experience…", "Almost ready…"]}
          typingSpeed={80}
          pauseDuration={1000}
          showCursor
          cursorCharacter="█"
          cursorBlinkDuration={0.4}
          loop={false}
          onSentenceComplete={handleSentenceComplete}
        />
      </div>
    </div>
  );
};
