import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>TODO: Add list of shelfs</div>
      </div>
      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  );
}

export default Home;
