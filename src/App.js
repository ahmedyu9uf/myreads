import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { update, getAll } from "./api/BooksAPI";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  const clearAllShelfs = () => {
    setCurrentlyReading([]);
    setWantToRead([]);
    setRead([]);
  };

  const shelfSetter = (shelfName) => {
    switch (shelfName) {
      case "currentlyReading":
        return setCurrentlyReading;
      case "wantToRead":
        return setWantToRead;
      case "read":
        return setRead;
      default:
        return () => {};
    }
  };

  useEffect(() => {
    // Load the books from the API
    const loadBooks = async () => {
      const books = await getAll();
      clearAllShelfs();

      books.forEach((book) => {
        const setShelf = shelfSetter(book.shelf);
        setShelf((prev) => [...prev, book]);
      });
    };

    loadBooks();
  }, []);

  const addToShelf = (book, shelf) => {
    // Update the API
    update(book, shelf);

    // Remove the book form its current shelf
    if (book.shelf) {
      const setShelf = shelfSetter(book.shelf);
      setShelf((prev) => prev.filter((b) => b.id !== book.id));
    }

    // Add the book to the selected shelf
    book.shelf = shelf;
    const setShelf = shelfSetter(shelf);
    setShelf((prev) => {
      // if the book is already in the shelf return the shelf
      for (let b of prev) if (b.id === book.id) return prev;

      return [...prev, book];
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              addToShelf={addToShelf}
            />
          }
        />
        <Route path="/search" element={<Search addToShelf={addToShelf} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
