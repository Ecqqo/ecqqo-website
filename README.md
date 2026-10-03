# Ecqqo Website

The public website for Ecqqo LLC at `ecqqo.com`. It is a static React/Vite site, served by a Cloudflare Worker with static assets only (no Worker code, no bindings). The Ecqqo application lives in its own repository and runs at `app.ecqqo.com`.

## Commands

```bash
bun install
bun run dev
bun run check
bun run build
```

## Deploys

Cloudflare Workers Builds deploys every push to `main`. The Worker `ecqqo-website` is connected to this repository through the Cloudflare GitHub app, so no API token or GitHub secret is needed. Its build settings (Workers & Pages → `ecqqo-website` → Settings → Build) are:

| Setting | Value |
| --- | --- |
| Root directory | `/` |
| Build command | `bun run check && bun run build` |
| Deploy command | `bunx wrangler deploy` |
| Preview builds | Off |

The Worker serves `dist` on the `ecqqo.com` and `www.ecqqo.com` custom domains, with single-page-application fallback. The contact form posts to `https://app.ecqqo.com/api/contact`, which creates a NeetoDesk ticket.

## Public review URLs

- Privacy policy: https://ecqqo.com/privacy
- Terms of service: https://ecqqo.com/terms
- Data deletion instructions: https://ecqqo.com/data-deletion
- Contact: https://ecqqo.com/contact
