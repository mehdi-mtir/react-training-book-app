import { useEffect, useState } from "react";

const EditBook = (props)=>{
  const [book, setBook] = useState(props.currentBook);
  //console.log(props.currentBook);

  useEffect(()=>{
    setBook(props.currentBook);
  }, [props]);

  const onChangeHandler = ({target})=>{
    setBook({...book, [target.name] : target.value});
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    props.editBookRef(book);
  }

  return <>
    <h2>Editer le livre ...</h2>
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

export default EditBook;
