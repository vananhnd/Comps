# Tailwind

## Installing Tailwind

> npm install -D tailwindcss
> 
> npx tailwindcss init

## Configure template paths

Add this sentence into **content** in your `tailwind.config.js` file: 
>"./src/**/*.{js,jsx,ts,tsx}",

## Add the Tailwind directives to CSS
1. In **src** folder create `index.css` file the add:
> 
>- @tailwind base;
>- @tailwind components;
>- @tailwind utilities;

2. Import `index.css` file in `index.js` file.

## Using Tailwind

1. Decide on a new styling rule you want to add
2. Go to tailwindcss.com/docs.
3. Smash Control+K (Command+K) as hard as possible.
4. Search for your styling rule.
5. Add approprite className to your elements.
