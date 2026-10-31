import React, { useRef, useEffect, useState } from 'react';

interface HabisaVideoPreviewProps {
  videoSrc: string;
  posterSrc: string;
  watermarkText?: string;
  title: string;
}

export const HabisaVideoPreview: React.FC<HabisaVideoPreviewProps> = ({
  videoSrc,
  posterSrc,
  watermarkText = 'HABISA / PORTFOLIO DEMO',
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            if (!hasPlayedOnce) {
              video.muted = true;
              video
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            }
          } else {
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasPlayedOnce, prefersReducedMotion]);

  const handleEnded = () => {
    setHasPlayedOnce(true);
    setIsPlaying(false);
  };

  const handleManualPlayToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = true;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="habisa-video-wrapper"
      onClick={handleManualPlayToggle}
      title="کلیک برای پخش یا توقف ویدیو"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onEnded={handleEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        className="habisa-video-element"
        aria-label={title}
      />

      {/* Watermark overlay */}
      <div className="habisa-watermark">
        <span className="habisa-watermark-text font-latin">
          {watermarkText}
        </span>
      </div>

      {/* Subtle play/pause indicator overlay */}
      {!isPlaying && (
        <div className="habisa-play-overlay">
          <div className="habisa-play-btn">
            <svg
              style={{ width: '18px', height: '18px', transform: 'translateX(-1px)' }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
