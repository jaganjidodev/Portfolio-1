# My Portfolio Website

A clean, modern, and fully responsive personal portfolio website built with
plain **HTML5, CSS3, and vanilla JavaScript (ES6)** — no frameworks, no
build tools required.

This project is designed for beginner/junior developers who want a real,
recruiter-ready portfolio they can fully understand, customize, and grow
over time as they build new projects.

---

## 🌐 Live Demo

<!-- Replace with your Live Demo URL once deployed -->
`https://your-username.github.io/portfolio`

---

## 📁 Folder Structure

```
portfolio/
│
├── index.html              # Main HTML file — all page content lives here
├── css/
│   ├── style.css            # Main styles: colors, layout, components
│   └── responsive.css       # Media queries for tablet & mobile screens
│
├── js/
│   └── script.js             # All interactive features (see below)
│
├── assets/
│   ├── images/               # Profile photo & about-section photo
│   ├── icons/                # favicon.png
│   ├── screenshots/          # Project screenshots
│   └── resume.pdf            # Downloadable resume
│
├── README.md                 # You're reading it!
```

---

## ✨ Features

- Fully responsive (mobile, tablet, laptop, desktop)
- Sticky navigation bar with active-link highlighting
- Mobile hamburger menu
- Smooth scrolling between sections
- Dark / Light mode toggle (remembers your choice via Local Storage)
- Scroll-to-top button
- Contact form with client-side validation
- Semantic, accessible HTML
- Heavily commented code for learning purposes

---

## 🚀 How to Run the Project Locally

1. Open the `portfolio` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you don't have it.
3. Right-click `index.html` → **"Open with Live Server"**.
4. The site will open in your browser at something like `http://127.0.0.1:5500`.

That's it — no `npm install`, no build step.

---

## ✏️ How to Edit Your Personal Details

Open `index.html` and search for HTML comments that look like this:

```html
<!-- Replace with your Full Name -->
<!-- Replace with your Professional Title -->
<!-- Replace with your Profile Photo -->
<!-- Replace with your Resume -->
<!-- Replace with your GitHub URL -->
<!-- Replace with your LinkedIn URL -->
<!-- Replace with your Email -->
<!-- Replace with your Contact Number -->
```

Each comment sits directly above (or next to) the line you need to change.
Just replace the placeholder text/links with your real information —
you'll need to update a few spots (Hero section, About section, Contact
section, and Footer) since some details like your email and social links
appear more than once.

**Tip:** Use `Ctrl+F` / `Cmd+F` in VS Code and search for `Replace with`
to jump straight to every spot that needs your info.

---

## 🖼️ How to Replace Images

| What | File to replace | Location |
|---|---|---|
| Profile photo | `assets/images/profile-placeholder.jpg` | Hero section |
| About photo | `assets/images/about-placeholder.jpg` | About section |
| Project 1 screenshot | `assets/screenshots/project-1-placeholder.jpg` | Projects section |
| Project 2 screenshot | `assets/screenshots/project-2-placeholder.jpg` | Projects section |
| Project 3 screenshot | `assets/screenshots/project-3-placeholder.jpg` | Projects section |
| Favicon | `assets/icons/favicon.png` | Browser tab icon |

You can either:
- **Keep the same filenames** and just replace the image files, or
- **Use new filenames** and update the matching `src="..."` path in `index.html`.

---

## 💼 How to Update Project Links (GitHub / Live Demo)

Inside `index.html`, each project card has comments like:

```html
<!-- Replace GitHub repository URL -->
<a href="https://github.com/your-username/portfolio" ...>

<!-- Replace Live Demo URL -->
<a href="https://your-username.github.io/portfolio" ...>
```

Simply update the `href` values with your actual GitHub repo and deployed
site links.

---

## ➕ How to Add a New Project Later

To add a **4th project card** (or replace one of the placeholder ones):

1. In `index.html`, find the `<!-- ==================== PROJECT 3 ==================== -->`
   block inside `<div class="projects__grid">`.
2. Copy the entire `<article class="project-card"> ... </article>` block.
3. Paste it right after, and update:
   - The screenshot `src`
   - The title, description, and tech tags
   - The GitHub and Live Demo links
4. Add a new screenshot image into `assets/screenshots/`.

No CSS or JS changes are needed — the grid automatically adjusts to fit
however many project cards you add.

---

## 📧 Connecting the Contact Form to a Real Email Service

By default, the contact form **only validates input in the browser** — it
does not actually send an email, since that requires a backend server.

To make it functional, you have two easy beginner-friendly options:

**Option 1: Formspree (recommended, no backend code needed)**
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy your form endpoint URL.
3. In `index.html`, add `action="https://formspree.io/f/your-id"` and
   `method="POST"` to the `<form id="contactForm">` tag.
4. Remove or adjust the `e.preventDefault()` line in `js/script.js` if you
   want Formspree to handle the redirect after submission (check their docs).

**Option 2: EmailJS**
1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Follow their JavaScript SDK instructions to send the form data directly
   from `script.js` using their `emailjs.send()` function.

---

## 🌍 How to Deploy Your Portfolio

### Deploy on GitHub Pages (free)
1. Create a new repository on GitHub and push this project to it.
2. Go to your repo → **Settings** → **Pages**.
3. Under "Source", select the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://your-username.github.io/repo-name`.

### Deploy on Vercel (free)
1. Create an account at [vercel.com](https://vercel.com).
2. Click **"Add New Project"** → import your GitHub repository.
3. Leave the default settings (no build command needed) and click **Deploy**.

### Deploy on Netlify (free)
1. Create an account at [netlify.com](https://netlify.com).
2. Drag and drop your `portfolio` folder onto the Netlify dashboard, **or**
   connect your GitHub repository via **"Add new site" → "Import an existing project"**.
3. Your site will be live instantly with a Netlify subdomain.

---

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, CSS Grid, Media Queries, CSS Variables)
- Vanilla JavaScript (ES6)
- [Font Awesome](https://fontawesome.com) for icons
- [Google Fonts](https://fonts.google.com) (Poppins & Inter)

---

## 📄 License

Free to use and customize for your own personal portfolio.
