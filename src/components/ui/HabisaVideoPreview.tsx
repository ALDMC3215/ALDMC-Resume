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
    // Check user preference for reduced motion
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
            // Play silently once per page visit
            if (!hasPlayedOnce) {
              video.muted = true;
              video
                .play()
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {
                  // Autoplay blocked by browser policy
                  setIsPlaying(false);
                });
            }
          } else {
            // Pause when out of view
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
      className="habisa-video-wrapper relative w-full h-full overflow-hidden bg-black flex items-center justify-center cursor-pointer group"
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
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        aria-label={title}
      />

      {/* Tasteful watermark overlay */}
      <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 pointer-events-none select-none">
        <span className="font-latin text-[10px] tracking-wider text-white/80 uppercase font-semibold">
          {watermarkText}
        </span>
      </div>

      {/* Subtle play/pause indicator overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl text-white">
            <svg
              className="w-5 h-5 translate-x-[-1px]"
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
