import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Dùng react-icons cho biểu tượng loa

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("/song/TaLaCuaNhau.mp3")); // Đường dẫn đến file âm thanh

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause(); // Dừng nhạc
    } else {
      audio.play(); // Phát nhạc
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="absolute w-12 h-12 p-2 bg-pink-400 rounded-full shadow-xl cursor-pointer bottom-5 right-5"
      onClick={toggleMusic}
    >
      {isPlaying ? (
        <FaVolumeUp size={30} color="white" />
      ) : (
        <FaVolumeMute size={30} color="white" />
      )}
    </div>
  );
};
// bug khi dong modal van chay nhac
export default MusicPlayer;
