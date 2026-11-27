import React, { useEffect, useRef, useState } from 'react';
import { BrandIntro } from '../components/ui/BrandIntro';
import { credentials } from '../data/education';
import { toFa } from '../utils/fa';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { ArrowDownRight, AudioLines, Code2, Globe2, Layers3, Play, Radio, Sparkles, X } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './retro.scss';
import './landing.scss';
import { categoryLabels, sections } from './content.js';
import { getPortfolio } from './database';
import { reveal } from './motion';
import { AboutNotebook } from './AboutNotebook';
import { ContactFooter } from './ContactFooter';
import { MusicLab } from './MusicLab';
import { Masthead } from './Masthead';
import { Interests } from './Interests';

const serviceIcons = { design:Sparkles, web:Code2, media:Play, teaching:Radio };

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title" tabIndex={-1} lang="en" dir="ltr">
      <Container className="frame hero-layout">
        <div className="hero-copy">
          <h1 className="hero-title" id="hero-title">
            <img src="/brand/space-welcome.png" width={1280} height={464} alt="Welcome to my space."
              decoding="async" fetchPriority="high" />
          </h1>
          <p className="hero-subtitle">
            <strong>Ali Forghani</strong>
            <span>Digital Product Designer · UI/UX · AI</span>
          </p>
          <div className="hero-actions">
            <Button className="action action-ink" href="#portfolio">
              Explore my work <ArrowDownRight size={18} aria-hidden="true" />
            </Button>
            <Button className="action action-outline" href="#experience">Résumé</Button>
          </div>
        </div>
        <figure className="hero-visual" aria-hidden="true">
          <img src="/brand/space-studio-1440.webp" srcSet="/brand/space-studio-720.webp 720w, /brand/space-studio-1440.webp 1440w"
            sizes="(max-height: 520px) and (min-width: 540px) 50vw, (max-width: 600px) 90vw, (max-width: 860px) 560px, (max-width: 1600px) 52vw, 940px"
            width={1440} height={960} decoding="async" fetchPriority="high" alt="" />
        </figure>
      </Container>
    </section>
  );
}

const experienceTitles = new Map([
  ['novin-tech', 'نوین تک | موسسه آموزشی کامپیوتر'],
  ['picofy', 'پیکوفای | شرکت طراحی و برنامه نویسی'],
  ['habisa', 'هابیسا | مشاوره خرید تدارکات تهویه ساختمان'],
  ['aldmc', 'پروژه های شخصی'],
]);

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
  return <section className="section work paper-edge" id="portfolio" aria-labelledby="work-title" tabIndex={-1} data-scene>
    <div className="paper-edge__runout" aria-hidden="true" />
    <Container className="frame">
      <h2 id="work-title" className="script-title" lang="en" dir="ltr" data-reveal>Selected Works</h2>


      <Row xs={1} sm={2} lg={3} className="gx-3 gy-4 project-grid">
        {projects.map(project => <Col key={project.id} id={`work-${project.id}`} data-reveal>
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

function Resume({ experience, services }) {
  return <>
    <section className="section about paper-edge" id="about" aria-labelledby="about-title" tabIndex={-1} data-scene>
      <Container className="frame">
        <AboutNotebook />
        <h3 id="services-title" className="services-title">زمینه‌های همکاری</h3>
        <Row xs={1} sm={2} className="gy-3 service-grid" id="services" aria-labelledby="services-title">
          {services.map(service => {
            const Icon = serviceIcons[service.id] || Sparkles;
            return <Col key={service.id} data-reveal><div className="service"><Icon aria-hidden="true" size={25} /><h3>{service.title}</h3><p>{service.copy}</p></div></Col>;
          })}
        </Row>
      </Container>
    </section>
    <section className="section experience paper-edge" id="experience" aria-labelledby="resume-title" tabIndex={-1} data-scene>
      <Container className="frame">
        <h2 id="resume-title" className="script-title" lang="en" dir="ltr" data-reveal>Résumé</h2>

        <div className="resume-columns">
          <section aria-labelledby="career-title">
            <h3 id="career-title">سوابق کاری</h3>
            {experience.filter(job => job.id !== 'education').map(job => (
              <details className="job" key={job.id}>
                <summary><strong>{experienceTitles.get(job.id) ?? job.title}</strong><span>{job.role}</span></summary>
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

export function RetroApp() {
  const [content, setContent] = useState(sections);
  const root = useRef(null);
  useEffect(() => reveal(root.current), []);
  useEffect(() => {
    const controller = new AbortController();
    getPortfolio(controller.signal).then(next => { if (!controller.signal.aborted) setContent(next); }).catch(() => {});
    return () => controller.abort();
  }, []);
  return <div ref={root}>
    <a className="skip-link" href="#main">رفتن به محتوا</a>
    <Masthead />
    <main id="main" tabIndex={-1}>
      <Hero />
      <Work projects={content.projects} />
      <Resume experience={content.experience} services={content.services} />
      <Interests />
      <MusicLab tracks={content.music} />
    </main>
    <ContactFooter />
    <BrandIntro />
  </div>;
}

