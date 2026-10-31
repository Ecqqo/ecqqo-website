# Repository guidance

- Use Bun as the package manager and script runner.
- Keep this repository limited to the public website. Application code belongs in the main Ecqqo repository.
- The site is a static-assets-only Cloudflare Worker; don't add Worker code or services when a static page is sufficient.
- Keep English and Arabic copy in `src/i18n/translations.ts` in sync.
- Run `bun run check` and `bun run build` after changes.
- Pushing to `main` deploys through Cloudflare's Git integration, which builds the site and publishes the Worker.
- Validate untrusted HTTP and third-party response data at runtime.
