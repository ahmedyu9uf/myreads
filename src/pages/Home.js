import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";

function Home({ currentlyReading, wantToRead, read, addToShelf }) {
  const shelfs = [
    shelfObj("Currently Reading", currentlyReading),
    shelfObj("Want to Read", wantToRead),
    shelfObj("Read", read),
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map((shelf) => (
            <Shelf
              key={shelf.name}
              name={shelf.name}
              books={shelf.books}
              addToShelf={addToShelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  );
}

function shelfObj(name, books) {
  return { name, books };
}

export default Home;
