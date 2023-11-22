import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiAuthors from "../authors/apiAuthors";

const AddBook = ()=>{
  const navigate = useNavigate();
  const [book, setBook] = useState({title : '', authorId : 0, price : ''});
  const [authors, setAuthors] = useState([]);

  useEffect(
    ()=>{
        apiAuthors.getAuthors().then(
          authors => setAuthors(authors)
        )
    }
  , [])

  const onChangeHandler = ({target})=>{
    if(target.name === "authorId")
      setBook({...book, [target.name] : +target.value});
    else
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
          <label htmlFor="authorId" className="form-label">Auteur</label>
          <select id="authorId" name="authorId" className="form-control" value= {book.authorId} onChange={onChangeHandler}  >
            <option></option>
            {
              authors.map(
                author=><option key={author.id} value={author.id}>{author.firstname} {author.name}</option>
              )
            }
          </select>
          {/*<input type="text" className="form-control" id="author" name="author" value= {book.author} onChange={onChangeHandler} />*/}
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
