'use client';
import { useState, useRef, useEffect } from 'react';
import { Challenge, getRandomChallenge } from '@/lib/questions';
import ActionCard from '@/component/ActionCard';
import TruthCard from '@/component/TruthCard';

export default function Home() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [showChoice, setShowChoice] = useState(true);
  const [wheelRotation, setWheelRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const handleNewChallenge = (type: 'action' | 'truth') => {
    // Animation de disparition
    setShowChoice(false);
    
    // Rotation de la roulette
    const rotations = 5; // Nombre de tours complets
    const targetRotation = wheelRotation + 360 * rotations + (type === 'action' ? 0 : 180);
    setWheelRotation(targetRotation);
    
    // Délai pour synchroniser avec l'animation
    setTimeout(() => {
      setCurrentChallenge(getRandomChallenge(type));
    }, 2000);
  };

  const resetChallenge = () => {
    setCurrentChallenge(null);
    setTimeout(() => setShowChoice(true), 500);
  };

  useEffect(() => {
    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${wheelRotation}deg)`;
    }
  }, [wheelRotation]);

  return (
    <main className="main-container">
      {/* Roulette animée en arrière-plan */}
      <div className="wheel-bg">
        <div className="wheel" ref={wheelRef}>
          <div className="wheel-section action"></div>
          <div className="wheel-section truth"></div>
          <div className="wheel-center"></div>
        </div>
        <div className="wheel-pointer"></div>
      </div>

      {/* Contenu principal */}
      <div className={`content ${currentChallenge ? 'challenge-active' : ''}`}>
        <h1 className="title"></h1>
        
        {!currentChallenge ? (
          <div className={`choice-container ${showChoice ? 'visible' : 'hidden'}`}>
            <button 
              className="choice-btn action-btn"
              onClick={() => handleNewChallenge('action')}
            >
              ACTION
            </button>
            <button 
              className="choice-btn truth-btn"
              onClick={() => handleNewChallenge('truth')}
            >
              VÉRITÉ
            </button>
          </div>
        ) : (
          <div className="challenge-container">
            {currentChallenge.type === 'action' ? (
              <ActionCard challenge={currentChallenge} />
            ) : (
              <TruthCard challenge={currentChallenge} />
            )}
            
            <button className="reset-btn" onClick={resetChallenge}>
              Nouveau défi
            </button>
          </div>
        )}
      </div>
    </main>
  );
}