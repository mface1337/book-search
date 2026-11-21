export function SearchForm({ searchText, onSearchTextChange, onSearchSubmit }) {
  const handleChange = (event) => {
    onSearchTextChange(event.target.value);
  };

  return (
    <form onSubmit={onSearchSubmit} className="search-form">
      <label htmlFor="search-input">Search books</label>
      <input
        id="search-input"
        type="text"
        value={searchText}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}