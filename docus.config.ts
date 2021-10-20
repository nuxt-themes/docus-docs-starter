import { defineDocusConfig } from '@docus/app/kit'

export default defineDocusConfig({
  title: 'Docus',
  theme: '@docus/docs-theme',
  description:
    'Write in markdown, use Vue components, add style with Windi CSS and enjoy the power of Nuxt.',
  url: 'https://docus.dev',
  twitter: 'nuxtlabs',
  credits: true,
  github: {
    url: 'https://github.com/',
    repo: 'docusgen/starter',
    branch: 'main',
    releases: true
  }
})
