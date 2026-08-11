# Jorene — Portfolio Site

## Structure
```
jorene-portfolio/
├── index.html        Landing page ("Hello, I am Jorene")
├── about.html         About + education timeline, "View Projects" CTA
├── projects.html       Filterable project grid
├── project.html        Project detail template (reused for every project)
├── css/styles.css       All styling, colors, type
├── js/data.js           Your project list — EDIT THIS to add/change projects
├── js/main.js           Renders the grid + detail page from data.js
└── images/              Put your photos here
```

## How the pages connect
1. **index.html** → "Get to know me" button links to `about.html`.
2. **about.html** → "View Projects" button links to `projects.html`.
3. **projects.html** → each tile links to `project.html?id=<project-id>`.
4. **project.html** reads the `id` from the URL and pulls the matching entry
   out of `js/data.js` to build the expanded detail view — so you only
   maintain one detail page for every project.

## Adding your own photos
1. Drop image files into the `images/` folder (e.g. `images/project-1.jpg`,
   `images/portrait.jpg`).
2. Open `js/data.js` and point each project's `image` field at your file.
3. Open `about.html` and update the portrait `<img src="...">` near the top.

If an image path is missing, the page shows a soft placeholder instead of a
broken-image icon, so nothing looks broken while you're still adding photos.

## Adding / editing a project
Open `js/data.js` and copy one of the existing objects in the `PROJECTS`
array. Give it a unique `id` (used in the URL), fill in `title`, `category`,
`image`, `summary`, and a `body` array of paragraphs for the detail page.
No other file needs to change — the grid and detail page update automatically.

## Editing colors, fonts, or layout
Everything lives in `css/styles.css`. The top of the file has a `:root`
block with named CSS variables (`--bg`, `--gold`, `--ink`, etc.) — change a
value there and it updates across every page.

## Viewing it locally
Because `project.html` reads data dynamically, opening the files directly
with `file://` works in most browsers, but if project images don't load
correctly, run a tiny local server instead from inside the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Publishing
Once you're happy with it, this folder can be deployed as-is to any static
host — Netlify, Vercel, GitHub Pages, or Squarespace's own file hosting all
work with plain HTML/CSS/JS like this.
