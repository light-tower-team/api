/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PORT: string;
  readonly HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
