import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import GameScreen from './components/GameScreen';
import LevelsScreen from './components/LevelsScreen';
import HowToPlayModal from './components/HowToPlayModal';
import SettingsModal from './components/SettingsModal';
import { soundManager } from './utils/sounds';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'game' | 'levels'>('landing');
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Audio settings state
  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem('soundEnabled') !== 'false';
  });
  const [volume, setVolume] = useState(() => {
    return parseFloat(localStorage.getItem('volume') || '1');
  });

  // Level progress state
  const [completedLevels, setCompletedLevels] = useState<Record<number, { completed: boolean; stars: number }>>(() => {
    const saved = localStorage.getItem('completedLevels');
    return saved ? JSON.parse(saved) : {};
  });
  const [unlockedLevel, setUnlockedLevel] = useState(() => {
    const saved = localStorage.getItem('unlockedLevel');
    return saved ? parseInt(saved) : 1;
  });

  // Debug log to verify app is mounting
  useEffect(() => {
    console.log('✅ BrainFlip App mounted successfully!');
    console.log('Current screen:', currentScreen);
    
    // Clean up old username and profile pic data from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('profilePic');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
  }, []);

  // Initialize sound manager
  useEffect(() => {
    soundManager.setMuted(!soundEnabled);
    soundManager.setVolume(volume);
  }, [soundEnabled, volume]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('soundEnabled', soundEnabled.toString());
  }, [soundEnabled]);

  useEffect(() => {
    localStorage.setItem('volume', volume.toString());
  }, [volume]);

  // Save level progress to localStorage
  useEffect(() => {
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
  }, [completedLevels]);

  useEffect(() => {
    localStorage.setItem('unlockedLevel', unlockedLevel.toString());
  }, [unlockedLevel]);

  const handleStartGame = () => {
    setCurrentScreen('game');
  };

  const handleLevelSelect = (level: number) => {
    setSelectedLevel(level);
    setCurrentScreen('game');
  };

  const handleBackToLanding = () => {
    setCurrentScreen('landing');
  };

  const handleNextLevel = () => {
    setSelectedLevel(prev => Math.min(prev + 1, 15));
    setCurrentScreen('game');
  };

  const handleGoToLevels = () => {
    setCurrentScreen('levels');
  };

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleLevelComplete = (level: number, stars: number) => {
    // Mark level as completed
    const newCompletedLevels = {
      ...completedLevels,
      [level]: { completed: true, stars }
    };
    setCompletedLevels(newCompletedLevels);
    
    // Unlock next level if not already unlocked
    const newUnlockedLevel = level >= unlockedLevel ? Math.min(level + 1, 15) : unlockedLevel;
    if (newUnlockedLevel !== unlockedLevel) {
      setUnlockedLevel(newUnlockedLevel);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] flex items-center justify-center p-4">
      <div className="w-full max-w-[1440px] aspect-[16/10] bg-gradient-to-b from-[#eccaff] to-[#674ce0] rounded-2xl shadow-2xl overflow-hidden relative">
        {currentScreen === 'landing' && (
          <LandingPage
            onStartGame={handleStartGame}
            onShowLevels={() => setCurrentScreen('levels')}
            onShowHowToPlay={() => setShowHowToPlay(true)}
            onShowSettings={() => setShowSettings(true)}
          />
        )}
        {currentScreen === 'game' && (
          <GameScreen
            level={selectedLevel}
            onBackToMenu={handleBackToLanding}
            onNextLevel={handleNextLevel}
            onLevelsPage={handleGoToLevels}
            onLevelComplete={handleLevelComplete}
          />
        )}
        {currentScreen === 'levels' && (
          <LevelsScreen
            onSelectLevel={handleLevelSelect}
            onBack={handleBackToLanding}
            completedLevels={completedLevels}
            unlockedLevel={unlockedLevel}
          />
        )}
        {showHowToPlay && (
          <HowToPlayModal onClose={() => setShowHowToPlay(false)} />
        )}
        {showSettings && (
          <SettingsModal
            onClose={() => setShowSettings(false)}
            soundEnabled={soundEnabled}
            onSoundToggle={handleSoundToggle}
            volume={volume}
            onVolumeChange={handleVolumeChange}
          />
        )}
      </div>
    </div>
  );
}