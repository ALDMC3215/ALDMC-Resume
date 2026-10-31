import React, { useState } from 'react';
import { resumeData, ProjectItem } from '../../data';
import { HabisaVideoPreview } from '../ui/HabisaVideoPreview';
import { ProjectModal } from '../ui/ProjectModal';
import { ArrowUpRight, Eye, ExternalLink, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects, digitalContent } = resumeData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('همه');

  const categories = ['همه', 'UI/UX & Web', 'Internal Tool', 'AI Video'];

  const filterProjects = (proj: ProjectItem) => {
    if (activeCategory === 'همه') return true;
    if (activeCategory === 'UI/UX & Web') {
      return proj.category.includes('Web Experience') || proj.category.includes('UI/UX');
    }
    if (activeCategory === 'Internal Tool') {
      return proj.category.includes('Internal Tool') || proj.category.includes('Dashboard');
    }
    if (activeCategory === 'AI Video') {
      return proj.category.includes('AI Video') || proj.category.includes('Creative Direction');
    }
    return true;
  };

  const filtered = projects.filter(filterProjects);

  return (
    <section className="section-wrapper projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header projects-header-row">
          <div>
            <span className="section-kicker">PORTFOLIO</span>
            <h2 className="section-title">پروژه‌های منتخب</h2>
            <p className="section-desc">
              نمونه کارهای واقعی، پروژه‌های فعال و تجربیات محصولی توسعه داده شده با هوش مصنوعی و طراحی مدرن.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="project-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Editorial Grid */}
        <div className="projects-grid">
          {filtered.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card card-editorial ${project.featured ? 'is-featured' : ''}`}
            >
              <div className="project-image-container">
                {project.mediaType === 'video' && project.videoPreview ? (
                  <HabisaVideoPreview
                    videoSrc={project.videoPreview}
                    posterSrc={project.videoPoster || project.image}
                    watermarkText={project.watermarkText}
                    title={project.title}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                )}

                <div className="project-image-overlay">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm"
                    type="button"
                  >
                    <Eye size={16} />
                    <span>مشاهده جزئیات</span>
                  </button>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <ExternalLink size={16} />
                      <span>{project.actionLabel || 'مشاهده'}</span>
                    </a>
                  )}
                </div>
                <span className="project-index-badge font-latin">0{idx + 1}</span>
              </div>

              <div className="project-info">
                <div className="project-category-row">
                  <span className="project-cat font-latin">{project.category}</span>
                  <span className="project-role-tag">{project.role}</span>
                </div>

                <h3 className="project-title">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="project-title-btn"
                    type="button"
                  >
                    {project.title}
                  </button>
                </h3>

                {project.subtitle && (
                  <h4 className="project-subtitle text-xs text-brand-orange font-medium mt-1 mb-2">
                    {project.subtitle}
                  </h4>
                )}

                <p className="project-description">{project.description}</p>

                <div className="project-tags-row">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag-badge font-latin">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-details-link text-brand-orange hover:underline font-semibold"
                    >
                      <span>{project.actionLabel || 'مشاهده وبسایت'}</span>
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="project-details-link"
                      type="button"
                    >
                      <span>مشاهده جزئیات پروژه</span>
                      <ArrowUpRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* Subsection: Compact Digital Content Experience                 */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="digital-content-experience mt-16 pt-12 border-t border-[var(--border-subtle)]">
          <div className="digital-content-header mb-8">
            <span className="section-kicker">EXPERIENCE</span>
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              طراحی و مدیریت محتوای دیجیتال
            </h3>
            <p className="text-[var(--text-muted)] text-sm max-w-xl leading-relaxed">
              تجربه حرفه‌ای در تدوین استراتژی محتوا، طراحی سیستم‌های بصری و توسعه قالب‌های یکپارچه در پلتفرم‌های دیجیتال.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalContent.map((item, idx) => (
              <div
                key={item.id}
                className="card-editorial p-6 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-brand-orange/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-latin text-xs font-bold uppercase tracking-wider text-brand-orange">
                      0{idx + 1} · {item.brandEn}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-bold">
                      {item.brand}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold mb-1.5">{item.title}</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 mb-5 text-xs text-[var(--text-secondary)]">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-brand-orange mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="font-latin text-[11px] text-[var(--text-muted)]">
                    {item.category}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:underline"
                    >
                      <span>{item.actionLabel || 'مشاهده'}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-[var(--text-muted)]">
                      <Sparkles size={12} className="text-brand-orange" />
                      <span>سیستم‌های دیزاین محتوا</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
