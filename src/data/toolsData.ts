export interface ToolItem {
  name: string;
  tag?: string;
  featured?: boolean;
}

export interface ToolCategoryGroup {
  id: string;
  title: string;
  titleEn: string;
  description?: string;
  tools: ToolItem[];
}

export const aiWorkflowTools = {
  sectionTitle: 'ابزارهایی که باهاشون کار میکنم',
  kicker: 'AI / CREATIVE WORKFLOW',
  description: '«از مدل‌های زبانی و دستیارهای کدنویسی تا ابزارهای تولید تصویر، ویدیو و موسیقی؛ برای هر پروژه از ترکیب ابزارهای مناسب استفاده می‌کنم.»',

  // Foundational Design Tools (Preserving Figma and Photoshop)
  designFoundations: [
    { name: 'Figma', tag: 'Primary UI/UX & Systems' },
    { name: 'Adobe Photoshop', tag: 'Visual & Graphic Design' },
    { name: 'Design Tokens & CSS', tag: 'Design Systems' },
  ],

  // 9 Featured Primary Workflow Tools
  primaryWorkflow: [
    { name: 'ChatGPT', role: 'Reasoning & Creative Partner', category: 'Assistants' },
    { name: 'Claude', role: 'Complex Analysis & Code Architecture', category: 'Assistants' },
    { name: 'Gemini', role: 'Multimodal Research & Context', category: 'Assistants' },
    { name: 'Google Flow', role: 'AI Video Storyboard & Concept', category: 'Visual & Video' },
    { name: 'Google Antigravity', role: 'Agentic Development & IDE', category: 'Coding' },
    { name: 'Codex', role: 'AI Code Generation & Execution', category: 'Coding' },
    { name: 'Krea.ai', role: 'Real-time Generation & Upscaling', category: 'Visual & Video' },
    { name: 'Suno', role: 'AI Music & Song Production', category: 'Audio' },
    { name: 'ElevenLabs', role: 'Voice Design & Realistic Speech', category: 'Audio' },
  ],

  // 5 Complete Categories (All 29 Tools Exactly)
  categories: [
    {
      id: 'assistants-research',
      title: 'دستیارهای هوش مصنوعی و پژوهش',
      titleEn: 'AI Assistants & Research',
      tools: [
        { name: 'Claude', tag: 'Anthropic' },
        { name: 'ChatGPT', tag: 'OpenAI' },
        { name: 'Gemini', tag: 'Google' },
        { name: 'Copilot', tag: 'Microsoft' },
        { name: 'Grok', tag: 'xAI' },
        { name: 'DeepSeek', tag: 'Reasoning' },
        { name: 'Qwen', tag: 'Alibaba' },
        { name: 'Kimi', tag: 'Moonshot AI' },
        { name: 'Perplexity', tag: 'Search & Synthesis' },
        { name: 'LM Arena', tag: 'Model Evaluation' },
        { name: 'Grok Bot', tag: 'Interactive AI' },
      ],
    },
    {
      id: 'visual-video',
      title: 'تولید تصویر و ویدیوی زایشی',
      titleEn: 'Generative Visual & Video',
      tools: [
        { name: 'Google Flow', tag: 'Storyboarding' },
        { name: 'Krea.ai', tag: 'Realtime Gen & Enhancer' },
        { name: 'PhotoGrid', tag: 'Visual Composition' },
        { name: 'Muse AI', tag: 'Video & Media' },
        { name: 'Kling AI', tag: 'High-Fidelity Video' },
        { name: 'Runway AI', tag: 'Gen-3 Video Dynamics' },
        { name: 'Seedance AI', tag: 'Generative Motion' },
        { name: 'Higgsfield AI', tag: 'Cinematic AI Video' },
      ],
    },
    {
      id: 'music-audio',
      title: 'موسیقی و صدای هوش مصنوعی',
      titleEn: 'AI Music & Audio',
      tools: [
        { name: 'Google Flow Music', tag: 'Adaptive Audio' },
        { name: 'Suno', tag: 'Full Song Synthesis' },
        { name: 'ElevenLabs', tag: 'Voice Design & TTS' },
      ],
    },
    {
      id: 'dev-creative-coding',
      title: 'توسعه هوش مصنوعی و کدنویسی خلاق',
      titleEn: 'AI Development & Creative Coding',
      tools: [
        { name: 'Google AI Studio', tag: 'API & Model Prototyping' },
        { name: 'Google Antigravity', tag: 'Agentic Environment' },
        { name: 'Stitch', tag: 'Creative Integration' },
        { name: 'Codex', tag: 'Code Intelligence' },
      ],
    },
    {
      id: 'knowledge-agents',
      title: 'دانش، بهره‌وری و عامل‌های هوشمند',
      titleEn: 'Knowledge, Productivity & AI Agents',
      tools: [
        { name: 'NotebookLM', tag: 'Grounded Research' },
        { name: 'Notion', tag: 'Workspace & Systems' },
        { name: 'GPT Dots', tag: 'Autonomous Workflows' },
      ],
    },
  ] as ToolCategoryGroup[],
};
