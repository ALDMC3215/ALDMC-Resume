import { sections } from './content.js';
import config from './supabase-public.json';

export async function getPortfolio(signal) {
  if (!config.url || !config.key) return sections;
  const endpoint = new URL('/rest/v1/portfolio_entries', config.url);
  endpoint.search = new URLSearchParams({ select: 'section,content', order: 'position.asc,slug.asc' });
  const response = await fetch(endpoint, { signal, headers: { apikey: config.key } });
  if (!response.ok) throw new Error('Portfolio data unavailable');
  const entries = await response.json();
  const grouped = Object.fromEntries(Object.keys(sections).map(section => [section, []]));
  for (const { section, content } of entries) {
    if (Object.hasOwn(grouped, section) && content?.id) grouped[section].push(content);
  }
  return grouped.profile.length ? { ...grouped, music: sections.music } : sections;
}
