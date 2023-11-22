import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = ()=>{
  const navigate = useNavigate();
  const [book, setBook] = useState({title : '', author : '', price : ''});
  const onChangeHandler = ({target})=>{
    setBook({...book, [target.name] : target.value});
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    const requestOptions = {
      method : 'POST',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(book)
    }
    fetch("http://localhost:3000/books", requestOptions)
      .then(
        reponse => navigate("/books")
      )
      .catch(
        error => console.log(error)
      )
  }
  return <>
    <h2>Ajouter un livre</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titre</label>
          <input type="text" className="form-control" id="title" name="title" value= {book.title} onChange={onChangeHandler} />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Auteur</label>
          <input type="text" className="form-control" id="author" name="author" value= {book.author} onChange={onChangeHandler} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Prix</label>
          <input type="text" className="form-control" id="price" name="price" value= {book.price} onChange={onChangeHandler} />
        </div>
        <button type="submit" className="btn btn-primary">Valider</button>
      </form>
  </>
}

export default AddBook;
