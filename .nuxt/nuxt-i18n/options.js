import locale9ec66352 from '../..\\locales\\en.json'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","dateTimeFormats":{"en-US":{"short":{"year":"numeric","month":"short","day":"numeric"}},"ro-RO":{"short":{"year":"numeric","month":"long","day":"numeric"}}},"numberFormats":{"en-US":{"currency":{"style":"currency","currency":"USD"}},"ro-RO":{"currency":{"style":"currency","currency":"RON"}}},"silentTranslationWarn":true},
  vueI18nLoader: true,
  locales: [{"code":"en","iso":"en-US","file":"en.json"},{"code":"ro","iso":"ro-RO","file":"ro.json"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "F:\\10qbit\\luma_nuxt-v2\\luma-nuxt-v2.2.0\\locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","iso":"en-US","file":"en.json"},{"code":"ro","iso":"ro-RO","file":"ro.json"}],
  localeCodes: ["en","ro"],
}

export const localeMessages = {
  'en.json': () => Promise.resolve(locale9ec66352),
  'ro.json': () => import('../..\\locales\\ro.json' /* webpackChunkName: "lang-ro.json" */),
}
