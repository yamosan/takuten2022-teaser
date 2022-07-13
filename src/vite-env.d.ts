/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_DATETIME_OF_EVENT: number;
  readonly VITE_APP_TAKUTEN_2021_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
