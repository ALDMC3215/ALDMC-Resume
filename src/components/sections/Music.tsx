import React, { useRef, useState } from 'react';
import { ExternalLink, Pause, Play } from 'lucide-react';
import { Heading } from '../ui/Heading';
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
    <section id="music" className="section" aria-labelledby="music-title">
      <div className="container">
        <Heading
          id="music-title"
          title="موسیقی و آثار خلاقانه"
          sub="قطعات صوتی اورجینال خلق شده با هوش مصنوعی (Suno و Google AI Audio) با تمرکز بر فضاسازی، ریتم و هارمونی مدرن"
        />

        <ul className="works works--tracks">
          {musicTracksData.map(t => {
            const isPlaying = playing === t.id;
            return (
              <li key={t.id}>
                <button
                  type="button"
                  className={`work${isPlaying ? ' is-playing' : ''}`}
                  onClick={() => toggle(t.id, t.audioUrl)}
                  aria-pressed={isPlaying}
                  aria-label={`${isPlaying ? 'توقف' : 'پخش'} ${t.title}`}
                >
                  <span className="work__media">
                    {t.coverImage && <img src={t.coverImage} alt="" width={415} height={415} loading="lazy" decoding="async" />}
                    <span className="work__play" aria-hidden="true">
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </span>
                    <span className="work__bar" aria-hidden="true">
                      <span style={{ width: isPlaying ? `${progress * 100}%` : '0%' }} />
                    </span>
                  </span>
                  <span className="work__caption">
                    <span className="work__title lt">{t.title}</span>
                    <span className="work__cat lt">
                      {t.genre} · <span dir="rtl">{toFa(t.year)}</span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

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

        <p className="music__note">کلیه قطعات با ابزارهای هوش مصنوعی ساخته شده و جهت نمایش در پورتفولیو گردآوری شده‌اند.</p>
        <div className="music__cta">
          <a href={SUNO_URL} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">
            <span>ALDMC Music Lab در Suno</span>
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;
