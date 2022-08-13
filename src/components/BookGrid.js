import Book from "../components/Book";

function BookGrid({ books, addToShelf }) {
  return (
    <ol className="books-grid">
      {books &&
        books.map((book) => (
          <Book key={book.id} book={book} addToShelf={addToShelf} />
        ))}
    </ol>
  );
}

export default BookGrid;
