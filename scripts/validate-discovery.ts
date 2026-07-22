import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import robots from '../app/robots';
import { EMAIL, SITE } from '../lib/constants';

const robotsOutput = robots();
const rules = Array.isArray(robotsOutput.rules)
  ? robotsOutput.rules
  : [robotsOutput.rules];

function allows(userAgent: string): boolean {
  return rules.some((rule) => {
    const agents = Array.isArray(rule.userAgent)
      ? rule.userAgent
      : [rule.userAgent];
    const allowedPaths = Array.isArray(rule.allow)
      ? rule.allow
      : [rule.allow];

    return (
      (agents.includes('*') || agents.includes(userAgent)) &&
      allowedPaths.includes('/')
    );
  });
}

const llmsText = readFileSync(
  new URL('../public/llms.txt', import.meta.url),
  'utf8'
);

assert.equal(SITE.url, 'https://toldosnoa.com');
assert.equal(EMAIL, 'info@toldosnoa.com');
assert.equal(robotsOutput.sitemap, 'https://toldosnoa.com/sitemap.xml');
assert.ok(allows('OAI-SearchBot'), 'OAI-SearchBot debe poder rastrear el sitio');
assert.ok(allows('GPTBot'), 'GPTBot debe poder rastrear el sitio');
assert.ok(allows('ChatGPT-User'), 'ChatGPT-User debe poder rastrear el sitio');
assert.ok(allows('Bingbot'), 'Bingbot debe poder rastrear el sitio');
assert.ok(
  llmsText.includes('https://toldosnoa.com/sitemap.xml'),
  'llms.txt debe enlazar el sitemap'
);
assert.ok(
  llmsText.includes('info@toldosnoa.com'),
  'llms.txt debe usar el correo confirmado'
);

console.log('Identidad y descubrimiento SEO validados');
