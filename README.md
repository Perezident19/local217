# IATSE Local 217 Website

Static, Vercel-ready website for IATSE Local 217.

## Pages

- `index.html`
- `about.html`
- `calendars.html`
- `training.html`
- `news.html`
- `article.html`
- `gallery.html`
- `join.html`
- `contact.html` / Work With Local 217

## Updating Content

Most repeatable content lives in `assets/site.js`:

- events
- trainings
- news posts
- committee updates
- article detail content
- leadership cards
- gallery items
- memorial entries
- venue cards
- office phone and public contact details

Optimized client photos live in `assets/photos/local217`. The current photo sources are listed in `IMAGE-CREDITS.md`.

The Home page overview-video area currently uses a poster image. When the approved video is ready, replace the `video-poster` block in `index.html` with the YouTube or Vimeo embed.

Forms are visual/static for now. On Vercel, they can later be connected to a service such as Formspree, Airtable, Google Sheets, Resend, or a Next.js/Serverless backend.

## Current Launch Status

- Office visits are by appointment only.
- Form submit buttons are disabled until delivery is connected. Direct email and telephone alternatives are shown.
- The old static event list is no longer mounted on Calendars. The published training-sheet link is retained, but a live public calendar source still needs confirmation and integration.
- The unconfirmed weekly meeting schedule has been removed from page output.
- The blank remembrance section is hidden and not rendered by JavaScript.
- The unfinished Upcoming Training Opportunities post is marked draft and excluded from the feed and direct article route. The two complete supplied historical posts remain visible.
- Photo selections still need client review. Videos have not been reviewed or added.
- No domain purchase, email provisioning, invoice, or Vercel deployment has been performed.

## Deploying On Vercel

Deploy the `local217-site` folder as a static project. Vercel will serve the HTML/CSS/JS files directly and use `vercel.json` for clean URLs.
