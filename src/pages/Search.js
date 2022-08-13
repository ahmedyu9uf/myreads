import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/BooksAPI";
import BookGrid from "../components/BookGrid";

function Search({ addToShelf }) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  // To avoid calling the API on every input change,
  // This state will be used to make API-CALL after the user stops typing for a specific amount of time
  const [_, setTimeoutId] = useState();

  const handleSearch = ({ target }) => {
    setQuery(target.value);

    const searchQuery = async (query) => {
      const results = await search(query);
      setBooks(results);
    };

    setTimeoutId((prevId) => {
      clearTimeout(prevId);
      return setTimeout(() => searchQuery(target.value), 500);
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookGrid books={books} addToShelf={addToShelf} />
      </div>
    </div>
  );
}

export default Search;
