# Nathaniel Weidner Engineering Portfolio

Static personal portfolio website for Nathaniel Weidner. The site is intentionally built with plain HTML, CSS, and a small amount of JavaScript so it can be maintained without a framework or build system.

## Site structure

```text
Nathaniel_Weidner_Portfolio/
├── index.html                 Home
├── projects.html              Projects overview
├── about.html                 About page
├── resume.html                Resume viewer/download
├── projects/
│   ├── bastion.html
│   ├── animatronics.html
│   ├── turbofan.html
│   ├── rocket.html
│   └── odnr.html
├── css/
│   └── styles.css             Shared styling for the whole site
├── js/
│   └── main.js                Mobile navigation + current footer year
└── assets/
    ├── files/
    │   └── Nathaniel_Weidner_Resume.pdf
    ├── images/
    │   ├── home/
    │   ├── about/
    │   ├── bastion/
    │   ├── animatronics/
    │   ├── turbofan/
    │   └── odnr/
    └── video/
        └── turbofan/
```

## Previewing the site locally

The files can be opened directly in a browser, but a local web server is more reliable for testing links, videos, and PDFs.

From the portfolio folder run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Updating the resume

Replace:

```text
assets/files/Nathaniel_Weidner_Resume.pdf
```

with the new resume and keep the same filename. The Resume page and download buttons will update automatically.

## Updating project text

Each project has its own file under `projects/`. Major page sections are separated by comments/classes and descriptive headings. Routine wording changes generally require editing only the text inside the relevant HTML page.

Examples:

- Project Bastion: `projects/bastion.html`
- Animatronics: `projects/animatronics.html`
- Turbofan: `projects/turbofan.html`
- Senior Design: `projects/rocket.html`
- ODNR: `projects/odnr.html`

## Updating Senior Design as it progresses

The Rocket page is intentionally written as an in-progress project. Good update milestones are:

1. Requirements / ideation
2. Selected concept
3. Detailed CAD and analysis
4. Prototype and ground testing
5. Finished rocket and flight results

When real project evidence becomes available, replace the temporary in-development visual and early-stage copy rather than inventing future design details.

## Replacing an image

If you want to replace a photo without changing HTML, save the new image using the same filename and overwrite the old file.

For example, replacing:

```text
assets/images/bastion/final-open.jpg
```

with another file named `final-open.jpg` requires no code change.

If you add a new filename, update the matching `<img src="...">` path in the relevant HTML page.

## Adding a new project

The easiest method is:

1. Copy the project page whose layout is closest to the new project.
2. Rename the copied HTML file.
3. Replace its content and images.
4. Add a new project card to `projects.html`.
5. Add/update previous and next links at the bottom of the project pages.
6. Put project images in a dedicated `assets/images/<project-name>/` folder.

## Styling changes

Nearly all visual styling is centralized in:

```text
css/styles.css
```

The site uses CSS variables at the top of the file for the main background, text, purple accent, borders, radii, and maximum page width. Change those variables first if making broad visual changes.

## Publishing with GitHub Pages

Recommended workflow:

1. Create a GitHub repository for this folder.
2. Upload/commit the full contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save. GitHub will provide the public Pages URL.

After that, future updates are simply edits committed to the repository. GitHub Pages will redeploy the site automatically.

## Suggested commit messages

Use short descriptions that make the site's history easy to understand, for example:

```text
Initial portfolio launch
Update senior design requirements
Add senior design CAD
Add rocket ground testing results
Update resume January 2027
Add final senior design flight results
```

## Starting a future ChatGPT conversation

You do **not** need this original conversation to update the website later. The website files are the source of truth.

For a future chat, either:

- upload a ZIP of the current portfolio folder, or
- share the public GitHub repository and upload any files that need direct editing.

A useful prompt would be:

> This is my current engineering portfolio. Preserve the existing visual style and structure. My senior design project has progressed and I want to update the Rocket page using the new CAD, test results, and project information I am providing.

## Important content guideline

The portfolio is intended for engineering recruiters and hiring managers. Project pages should continue to emphasize:

**Problem → personal contribution → design decisions and why → engineering evidence → outcome / current status**

Avoid adding large amounts of report-style detail unless it helps explain an engineering decision or demonstrates a specific capability.

## Final pre-publish checklist

Before publishing a major update:

1. Open `index.html`, `projects.html`, `about.html`, and each project page in a desktop browser.
2. Resize the browser to a phone-width window and check the mobile menu, cards, images, and project navigation.
3. Test the Resume download and PDF preview.
4. Click every project card and the previous/next project links.
5. Check LinkedIn and email links.
6. Confirm that new images are compressed to a reasonable web size.
7. Do not publish confidential source documents, internal marked screenshots, or unnecessary proprietary dimensions. Use sanitized diagrams and high-level engineering explanations instead.
8. Commit the working version to Git before starting a major redesign so it is easy to roll back.

## Current build notes

- The senior design / Rocket page is intentionally presented as work in progress. It should be expanded only as the team actually selects concepts, creates CAD, builds prototypes, and produces test evidence.
- Project Bastion uses public-facing descriptions and sanitized/high-level visuals rather than raw confidential engineering documents.
- The site has no framework or build dependency; all pages can be edited directly.


## Local preview note
You can normally double-click `index.html`. Running `python -m http.server 8000` is optional and only needed if your browser blocks local PDF/video behavior.
