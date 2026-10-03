# Campus Task Board

A small React (Vite) app built for Assignment #1 (CLO-1).

## Features
- Tasks stored with `useState` (id, title, category) and rendered with `.map()` + unique `key`
- Reusable `TaskCard` component receiving data through props
- Add a new task with an input, category dropdown and **Add Task** button (`onSubmit`)
- `useEffect` logs `"Task list updated!"` and the total task count whenever the list changes

## Run locally
```bash
npm install
npm run dev
```
