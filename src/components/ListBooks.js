import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BooksContext} from '../App';

const ListBooks = (props)=>{
  let books = useContext(BooksContext);
  const navigate = useNavigate();
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
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td><button className="btn btn-primary" onClick={()=>navigate(`/books/edit/${book.id}`)}>Editer</button></td>
            <td><button className="btn btn-danger" onClick={()=>props.deleteBookRef(book.id)}>Supprimer</button></td>
          </tr>)
        }

      </tbody>
      </table>
  </>
  )
}

export default ListBooks;
