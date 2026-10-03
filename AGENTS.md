# Repository guidance

- Use Bun as the package manager and script runner.
- Keep this repository limited to the public website. Application code belongs in the main Ecqqo repository.
- The site is a static-assets-only Cloudflare Worker; don't add Worker code or services when a static page is sufficient.
- Keep English and Arabic copy in `src/i18n/translations.ts` in sync.
- Run `bun run check` and `bun run build` after changes.
- Pushing to `main` deploys through `.github/workflows/deploy.yml`; `bun run deploy` deploys from a local machine.
- Validate untrusted HTTP and third-party response data at runtime.
