# IATSE Local 217 Website

Static, Vercel-ready website for IATSE Local 217.

## Pages

- `index.html`
- `about.html`
- `calendars.html`
- `training.html`
- `news.html`
- `gallery.html`
- `join.html`
- `contact.html`

## Updating Content

Most repeatable content lives in `assets/site.js`:

- events
- trainings
- news posts
- committee updates
- leadership cards
- gallery items
- memorial entries
- venue cards

Forms are visual/static for now. On Vercel, they can later be connected to a service such as Formspree, Airtable, Google Sheets, Resend, or a Next.js/Serverless backend.

## Deploying On Vercel

Deploy the `local217-site` folder as a static project. Vercel will serve the HTML/CSS/JS files directly and use `vercel.json` for clean URLs.
