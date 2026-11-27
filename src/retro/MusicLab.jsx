import { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Pause, Play, Search, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import './music-lab.scss';

function clock(seconds) {
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}

export function MusicLab({ tracks }) {
  const audio = useRef(null);
  const sourceId = useRef(null);
  const requestId = useRef(0);
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState('');
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const active = tracks[index];
  const total = duration || active.durationSeconds;
  const search = query.trim().toLowerCase();
  const visible = tracks
    .map((track, position) => ({ track, position }))
    .filter(({ track }) => `${track.title} ${track.genre}`.toLowerCase().includes(search));

  function playTrack(position) {
    const element = audio.current;
    const track = tracks[position];
    if (!track) return;
    const request = ++requestId.current;
    setFailed(false);

    if (sourceId.current !== track.id) {
      sourceId.current = track.id;
      setIndex(position);
      setElapsed(0);
      setDuration(0);
      element.src = track.audioUrl;
    } else if (element.error) {
      element.load();
    }

    element.play().catch(error => {
      if (request === requestId.current && error.name !== 'AbortError') setFailed(true);
    });
  }

  function toggleTrack(position) {
    if (position === index && !audio.current.paused) {
      audio.current.pause();
    } else {
      playTrack(position);
    }
  }

  function seek(event) {
    const seconds = Number(event.target.value);
    audio.current.currentTime = seconds;
    setElapsed(seconds);
  }

  function adjustVolume(event) {
    audio.current.volume = Number(event.target.value);
    audio.current.muted = false;
  }

  return (
    <section className="section music paper-edge" id="music" aria-labelledby="music-title" data-scene>
      <Container className="frame">
        <h2 id="music-title" className="script-title" lang="en" dir="ltr" data-reveal>Music Lab</h2>
        <div className="music-deck" dir="ltr" lang="en">
          <div className="music-deck__player">
            <div className="music-deck__artwork">
              <span className={playing ? 'music-deck__vinyl is-playing' : 'music-deck__vinyl'} aria-hidden="true" />
              <img className="music-deck__cover" src={active.coverImage}
                alt="" width="560" height="560" loading="lazy" />
            </div>
            <div className="music-deck__now">
              <h3>{active.title}</h3>
              <p>ALDMC · {active.genre}</p>
            </div>
            <div className="music-deck__timeline">
              <span aria-hidden="true">{clock(elapsed)}</span>
              <input type="range" min={0} max={Math.max(1, Math.ceil(total))} step=".1"
                value={elapsed} disabled={!duration} aria-label="Playback position"
                aria-valuetext={`${clock(elapsed)} of ${clock(total)}`} onChange={seek} />
              <span aria-hidden="true">{clock(total)}</span>
            </div>
            <div className="music-deck__transport">
              <button type="button" disabled={index === 0} aria-label="Previous track"
                onClick={() => playTrack(index - 1)}><SkipBack size={21} aria-hidden="true" /></button>
              <button type="button" className="music-deck__play" aria-label={playing ? 'Pause' : 'Play'}
                onClick={() => toggleTrack(index)}>
                {playing ? <Pause size={25} fill="currentColor" aria-hidden="true" /> : <Play size={25} fill="currentColor" aria-hidden="true" />}
              </button>
              <button type="button" disabled={index === tracks.length - 1} aria-label="Next track"
                onClick={() => playTrack(index + 1)}><SkipForward size={21} aria-hidden="true" /></button>
            </div>
            <div className="music-deck__volume">
              <button type="button" aria-label={muted ? 'Unmute' : 'Mute'} onClick={() => { audio.current.muted = !muted; }}>
                {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
              </button>
              <input type="range" min={0} max={1} step=".05" value={muted ? 0 : volume}
                aria-label="Volume" onChange={adjustVolume} />
            </div>
            {failed && <p className="music-deck__error" role="status">Playback failed. Press play to try again.</p>}
            <audio ref={audio} preload="none"
              onLoadedMetadata={event => {
                const length = event.currentTarget.duration;
                if (Number.isFinite(length)) setDuration(length);
              }}
              onTimeUpdate={event => setElapsed(event.currentTarget.currentTime)}
              onVolumeChange={event => { setVolume(event.currentTarget.volume); setMuted(event.currentTarget.muted); }}
              onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)}
              onEnded={() => { setPlaying(false); if (index < tracks.length - 1) playTrack(index + 1); }}
              onError={() => { setPlaying(false); setFailed(true); }} />
          </div>

          <section className="music-deck__queue" aria-labelledby="music-collection-title">
            <header className="music-deck__library">
              <h3 id="music-collection-title">ALDMC Studio</h3>
              <p>{tracks.length} tracks</p>
            </header>
            <label className="music-deck__search">
              <Search size={17} aria-hidden="true" />
              <input type="search" aria-label="Filter by title or genre" placeholder="Find a track"
                value={query} onChange={event => setQuery(event.target.value)} />
            </label>
            <ul className="music-deck__tracks" aria-label="Track listing">
              {visible.map(({ track, position }) => {
                const selected = position === index;
                return (
                  <li key={track.id}>
                    <button type="button" className="music-deck__track" aria-current={selected || undefined}
                      aria-label={`${selected && playing ? 'Pause' : 'Play'} ${track.title}`}
                      onClick={() => toggleTrack(position)}>
                      {selected && playing ? <Pause size={16} aria-hidden="true" /> : <span className="music-deck__index">{String(position + 1).padStart(2, '0')}</span>}
                      <img src={track.coverImage} alt="" width="43" height="43" loading="lazy" />
                      <span className="music-deck__track-copy"><strong>{track.title}</strong><small>{track.genre}</small></span>
                      <time dateTime={`PT${track.durationSeconds}S`}>{clock(track.durationSeconds)}</time>
                    </button>
                  </li>
                );
              })}
            </ul>
            {!visible.length && <p className="music-deck__empty" role="status">No matching tracks.</p>}
          </section>
        </div>
      </Container>
    </section>
  );
}
