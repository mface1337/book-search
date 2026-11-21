# 📚 Book Search — React Application

A responsive, interactive book search application built with **React, JavaScript, and the Open Library API**. Users can search for books by title or author and retrieve relevant results, including book titles, authors, and publication years.

This project was developed as part of my **AAS in AI Software Engineering at Maestro College**, demonstrating practical frontend development, third-party API integration, and React state management.

## 🚀 Features

- **Dynamic Book Search:** Search for books by title, author, or keywords.
- **Real-Time API Integration:** Retrieve book information directly from the Open Library API when a search is submitted.
- **React State Management:** Manage search queries, results, loading indicators, and errors using React hooks.
- **Organized Components:** Separate search functionality and result presentation into reusable components.
- **Error Handling:** Display meaningful messages when API requests fail.
- **Missing Data Handling:** Provide fallback values when author or publication-year information is unavailable.
- **Search Results:** Display up to 10 matching books per query.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript (ES6+) | Application logic and asynchronous operations |
| HTML5 & CSS3 | Interface structure and styling |
| Vite | Development environment and build tooling |
| Open Library API | External source for book information |
| Git & GitHub | Version control and source code management |

## 🧠 Technical Implementation

The application uses React's `useState` hook to manage user input, submitted searches, API results, loading status, and error messages.

The `useEffect` hook triggers an asynchronous request to the Open Library API whenever a new search is submitted.

Search terms are encoded using `encodeURIComponent()` to safely construct API request URLs.

Returned JSON data is transformed into a simplified structure containing each book's title, author, and first publication year.

Conditional rendering provides feedback during loading, unsuccessful searches, and API errors.

## 💻 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   `git clone https://github.com/mface1337/book-search.git`

2. Navigate into the project directory:

   `cd book-search`

3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in your terminal.

## 🎯 Challenges & Lessons Learned

One of the main challenges was managing asynchronous API requests while keeping the user interface responsive.

I addressed this by separating user input from submitted queries, implementing loading and error states, and handling missing book information gracefully.

Through this project, I strengthened my understanding of React hooks, reusable components, asynchronous programming, API integration, and state-driven interfaces.

## 🔮 Future Improvements

- Display book cover images alongside search results.
- Implement pagination to browse additional results.
- Add advanced filtering and sorting options.
- Allow users to save favorite books.
- Add automated tests and improve accessibility.

## 👨‍💻 About the Developer

Developed by **Christopher Meck**, an AI Software Engineering student at Maestro College with a professional background in IT support and additional training in cybersecurity.

My interests include software engineering, platform engineering, automation, and secure application development.

**GitHub:** [mface1337](https://github.com/mface1337)
