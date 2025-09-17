import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   content: {
      databaseVersion: string,

      version: string,

      database: {
         type: string,

         bindingName: string,
      },

      localDatabase: {
         type: string,

         filename: string,
      },

      integrityCheck: boolean,
   },

   hub: {
      projectUrl: string,

      projectSecretKey: string,

      url: string,

      projectKey: string,

      userToken: string,

      remote: any,

      remoteManifest: any,

      dir: string,

      workers: any,

      ai: boolean,

      analytics: boolean,

      blob: boolean,

      browser: boolean,

      cache: boolean,

      database: boolean,

      kv: boolean,

      vectorize: any,

      databaseMigrationsDirs: Array<string>,

      databaseQueriesPaths: Array<any>,

      version: string,

      env: string,

      openapi: boolean,

      bindings: {
         observability: {
            logs: boolean,
         },

         hyperdrive: any,

         compatibilityFlags: any,
      },

      cloudflareAccess: {
         clientId: any,

         clientSecret: any,
      },
   },

   "nuxt-scripts": {
      version: string,
   },

   llms: {
      domain: string,

      title: string,

      description: string,

      notes: Array<any>,

      sections: Array<{

      }>,
   },

   session: {
      name: string,

      password: string,

      cookie: {
         sameSite: string,
      },
   },

   hash: {
      scrypt: any,
   },

   webauthn: {
      register: any,

      authenticate: any,
   },

   oauth: {
      gitea: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,

         baseURL: string,
      },

      github: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      gitlab: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,

         baseURL: string,
      },

      spotify: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      google: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      twitch: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      auth0: {
         clientId: string,

         clientSecret: string,

         domain: string,

         audience: string,

         redirectURL: string,
      },

      workos: {
         clientId: string,

         clientSecret: string,

         connectionId: string,

         screenHint: string,

         redirectURL: string,
      },

      microsoft: {
         clientId: string,

         clientSecret: string,

         tenant: string,

         scope: Array<any>,

         authorizationURL: string,

         tokenURL: string,

         userURL: string,

         redirectURL: string,
      },

      azureb2c: {
         clientId: string,

         policy: string,

         tenant: string,

         scope: Array<any>,

         authorizationURL: string,

         tokenURL: string,

         userURL: string,

         redirectURL: string,
      },

      discord: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      battledotnet: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      bluesky: {
         clientMetadataFilename: string,

         clientName: string,

         clientUri: string,

         logoUri: string,

         policyUri: string,

         tosUri: string,

         scope: Array<string>,

         grantTypes: Array<string>,

         responseTypes: Array<string>,

         applicationType: string,

         redirectUris: Array<any>,

         dpopBoundAccessTokens: boolean,

         tokenEndpointAuthMethod: string,
      },

      keycloak: {
         clientId: string,

         clientSecret: string,

         serverUrl: string,

         serverUrlInternal: string,

         realm: string,

         redirectURL: string,
      },

      linear: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      linkedin: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      cognito: {
         clientId: string,

         clientSecret: string,

         region: string,

         userPoolId: string,

         redirectURL: string,
      },

      facebook: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      instagram: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      paypal: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      steam: {
         apiKey: string,

         redirectURL: string,
      },

      x: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      xsuaa: {
         clientId: string,

         clientSecret: string,

         domain: string,

         redirectURL: string,
      },

      vk: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      yandex: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      tiktok: {
         clientKey: string,

         clientSecret: string,

         redirectURL: string,
      },

      dropbox: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      polar: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      zitadel: {
         clientId: string,

         clientSecret: string,

         domain: string,

         redirectURL: string,
      },

      authentik: {
         clientId: string,

         clientSecret: string,

         domain: string,

         redirectURL: string,
      },

      seznam: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      strava: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      hubspot: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      line: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      atlassian: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      apple: {
         teamId: string,

         keyId: string,

         privateKey: string,

         redirectURL: string,

         clientId: string,
      },

      kick: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      livechat: {
         clientId: string,

         clientSecret: string,
      },

      salesforce: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,

         baseURL: string,

         scope: string,
      },

      slack: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,

         scope: string,
      },

      heroku: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,

         scope: string,
      },

      roblox: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,

         scope: string,
      },

      okta: {
         clientId: string,

         clientSecret: string,

         domain: string,

         audience: string,

         scope: Array<any>,

         redirectURL: string,
      },

      ory: {
         clientId: string,

         clientSecret: string,

         sdkURL: string,

         redirectURL: string,

         scope: Array<any>,

         authorizationURL: string,

         tokenURL: string,

         userURL: string,
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,

      multiTenancy: Array<any>,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      strictNuxtContentPaths: any,

      isNuxtContentDocumentDriven: boolean,

      componentDirs: Array<string>,
   },
  }
  interface SharedPublicRuntimeConfig {
   content: {
      wsUrl: string,
   },

   mdc: {
      components: {
         prose: boolean,

         map: {
            accordion: string,

            "accordion-item": string,

            badge: string,

            callout: string,

            card: string,

            "card-group": string,

            caution: string,

            "code-collapse": string,

            "code-group": string,

            "code-icon": string,

            "code-preview": string,

            "code-tree": string,

            collapsible: string,

            field: string,

            "field-group": string,

            icon: string,

            kbd: string,

            note: string,

            steps: string,

            tabs: string,

            "tabs-item": string,

            tip: string,

            warning: string,
         },
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   hub: any,

   plausible: {
      enabled: boolean,

      hashMode: boolean,

      domain: string,

      ignoredHostnames: Array<string>,

      ignoreSubDomains: boolean,

      trackLocalhost: any,

      apiHost: string,

      autoPageviews: boolean,

      autoOutboundTracking: boolean,

      logIgnoredEvents: boolean,

      proxy: boolean,

      proxyBaseEndpoint: string,
   },

   "nuxt-scripts": {
      version: string,

      defaultScriptOptions: {
         trigger: string,
      },
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }