# Ajmal Portfolio — React (Vite)

A React rebuild of the portfolio, restyled with a small "developer terminal" design
system (terminal-window hero, monospace accents, timeline journey, project cards).

## Folder structure

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── profile.jpg          ← replace with your own photo
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx                ← composes all sections
    ├── index.css              ← all design tokens + styles
    ├── data.js                ← ALL your content lives here (edit this to update text)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Journey.jsx
        ├── Projects.jsx
        ├── Strengths.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Step-by-step: run it locally

1. **Install Node.js** (v18+) from nodejs.org if you don't have it.
2. **Unzip** this project, then open a terminal in the `portfolio-react` folder.
3. **Install dependencies:**
   ```
   npm install
   ```
4. **Start the dev server:**
   ```
   npm run dev
   ```
   Open the printed local URL (usually `http://localhost:5173`).
5. **Edit your content** in `src/data.js` — name, role, email, phone, skills, journey,
   projects, strengths. You don't need to touch the components for text changes.
6. **Replace the photo** at `public/profile.jpg` with your own picture (same filename,
   or update the `photo` path in `src/data.js`).
7. **Build for production** when ready to deploy:
   ```
   npm run build
   ```
   This outputs static files to `dist/`.
8. **Deploy** — drag the `dist/` folder into Vercel/Netlify, or run `vercel` /
   connect the repo to Vercel for automatic deploys (same as the original site).

## Notes

- The contact form currently only logs to the console (`handleSubmit` in
  `src/components/Contact.jsx`). Wire it up to a service like Formspree, EmailJS, or
  your own backend endpoint to actually receive messages.
- Fonts (Space Grotesk / Inter / JetBrains Mono) are loaded from Google Fonts in
  `index.html`.
- All colors/spacing are CSS variables at the top of `src/index.css` — change them
  there to re-theme the whole site.
