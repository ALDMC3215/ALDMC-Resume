import React, { useState } from 'react';
import { aiWorkflowTools } from '../../data';
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
    'assistants-research': <Cpu size={16} className="text-brand-orange" />,
    'visual-video': <Wand2 size={16} className="text-brand-orange" />,
    'music-audio': <Music size={16} className="text-brand-orange" />,
    'dev-creative-coding': <Code2 size={16} className="text-brand-orange" />,
    'knowledge-agents': <Boxes size={16} className="text-brand-orange" />,
  };

  return (
    <section className="section-wrapper tools-section" id="tools">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker font-latin">{aiWorkflowTools.kicker}</span>
          <h2 className="section-title">{aiWorkflowTools.sectionTitle}</h2>
          <p className="section-desc max-w-2xl">
            {aiWorkflowTools.description}
          </p>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 1. Core Foundations & Primary Workflow Grid                   */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="mb-10">
          {/* Top Bar: Traditional Design Foundations (Figma & Photoshop) */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl card-editorial border border-[var(--border-subtle)] bg-[var(--surface-primary)] mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                <Layers size={18} />
              </div>
              <div>
                <span className="text-xs font-bold text-[var(--text-primary)] block">
                  پایه‌های اصلی طراحی و سیستم‌های دیزاین
                </span>
                <span className="font-latin text-[11px] text-[var(--text-muted)]">
                  UI/UX Design, Visual Identity & Tokens Architecture
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {aiWorkflowTools.designFoundations.map((tool) => (
                <div
                  key={tool.name}
                  className="px-3 py-1 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 flex items-center gap-2"
                >
                  <span className="font-latin text-xs font-bold text-[var(--text-primary)]">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-brand-orange font-medium">
                    {tool.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Primary AI Workflow (9 Key Tools in 3x3 Grid) */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-brand-orange" />
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                جریان کاری منتخب (Primary Workflow)
              </h3>
            </div>
            <span className="font-latin text-xs text-[var(--text-muted)]">
              9 Featured Workflow Tools
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {aiWorkflowTools.primaryWorkflow.map((tool) => (
              <div
                key={tool.name}
                className="group p-4 rounded-xl card-editorial border border-[var(--border-subtle)] hover:border-brand-orange/40 hover:-translate-y-0.5 transition-all flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-latin text-sm font-black text-[var(--text-primary)] group-hover:text-brand-orange transition-colors">
                      {tool.name}
                    </span>
                    <span className="font-latin text-[10px] px-1.5 py-0.2 rounded bg-brand-orange/10 text-brand-orange font-semibold">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed font-latin">
                    {tool.role}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-md bg-[var(--surface-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-brand-orange group-hover:border-brand-orange/30 transition-colors flex-shrink-0 mt-0.5">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 2. Expandable Complete Tool Directory (All 29 Tools)           */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="p-6 rounded-2xl card-editorial border border-[var(--border-subtle)] bg-[var(--surface-primary)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-latin text-xs font-bold uppercase tracking-wider text-brand-orange">
                  FULL DIRECTORY
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  (۲۹ ابزار تخصصی در ۵ دسته‌بندی)
                </span>
              </div>
              <h4 className="text-base font-bold text-[var(--text-primary)]">
                فهرست جامع ابزارها و اکوسیستم هوش مصنوعی
              </h4>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-secondary btn-sm flex items-center justify-center gap-2 self-start sm:self-auto font-medium"
              type="button"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'نمایش کمتر' : 'مشاهده همه ابزارها (۲۹)'}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* Category Chips Bar (Always visible overview) */}
          <div className="flex flex-wrap items-center gap-2 pt-4 pb-2">
            {aiWorkflowTools.categories.map((cat) => (
              <div
                key={cat.id}
                className="px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 flex items-center gap-2 text-xs"
              >
                {categoryIcons[cat.id]}
                <span className="font-semibold text-[var(--text-primary)]">{cat.title}</span>
                <span className="font-latin text-[11px] text-[var(--text-muted)]">
                  ({cat.tools.length})
                </span>
              </div>
            ))}
          </div>

          {/* Expanded 5-Category View */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] space-y-6 animate-fadeIn">
              {aiWorkflowTools.categories.map((cat) => (
                <div key={cat.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {categoryIcons[cat.id]}
                      <h5 className="text-sm font-bold text-[var(--text-primary)]">
                        {cat.title}
                      </h5>
                    </div>
                    <span className="font-latin text-xs text-[var(--text-muted)]">
                      {cat.titleEn}
                    </span>
                  </div>

                  {/* Compact Chips Grid for this category */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5">
                    {cat.tools.map((t) => (
                      <div
                        key={t.name}
                        className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] hover:border-brand-orange/50 transition-colors flex flex-col justify-between"
                      >
                        <span className="font-latin text-xs font-bold text-[var(--text-primary)] truncate">
                          {t.name}
                        </span>
                        {t.tag && (
                          <span className="font-latin text-[10px] text-[var(--text-muted)] truncate mt-1">
                            {t.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="btn btn-secondary btn-sm flex items-center gap-2"
                  type="button"
                >
                  <ChevronUp size={14} />
                  <span>بستن فهرست ابزارها</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
