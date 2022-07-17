/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_DATETIME_OF_EVENT: number;
  readonly VITE_APP_TAKUTEN_2021_SITE_URL: string;
  readonly VITE_APP_TAKUTEN_2021_INSTAGRAM_URL: string;
  readonly VITE_APP_TAKUTEN_2021_TWITTER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
