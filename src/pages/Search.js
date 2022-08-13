import { Link } from "react-router-dom";
import BookGrid from "../components/BookGrid";

function Search() {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" />
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <BookGrid />
      </div>
    </div>
  );
}

export default Search;
