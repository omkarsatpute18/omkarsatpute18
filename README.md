# Omkar Satpute: Portfolio

A static portfolio built with HTML, CSS and vanilla JavaScript. No build step, no backend.

## Folder structure
```
omkar-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    ├── resume.pdf
    └── projects/
        ├── stockout-risk.png
        ├── llm-monitoring.png
        ├── ewaste.png
        └── powerbi.png
```

## Fill in your details
Search `index.html` for text in square brackets, such as `[YOUR EMAIL]`, `[YOUR GITHUB URL]`, `[YOUR COLLEGE]`, and replace each one. Delete any contact card or social icon you do not need.

- **Profile photo:** save a square image as `assets/profile.jpg` (about 600x600 px).
- **Resume:** save your PDF as `assets/resume.pdf`.
- **Project screenshots:** save images into `assets/projects/` using the file names above. A card with no image simply hides the picture.
- **GitHub / LinkedIn links:** edit the `href` values in the hero icons and in the Contact section. For X or YouTube, uncomment the example icon in the hero and add a matching contact card.

## Deploy with GitHub Pages
1. Create a repository (for example `omkar-portfolio`) and push these files to the `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute your site is live at `https://<username>.github.io/omkar-portfolio/`.

## Customize
- **Colors:** edit the variables at the top of `style.css` (`--text`, `--accent`, `--border`, and so on).
- **New project:** copy one `<article class="card">` block inside the projects grid in `index.html` and edit it.
- **New skill:** copy one `<li class="skill">` in `index.html`. Set `data-cat` to one or more of `ds ml python sql viz tools`, separated by spaces. The count updates automatically.
- **Timeline:** copy one `<li class="tl-item">` inside the `<ol class="timeline">` and edit the year, title and text.