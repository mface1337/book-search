import { useState, useEffect } from "react";
import { SearchForm } from "./components/SearchForm";
import { BookList } from "./components/BookList";

import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don’t fetch until the user submits something
    if (!submittedQuery) return;

    async function fetchBooks() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(
            submittedQuery
          )}`
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        const mappedBooks = data.docs.slice(0, 10).map((book) => ({
          id: book.key,
          title: book.title,
          author: book.author_name?.[0] || "Unknown author",
          year: book.first_publish_year || "Unknown year",
        }));

        setBooks(mappedBooks);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong while fetching books.");
        setBooks([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();
  }, [submittedQuery]);

  return (
  <div className="app-root">
    <div className="app-container">
      <h1 className="app-title">Book Search</h1>

      <SearchForm
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onSearchSubmit={(event) => {
          event.preventDefault();
          setSubmittedQuery(searchText);
        }}
      />

      {isLoading ? (
        <p className="status-message">Loading books…</p>
      ) : error ? (
        <p className="status-message error">Error: {error}</p>
      ) : submittedQuery && books.length === 0 ? (
        <p className="status-message">
          No books found for “{submittedQuery}”.
        </p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  </div>
);
}

export default App;