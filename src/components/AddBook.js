import { useState } from "react"

const AddBook = ()=>{
  const [book, setBook] = useState({title : '', author : '', price : ''});
  const onTitleChange = (event)=>{
    setBook({...book, title : event.target.value})
  }
  return <>
    <h2>Ajouter un livre</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titre</label>
          <input type="text" className="form-control" id="title" value= {book.title} onChange={onTitleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Auteur</label>
          <input type="text" className="form-control" id="author" value= {book.author} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Prix</label>
          <input type="text" className="form-control" id="price" value= {book.price} />
        </div>
        <button type="submit" className="btn btn-primary">Valider</button>
      </form>
  </>
}

export default AddBook;
