# Gaurav Khaladkar — Personal Developer Portfolio

A modern, high-performance, recruiter-friendly developer portfolio website built for **Gaurav Khaladkar**, Software Developer & React.js Specialist based in Pune, Maharashtra.

All content, metrics, technologies, education, experience, and projects are strictly derived from Gaurav's verified resume (`resume.pdf`).

---

## 🚀 Live Tech Stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Modern Glassmorphism & Obsidian Dark Theme
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans (UI) & JetBrains Mono (Code / Accents)
- **Asset Delivery**: Built-in `resume.pdf` download in `public/resume.pdf`

---

## 📂 Project Structure

```
gaurav-khaladkar-portfolio/
├── public/
│   └── resume.pdf                 # Exact verified resume PDF for download
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky navbar, mobile menu, active scroll detection
│   │   ├── Hero.tsx               # Recruiter greeting, CTAs, interactive code terminal
│   │   ├── About.tsx              # Recruiter bio, credibility cards, core competencies
│   │   ├── Skills.tsx             # Grouped technical skills with interactive category filters
│   │   ├── Experience.tsx         # GTL Software Pvt. Ltd. full-stack timeline
│   │   ├── Projects.tsx           # Real Estate & Tiffin Service projects + deep-dive modal
│   │   ├── EducationCertifications.tsx # MCS, BCS, HSC, SSC + Accenture Nordics simulation
│   │   ├── Contact.tsx            # Email, phone, location, and genuine mailto composer
│   │   └── Footer.tsx             # Brand, links, back-to-top button, current year
│   ├── data/
│   │   └── portfolioData.ts       # Typed single source of truth for resume data
│   ├── App.tsx                    # Main layout with section observer
│   ├── index.css                  # Theme variables, glass effects, animations
│   └── main.tsx                   # Entry point
├── index.html                     # Responsive viewport, metadata, Google Fonts
├── vite.config.ts                 # Vite + React + Tailwind v4 configuration
└── package.json                   # Dependencies and scripts
```

---

## 🛠️ How to Run Locally

1. Navigate to the project folder:
   ```powershell
   cd "C:\Users\hp\.gemini\antigravity\scratch\gaurav-khaladkar-portfolio"
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. To create an optimized production build:
   ```bash
   npm run build
   ```

4. To preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 📄 Customizing Links

To update LinkedIn or GitHub profile URLs with your direct usernames, simply edit `src/data/portfolioData.ts`:
```typescript
links: {
  email: 'mailto:gauravkhaldkar2001@gmail.com',
  phone: 'tel:+919527298977',
  linkedIn: 'https://linkedin.com/in/YOUR_USERNAME',
  gitHub: 'https://github.com/YOUR_USERNAME',
}
```
