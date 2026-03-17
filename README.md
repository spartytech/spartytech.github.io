<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# 💼 Portfolio

> A modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS.

🔗 **[Live Demo](https://spartytech.github.io/)**

---

## About

This is my personal portfolio website where I showcase my frontend projects, skills, and experience. Designed with a focus on clean UI, performance, and a great user experience across all devices.

---

## Features

- ⚡ Fast and responsive design — optimized for all screen sizes
- 🎨 Clean, modern UI built with Tailwind CSS utility classes
- 🔒 Type-safe codebase using TypeScript throughout
- 🧩 Reusable, component-based architecture with React
- 📬 Contact form / links to reach out directly

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |

---

## Getting Started

### Prerequisites

- Node.js `>=18.x`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

```bash
npm run build
```

---

## Contact

Feel free to reach out or connect with me:

- 🌐 Portfolio: [https://spartytech.github.io/](https://spartytech.github.io/)
- 💼 LinkedIn: [linkedin.com/in/your-profile](#)
- 🐙 GitHub: [github.com/your-username](#)
- 📧 Email: your@email.com

---

> Made with ❤️ and lots of ☕
>>>>>>> 804c9161522d038b4afd13ad3ba61e15f7da74d6
