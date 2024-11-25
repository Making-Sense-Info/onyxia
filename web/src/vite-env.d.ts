/// <reference types="vite-envs/client" />

type ImportMetaEnv = {
  // Auto-generated by `npx vite-envs update-types` and hot-reloaded by the `vite-env` plugin
  // You probably want to add `/src/vite-env.d.ts` to your .prettierignore
  BASE_URL: string
  MODE: string
  DEV: boolean
  PROD: boolean
  WEB_VERSION: string
  PUBLIC_URL: string
  HEADER_LOGO: string
  HEADER_HIDE_ONYXIA: string
  HEADER_TEXT_BOLD: string
  HEADER_TEXT_FOCUS: string
  DARK_MODE: string
  PALETTE_OVERRIDE: string
  FONT: string
  SPLASHSCREEN_LOGO: string
  SPLASHSCREEN_LOGO_SCALE_FACTOR: string
  FAVICON: string
  TAB_TITLE: string
  SOCIAL_MEDIA_TITLE: string
  SOCIAL_MEDIA_DESCRIPTION: string
  SOCIAL_MEDIA_IMAGE: string
  BACKGROUND_ASSET: string
  HEADER_LINKS: string
  LEFTBAR_LINKS: string
  DISABLE_HOMEPAGE: string
  HOMEPAGE_LOGO: string
  HOMEPAGE_MAIN_ASSET: string
  HOMEPAGE_MAIN_ASSET_X_OFFSET: string
  HOMEPAGE_MAIN_ASSET_Y_OFFSET: string
  HOMEPAGE_MAIN_ASSET_SCALE_FACTOR: string
  HOMEPAGE_HERO_TEXT: string
  HOMEPAGE_HERO_TEXT_AUTHENTICATED: string
  HOMEPAGE_BELOW_HERO_TEXT: string
  HOMEPAGE_BELOW_HERO_TEXT_AUTHENTICATED: string
  HOMEPAGE_CALL_TO_ACTION_BUTTON: string
  HOMEPAGE_CALL_TO_ACTION_BUTTON_AUTHENTICATED: string
  HOMEPAGE_CARDS: string
  LIST_ALLOWED_EMAIL_DOMAINS: string
  CONTACT_FOR_ADDING_EMAIL_DOMAIN: string
  TERMS_OF_SERVICES: string
  CUSTOM_HTML_HEAD: string
  GLOBAL_ALERT: string
  ENABLED_LANGUAGES: string
  DISABLE_COMMAND_BAR: string
  DISABLE_PERSONAL_INFOS_INJECTION_IN_GROUP: string
  DISABLE_AUTO_LAUNCH: string
  AUTHENTICATION_GLOBALLY_REQUIRED: string
  SAMPLE_DATASET_URL: string
  QUOTA_WARNING_THRESHOLD: string
  QUOTA_CRITICAL_THRESHOLD: string
  RUNNING_TIME_THRESHOLD: string
  SERVICE_CONFIGURATION_EXPANDED_BY_DEFAULT: string
  S3_DOCUMENTATION_LINK: string
  VAULT_DOCUMENTATION_LINK: string
  ONYXIA_API_URL: string
  ONYXIA_VERSION: string
  ONYXIA_VERSION_URL: string
  ALLOW_THEME_TESTING_VIA_URL: string
  SCREEN_SCALER: string
  // @user-defined-start
  /*
   * Here you can define your own special variables
   * that would be available on `import.meta.env` but
   * that vite-envs does not know about.
   * This section will be preserved thanks to the special comments.
   * Example:
   */
  // SSR: boolean;
  // @user-defined-end
}

interface ImportMeta {
  // Auto-generated by `npx vite-envs update-types`

  url: string

  readonly hot?: import('vite-envs/types/hot').ViteHotContext

  readonly env: ImportMetaEnv

  glob: import('vite-envs/types/importGlob').ImportGlobFunction
}

interface Window {
  kcContext?: import("./keycloak-theme/login/KcContext").KcContext;
}
