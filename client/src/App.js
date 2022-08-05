import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/books").then((response) => {
      setListOfBooks(response.data);
    });
  }, []);

  const addBook = () => {
    Axios.post("http://localhost:3000/books", {
      title: title,
      genre: genre,
      author: author,
    }).then((response) => {
      alert("Book Added!");
      setListOfBooks([
        ...listOfBooks,
        { title: title, genre: genre, author: author },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="booksDisplay">
        {listOfBooks.map((book) => {
          return (
            <div>
              <h1>Title: {book.title}</h1>
              <h1>Genre: {book.genre}</h1>
              <h1>Author: {book.author}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Genre..."
          onChange={(event) => {
            setGenre(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Author..."
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
    </div>
  );
}

export default App;
