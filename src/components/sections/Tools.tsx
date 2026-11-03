import React, { useState } from 'react';
import { Bot, Terminal, Palette, Sparkles, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export const Tools: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  // Grouped bento by category:
  // Assistants large panel, Coding / Visual+Audio smaller, Figma/Photoshop foundations band
  const assistantTools = [
    { name: 'Gemini', role: 'Multimodal Research & Context', tag: 'Assistants' },
    { name: 'Claude', role: 'Complex Analysis & Code Architecture', tag: 'Assistants' },
    { name: 'ChatGPT', role: 'Reasoning & Creative Partner', tag: 'Assistants' },
  ];

  const codingTools = [
    { name: 'Google Antigravity', role: 'Agentic Development & IDE', tag: 'Coding' },
    { name: 'Codex', role: 'AI Code Generation & Execution', tag: 'Coding' },
    { name: 'Git & GitHub', role: 'Version Control & Workflows', tag: 'Coding' },
  ];

  const visualAudioTools = [
    { name: 'Google Flow & Veo', role: 'AI Video Storyboard & Concept', tag: 'Visual & Video' },
    { name: 'Krea.ai', role: 'Real-Time Generation & Upscaling', tag: 'Visual & Video' },
    { name: 'ElevenLabs & Suno', role: 'Voice Design & AI Music Lab', tag: 'Audio' },
  ];

  const designFoundations = [
    { label: 'Primary UI/UX & Systems', tool: 'Figma' },
    { label: 'Visual & Graphic Design', tool: 'Adobe Photoshop' },
    { label: 'Design Systems', tool: 'Design Tokens & CSS' },
  ];

  // Collapsed 29-tool appendix directory
  const allToolsList = [
    'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Grok', 'DeepSeek', 'Mistral', 'NotebookLM', 'Google AI Studio', 'Cursor', 'Windsurf',
    'Google Antigravity IDE', 'v0 by Vercel', 'Bolt.new', 'Lovable', 'Codex', 'Midjourney', 'DALL-E 3', 'Stable Diffusion', 'FLUX.1',
    'Recraft', 'Magnific AI', 'Krea.ai', 'Runway Gen-3', 'Luma Dream Machine', 'Kling AI', 'Minimax Hailuo', 'Pika 2.0', 'Suno AI',
    'Udio', 'ElevenLabs', 'Notion AI',
  ];

  return (
    <section className="section-wrapper tools-section" id="tools">
      <div className="container">
        {/* Section Header */}
        <div className="section-header tools-header">
          <div className="section-kicker">AI &amp; CREATIVE WORKFLOW</div>
          <h2 className="section-title">
            ابزارهای <span className="accent-word">منتخب</span>
          </h2>
          <p className="section-desc">
            از مدل‌های زبانی و دستیارهای کدنویسی تا ابزارهای تولید تصویر، ویدیو و موسیقی؛ برای هر پروژه از ترکیب ابزارهای مناسب استفاده می‌کنم.
          </p>
        </div>

        {/* 1. Design Foundations Band (Figma, Photoshop, Design Tokens) */}
        <div className="tools-foundations-band card-editorial">
          <div className="foundations-band-lead">
            <Layers size={18} className="text-brand-orange" />
            <span className="foundations-lead-text">پایه‌های اصلی طراحی و سیستم‌های دیزاین:</span>
          </div>

          <div className="foundations-chips-row font-latin">
            {designFoundations.map((f, idx) => (
              <div key={idx} className="foundation-chip">
                <span className="foundation-label">{f.label}</span>
                <strong className="foundation-val">{f.tool}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Grouped Bento Grid: Assistants Large Panel + Coding & Media Smaller */}
        <div className="tools-bento-grid">
          {/* Assistants Large Panel */}
          <div className="tools-panel card-editorial assistants-large-panel">
            <div className="tools-panel-header">
              <div className="tools-panel-icon-box">
                <Bot size={20} className="text-brand-orange" />
              </div>
              <div>
                <h3 className="tools-panel-title">دستیاران هوشمند و تحلیل (Assistants)</h3>
                <span className="tools-panel-sub font-latin">Primary Reasoning &amp; Strategy</span>
              </div>
            </div>

            <div className="tools-cards-stack">
              {assistantTools.map((t, idx) => (
                <div key={idx} className="tool-item-card">
                  <div className="tool-item-header">
                    <strong className="tool-item-name font-latin">{t.name}</strong>
                    <span className="tool-item-tag font-latin">{t.tag}</span>
                  </div>
                  <span className="tool-item-role font-latin">{t.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coding / Development Panel */}
          <div className="tools-panel card-editorial coding-panel">
            <div className="tools-panel-header">
              <div className="tools-panel-icon-box">
                <Terminal size={18} className="text-brand-orange" />
              </div>
              <div>
                <h3 className="tools-panel-title">کدنویسی و توسعه (Coding)</h3>
                <span className="tools-panel-sub font-latin">Agentic Prototyping</span>
              </div>
            </div>

            <div className="tools-cards-stack">
              {codingTools.map((t, idx) => (
                <div key={idx} className="tool-item-card">
                  <div className="tool-item-header">
                    <strong className="tool-item-name font-latin">{t.name}</strong>
                    <span className="tool-item-tag font-latin">{t.tag}</span>
                  </div>
                  <span className="tool-item-role font-latin">{t.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual & Audio Panel */}
          <div className="tools-panel card-editorial visual-audio-panel">
            <div className="tools-panel-header">
              <div className="tools-panel-icon-box">
                <Palette size={18} className="text-brand-orange" />
              </div>
              <div>
                <h3 className="tools-panel-title">تصویر، ویدیو و صدا (Media Lab)</h3>
                <span className="tools-panel-sub font-latin">Generative Audio &amp; Video</span>
              </div>
            </div>

            <div className="tools-cards-stack">
              {visualAudioTools.map((t, idx) => (
                <div key={idx} className="tool-item-card">
                  <div className="tool-item-header">
                    <strong className="tool-item-name font-latin">{t.name}</strong>
                    <span className="tool-item-tag font-latin">{t.tag}</span>
                  </div>
                  <span className="tool-item-role font-latin">{t.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Collapsed 29-Tool Directory Bar (Appendix) */}
        <div className="tools-appendix-bar card-editorial">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="appendix-toggle-btn"
            aria-expanded={expanded}
          >
            <div className="appendix-toggle-label">
              <Sparkles size={16} className="text-brand-orange" />
              <span className="font-latin font-bold">29 AI TOOLS DIRECTORY</span>
              <span className="appendix-sub-label">پایگاه جامع ابزارهای کاری</span>
            </div>

            <div className="appendix-toggle-action">
              <span>{expanded ? 'بستن لیست' : 'مشاهده تمام ۲۹ ابزار'}</span>
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>

          {expanded && (
            <div className="appendix-expanded-tags font-latin">
              {allToolsList.map((tool, idx) => (
                <span key={idx} className="appendix-tag">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
