### Movie List App

A simple movie search application built with **React + Vite**, **Redux Toolkit**, and **OMDb API**.  
This app allows users to search movies, view movie details, and automatically load more movies using **infinite scroll**.

---

## Tech stack

- **React 19**, **Vite 7**
- **Redux Toolkit 2**, **react-redux**
- **React Router DOM 7**
- **Tailwind CSS 3**
- **React Icons**
- **Vitest** + **@testing-library/react** for tests

---

## Features

- Search movies by title (OMDb)
- Autocomplete suggestions (bonus)
- Infinite scroll (no plugin) using `IntersectionObserver`
- Movie detail view (modal / page)
- Poster fallback image for missing posters
- Shimmer/skeleton loading UI
- Unit tests (component-level) with Vitest

---

## Project structure (important files)

movie-list-app/
├─ public/
│ └─ assets/
│ └─ image_not_available.jpg
├─ src/
│ ├─ app/ # app-level (store)
│ ├─ components/ # reusable components
│ ├─ features/
│ │ └─ movies/ # movieService.js, moviesSlice.js
│ ├─ hooks/ # custom hooks (e.g. useInfiniteScroll)
│ ├─ pages/ # page components (Home, Detail)
│ ├─ routes/ # routes
│ ├─ test/ # test utilities (setupTests.js, utils.jsx)
│ ├─ main.jsx
│ └─ index.css # tailwind include
├─ .env # (not committed) VITE_API_KEY=...
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
└─ README.md

---

## Setup Project

The following step will get you up and running with the project:

1. Clone the Repository

Make sure you have Git installed.

```
git clone https://github.com/dhamayantiratnawulan/take-home-test.git
```

After cloning, go into the project directory:

```
cd take-home-test/movie-list-app
```

2. Install Dependencies

Ensure you have Node.js (version 18 or higher) and npm/yarn installed.

```
Using npm:
npm install
```

```
Using yarn:
yarn
```

3. Run the Application Locally

To start the development server:

Using npm:
```
npm run dev
```

Using yarn:
```
yarn dev
```


The app will be available at:
```
http://localhost:5173
```

---

## How to Fix (Update API Key)
1. Open the .env file

Your project should contain a .env file like:

```
VITE_OMDB_API_KEY=your_api_key_here
```

2. Get a fresh API key

Visit OMDb website:

👉 https://www.omdbapi.com/apikey.aspx

Choose the Free API key, enter your email, and activate it.

3. Replace the old key

Update the .env file:

```
VITE_OMDB_API_KEY=NEW_API_KEY_HERE
```

4. Restart your development server

Very important — Vite only loads .env variables during startup.
```
npm run dev
```

or

```
yarn dev
```