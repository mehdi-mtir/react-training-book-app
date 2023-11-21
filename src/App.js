import { useEffect, useState } from "react";
import ListBooks from "./components/ListBooks";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

function App() {
  const booksInit = [
    {id : 1, title : "The slight edge", author : "Jeff Olsen", price : "20"},
    {id : 2, title : "Power of habits", author : "Charles Duhigg", price : "30"},
    {id : 3, title : "Atomic Habits", author : "James clear", price : "40"},
  ]

  const [books, setBooks] = useState(window.localStorage.getItem('books')?JSON.parse(window.localStorage.getItem('books')):booksInit);
  const [action, setAction] = useState('');
  const [currentBook, setCurrentBook] = useState({})

  useEffect(()=>{
    window.localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const changeAction = (newAction)=>{
    setAction(newAction);
  }

  const showEditBook = (book)=>{
    setCurrentBook({...book});
    changeAction('edit');
  }

  const addBook = (book)=>{
    book.id = books[books.length - 1].id +1
    setBooks([...books, book]);
    changeAction('');
  }

  const editBook = (book)=>{
    //console.log(JSON.stringify(book));
    setBooks(
      books.map(b=>b.id===book.id?book:b)
    )
    changeAction('');
  }

  const deleteBook = (id)=>{
    if(window.confirm('Êtes-vous sûre de vouloir supprimer le livre?')){
      setBooks(
        books.filter(book=>book.id !== id)
      )
    }


  }

  return (
    <div className="container">
      <h1>Application de gestion des livres</h1>
      <ListBooks
        books={[...books]}
        changeActionRef= { changeAction }
        showEditBookRef={ showEditBook }
        deleteBookRef= { deleteBook } />
      {
        action === 'add' && <AddBook addBookRef={addBook} />
      }
{
        action === 'edit' && <EditBook editBookRef={editBook} currentBook={{...currentBook}} />
      }

    </div>
  );
}

export default App;
