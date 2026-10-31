import React, { useState, useRef } from 'react';
import { resumeData, MusicTrackItem } from '../../data';
import { Play, Pause, Volume2, Sparkles } from 'lucide-react';

export const AiShowcase: React.FC = () => {
  const { musicTracks } = resumeData;
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeTrack = musicTracks.find((t) => t.id === activeTrackId);

  const handleTrackToggle = (track: MusicTrackItem) => {
    if (activeTrackId === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    } else {
      setActiveTrackId(track.id);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.audioUrl;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const cur = audioRef.current.currentTime;
      const dur = audioRef.current.duration || 1;
      setCurrentTime(cur);
      setProgress((cur / dur) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      audioRef.current.currentTime = pct * duration;
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const formatTime = (sec: number) => {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section className="section-wrapper ai-showcase-section" id="ai-showcase">
      <div className="container">
        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={activeTrack?.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleAudioEnded}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          preload="none"
        />

        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">CREATIVE LAB · SOUND DESIGN</span>
          <h2 className="section-title">موسیقی و آثار خلاقانه ALDMC</h2>
          <p className="section-desc">
            قطعات صوتی اورجینال خلق شده با هوش مصنوعی (Suno و Google Flow Music) با تمرکز بر فضاسازی، ریتم و هارمونی مدرن.
          </p>
        </div>

        {/* Minimal Typography-Based Music Portfolio (Strictly Zero Images) */}
        <div className="music-portfolio-container card-editorial">
          {/* Header Row */}
          <div className="music-list-header">
            <div className="music-header-col col-idx">#</div>
            <div className="music-header-col col-title">عنوان قطعه و مشخصات</div>
            <div className="music-header-col col-genre">سبک / فضا</div>
            <div className="music-header-col col-year">سال</div>
            <div className="music-header-col col-action">پخش آزمایشی</div>
          </div>

          {/* Track Rows */}
          <div className="music-list-body">
            {musicTracks.map((track, idx) => {
              const isCurrent = activeTrackId === track.id;
              const isTrackPlaying = isCurrent && isPlaying;

              return (
                <div
                  key={track.id}
                  className={`music-track-row ${isCurrent ? 'is-active' : ''}`}
                >
                  <div className="music-track-main">
                    {/* Index */}
                    <div className="music-cell col-idx">
                      <span className="track-number font-latin">0{idx + 1}</span>
                    </div>

                    {/* Title & Info */}
                    <div className="music-cell col-title">
                      <div className="track-meta">
                        <div className="track-title-line">
                          <button
                            type="button"
                            onClick={() => handleTrackToggle(track)}
                            className="track-title-btn font-latin"
                          >
                            {track.title}
                          </button>
                          {isTrackPlaying && (
                            <span className="track-playing-indicator">
                              <Volume2 size={13} className="animate-pulse text-brand-orange" />
                              <span className="text-[11px] text-brand-orange font-latin font-bold">LIVE</span>
                            </span>
                          )}
                        </div>
                        {track.description && (
                          <p className="track-desc">{track.description}</p>
                        )}
                      </div>
                    </div>

                    {/* Genre */}
                    <div className="music-cell col-genre">
                      <span className="track-genre-tag font-latin">{track.genre}</span>
                    </div>

                    {/* Year */}
                    <div className="music-cell col-year">
                      <span className="track-year font-latin">{track.year}</span>
                    </div>

                    {/* Play/Pause Control */}
                    <div className="music-cell col-action">
                      <button
                        type="button"
                        onClick={() => handleTrackToggle(track)}
                        className={`track-action-btn ${isTrackPlaying ? 'is-playing' : ''}`}
                        aria-label={isTrackPlaying ? `توقف ${track.title}` : `پخش ${track.title}`}
                      >
                        {isTrackPlaying ? (
                          <Pause size={14} />
                        ) : (
                          <Play size={14} className="translate-x-[1px]" />
                        )}
                        <span className="action-btn-text">
                          {isTrackPlaying ? 'توقف' : 'پخش'}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Inline Audio Scrubber Bar (Only visible when this track is active) */}
                  {isCurrent && (
                    <div className="track-scrubber-row">
                      <span className="scrubber-time font-latin">{formatTime(currentTime)}</span>
                      <div
                        className="scrubber-track"
                        onClick={handleSeek}
                        role="slider"
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="نوار زمان آهنگ"
                      >
                        <div
                          className="scrubber-fill"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="scrubber-time font-latin">{formatTime(duration)}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="music-portfolio-footer">
            <div className="music-footer-info">
              <Sparkles size={14} className="text-brand-orange" />
              <span>کلیه قطعات با ابزارهای هوش مصنوعی ساخته شده و جهت نمایش در پورتفولیو گردآوری شده‌اند.</span>
            </div>
            <span className="font-latin text-xs text-[var(--muted)]">ALDMC SOUND LAB · 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
