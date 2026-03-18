# JRAG - Jaimetchoujena Rio Aqua Group

This is the Next.js project for the JRAG website, following the official Brand Bible and Sitemap.

## Architecture

- `/`: Gateway (Choice between B2B and B2C)
- `/b2b`: Professional section (Rigor & Trust)
- `/b2c`: Consumer section (Noble & Excellence)
- `/shared`: Common resources (Blog, Impact, FAQ, Gallery)
- `/legal`: Compliance pages

## Brand Tokens

- **Rio Navy:** `#002B5C` (Trust, Authority)
- **Living Orange:** `#FF6B00` (Life, Energy, CTA)
- **Dakhla Sand:** `#F0EAD6` (Luxury, Nature)
- **Montserrat:** Principal font (Sans-serif)
- **Playfair Display:** Storytelling font (Serif)

## Development

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Folder Structure
- `/src/app`: Routes and Page components
- `/src/components`: Reusable UI components (Navbar, Footer, etc.)
- `/public`: Static assets (Logo, Favicon)
- `/brand-assets`: Brand Bible and original design assets
