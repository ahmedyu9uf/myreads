import BookGrid from "./BookGrid";

function Shelf({ name, books, addToShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <BookGrid books={books} addToShelf={addToShelf} />
      </div>
    </div>
  );
}

export default Shelf;
