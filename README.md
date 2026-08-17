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

Optimized stock photos live in `assets/photos`. The current photo credits are listed in `IMAGE-CREDITS.md`.

The Home page overview-video area currently uses a poster image. When the approved video is ready, replace the `video-poster` block in `index.html` with the YouTube or Vimeo embed.

Forms are visual/static for now. On Vercel, they can later be connected to a service such as Formspree, Airtable, Google Sheets, Resend, or a Next.js/Serverless backend.

## Deploying On Vercel

Deploy the `local217-site` folder as a static project. Vercel will serve the HTML/CSS/JS files directly and use `vercel.json` for clean URLs.
