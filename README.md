# Carrot Market - Clone Coding
1. install nextjs
```zsh
npx create-next-app --typescript
```

2. tailwind css
##### install
```zsh
npm install -D tailwindcss postcss autoprefixer
```

##### set up
```zsh
npx tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```