import { useState } from "react";
import apiAuthors from "./apiAuthors";

const AddAuthors = ({addAuthorRef})=>{
  const [author, setAuthor] = useState({firstname : '', name : ''});
  const onChangeHandler = ({target})=>{
    setAuthor({...author, [target.name] : target.value});
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    apiAuthors.addAuthor(author).then(
      reponse => addAuthorRef(reponse)
    )
  }
  return <>
    <h2>Ajout d'un auteur</h2>
    <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">Prénom</label>
          <input type="text" className="form-control" id="firstname" name="firstname" value= {author.firstname} onChange={onChangeHandler} />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input type="text" className="form-control" id="name" name="name" value= {author.name} onChange={onChangeHandler} />
        </div>
        <button type="submit" className="btn btn-primary">Valider</button>
      </form>
  </>
}

export default AddAuthors;
