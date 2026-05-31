TEYA — Tech Empowerment for Young Africans
Official website for the TEYA non-profit initiative, founded by Ikenna Okanya and Joy Makanga.
🌍 About
TEYA empowers young Africans from Nigeria and Kenya by providing access to computers, coding education, and digital resources — enabling them to pursue careers across the full spectrum of tech disciplines.
🚀 Hosting on GitHub Pages (Free)
Step 1 — Create a GitHub repository
Sign in at github.com
Click New repository
Name it `teya-website`, set to Public, click Create repository
Step 2 — Upload files
Via browser (easiest):
Inside the repo, click Add file → Upload files
Upload `index.html`, the `css/` folder, and the `js/` folder
Click Commit changes
Via Git CLI:
```bash
cd teya-v2
git init
git add .
git commit -m "Initial TEYA website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/teya-website.git
git push -u origin main
```
Step 3 — Enable GitHub Pages
Go to your repo → Settings → Pages
Under Source select `main` branch, `/ (root)` folder
Click Save
Your site will be live at: `https://YOUR_USERNAME.github.io/teya-website/`
Allow 1–2 minutes for the first deployment.
---
📁 File Structure
```
teya-v2/
├── index.html      — Main page
├── css/style.css   — All styles
├── js/main.js      — Scroll animations, nav, counter, form
└── README.md       — This file
```
✏️ Customisation
What to change	Where
Contact email	Search `hello@teya.org` in `index.html`
Brand colours	CSS variables at top of `css/style.css`
All text content	Directly in `index.html`
Form submission	`js/main.js` — replace `setTimeout` with a `fetch()` to Formspree
📬 Real Form Submissions
Sign up at formspree.io (free tier available)
Create a new form → copy endpoint URL
In `js/main.js`, replace the `setTimeout(...)` block with:
```javascript
fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { 'Accept': 'application/json' }
}).then(res => {
  if (res.ok) { successEl.classList.add('show'); form.reset(); }
  submitBtn.textContent = 'Submit Application';
  submitBtn.disabled = false;
});
```
---
Built with pure HTML, CSS, and JavaScript — zero dependencies, zero build tools.
