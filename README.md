# Blogging Website Project

## What’s This About?

This project is all about building a modern, interactive blogging website using **React, React Router, and Tailwind CSS**. Users can log in, create posts, edit them, and even delete them. The main goal is to use React for building the UI, Tailwind for styling, and the `fetch()` API to handle data requests. JavaScript array methods will be used to manipulate post data efficiently.

## Technologies Used 🛠️

- **React**: For building the user interface.
- **React Router**: To manage navigation between pages.
- **Tailwind CSS**: For styling and making the website responsive.
- **Fetch API**: To handle HTTP requests for fetching and updating post data.
- **Fundamental HTML & CSS**: For structuring and styling the website.

## What You’ll Find Here

### 🏠 Landing Page

- A navigation bar with a login/logout button.
- A list of the latest 20 blog posts (handled with JavaScript array methods).
- Post data is fetched from `data.json`.

### 🔐 Authentication System

- Users can log in and out.
- `localStorage` is used to remember logged-in users.
- Login validation is done using `fetch()`.

### 📝 Post Detail Page

- Each post has its own page where users can read the full content.
- Logged-in users can edit or delete posts (with a confirmation prompt before deleting).
- Changes are made using array methods and then saved to `data.json`.

### ✍️ Create Post Page

- Logged-in users can create new posts.
- New posts are dynamically added using JavaScript and saved to `data.json`.

### 🎨 Design & Styling

- The website is responsive and works well on both desktop and mobile.
- Error handling is included for `fetch()` requests.

## How to Get It Running 🚀

1. Extract the ZIP file.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm start`.
4. If using `data.json`, run a local server (Live Server on VS Code is great for this).
5. Log in to start creating, editing, and deleting posts!

That's a wrap! Thank you for your time and attention—much appreciated!
