# Serendipity (세렌디피티)

Static website for Serendipity dining bar (Yangjae).

## Live URLs

- GitHub Pages: https://wol2.github.io/serendipity/
- Vercel: https://serendipity-dining.vercel.app
- Netlify: https://serendipity-dining.netlify.app
- Cloudflare Pages:
  - https://serendipity-dining.pages.dev
  - Latest deploy (unique): https://ee1f840f.serendipity-dining.pages.dev

## Project Structure

- `index.html` - Single-page site (sections: menu board, menu, drinks, gallery, visit)
- `styles.css` - Global styling, layout, responsive rules
- `main.js` - UI behavior (menu filtering, lightbox, mobile nav, scroll reveal, to-top)
- `assets/`
  - `assets/food/` - Food images
  - `assets/drinks/` - Drink images
  - `assets/gallery/` - Gallery images
  - `assets/menuboard/` - Original menu board scans (source)
  - `assets/menuboard_opt/` - Optimized menu board images used by the site

## Local Preview

```bash
cd C:\workspaces\serendipity
python -m http.server 5173
```

Open:

- http://127.0.0.1:5173/

## Notes

- This repository contains images downloaded from third-party platforms for prototyping.
  Before public/commercial use, replace them with images you own or have explicit permission to use.

## Deployment

This is a static site. You can deploy it to any static host.

- Build command: (none)
- Output directory: `.`
