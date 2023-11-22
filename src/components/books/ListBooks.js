import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiAuthors from "../authors/apiAuthors";

const ListBooks = (props)=>{
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(
    ()=>{
      async function getData(){
        const reponse = await fetch('http://localhost:3000/books');
        const booksList = await reponse.json();

        apiAuthors.getAuthors().then(
          authors=>{
            setAuthors(authors)
            setBooks(booksList)
          }
        )
      }
      getData();
    }
  , [])

  const deleteBook = (id)=>{
    if(window.confirm("Êtes-vou sûre de vouloir supprimer le livre?")){
      const requestOptions = {
        method : 'DELETE'
      }
      fetch("http://localhost:3000/books/"+id, requestOptions)
        .then(
          reponse => setBooks(books.filter(b=>b.id!==id))
        )
        .catch(
          erreur => console.log(erreur)
        )
    }


  }

  ///let books = useContext(BooksContext);

  return (
    <>
      <h2>Liste des livres</h2>
      <Link className="btn btn-success" to="/books/add" >Ajouter un livre</Link>
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titre</th>
          <th scope="col">Auteur</th>
          <th scope="col">Prix</th>
          <th scope="col">Editer</th>
          <th scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => <tr key={book.id}>
            <th scope="row">{book.id}</th>
            <td>{book.title}</td>
            <td>{
              authors.find(author=>author.id===book.authorId).firstname + " " + authors.find(author=>author.id===book.authorId).name
              }</td>
            <td>{book.price}</td>
            <td><button className="btn btn-primary" onClick={()=>navigate(`/books/edit/${book.id}`)}>Editer</button></td>
            <td><button className="btn btn-danger" onClick={()=>{deleteBook(book.id)}}>Supprimer</button></td>
          </tr>)
        }

      </tbody>
      </table>
  </>
  )
}

export default ListBooks;
