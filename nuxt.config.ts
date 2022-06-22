import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  extends: [require.resolve('@docus/docs-theme')],
  github: {
    repo: 'nuxtlabs/docus-starter'
  }
})
