import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextType from '../components/ui/TextType';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  // after a short delay, navigate to the home page
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // 3 seconds, adjust as needed
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <TextType
        text={["Welcome to Jerin's Portfolio", "Explore my work", "Enjoy the experience!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        cursorBlinkDuration={0.5}
        loop={false}
      />
    </div>
  );
};
