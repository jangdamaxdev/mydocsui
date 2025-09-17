import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxt/icon"]?: ModuleDependencyMeta<typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/fonts"]?: ModuleDependencyMeta<typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/color-mode"]?: ModuleDependencyMeta<typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/ui"]?: ModuleDependencyMeta<typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuip"]?: ModuleDependencyMeta<typeof import("nuip").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-content-twoslash"]?: ModuleDependencyMeta<typeof import("nuxt-content-twoslash").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms"]?: ModuleDependencyMeta<typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/mdc"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/content"]?: ModuleDependencyMeta<typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxthub/core"]?: ModuleDependencyMeta<typeof import("@nuxthub/core").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/plausible"]?: ModuleDependencyMeta<typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/eslint"]?: ModuleDependencyMeta<typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/scripts"]?: ModuleDependencyMeta<typeof import("@nuxt/scripts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@vueuse/nuxt"]?: ModuleDependencyMeta<typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-component-meta"]?: ModuleDependencyMeta<typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module"]?: ModuleDependencyMeta<typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["motion-v/nuxt"]?: ModuleDependencyMeta<typeof import("motion-v/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-llms"]?: ModuleDependencyMeta<typeof import("nuxt-llms").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-charts"]?: ModuleDependencyMeta<typeof import("nuxt-charts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-auth-utils"]?: ModuleDependencyMeta<typeof import("nuxt-auth-utils").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["E:/PROJECT/mydocsui/modules/changelog"]?: ModuleDependencyMeta<typeof import("E:/PROJECT/mydocsui/modules/changelog").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["E:/PROJECT/mydocsui/modules/component-example"]?: ModuleDependencyMeta<typeof import("E:/PROJECT/mydocsui/modules/component-example").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuip`
     */
    ["uiPro"]: typeof import("nuip").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-content-twoslash`
     */
    ["twoslash"]: typeof import("nuxt-content-twoslash").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms`
     */
    ["content.llms"]: typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxthub/core`
     */
    ["hub"]: typeof import("@nuxthub/core").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/plausible`
     */
    ["plausible"]: typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     */
    ["scripts"]: typeof import("@nuxt/scripts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     */
    ["componentMeta"]: typeof import("nuxt-component-meta").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `motion-v/nuxt`
     */
    ["motionV"]: typeof import("motion-v/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-llms`
     */
    ["llms"]: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-charts`
     */
    ["nuxtCharts"]: typeof import("nuxt-charts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     */
    ["auth"]: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/modules/changelog`
     */
    ["changelog"]: typeof import("E:/PROJECT/mydocsui/modules/changelog").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/modules/component-example`
     */
    ["component-example"]: typeof import("E:/PROJECT/mydocsui/modules/component-example").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuip`
     */
    ["uiPro"]?: typeof import("nuip").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-content-twoslash`
     */
    ["twoslash"]?: typeof import("nuxt-content-twoslash").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms`
     */
    ["content.llms"]?: typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxthub/core`
     */
    ["hub"]?: typeof import("@nuxthub/core").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/plausible`
     */
    ["plausible"]?: typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     */
    ["scripts"]?: typeof import("@nuxt/scripts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     */
    ["componentMeta"]?: typeof import("nuxt-component-meta").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `motion-v/nuxt`
     */
    ["motionV"]?: typeof import("motion-v/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-llms`
     */
    ["llms"]?: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-charts`
     */
    ["nuxtCharts"]?: typeof import("nuxt-charts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     */
    ["auth"]?: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/modules/changelog`
     */
    ["changelog"]?: typeof import("E:/PROJECT/mydocsui/modules/changelog").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/modules/component-example`
     */
    ["component-example"]?: typeof import("E:/PROJECT/mydocsui/modules/component-example").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["nuip", Exclude<NuxtConfig["uiPro"], boolean>] | ["nuxt-content-twoslash", Exclude<NuxtConfig["twoslash"], boolean>] | ["E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms", Exclude<NuxtConfig["content.llms"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxthub/core", Exclude<NuxtConfig["hub"], boolean>] | ["@nuxtjs/plausible", Exclude<NuxtConfig["plausible"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/scripts", Exclude<NuxtConfig["scripts"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-component-meta", Exclude<NuxtConfig["componentMeta"], boolean>] | ["E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["motion-v/nuxt", Exclude<NuxtConfig["motionV"], boolean>] | ["nuxt-llms", Exclude<NuxtConfig["llms"], boolean>] | ["nuxt-charts", Exclude<NuxtConfig["nuxtCharts"], boolean>] | ["nuxt-auth-utils", Exclude<NuxtConfig["auth"], boolean>] | ["E:/PROJECT/mydocsui/modules/changelog", Exclude<NuxtConfig["changelog"], boolean>] | ["E:/PROJECT/mydocsui/modules/component-example", Exclude<NuxtConfig["component-example"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxt/icon"]?: ModuleDependencyMeta<typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/fonts"]?: ModuleDependencyMeta<typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/color-mode"]?: ModuleDependencyMeta<typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/ui"]?: ModuleDependencyMeta<typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuip"]?: ModuleDependencyMeta<typeof import("nuip").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-content-twoslash"]?: ModuleDependencyMeta<typeof import("nuxt-content-twoslash").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms"]?: ModuleDependencyMeta<typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/mdc"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/content"]?: ModuleDependencyMeta<typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxthub/core"]?: ModuleDependencyMeta<typeof import("@nuxthub/core").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/plausible"]?: ModuleDependencyMeta<typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/eslint"]?: ModuleDependencyMeta<typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/scripts"]?: ModuleDependencyMeta<typeof import("@nuxt/scripts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@vueuse/nuxt"]?: ModuleDependencyMeta<typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-component-meta"]?: ModuleDependencyMeta<typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module"]?: ModuleDependencyMeta<typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["motion-v/nuxt"]?: ModuleDependencyMeta<typeof import("motion-v/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-llms"]?: ModuleDependencyMeta<typeof import("nuxt-llms").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-charts"]?: ModuleDependencyMeta<typeof import("nuxt-charts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-auth-utils"]?: ModuleDependencyMeta<typeof import("nuxt-auth-utils").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["E:/PROJECT/mydocsui/modules/changelog"]?: ModuleDependencyMeta<typeof import("E:/PROJECT/mydocsui/modules/changelog").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["E:/PROJECT/mydocsui/modules/component-example"]?: ModuleDependencyMeta<typeof import("E:/PROJECT/mydocsui/modules/component-example").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://ui.nuxt.com/getting-started/installation/nuxt
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuip`
     * @see https://www.npmjs.com/package/nuip
     */
    ["uiPro"]: typeof import("nuip").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-content-twoslash`
     * @see https://www.npmjs.com/package/nuxt-content-twoslash
     */
    ["twoslash"]: typeof import("nuxt-content-twoslash").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms`
     * @see https://www.npmjs.com/package/E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms
     */
    ["content.llms"]: typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://content.nuxt.com
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxthub/core`
     * @see https://hub.nuxt.com
     */
    ["hub"]: typeof import("@nuxthub/core").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/plausible`
     * @see https://www.npmjs.com/package/@nuxtjs/plausible
     */
    ["plausible"]: typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     * @see https://www.npmjs.com/package/@nuxt/scripts
     */
    ["scripts"]: typeof import("@nuxt/scripts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     * @see https://www.npmjs.com/package/nuxt-component-meta
     */
    ["componentMeta"]: typeof import("nuxt-component-meta").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `motion-v/nuxt`
     * @see https://www.npmjs.com/package/motion-v/nuxt
     */
    ["motionV"]: typeof import("motion-v/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-llms`
     * @see https://github.com/nuxtlabs/nuxt-llms
     */
    ["llms"]: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-charts`
     * @see https://www.npmjs.com/package/nuxt-charts
     */
    ["nuxtCharts"]: typeof import("nuxt-charts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     * @see https://www.npmjs.com/package/nuxt-auth-utils
     */
    ["auth"]: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/modules/changelog`
     * @see https://www.npmjs.com/package/E:/PROJECT/mydocsui/modules/changelog
     */
    ["changelog"]: typeof import("E:/PROJECT/mydocsui/modules/changelog").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/modules/component-example`
     * @see https://www.npmjs.com/package/E:/PROJECT/mydocsui/modules/component-example
     */
    ["component-example"]: typeof import("E:/PROJECT/mydocsui/modules/component-example").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://ui.nuxt.com/getting-started/installation/nuxt
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuip`
     * @see https://www.npmjs.com/package/nuip
     */
    ["uiPro"]?: typeof import("nuip").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-content-twoslash`
     * @see https://www.npmjs.com/package/nuxt-content-twoslash
     */
    ["twoslash"]?: typeof import("nuxt-content-twoslash").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms`
     * @see https://www.npmjs.com/package/E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms
     */
    ["content.llms"]?: typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://content.nuxt.com
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxthub/core`
     * @see https://hub.nuxt.com
     */
    ["hub"]?: typeof import("@nuxthub/core").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/plausible`
     * @see https://www.npmjs.com/package/@nuxtjs/plausible
     */
    ["plausible"]?: typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     * @see https://www.npmjs.com/package/@nuxt/scripts
     */
    ["scripts"]?: typeof import("@nuxt/scripts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     * @see https://www.npmjs.com/package/nuxt-component-meta
     */
    ["componentMeta"]?: typeof import("nuxt-component-meta").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `motion-v/nuxt`
     * @see https://www.npmjs.com/package/motion-v/nuxt
     */
    ["motionV"]?: typeof import("motion-v/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-llms`
     * @see https://github.com/nuxtlabs/nuxt-llms
     */
    ["llms"]?: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-charts`
     * @see https://www.npmjs.com/package/nuxt-charts
     */
    ["nuxtCharts"]?: typeof import("nuxt-charts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     * @see https://www.npmjs.com/package/nuxt-auth-utils
     */
    ["auth"]?: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/modules/changelog`
     * @see https://www.npmjs.com/package/E:/PROJECT/mydocsui/modules/changelog
     */
    ["changelog"]?: typeof import("E:/PROJECT/mydocsui/modules/changelog").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `E:/PROJECT/mydocsui/modules/component-example`
     * @see https://www.npmjs.com/package/E:/PROJECT/mydocsui/modules/component-example
     */
    ["component-example"]?: typeof import("E:/PROJECT/mydocsui/modules/component-example").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["nuip", Exclude<NuxtConfig["uiPro"], boolean>] | ["nuxt-content-twoslash", Exclude<NuxtConfig["twoslash"], boolean>] | ["E:/PROJECT/mydocsui/node_modules/.pnpm/@nuxt+content@3.7.1_better-_0ff76a6cd2e4d8fb154d877e89c58bf9/node_modules/@nuxt/content/dist/features/llms", Exclude<NuxtConfig["content.llms"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxthub/core", Exclude<NuxtConfig["hub"], boolean>] | ["@nuxtjs/plausible", Exclude<NuxtConfig["plausible"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/scripts", Exclude<NuxtConfig["scripts"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-component-meta", Exclude<NuxtConfig["componentMeta"], boolean>] | ["E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-site-config@3.2.5_h3@1_d67ee400ea2af3c2dd6c8e4aa8ffe88f/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["motion-v/nuxt", Exclude<NuxtConfig["motionV"], boolean>] | ["nuxt-llms", Exclude<NuxtConfig["llms"], boolean>] | ["nuxt-charts", Exclude<NuxtConfig["nuxtCharts"], boolean>] | ["nuxt-auth-utils", Exclude<NuxtConfig["auth"], boolean>] | ["E:/PROJECT/mydocsui/modules/changelog", Exclude<NuxtConfig["changelog"], boolean>] | ["E:/PROJECT/mydocsui/modules/component-example", Exclude<NuxtConfig["component-example"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}