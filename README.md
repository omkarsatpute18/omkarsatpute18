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
        ├── shopya.png
        ├── sgnpy.png
        ├── redflag.png
        └── shetimitra.png
```

## Fill in your details
All text, links and project details are already filled in from your information. Only the image and PDF files below still need to be added.

- **Profile photo:** save a square image as `assets/profile.jpg` (about 600x600 px).
- **Resume:** save your PDF as `assets/resume.pdf`.
- **Project screenshots:** save images into `assets/projects/` using the file names above. A card with no image simply hides the picture.
- **GitHub / LinkedIn links:** edit the `href` values in the hero icons and in the Contact section. To add X or YouTube later, copy a social icon `<li>` in the hero and a contact card.

## Deploy with GitHub Pages
1. Create a repository (for example `omkar-portfolio`) and push these files to the `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute your site is live at `https://<username>.github.io/omkar-portfolio/`.

## Customize
- **Colors:** edit the variables at the top of `style.css` (`--text`, `--accent`, `--border`, and so on).
- **New project:** copy one `<article class="card">` block inside the projects grid in `index.html` and edit it.
- **New skill:** copy one `<li class="skill">` in `index.html`. Set `data-cat` to one or more of `ds ml python sql viz tools soft` (`soft` appears only under All Skills), separated by spaces. The count updates automatically.
- **Timeline:** copy one `<li class="tl-item">` inside the `<ol class="timeline">` and edit the year, title and text.