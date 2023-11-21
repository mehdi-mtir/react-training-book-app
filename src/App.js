import { useState } from "react";
import ListBooks from "./components/ListBooks";
import AddBook from "./components/AddBook";

function App() {
  const booksInit = [
    {id : 1, title : "The slight edge", author : "Jeff Olsen", price : "20"},
    {id : 2, title : "Power of habits", author : "Charles Duhigg", price : "30"},
    {id : 3, title : "Atomic Habits", author : "James clear", price : "40"},
  ]
  const [books, setBooks] = useState(booksInit);
  const [action, setAction] = useState('');

  const changeAction = (newAction)=>{
    setAction(newAction);
  }

  const addBook = (book)=>{
    book.id = books[books.length - 1].id +1
    setBooks([...books, book]);
    changeAction('');
  }

  return (
    <div className="container">
      <h1>Application de gestion des livres</h1>
      <ListBooks books={books} changeActionRef= {changeAction} />
      {
        action === 'add' && <AddBook addBookRef={addBook} />
      }
    </div>
  );
}

export default App;
