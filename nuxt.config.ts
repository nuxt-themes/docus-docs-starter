import { withDocus } from '@docus/app'

export default withDocus({
  /**
   * Has to specify rootDir as we use nuxt-extend
   */
  rootDir: __dirname,
  /**
   * Modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@docus/github',
    '@docus/twitter',
    '@docus/social-image'
  ],
})
