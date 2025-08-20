import { defineContentConfig, defineCollection, z, type Collections } from '@nuxt/content'


const nuxtcontentLIVE = {
  // cwd: process.env.NUXT_V4_PATH ?? undefined,
  repository: 'https://github.com/nuxt/content/tree/main',
  include: 'docs/content/docs/**/*',
  // exclude: ['docs/**/*.json'],
  prefix: '/nuxt/nuxtcontent/live'
}
const nuxtcontentVI = {
  // cwd: process.env.NUXT_V4_PATH ?? undefined,
  repository: 'https://github.com/jangdamaxdev/docs/tree/main',
  include: 'nuxt/nuxtcontent/**/*',
  // exclude: ['docs/**/*.json'],
  prefix: '/nuxt/nuxtcontent/vi'
}
const nuxtcoreLIVE = {
  // cwd: process.env.NUXT_V4_PATH ?? undefined,
  repository: 'https://github.com/nuxt/nuxt/tree/main',
  include: 'docs/**/*',
  exclude: ['docs/**/*.json'],
  prefix: '/nuxt/nuxtcore/live'
}
const nuxtcoreVI = {
  // cwd: process.env.NUXT_V4_PATH ?? undefined,
  repository: 'https://github.com/jangdamaxdev/docs/tree/main',
  include: 'nuxt/nuxt/**/*',
  // exclude: ['docs/**/*.json'],
  prefix: 'nuxt/nuxtcore/vi'
}
const nuxtuiLIVE = {
  // cwd: process.env.NUXT_V4_PATH ?? undefined,
  repository: 'https://github.com/nuxt/ui/tree/v3',
  include: 'docs/content/**/*',
  exclude: ['docs/**/*.json', 'showcase.yml', 'pro/**/*'],
  prefix: '/nuxt/nuxtui/live'
}
const nuxtuiVI = {
  // cwd: process.env.NUXT_V4_PATH ?? undefined,
  repository: 'https://github.com/jangdamaxdev/docs/tree/main',
  include: 'nuxt/nuxtui/**/*',
  // exclude: ['docs/**/*.json'],
  prefix: '/nuxt/nuxtui/vi'
}
const Button = z.object({
  label: z.string(),
  icon: z.string().optional(),
  trailingIcon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  id: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const NuxtUISchema = z.object({
  category: z.enum(['layout', 'form', 'element', 'navigation', 'data', 'overlay']).optional(),
  framework: z.string().optional(),
  module: z.string().optional(),
  navigation: z.object({
    title: z.string().optional()
  }),
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    to: z.string(),
    target: z.string().optional()
  }))
})
export default defineContentConfig({
  collections: {
    nuxtcore: defineCollection({
      type: 'page',
      source: [nuxtcoreLIVE, nuxtcoreVI],
      schema: z.object({
        titleTemplate: z.string().optional(),
        links: z.array(Button)
      })
    }),
  nuxtcontent: defineCollection({
      type: 'page',
      source: [nuxtcontentLIVE, nuxtcontentVI],
      schema: z.object({
        titleTemplate: z.string().optional(),
        links: z.array(Button)
      })
    }),
  nuxtui: defineCollection({
      type: 'page',
      source: [nuxtuiLIVE, nuxtuiVI],
      schema: NuxtUISchema      
    }),    
  }
})
