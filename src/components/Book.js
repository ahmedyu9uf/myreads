function Book({ book, addToShelf }) {
  const handleChange = ({ target }) => addToShelf(book, target.value);

  if (!book || !book.title) return <></>;

  if (!book.imageLinks) book.imageLinks = { thumbnail: "" };

  if (!book.authors) book.authors = [];

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={book.shelf || "none"} onChange={handleChange}>
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
}

export default Book;
