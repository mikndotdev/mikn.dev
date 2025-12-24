# Agent Operational Guide

This document provides instructions and standards for AI agents operating within this codebase.

## 1. Project Overview

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, Framer Motion, GSAP
- **3D/Graphics:** Three.js, React Three Fiber, React Three Drei, Pixiv Three VRM
- **Internationalization:** `next-intl`
- **Package Manager:** npm (with `bun.lock` present)

## 2. Build, Lint, and Test Commands

### Build & Run
Always use Bun to run scripts to ensure compatibility with the lockfile.
- **Development Server:** `bun run dev`
- **Production Build:** `bun run build`
- **Start Production:** `bun run start`

### Linting & Formatting
This project uses **Biome** for formatting and linting, alongside Next.js's built-in linter.
- **Format & Fix:** `bun run format` (Runs `biome format --write .`)
- **Lint:** `bun run lint` (Runs `next lint`)

**Note to Agents:** Always run `bun run format` after making changes to ensure code complies with project standards.

### Testing
- **Status:** No testing framework or test files were detected in the initial scan.
- **Instruction:** If asked to write tests, verify if a framework (like Vitest or Jest) has been added since this file was created. If not, ask the user for their preference or propose installing **Vitest** for a modern, fast testing experience compatible with Next.js and Vite.
- **Command (Placeholder):** `npm test` (if configured)

## 3. Code Style & Conventions

### General
- **Structure:** Follow the Next.js App Router structure (`src/app`).
- **Imports:** Use absolute imports with the `@/` alias (e.g., `import { Button } from "@/components/ui/button"`).
- **Sorting:** Imports are sorted automatically by Biome. Run `npm run format` to enforce this.

### TypeScript
- **Strictness:** `tsconfig.json` has `"strict": false`. Be mindful of potential null/undefined values, but do not aggressively enforce strict null checks unless refactoring specific modules to be stricter.
- **Types:** Prefer interfaces over types for object definitions. Explicitly type component props.

### Naming
- **Components:** PascalCase (e.g., `ContactPage`, `SubmitButton`).
- **Files:**
  - Components: PascalCase (e.g., `Button.tsx`).
  - Utilities/Hooks: camelCase (e.g., `useWindowSize.ts`, `utils.ts`).
  - App Router: kebab-case/standard Next.js conventions (e.g., `page.tsx`, `layout.tsx`, `loading.tsx`).

### Styling (Tailwind CSS & Components)
- **Utility Classes:** Use Tailwind CSS classes for styling.
- **Components:**
  - Use **Shadcn UI** components from `@/components/ui` when available.
  - Use **Animate UI** components from `@/components/animate-ui` for animations.
  - Use **Lucide React** for icons (`import { Mail } from "lucide-react"`).
- **Icons:** Do **not** use `react-icons` if Lucide equivalents are available.
- **Responsive Design:** Use Tailwind's md: class for styles for desktop views. Don't use any other responsive classes such as sm:, lg:, xl:, etc.

### Internationalization (i18n)
- Use `next-intl` for translations.
- access translations via `const t = useTranslations("namespace")`.
- keys should be kebab-case (e.g., `contact.general-support`).

## 4. Error Handling
- Use standard `try/catch` blocks for async operations.
- Ensure user-facing errors are localized using `next-intl`.
- For API routes, return standard HTTP status codes and JSON error responses.

## 5. Agent Behavior
- **Proactive Formatting:** Always format code before finishing a task.
- **Safety:** Do not delete production configurations or large chunks of code without verification.
- **Context:** Read `package.json` and `tsconfig.json` if you are unsure about dependencies or paths.
- **Cleanliness:** No comments are required unless asked for by the user. Keep code clean and concise.
- **Edits:** If a file has been edited since the last read, retain any new code or changes made by the user.

