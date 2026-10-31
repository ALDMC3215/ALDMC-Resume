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
          <div className="project-filter-pills" role="tablist" aria-label="دسته‌بندی پروژه‌ها">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid (Minimal 3-Column Layout) */}
        <div className="projects-list">
          {filtered.map((project, idx) => (
            <article
              key={project.id}
              className="project-card card-editorial"
            >
              {/* Media Preview (Top in Vertical Grid Card) */}
              <div className="project-media-col">
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
                      <Eye size={14} />
                      <span>جزئیات</span>
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <ExternalLink size={14} />
                        <span>لینک</span>
                      </a>
                    )}
                  </div>

                  <span className="project-index-badge font-latin">0{idx + 1}</span>
                </div>
              </div>

              {/* Text / Information (Below Media) */}
              <div className="project-info">
                <div className="project-info-body">
                  <div className="project-meta-row">
                    <span className="project-cat font-latin">
                      {project.category.split('/')[0].trim()}
                    </span>
                    <span className="project-role-badge">
                      {project.id === 'habisa-ai-videos'
                        ? 'سناریونویسی'
                        : project.id === 'novin-call-manager'
                        ? 'طراحی محصول'
                        : project.id === 'picofy-landing'
                        ? 'طراحی رابط کاربری'
                        : project.role.split('،')[0].split('و')[0].trim()}
                    </span>
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

                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-info-actions">
                  <div className="project-tags-row">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
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
                        className="btn btn-primary btn-sm project-action-btn"
                      >
                        <span>{project.actionLabel || 'مشاهده وبسایت'}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn btn-primary btn-sm project-action-btn"
                        type="button"
                      >
                        <span>مشاهده جزئیات</span>
                        <Eye size={14} />
                      </button>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-secondary btn-sm"
                      type="button"
                    >
                      <span>مستندات</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* Subsection: Compact Digital Content Experience                 */}
        {/* Strictly Text-Based — NO Instagram Posts or Stories            */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="digital-content-section">
          <div className="digital-content-header">
            <span className="section-kicker">EXPERIENCE</span>
            <h3 className="digital-content-title">
              طراحی و مدیریت محتوای دیجیتال
            </h3>
            <p className="digital-content-desc">
              تجربه حرفه‌ای در تدوین استراتژی محتوا، طراحی سیستم‌های بصری و توسعه قالب‌های یکپارچه در شبکه‌های اجتماعی و پلتفرم‌های دیجیتال.
            </p>
          </div>

          <div className="digital-content-grid">
            {digitalContent.map((item, idx) => (
              <div
                key={item.id}
                className="digital-card card-editorial"
              >
                <div>
                  <div className="digital-card-top">
                    <span className="digital-brand-en font-latin">
                      0{idx + 1} · {item.brandEn}
                    </span>
                    <span className="digital-brand-fa">
                      {item.brand}
                    </span>
                  </div>

                  <h4 className="digital-card-title">{item.title}</h4>
                  <p className="digital-card-desc">{item.description}</p>

                  <ul className="digital-highlights-list">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="digital-highlight-item">
                        <span className="highlight-bullet">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="digital-card-footer">
                  <span className="digital-cat-tag font-latin">
                    {item.category}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="digital-link"
                    >
                      <span>{item.actionLabel || 'مشاهده صفحه'}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="digital-badge">
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
