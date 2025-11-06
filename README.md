# Minimal Cart Experience

This repository contains a compact, production-oriented frontend for a minimal shopping-cart experience built with React, TypeScript, Vite and Tailwind CSS. The app demonstrates product browsing, cart management, checkout flow and a small, well-structured component library.

## Key Highlights

- Minimal, accessible UI built with Tailwind CSS and Shadcn-style components.
- Cart state managed via the React Context API.
- TypeScript for type safety and better DX.
- Fast local development with Vite.

## Table of contents

- Project overview
- Features
- Tech stack
- Getting started
- Available scripts
- Project structure
- Contributing
- License

## Project overview

This project is intended as a focused demonstration of a minimal shopping-cart user experience. It is front-end first (Vite + React) and includes organized components, a cart context, simple pages (Products, Cart, Checkout, Order Confirmation), and a set of UI primitives in `src/components/ui`.

## Features

- Browse a list/grid of products
- Add/remove items from the cart
- Update item quantities
- Checkout form that presents an order confirmation
- Responsive layout with accessible components

## Tech stack

- React 18 + TypeScript
- Vite (dev server & build)
- Tailwind CSS
- Radix UI primitives and Shadcn-style component wrappers
- TanStack Query (for data fetching patterns)
- Sonner (toast notifications)

The concrete dependencies used in this repository are captured in `package.json`.

## Getting started

Prerequisites

- Node.js 18 or newer
- npm (or yarn/pnpm if you prefer)

Clone and run

```batch
git clone https://github.com/krishna-dtu/minimal-cart-experience.git
cd minimal-cart-experience
npm install
npm run dev
```

Open http://localhost:5173 (Vite will print the exact URL in the terminal).

## Available scripts

The following scripts are defined in `package.json` and are the typical commands you'll use during development:

- `npm run dev` — Start the Vite development server
- `npm run build` — Create a production build
- `npm run build:dev` — Create a development-mode build
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint across the project

## Project structure (important files)

- `src/` — Application source
	- `main.tsx` — App bootstrap
	- `App.tsx` — Top-level routes and layout
	- `components/` — Reusable UI and page components (CartItemComponent, ProductCard, Navbar, Footer)
	- `contexts/CartContext.tsx` — Cart state and actions
	- `pages/` — Product, Cart, Checkout, OrderConfirmation
	- `data/products.ts` — Example product data used by the app

- `public/` — Static assets
- `vite.config.ts`, `tailwind.config.ts` — Tooling config
- `package.json` — Scripts and dependency list

## Usage notes

- The project is UI-first and relies on in-memory/mock data for the product list and cart. If you wire a backend, update the data-fetching hooks or TanStack Query endpoints.
- Environment variables: none required for the default local dev experience. If you add backend integration, define `VITE_API_URL` or similar in an `.env` file.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch (feature/your-feature)
3. Open a PR with a concise description and the motivation for the change

Please run `npm run lint` and verify the app builds before submitting a PR.

## License

This project is provided under the MIT License. See the `LICENSE` file for details (or add one if absent).

## Acknowledgements

Built with Vite, React, Tailwind CSS, Radix UI and ideas from the shadcn/ui component patterns.

---

If you'd like, I can also:

- add a short CONTRIBUTING.md with a PR checklist
- add a minimal LICENSE file (MIT)
- add a short demo GIF or screenshot to the README

Tell me which of those you'd like next and I'll add them.