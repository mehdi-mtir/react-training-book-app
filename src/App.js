//import { useEffect, useState} from "react";
import ListBooks from "./components/books/ListBooks";
import AddBook from "./components/books/AddBook";
import EditBook from "./components/books/EditBook";
import { Routes, Route } from "react-router-dom";

//export const BooksContext = createContext();

function App() {
  /*
  const navigate = useNavigate();

  const booksInit = [
    {id : 1, title : "The slight edge", author : "Jeff Olsen", price : "20"},
    {id : 2, title : "Power of habits", author : "Charles Duhigg", price : "30"},
    {id : 3, title : "Atomic Habits", author : "James clear", price : "40"},
  ]


  const [books, setBooks] = useState(window.localStorage.getItem('books')?JSON.parse(window.localStorage.getItem('books')):booksInit);

  useEffect(()=>{
    window.localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book)=>{
    book.id = books[books.length - 1].id +1
    setBooks([...books, book]);
    navigate("/books");
  }

  const editBook = (book)=>{
    //console.log(JSON.stringify(book));
    setBooks(
      books.map(b=>b.id===book.id?book:b)
    )
    navigate("/books");
  }

  const deleteBook = (id)=>{
    if(window.confirm('Êtes-vous sûre de vouloir supprimer le livre?')){
      setBooks(
        books.filter(book=>book.id !== id)
      )
    }


  }*/

  return (
    <div className="container">
      <h1>Application de gestion des livres</h1>
        <Routes>
          <Route
            path="/books"
            exact
            element={<ListBooks />
            }
          />
          <Route
            path="/books/add"
            exact
            element={<AddBook />} />
          <Route
            path="/books/edit/:id"
            exact
            element={<EditBook />} />
          </Routes>
    </div>
  );
}

export default App;
