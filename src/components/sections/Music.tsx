import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ExternalLink, Pause, Play } from 'lucide-react';
import { MediaCard } from '../ui/MediaCard';
import { CardGrid } from '../ui/CardGrid';
import { ResumeSection } from '../ui/ResumeSection';
import { musicTracksData } from '../../data/projects';
import { toFa } from '../../utils/fa';

/** The only Suno link currently in the project. */
const SUNO_URL = 'https://suno.com';

/** Real tracks and cover art from /public/music. Audio loads only when played. */
export const Music: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const toggle = (id: string, src: string) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing === id) {
      audio.pause();
      setPlaying(null);
      return;
    }
    audio.src = src;
    setProgress(0);
    audio
      .play()
      .then(() => setPlaying(id))
      .catch(() => setPlaying(null));
  };

  return (
    <ResumeSection
      id="music"
      title="موسیقی و آثار خلاقانه"
      sub="قطعات صوتی اورجینال خلق شده با هوش مصنوعی (Suno و Google AI Audio) با تمرکز بر فضاسازی، ریتم و هارمونی مدرن"
    >
      <CardGrid xs={1} sm={2} xxl={4} className="works--tracks">
        {musicTracksData.map(t => {
          const isPlaying = playing === t.id;
          return (
            <MediaCard
              key={t.id}
              title={<span className="lt">{t.title}</span>}
              caption={<>{t.genre} · <span dir="rtl">{toFa(t.year)}</span></>}
              className={isPlaying ? 'is-playing' : ''}
              onClick={() => toggle(t.id, t.audioUrl)}
              aria-pressed={isPlaying}
              aria-label={`${isPlaying ? 'توقف' : 'پخش'} ${t.title}`}
            >
              {t.coverImage && <img src={t.coverImage} alt="" width={415} height={415} loading="lazy" decoding="async" />}
              <span className="position-absolute d-grid work__play" aria-hidden="true">
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </span>
              <span className="position-absolute work__bar" aria-hidden="true">
                <span style={{ width: isPlaying ? `${progress * 100}%` : '0%' }} />
              </span>
            </MediaCard>
          );
        })}
      </CardGrid>

      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={e => {
          const a = e.currentTarget;
          if (a.duration) setProgress(a.currentTime / a.duration);
        }}
        onEnded={() => {
          setPlaying(null);
          setProgress(0);
        }}
      />

      <p className="text-center music__note">کلیه قطعات با ابزارهای هوش مصنوعی ساخته شده و جهت نمایش در پورتفولیو گردآوری شده‌اند.</p>
      <div className="d-flex justify-content-center music__cta">
        <Button href={SUNO_URL} target="_blank" rel="noopener noreferrer" variant="outline-primary" size="sm">
          <span>ALDMC Music Lab در Suno</span>
          <ExternalLink size={16} aria-hidden="true" />
        </Button>
      </div>
    </ResumeSection>
  );
};

export default Music;
