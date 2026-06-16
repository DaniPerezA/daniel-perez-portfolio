# Daniel Pérez Álvarez — Professional Portfolio

Professional, fully static personal website for positioning with companies and recruiters.

- **No backend, no special hosting**
- Single `index.html` + `assets/` folder
- English by default + professional Spanish toggle (instant switch, no reload)
- Modern, clean, recruiter-friendly design using Tailwind CSS (CDN)
- Fully responsive, accessible, fast-loading
- Easy to customize and deploy anywhere (GitHub Pages, Netlify, Vercel, any static host)

## Quick Start (local preview)

1. Open `index.html` directly in any browser (double-click or drag).
2. Or serve it properly:
   ```bash
   cd daniel-perez-website
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```

## Customization

All content lives in the JavaScript `i18n` object near the top of `index.html`.

- Edit the `en` and `es` sections to update text, experience, projects, skills, testimonials.
- To add/remove experience or project cards: edit the arrays in both languages.
- Images:
  - Headshot: replace `assets/headshot.jpg` (keep same filename or update the src in HTML/JS).
  - Project images (optional): add to `assets/` and reference them in the `projects` data (e.g. `"image": "assets/project1.png"`).
- CV downloads: PDFs are in `assets/`. Update the filenames or add more versions in the download buttons.

## Adding More Success Cases / Projects

1. Add a new object to the `projects` array in both `en` and `es`.
2. Include: title, period or context, impact/results (use metrics when possible), technologies, and optional `link` + `image`.

Example project entry:
```js
{
  title: "High-Throughput Transaction Categorization",
  context: "Qwist — 2021-2024",
  impact: "Processed 7 million transactions daily at 3.5K req/s with rules + ML models.",
  tech: "Spring Boot, Spring WebFlux, Python, GCP Kubernetes, MongoDB Atlas",
  link: "https://..."
}
```

## Deployment (zero cost options)

### GitHub Pages (recommended for version control)
1. Create a new GitHub repo (public or private).
2. Upload the entire `daniel-perez-website` folder contents (or push via git).
3. In repo Settings → Pages:
   - Source: Deploy from a branch → `main` / root (or create `/docs` folder).
4. Your site will be live at `https://<username>.github.io/<repo>` in ~1 minute.

### Netlify (easiest drag & drop)
- Go to https://app.netlify.com/drop
- Drag the `daniel-perez-website` folder.
- Instant URL + free custom domain + HTTPS.

### Vercel
- Import the GitHub repo or use `vercel` CLI.

Any other static host works (Cloudflare Pages, Firebase Hosting, etc.).

## SEO & Social

- Title, meta description, and Open Graph tags are already set (edit in `<head>`).
- Update LinkedIn / GitHub URLs in the contact and hero sections.
- After deploy, test sharing on LinkedIn/Twitter — the OG tags will show nicely.

## Tips for Recruiters & Positioning
- Keep the Projects / Impact section focused on measurable outcomes (transactions/sec, team scale, compliance achievements, successful acquisitions).
- Update the "Download CV" buttons with your latest versions.
- The bilingual toggle helps international and Spanish-speaking recruiters.

## Need help?
Edit the content object in `index.html`, refresh, and test. Provide new text, project details, or photos and I can update it directly here.

Current assets included:
- `headshot.jpg` (professional headshot – used in Hero)
- `headshot-casual.jpg` (color smiling portrait – kept in assets as alternative)
- `headshot-casual-bw.jpg` (black & white version – currently used in About section for a timeless, elegant look)
- `CV_Daniel_Perez_English.pdf`
- `CV_Daniel_Perez_ES.pdf`
- `MyValue_Reference_Letter.pdf` (full signed letter from Andrés Romerales Cidoncha, CEO & Founder of MyValue Solutions)
- `Qwist_Reference_Letter.pdf` (full signed letter from Qwist – Carlos Gomez & Dennis Lutter)

Both full reference letters are linked directly from the Testimonials section on the site so recruiters can view the signatures and complete text. Summaries/quotes are shown on the main page as before.

---

Built as a clean static site — professional, fast, and maintenance-free.