import React, { useState, useRef } from 'react';
import { resumeData, MusicTrackItem } from '../../data';
import { Play, Pause, Music, Volume2 } from 'lucide-react';

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
        {/* Hidden Audio Player */}
        <audio
          ref={audioRef}
          src={activeTrack?.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleAudioEnded}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          preload="metadata"
        />

        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">CREATIVE LAB</span>
          <h2 className="section-title">موسیقی و کاور آرت ALDMC</h2>
          <p className="section-desc">
            کالکشن منتخب از قطعات صوتی اورجینال ساخته شده با هوش مصنوعی همراه با طراحی کاور آرت اختصاصی در ابعاد مینیاتوری و کنترل‌های پخش زنده.
          </p>
        </div>

        {/* Compact Player Status Bar (Visible when a track is active) */}
        {activeTrack && (
          <div className="mb-6 p-4 rounded-xl card-editorial border border-brand-orange/30 bg-brand-orange/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <img
                src={activeTrack.coverImage}
                alt={activeTrack.title}
                className="w-12 h-12 rounded-lg object-cover border border-white/10"
              />
              <div className="truncate">
                <span className="text-xs font-latin uppercase text-brand-orange font-bold block">
                  {isPlaying ? 'در حال پخش' : 'مکث شده'}
                </span>
                <h4 className="font-latin text-sm font-bold truncate text-[var(--text-primary)]">
                  {activeTrack.title}
                </h4>
              </div>
            </div>

            {/* Scrubber & Duration */}
            <div className="flex-1 w-full max-w-md flex items-center gap-3">
              <span className="font-latin text-xs text-[var(--text-muted)] w-10 text-left">
                {formatTime(currentTime)}
              </span>
              <div
                className="flex-1 h-2 bg-[var(--border-subtle)] rounded-full overflow-hidden cursor-pointer relative"
                onClick={handleSeek}
              >
                <div
                  className="h-full bg-brand-orange transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-latin text-xs text-[var(--text-muted)] w-10 text-right">
                {formatTime(duration)}
              </span>
            </div>

            <button
              onClick={() => handleTrackToggle(activeTrack)}
              className="btn btn-primary btn-sm flex items-center gap-2 self-end sm:self-center"
              type="button"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'توقف' : 'پخش'}</span>
            </button>
          </div>
        )}

        {/* Responsive Compact Music Grid (4 columns desktop, 2-3 tablet, 2 mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {musicTracks.map((track) => {
            const isCurrent = activeTrackId === track.id;
            const isTrackPlaying = isCurrent && isPlaying;

            return (
              <div
                key={track.id}
                className={`card-editorial p-3.5 sm:p-4 rounded-xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                  isCurrent
                    ? 'border-brand-orange shadow-md shadow-brand-orange/10'
                    : 'border-[var(--border-subtle)] hover:border-brand-orange/40'
                }`}
              >
                {/* Square Cover Art Container (Strict max 180-200px equivalent) */}
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-black/10 mb-3 group">
                  <img
                    src={track.coverImage}
                    alt={track.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Play Overlay */}
                  <div
                    onClick={() => handleTrackToggle(track)}
                    className={`absolute inset-0 bg-black/50 transition-opacity flex items-center justify-center cursor-pointer ${
                      isTrackPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    title={isTrackPlaying ? 'توقف' : 'پخش قطعه'}
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95">
                      {isTrackPlaying ? (
                        <Pause size={18} />
                      ) : (
                        <Play size={18} className="translate-x-[1px]" />
                      )}
                    </div>
                  </div>

                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[10px] font-latin font-bold bg-black/70 text-white backdrop-blur-sm">
                    {track.year}
                  </span>
                </div>

                {/* Track Details */}
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="font-latin font-bold text-xs sm:text-sm truncate text-[var(--text-primary)]">
                      {track.title}
                    </h4>
                  </div>
                  <span className="font-latin text-[11px] text-[var(--text-muted)] block truncate mb-2">
                    {track.genre}
                  </span>
                </div>

                {/* Card Action Row */}
                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <button
                    onClick={() => handleTrackToggle(track)}
                    className="inline-flex items-center gap-1.5 text-xs text-brand-orange font-semibold hover:underline"
                    type="button"
                  >
                    {isTrackPlaying ? <Volume2 size={13} /> : <Music size={13} />}
                    <span>{isTrackPlaying ? 'توقف' : 'پخش'}</span>
                  </button>
                  <span className="font-latin text-[10px] text-[var(--text-muted)]">
                    ALDMC
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
