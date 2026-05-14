# Axiom Website

A ready-to-upload Next.js + TailwindCSS landing page for the Axiom Protocol.

## Stack

- Next.js
- TypeScript
- TailwindCSS
- Static export for Cloudflare Pages
- No paid services required

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

The project uses `output: "export"` in `next.config.js`, so it can be deployed as a static website.

## Deploy to Cloudflare Pages

1. Create a GitHub repository, for example `axiom-website`.
2. Upload all files in this folder.
3. Go to Cloudflare Pages.
4. Create Project.
5. Connect GitHub.
6. Select the repo.
7. Build command:

```bash
npm run build
```

8. Output directory:

```bash
out
```

9. Deploy.

Cloudflare will give you a free URL like:

```text
https://axiom.pages.dev
```

## Replace Document Files

The folder below contains placeholder PDFs:

```text
public/documents/
```

Replace them with the official Axiom PDFs before publishing.

## Important Links to Edit

Edit community links in:

```text
src/components/Community.tsx
```

Edit document metadata in:

```text
src/data/site.ts
```

## Manifesto Page

This version includes a dedicated route:

```text
/manifesto
```

After deployment, open:

```text
https://YOUR-PROJECT.pages.dev/manifesto
```
