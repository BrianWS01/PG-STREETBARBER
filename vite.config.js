import { defineConfig } from 'vite'

export default defineConfig({
  // Se estiver no GitHub Actions, usa o subdiretório. No Vercel/Local, usa raiz.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/PG-STREETBARBER/' : '/',
})
