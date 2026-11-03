import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, Pause, Volume2 } from 'lucide-react';
import { MusicTrackItem } from '../../data';
import { ElasticSlider } from './ElasticSlider';

interface TestimonialsCardProps {
  items: MusicTrackItem[];
  className?: string;
  width?: number;
}

export const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  items,
  className = '',
  width = 720,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeItem = items[activeIndex];

  // Mirrored navigation for Persian RTL:
  // In RTL, moving forward in list (Next) means going visually to the left.
  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setDirection(1);
      setActiveIndex(activeIndex + 1);
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex(activeIndex - 1);
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (newVal: number) => {
    setVolume(newVal);
    if (audioRef.current) {
      audioRef.current.volume = newVal / 100;
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !activeItem) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current.src !== activeItem.audioUrl) {
        audioRef.current.src = activeItem.audioUrl;
      }
      audioRef.current.volume = volume / 100;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Pre-calculate rotations for stack cards
  const rotations = useMemo(() => [4, -2, -6, 5], []);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`testimonials-music-wrapper ${className}`}>
      {/* Audio element */}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div
        className="testimonials-music-grid"
        style={{
          perspective: '1400px',
          maxWidth: `${width}px`,
        }}
      >
        {/* Counter */}
        <div className="testimonials-counter font-latin">
          {activeIndex + 1} / {items.length}
        </div>

        {/* 3D Stacked Image Card */}
        <div className="testimonials-stack-container">
          <AnimatePresence custom={direction}>
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              const offset = index - activeIndex;

              return (
                <motion.div
                  key={item.id}
                  className="testimonials-stack-card"
                  initial={{
                    x: offset * -15, // RTL mirrored offset
                    y: Math.abs(offset) * 6,
                    z: -150 * Math.abs(offset),
                    scale: 0.85 - Math.abs(offset) * 0.04,
                    rotateZ: rotations[index % 4],
                    opacity: isActive ? 1 : 0.5,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  animate={
                    isActive
                      ? {
                          x: [offset * -15, direction === 1 ? 200 : -200, 0],
                          y: [Math.abs(offset) * 6, 0, 0],
                          z: [-200, 150, 250],
                          scale: [0.85, 1.05, 1],
                          rotateZ: [rotations[index % 4], 5, 0],
                          opacity: 1,
                          zIndex: 100,
                        }
                      : {
                          x: offset * -15,
                          y: Math.abs(offset) * 6,
                          z: -150 * Math.abs(offset),
                          rotateZ: rotations[index % 4],
                          scale: 0.85 - Math.abs(offset) * 0.04,
                          opacity: 0.55,
                          zIndex: 10 - Math.abs(offset),
                        }
                  }
                  exit={{
                    x: direction === 1 ? 250 : -250,
                    z: -260,
                    scale: 0.75,
                    rotateZ: direction === 1 ? 10 : -10,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="testimonials-cover-img"
                    draggable={false}
                  />

                  {/* Persimmon Play Button Overlay on Active Card */}
                  {isActive && (
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="testimonials-card-play-btn"
                      aria-label={isPlaying ? 'توقف پخش' : 'پخش قطعه'}
                    >
                      {isPlaying ? <Pause size={22} /> : <Play size={22} className="translate-x-0.5" />}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Text Area */}
        <div className="testimonials-text-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
            >
              <div className="testimonials-track-genre font-latin">
                {activeItem.genre} · {activeItem.year}
              </div>
              <h3 className="testimonials-track-title font-latin">
                {activeItem.title}
              </h3>
              <p className="testimonials-track-desc">
                {activeItem.description}
              </p>

              {/* Live Playback Indicator */}
              {isPlaying && (
                <div className="testimonials-live-badge font-latin">
                  <Volume2 size={14} className="animate-pulse text-brand-orange" />
                  <span>PLAYING VIA ALDMC SOUND LAB</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Interactive React Bits Elastic Slider (Styled with ALDMC Persimmon) */}
          <div className="testimonials-slider-box">
            <div className="testimonials-slider-header font-latin">
              <span className="slider-label">OUTPUT VOLUME</span>
              <span className="slider-current-val">{volume}%</span>
            </div>
            <ElasticSlider
              defaultValue={volume}
              value={volume}
              onChange={handleVolumeChange}
              valuePosition="bubble"
              thumb={true}
              thickness={6}
              activeThickness={12}
              bounce={0.55}
              maxStretch={45}
              trackColor="rgba(255, 255, 255, 0.14)"
              rangeColor="var(--brand-orange, #E76338)"
              iconColor="var(--brand-orange, #E76338)"
              thumbColor="#FFFFFF"
              ariaLabel="تنظیم صدای خروجی"
              className="testimonials-elastic-slider"
            />
          </div>
        </div>

        {/* Navigation Controls: Mirrored Arrows for RTL */}
        <div className="testimonials-nav-controls">
          <button
            disabled={activeIndex === 0}
            onClick={handlePrev}
            className={`testimonials-nav-btn ${
              activeIndex === 0 ? 'is-disabled' : ''
            }`}
            aria-label="قطعه قبلی"
            type="button"
          >
            {/* In RTL, previous points Right */}
            <ArrowRight size={18} />
          </button>
          <button
            disabled={activeIndex === items.length - 1}
            onClick={handleNext}
            className={`testimonials-nav-btn ${
              activeIndex === items.length - 1 ? 'is-disabled' : ''
            }`}
            aria-label="قطعه بعدی"
            type="button"
          >
            {/* In RTL, next points Left */}
            <ArrowLeft size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
