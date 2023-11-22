import { useEffect, useState } from "react";
import apiAuthors from "./apiAuthors";

const EditAuthors = (props)=>{
  const [author, setAuthor] = useState(props.currentAuthor);

  useEffect(()=>{
    setAuthor(props.currentAuthor)
  }, [props])

  const onChangeHandler = ({target})=>{
    setAuthor({...author, [target.name] : target.value});
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    apiAuthors.editAuthor(author).then(
      reponse => props.editAuthorRef(author)
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

export default EditAuthors;

