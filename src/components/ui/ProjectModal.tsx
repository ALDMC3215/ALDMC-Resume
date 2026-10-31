import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../../data';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn-icon project-modal-close"
          aria-label="بستن پنجره"
          type="button"
        >
          <X size={20} />
        </button>

        <div className="project-modal-header">
          <div className="tag-badge accent" style={{ marginBottom: '8px' }}>
            {project.category}
          </div>
          <h2 id="modal-project-title" className="project-modal-title">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-xs text-brand-orange font-medium mt-1 mb-2">
              {project.subtitle}
            </p>
          )}
          <p className="project-modal-role">
            <strong>نقش:</strong> {project.role}
          </p>
        </div>

        {project.image && (
          <div className="project-modal-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="project-modal-image"
              loading="lazy"
            />
          </div>
        )}

        <div className="project-modal-body">
          <p className="project-modal-desc">{project.description}</p>

          {project.details && project.details.length > 0 && (
            <div className="project-modal-details">
              <h4 className="project-modal-subtitle">جزئیات و دستاوردهای کلیدی:</h4>
              <ul className="project-modal-list">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="project-modal-item">
                    <CheckCircle2 size={16} className="item-icon" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag-badge font-latin">
                {tag}
              </span>
            ))}
          </div>

          {project.link && project.link !== '#' && (
            <div className="project-modal-actions">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>{project.actionLabel || 'مشاهده وبسایت'}</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
