import React, { useEffect, useRef, useState } from 'react';
import { BrandIntro } from '../components/ui/BrandIntro';
import { credentials } from '../data/education';
import { site } from '../data/site';
import { toFa } from '../utils/fa';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { ArrowUp, AudioLines, Code2, Github, Globe2, Instagram, Layers3, Link2, Mail, MessageCircle, Phone, Play, Radio, Send, Sparkles, X } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './retro.scss';
import { categoryLabels, sections } from './content.js';
import { getPortfolio } from './database';
import { reveal } from './motion';
import { AboutNotebook } from './AboutNotebook';

const serviceIcons = { design:Sparkles, web:Code2, media:Play, teaching:Radio };

const heroArtwork = ['terminal', 'film', 'lamp', 'plant', 'notebook'];

function Hero({ profile }) {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Container className="frame hero-layout">
        <div className="hero-copy" data-intro>
          <h1 lang="en" dir="ltr" className="hero-title" id="hero-title">
            Building things<br /> I wish existed
          </h1>
          <p className="hero-name">{profile.name} <span aria-hidden="true">/</span> {profile.role}</p>
          <p className="hero-note">{profile.studioLine}</p>
        </div>
      </Container>
      <div className="hero-collage">
        <div className="hero-actions">
          <Button className="action action-ink hero-action--work" href="#portfolio">دیدن نمونه‌کارها</Button>
          <Button className="action action-outline hero-action--resume" href="#experience">رزومه‌ی من</Button>
        </div>
        <figure className="hero-visual" aria-hidden="true">
          {heroArtwork.map(piece => (
            <img key={piece} className={`hero-art hero-art--${piece}`}
              src={`/brand/hero-cutouts/${piece}.png`} alt=""
              fetchPriority={piece === 'terminal' ? 'high' : undefined} />
          ))}
        </figure>
      </div>
    </section>
  );
}

function SectionHead({ id, title, copy, english }) {
  return <div className="section-head" data-reveal>
    <div><h2 id={id}>{title}</h2>{copy && <p>{copy}</p>}</div>
    <span className="section-en" dir="ltr" lang="en" aria-hidden="true">{english}</span>
  </div>;
}


const illustratedProjects = new Set([
  'shiraz-portal', 'picofy-landing', 'call-manager', 'nader-gold', 'habisa-ai',
  'content-novintech', 'content-picofy', 'aldmc-design-system', 'aldmc-brand', 'aldmc-music',
]);

const coverIcons = { web: Globe2, product: Layers3, ai: Sparkles, brand: Layers3, music: AudioLines };

function ProjectArtwork({ project }) {
  const art = illustratedProjects.has(project.id) ? '/projects/covers/' + project.id : null;
  const Icon = coverIcons[project.category] ?? Layers3;
  return (
    <div className={'project-cover cover-' + project.category} aria-hidden="true">
      {art ? (
        <picture>
          <source media="(max-width: 767px)" srcSet={art + '-mobile.webp'} />
          <img src={art + '-desktop.webp'} width={1136} height={702} alt="" loading="lazy" decoding="async" />
        </picture>
      ) : <Icon className="poster-icon" strokeWidth={1.05} />}
    </div>
  );
}

function Work({ projects }) {
  const [selected, setSelected] = useState(null);
  const trigger = useRef(null);
  return <section className="section work" id="portfolio" aria-labelledby="work-title" data-scene>
    <Container className="frame">
      <SectionHead id="work-title" title="نمونه‌کارهای منتخب" english="SELECTED WORK" copy="طراحی محصول، وب تعاملی و پروژه‌های خلاقانه." />


      <Row xs={1} sm={2} lg={3} className="gx-3 gy-4 project-grid">
        {projects.map(project => <Col key={project.id} data-reveal>
          <button className="project-card" type="button" aria-haspopup="dialog" onClick={event => { trigger.current = event.currentTarget; setSelected(project); }}>
            <ProjectArtwork project={project} />
            <div className="project-meta">
              <div><small>{categoryLabels[project.category]}{project.kind === 'Demo' && ' · دمو'}</small><h3>{project.short || project.title}</h3></div>
              <span className="project-plus" aria-hidden="true">+</span>
            </div>
          </button>
        </Col>)}
      </Row>
    </Container>
    <Modal show={Boolean(selected)} onHide={() => setSelected(null)} onExited={() => trigger.current?.focus()} centered scrollable size="lg" contentClassName="case-panel" aria-labelledby="case-title">
      {selected && <>
        <Modal.Header>
          <Modal.Title id="case-title">{selected.title}</Modal.Title>
          <button className="close-case" type="button" autoFocus aria-label="بستن نمونه‌کار" onClick={() => setSelected(null)}><X size={23} /></button>
        </Modal.Header>
        <Modal.Body>
          <ProjectArtwork project={selected} />
          <p className="case-role">{selected.role}</p><p>{selected.summary}</p>
          {selected.extra && <p>{selected.extra}</p>}
          <ul className="tag-list" lang="en" dir="ltr">{selected.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          {selected.link && <Button className="action action-ink" href={selected.link} target="_blank" rel="noopener noreferrer">باز کردن پروژه</Button>}
        </Modal.Body>
      </>}
    </Modal>
  </section>;
}

function Resume({ profile, experience, services }) {
  return <>
    <section className="section about" id="about" aria-labelledby="about-title" data-scene>
      <Container className="frame">
        <AboutNotebook name={profile.name} />
        <h3 id="services-title" className="services-title">زمینه‌های همکاری</h3>
        <Row xs={1} sm={2} className="gy-3 service-grid" id="services" aria-labelledby="services-title">
          {services.map(service => {
            const Icon = serviceIcons[service.id] || Sparkles;
            return <Col key={service.id} data-reveal><div className="service"><Icon aria-hidden="true" size={25} /><h3>{service.title}</h3><p>{service.copy}</p></div></Col>;
          })}
        </Row>
      </Container>
    </section>
    <section className="section experience" id="experience" aria-labelledby="resume-title" data-scene>
      <Container className="frame">
        <SectionHead id="resume-title" title="سوابق و آموزش" english="RÉSUMÉ" />

        <div className="resume-columns">
          <section aria-labelledby="career-title">
            <h3 id="career-title">سوابق کاری</h3>
            {experience.filter(job => job.id !== 'education').map(job => (
              <details className="job" key={job.id}>
                <summary><strong>{job.title}</strong><span>{job.role}</span></summary>
                <p>{job.copy}</p>
              </details>
            ))}
          </section>
          <section aria-labelledby="education-title">
            <h3 id="education-title">آموزش و تحصیلات</h3>
            {credentials.map(item => (
              <details className="job" key={item.id}>
                <summary><strong>{item.title}</strong><span>{item.organization}</span></summary>
                <p>{item.description} <small>({toFa(item.duration)})</small></p>
              </details>
            ))}
          </section>
        </div>

      </Container>
    </section>
  </>;
}

function Music({ tracks }) {
  const audio = useRef(null);
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  function choose(track) {
    const element = audio.current;
    setFailed(false);
    if (active?.id === track.id && !element.paused) { element.pause(); return; }
    if (active?.id !== track.id) {
      setActive(track);
      element.src = track.audioUrl;
    }
    element.play().catch(error => { if (error.name !== 'AbortError') setFailed(true); });
  }
  return <section className="section music" id="music" aria-labelledby="music-title" data-scene>
    <Container className="frame">
      <SectionHead id="music-title" title="موسیقی ALDMC" english="MUSIC LAB" copy="قطعه‌هایی که با ابزارهای هوش مصنوعی ساختم." />
      <Row className="gy-3 align-items-stretch">
        <Col lg={4} data-reveal>
          <figure className={'record-panel ' + (playing ? 'spinning' : '')}>
            <div className="record" aria-hidden="true"><span>{active?.coverImage && <img src={active.coverImage} alt="" />}</span></div>
            <figcaption><AudioLines size={18} aria-hidden="true" /><bdi>{active?.title || 'ALDMC MUSIC LAB'}</bdi></figcaption>
          </figure>
        </Col>
        <Col lg={8}>
          <div className="tracklist" dir="ltr" lang="en">
            {tracks.map(track => <button key={track.id} type="button" className="track" data-reveal aria-pressed={active?.id === track.id && playing} onClick={() => choose(track)}>
              {track.coverImage ? <img src={track.coverImage} width="54" height="54" alt="" loading="lazy" /> : <Radio size={25} aria-hidden="true" />}
              <span><strong>{track.title}</strong><small>{track.genre}</small></span><span className="track-icon" aria-hidden="true">{active?.id === track.id && playing ? 'Ⅱ' : '▶'}</span>
            </button>)}
          </div>
          <audio className={active ? 'audio-player' : 'audio-player d-none'} ref={audio} controls preload="none" aria-label={active ? 'پخش ' + active.title : 'پخش موسیقی'} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={() => { setPlaying(false); setFailed(true); }} />
          {failed && <p className="playback-error" role="status">پخش قطعه الان ممکن نیست. دوباره امتحان کن.</p>}
        </Col>
      </Row>
    </Container>
  </section>;
}

function contactIcon(href) {
  if (href.startsWith('mailto:')) return Mail;
  if (href.startsWith('tel:')) return Phone;
  const host = URL.canParse(href) ? new URL(href).hostname.replace(/^www\./, '') : '';
  return { 't.me': Send, 'wa.me': MessageCircle, 'instagram.com': Instagram, 'github.com': Github }[host] ?? Link2;
}

function Contact({ profile }) {
  const channels = [...profile.contact, { label: 'تماس تلفنی', href: site.contact.phoneTel }];
  return <footer className="contact" id="contact">
    <Container className="frame">
      <div className="contact-grid">
        <div>
          <h2>برای همکاری</h2>
          <p>برای طراحی محصول، وب یا یه پروژه‌ی خلاقانه، بهم پیام بده.</p>
          <div className="contact-links">
            {channels.map(({ href, label }, index) => {
              const Icon = contactIcon(href);
              return (
                <a className={'action ' + (index === 0 ? 'action-ink' : 'action-outline')} key={href} href={href}>
                  <Icon size={17} aria-hidden="true" /><bdi>{label}</bdi>
                </a>
              );
            })}
          </div>
        </div>
        <span className="contact-print" dir="ltr" lang="en" aria-hidden="true">LET’S<br />TALK.</span>
      </div>
      <div className="bottom-line">
        <span>{profile.name} · ALDMC</span>
        <a href="#home" className="back-to-top" aria-label="برگشت به بالا">
          <ArrowUp size={21} aria-hidden="true" />
        </a>
      </div>
    </Container>
  </footer>;
}

export function RetroApp() {
  const [content, setContent] = useState(sections);
  const root = useRef(null);
  useEffect(() => reveal(root.current), []);
  useEffect(() => {
    const controller = new AbortController();
    getPortfolio(controller.signal).then(next => { if (!controller.signal.aborted) setContent(next); }).catch(() => {});
    return () => controller.abort();
  }, []);
  const profile = content.profile[0];
  return <div ref={root}>
    <a className="skip-link" href="#main">رفتن به محتوا</a>
    <main id="main"><Hero profile={profile} /><Work projects={content.projects} /><Resume profile={profile} experience={content.experience} services={content.services} /><Music tracks={content.music} /></main>
    <Contact profile={profile} />
    <BrandIntro />
  </div>;
}

