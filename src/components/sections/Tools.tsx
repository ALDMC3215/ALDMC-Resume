import React, { useState } from 'react';
import { aiWorkflowTools, ToolCategoryGroup, ToolItem } from '../../data';
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Wand2,
  Music,
  Code2,
  Boxes,
  ArrowUpRight
} from 'lucide-react';

export const Tools: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryIcons: Record<string, React.ReactNode> = {
    'assistants-research': <Cpu size={14} className="text-brand-orange" />,
    'visual-video': <Wand2 size={14} className="text-brand-orange" />,
    'music-audio': <Music size={14} className="text-brand-orange" />,
    'dev-creative-coding': <Code2 size={14} className="text-brand-orange" />,
    'knowledge-agents': <Boxes size={14} className="text-brand-orange" />,
  };

  return (
    <section className="section-wrapper tools-section" id="tools">
      <div className="container">
        {/* Section Header */}
        <div className="section-header tools-header">
          <span className="section-kicker font-latin">{aiWorkflowTools.kicker}</span>
          <h2 className="section-title">{aiWorkflowTools.sectionTitle}</h2>
          <p className="section-desc">
            {aiWorkflowTools.description}
          </p>
        </div>

        {/* 1. Core Foundations Bar (Figma, Photoshop, Design Tokens) */}
        <div className="tools-foundations-bar">
          <div className="tools-foundations-lead">
            <span className="tools-foundations-icon">
              <Layers size={14} className="text-brand-orange" />
            </span>
            <span className="tools-foundations-title">
              پایه‌های طراحی و سیستم‌های دیزاین:
            </span>
          </div>

          <div className="tools-foundations-tags">
            {aiWorkflowTools.designFoundations.map((tool) => (
              <div key={tool.name} className="foundations-tag-item">
                <span className="foundations-tag-name font-latin">{tool.name}</span>
                <span className="foundations-tag-badge">{tool.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Featured Primary AI Workflow (9 Key Tools in 3x3 Grid) */}
        <div className="tools-workflow-wrapper">
          <div className="tools-workflow-header">
            <div className="tools-header-label">
              <Sparkles size={14} className="text-brand-orange" />
              <h3 className="tools-header-title">
                جریان کاری منتخب <span className="tools-header-sub font-latin">(Primary Workflow)</span>
              </h3>
            </div>
            <span className="tools-header-count font-latin">
              9 Featured Workflow Tools
            </span>
          </div>

          <div className="tools-primary-grid">
            {aiWorkflowTools.primaryWorkflow.map((tool) => (
              <div
                key={tool.name}
                className="tools-workflow-card card-editorial"
              >
                <div className="tools-card-body">
                  <div className="tools-card-top-row">
                    <span className="tools-name font-latin">
                      {tool.name}
                    </span>
                    <span className="tools-category-tag font-latin">
                      {tool.category}
                    </span>
                  </div>
                  <p className="tools-role font-latin">
                    {tool.role}
                  </p>
                </div>
                <div className="tools-corner-icon">
                  <ArrowUpRight size={11} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Expandable Directory Bar (All 29 Tools in 5 Categories) */}
        <div className="tools-directory-bar card-editorial">
          <div className="tools-directory-bar-main">
            <div className="tools-directory-meta">
              <span className="tools-all-badge font-latin">29 AI TOOLS</span>
              <div className="tools-categories-summary">
                <span className="tools-cat-summary-item">دستیارها (۱۱)</span>
                <span className="tools-cat-summary-dot">•</span>
                <span className="tools-cat-summary-item">تصویر و ویدیو (۸)</span>
                <span className="tools-cat-summary-dot">•</span>
                <span className="tools-cat-summary-item">موسیقی و صدا (۳)</span>
                <span className="tools-cat-summary-dot">•</span>
                <span className="tools-cat-summary-item">توسعه و کد (۴)</span>
                <span className="tools-cat-summary-dot">•</span>
                <span className="tools-cat-summary-item">مدیریت دانش (۳)</span>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="tools-expand-pill-btn"
              type="button"
            >
              <span>{isExpanded ? 'بستن فهرست' : 'مشاهده تمام ۲۹ ابزار'}</span>
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          {/* Expanded 5 Categories View */}
          {isExpanded && (
            <div className="tools-categories-wrapper">
              <div className="tools-categories-grid">
                {aiWorkflowTools.categories.map((category: ToolCategoryGroup) => (
                  <div
                    key={category.id}
                    className="tools-category-box"
                  >
                    <div className="tools-cat-header">
                      <div className="tools-cat-icon-wrap">
                        {categoryIcons[category.id]}
                      </div>
                      <div>
                        <h5 className="tools-cat-title">
                          {category.title}
                        </h5>
                        <span className="tools-cat-sub font-latin">
                          {category.titleEn} · ({category.tools.length})
                        </span>
                      </div>
                    </div>

                    <div className="tools-badges-cloud">
                      {category.tools.map((tool: ToolItem) => (
                        <span
                          key={tool.name}
                          className="tools-badge-pill font-latin"
                        >
                          {tool.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
