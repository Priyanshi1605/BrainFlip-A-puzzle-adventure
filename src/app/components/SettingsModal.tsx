import { X, Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/sounds';

interface SettingsModalProps {
  onClose: () => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export default function SettingsModal({
  onClose,
  soundEnabled,
  onSoundToggle,
  volume,
  onVolumeChange,
}: SettingsModalProps) {
  const handleClose = () => {
    soundManager.playClick();
    onClose();
  };

  const handleVolumeChange = (newVolume: number) => {
    onVolumeChange(newVolume);
    soundManager.playClick();
  };

  const handleSoundToggle = () => {
    onSoundToggle();
    soundManager.playClick();
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1b179a] via-[#674ce0] to-[#9b7fd4] bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-[#eccaff] to-[#9b7fd4] p-8 rounded-3xl shadow-2xl max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-[rgba(91,91,202,0.6)] hover:bg-[rgba(91,91,202,0.8)] p-2 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="font-['Luckiest_Guy:Regular',sans-serif] text-[36px] text-[#1b179a] mb-8 text-center pr-8">
          Settings
        </h2>

        {/* Sound Section */}
        <div className="bg-[rgba(255,255,255,0.2)] p-6 rounded-2xl">
          <h3 className="font-['Luckiest_Guy:Regular',sans-serif] text-[24px] text-[#1b179a] mb-4">
            Audio
          </h3>

          {/* Sound Toggle */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
              <span className="font-['Sansita:Regular',sans-serif] text-[18px]">
                Sound Effects
              </span>
            </div>
            <button
              onClick={handleSoundToggle}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                soundEnabled ? 'bg-[#1b179a]' : 'bg-gray-400'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  soundEnabled ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Volume Control */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-['Sansita:Regular',sans-serif] text-[18px]">
                Volume
              </span>
              <span className="font-['Sansita:Regular',sans-serif] text-[16px] text-[#1b179a] font-bold">
                {Math.round(volume * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              disabled={!soundEnabled}
              className="w-full h-3 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: soundEnabled
                  ? `linear-gradient(to right, #1b179a 0%, #1b179a ${volume * 100}%, rgba(255,255,255,0.5) ${volume * 100}%, rgba(255,255,255,0.5) 100%)`
                  : 'rgba(255,255,255,0.5)',
              }}
            />
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleClose}
            className="bg-[rgba(91,91,202,0.8)] hover:bg-[rgba(91,91,202,1)] px-8 py-3 rounded-[20px] font-['Luckiest_Guy:Regular',sans-serif] text-[18px] transition-colors shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
