import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { featurePages } from './src/featurePages.ts';

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);

export default defineConfig({
  plugins: [react(), {
    name: 'feature-page-metadata',
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        const index = bundle['index.html'];
        if (!index || index.type !== 'asset' || typeof index.source !== 'string') {
          throw new Error('Feature pages require the built index.html');
        }
        // Static metadata is available to link previews before JavaScript runs.
        for (const page of featurePages) {
          const title = escapeHtml(`${page.ko.title} | Trade Journal`);
          const description = escapeHtml(page.ko.description);
          const html = index.source
            .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
            .replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*("\s*\/?>)/g, `$1${description}$2`)
            .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*("\s*\/?>)/g, `$1${title}$2`);
          this.emitFile({ type: 'asset', fileName: `features/${page.slug}/index.html`, source: html });
        }
      },
    },
  }],
});
