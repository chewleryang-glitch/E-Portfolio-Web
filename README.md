# Chew Ler Yang — Digital Marketing & Copywriting Portfolio

A modern, editorial glassmorphic single-page React + TypeScript portfolio built for **Chew Ler Yang** (Marketing Undergraduate at Singapore University of Social Sciences & Digital Marketing / Copywriting Specialist).

## Architecture & Content Maintenance

All portfolio copy, quantitative campaign metrics, skills, case studies, work experience, education, and Web3Forms contact settings are decoupled from the UI components so you can update content in one place without touching JSX:

- **Primary Content File**: `src/content/index.ts` (also re-exported at `content/index.ts` and `src/data.ts`)
- **TypeScript Interfaces**: `src/types/portfolio.ts`
- **Pure Filtering & Form Logic**: `src/utils/portfolioLogic.ts`
- **Unit Tests**: `src/utils/portfolioLogic.test.ts`

### How to Edit Content

1. **Update Profile / Bio / Links**:
   Open `src/content/index.ts` and edit the `profile` object (`name`, `tagline`, `bio`, `email`, `phone`, `linkedinUrl`, `wixPortfolioUrl`, `resumePdfUrl`).
2. **Add or Edit Skills (`Stack`)**:
   Add or modify items inside `portfolioContent.skills`. Assign each skill to one of the typed categories (`Performance & Analytics`, `Copywriting & Content`, `Social & Brand Strategy`, `Design & Web Tools`, or `Core Competencies`).
3. **Add or Edit Case Studies (`Projects`)**:
   Edit `portfolioContent.projects`. Each project supports `summary`, `challenge`, `strategy` bullets, `outcomes` bullets, `metrics` (`label` + `value`), and `deliverables`. Setting `featured: true` spans the card wider in the Bento layout.
4. **Update Work Experience or Education**:
   Edit `portfolioContent.experiences` or `portfolioContent.education` in `src/content/index.ts`.
5. **Web3Forms Contact Configuration**:
   Configured under `portfolioContent.contact.web3FormsAccessKey` (`7fcc7b39-b6db-462a-b38e-67b0bd1472ef`).

## Running Locally & Deploying

```bash
# Install dependencies
npm install

# Run unit tests
npx --yes tsx --test src/utils/portfolioLogic.test.ts

# Start development server
npm run dev

# Build for production
npm run build
```

Includes `vercel.json` for zero-configuration deployment on Vercel.
