import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, MoreVertical } from 'lucide-react';

export default function YouTubeStylePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const controlsTimeout = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleEnd = () => setIsPlaying(false);
    
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnd);
    
    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnd);
    };
  }, []);
  
  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);
  
  useEffect(() => {
    videoRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    videoRef.current.currentTime = newTime;
  };
  
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen();
      } else if (playerRef.current.webkitRequestFullscreen) {
        playerRef.current.webkitRequestFullscreen();
      } else if (playerRef.current.msRequestFullscreen) {
        playerRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };
  
  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };
  
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div 
      className="relative w-full lg:w-[58%] md:w-[90%] h-72 md:h-[26rem] lg:h-[30rem] mx-auto" 
      ref={playerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src="/video/about-video.mp4"
        className="w-full h-full object-cover"
        onClick={handlePlayPause}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* YouTube-style overlay play button */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={handlePlayPause}
            className="bg-red-600 text-white rounded-full p-4 opacity-90 hover:opacity-100"
          >
            <Play size={24} />
          </button>
        </div>
      )}
      
      {/* Controls overlay */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress bar */}
        <div className="relative w-full group">
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-1 bg-gray-400 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #f00 ${(currentTime / duration) * 100}%, #6b7280 ${(currentTime / duration) * 100}%)`,
            }}
          />
          <div className="h-2 w-full absolute -top-0.5 opacity-0 group-hover:opacity-100"></div>
        </div>
        
        {/* Controls row */}
        <div className="flex items-center justify-between mt-1 text-white">
          <div className="flex items-center gap-4">
            <button onClick={handlePlayPause} className="p-1 hover:bg-white/20 rounded-full">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <div className="flex items-center">
              <button onClick={toggleMute} className="p-1 hover:bg-white/20 rounded-full">
                {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <div className="relative w-16 mx-2 hidden md:block">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 bg-gray-400 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #fff ${volume * 100}%, #6b7280 ${volume * 100}%)`,
                  }}
                />
              </div>
            </div>
            
            <div className="text-sm">
              {formatTime(currentTime)} / {formatTime(duration || 0)}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={toggleFullscreen} className="p-1 hover:bg-white/20 rounded-full">
              <Maximize size={20} />
            </button>
            <button className="p-1 hover:bg-white/20 rounded-full">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}