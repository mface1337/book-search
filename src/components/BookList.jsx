export function BookList({ books }) {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-card">
          <h3>{book.title}</h3>
          <div className="book-meta">
            {book.author} • {book.year}
          </div>
        </li>
      ))}
    </ul>
  );
}