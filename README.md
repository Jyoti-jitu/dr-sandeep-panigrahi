# Prof. Dr. Sandeep Kumar Panigrahi — Official Website

Academic Physician • Professor • Public Health Professional • Researcher  
Department of Community Medicine, IMS & SUM Hospital, Siksha 'O' Anusandhan (SOA) Deemed to be University, Bhubaneswar, Odisha, India.

---

## 🚀 Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, JavaScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Metadata**: Semantic HTML5, OpenGraph tags, dynamic XML sitemap (`/sitemap.xml`), and `robots.txt`
- **Hosting / CDN**: [Cloudflare Pages](https://pages.cloudflare.com/) (Static Export)

---

## ⚡ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

---

## ☁️ Deploying to Cloudflare Pages

This repository is pre-configured for deployment on **Cloudflare Pages** using Next.js static export (`output: 'export'`).

### Method 1: Git Integration (Recommended)

1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select this repository.
3. Configure the **Build Settings**:
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/`
4. Add **Environment Variables** (under Settings > Environment variables):
   - `NODE_VERSION`: `20` (or `22`)
5. Click **Save and Deploy**. Cloudflare Pages will build the site and deploy it globally across 300+ edge locations with free automatic SSL.

---

### Method 2: Direct Upload via Wrangler CLI

```bash
# Build the static export
npm run build

# Deploy the 'out' directory directly to Cloudflare Pages
npx wrangler pages deploy out --project-name=drsandeepkumarpanigrahi
```

---

## 📁 Project Architecture

```
├── app/
│   ├── about/             # Curriculum Vitae, milestones & faculty mentorship
│   ├── appointment/       # Multi-step clinical consultation scheduling
│   ├── clinical-care/     # Prevention, diabetes care & lifestyle medicine
│   ├── contact/           # Academic inquiry form & faculty desk contact
│   ├── health-insights/   # Evidence-based medical articles
│   ├── media/             # Guest lectures, keynotes & public health speaking
│   ├── podcast/           # "The Health Conversation" YouTube video studio
│   ├── publications/      # Peer-reviewed journal publications
│   ├── research/          # Scientific inquiry themes & empirical studies
│   ├── api/podcast/       # Prerendered podcast metadata endpoint
│   ├── layout.js          # Global layout, typography, metadata
│   ├── page.js            # Landing page
│   ├── robots.js          # Search engine crawler directives
│   └── sitemap.js         # Search engine XML sitemap generator
├── components/            # Reusable UI components & cards
├── lib/
│   └── data.js            # Structured data models & physician content
├── public/
│   ├── _headers           # Cloudflare Pages security & caching headers
│   └── images/            # High-resolution clinical, faculty & institute photography
└── next.config.mjs        # Static export configuration for Cloudflare Pages
```

---

## 📄 License & Attribution

Copyright © 2026 Prof. Dr. Sandeep Kumar Panigrahi. All rights reserved.
