import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/BooksAPI";
import BookGrid from "../components/BookGrid";

function Search({ bookShelfDictionary, addToShelf }) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  // To avoid calling the API on every input change,
  // This state will be used to make API-CALL after the user stops typing for a specific amount of time
  const [, setTimeoutId] = useState();

  const handleSearch = ({ target }) => {
    setQuery(target.value);

    const searchQuery = async (query) => {
      if (!target.value) {
        setBooks([]);
        return;
      }

      setLoading(true);
      const results = await search(query);
      // Assign books to shelves
      if (results instanceof Array)
        results.forEach(
          (book) => (book.shelf = bookShelfDictionary[book.id] || "none")
        );

      setBooks(results);
      setLoading(false);
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
        {loading 
          ? "Loading..."
          : <BookGrid books={books} addToShelf={addToShelf} />
        }
      </div>
    </div>
  );
}

export default Search;
