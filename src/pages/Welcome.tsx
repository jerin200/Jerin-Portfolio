import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal } from '../components/ui/Terminal';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleComplete = useCallback(() => {
    navigate('/home', { replace: true });
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-950 font-sans">
      <Terminal 
        commands={[
          "npm install @jerin/portfolio",
          "npm run execute --dev",
        ]}
        outputs={{
          0: [
            "installing dependencies...",
            "resolved 154 packages",
            "added 27 packages, and audited 155 packages in 2s",
            "found 0 vulnerabilities"
          ],
          1: [
            "> portfolio@1.0.0 execute",
            "Loading interface components...",
            "Initializing WebGL context...",
            "Mounting virtual DOM...",
            "Connection established."
          ]
        }}
        username="jerin"
        onComplete={handleComplete}
        typingSpeed={40}
        delayBetweenCommands={500}
      />
    </div>
  );
};
