import BookGrid from "./BookGrid";

function Shelf() {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <BookGrid />
      </div>
    </div>
  );
}

export default Shelf;
