import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

// Crawlers de IA: los permitimos explícitamente para que ChatGPT, Perplexity,
// Claude, Apple y Google AI puedan indexar y citar el sitio.
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'Anthropic-AI',
  'ClaudeBot',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
