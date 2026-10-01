# Tauhidul Islam Pranto's Portfolio — React + Vite + Tailwind CSS

A modern, responsive portfolio website for **Tauhidul Islam Pranto**, Full Stack Developer.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool (lightning fast) |
| **Tailwind CSS v3** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **react-type-animation** | Typing effect in hero |
| **react-icons** | Icon library |

---

## Folder Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← Add your actual CV here
├── src/
│   ├── assets/
│   │   └── pranto.png      ← Your profile photo
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## Customization

### Update Personal Info
- **Name / Bio / Location** → `src/components/About.jsx`
- **Hero taglines** → `src/components/Hero.jsx`
- **Email / Phone** → `src/components/Contact.jsx`
- **Social links** → Update `href` values in `Hero.jsx`, `Contact.jsx`, `Footer.jsx`

### Update Projects
Edit the `projects` array in `src/components/Projects.jsx`:
```js
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    tags: ['React', 'Tailwind'],
    github: 'https://github.com/yourusername/repo',
    live: 'https://your-live-site.com',
    // ...
  }
]
```

### Update Skills
Edit the `skillCategories` array in `src/components/Skills.jsx`.

### Add Your Resume
Place your `resume.pdf` file inside the `/public` folder. The download button in the Hero section links to `/resume.pdf`.

---

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the `dist/` folder to netlify.com/drop
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
# Add "homepage" and deploy scripts to package.json
npm run build && npm run deploy
```

---

## Features

- Fully responsive (mobile, tablet, desktop)
- Sticky navbar with active section detection
- Animated hero with typing effect
- Skill progress bars with animation
- Project filter by category
- Smooth scroll navigation
- Contact form UI with loading/success states
- Dark cyber theme with cyan/purple gradients
- Framer Motion page animations
- Floating elements & glow effects
- Back to top button
- SEO meta tags

---

## Dependencies

```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^11.3.19",
  "react-icons": "^5.2.1",
  "react-type-animation": "^3.2.0"
}
```
