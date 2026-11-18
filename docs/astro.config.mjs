import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE = 'https://iamfilint.github.io';
const BASE = '/marchy-public/docs';
const OG_IMAGE = `${SITE}${BASE}/marchy-og.png`;

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [
    starlight({
      title: 'Marchy',
      titleDelimiter: '—',
      description:
        'Marchy is an operating system by FILINT — Okonomi (your way) and Okimari (safe defaults).',
      favicon: '/favicon.svg',
      head: [
        { tag: 'meta', attrs: { name: 'robots', content: 'index, follow, max-image-preview:large' } },
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'dark light' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#1a1b26' } },
        { tag: 'meta', attrs: { property: 'og:image', content: OG_IMAGE } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:image:type', content: 'image/png' } },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content:
              'The Marchy mark: a green rounded square with a bold letter M cut out of it, next to the MARCHY wordmark.',
          },
        },
        { tag: 'meta', attrs: { name: 'twitter:image', content: OG_IMAGE } },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', href: '/marchy-public/site/images/brand/apple-touch-icon.png' },
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/IamFILINT/marchy-public',
        },
      ],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Introduction', link: '/' },
            { label: 'Install', link: '/install/' },
            { label: 'Features', link: '/features/' },
            { label: 'FAQ', link: '/faq/' },
          ],
        },
        {
          label: 'Philosophy',
          items: [
            { label: 'Okonomi and Okimari', link: '/philosophy/okonomi/' },
          ],
        },
      ],
    }),
  ],
});
