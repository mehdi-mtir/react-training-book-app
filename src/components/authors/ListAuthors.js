import { useEffect, useState } from "react";
import apiAuthors from "./apiAuthors";
import AddAuthors from "./AddAuthors";
import EditAuthors from "./EditAuthors";

const ListAuthors = ()=>{
  const [authors, setAuthors] = useState([])
  const [action, setAction] = useState('')
  const [currentAuthor, setCurrentAuthor] = useState({})

  const changeAction = (newAction)=>{
    setAction(newAction);
  }

  const addAuthor = (newAuthor)=>{
    setAuthors([...authors, newAuthor])
    changeAction('')
  }

  const showEdit = (authorToEdit)=>{
    setCurrentAuthor(authorToEdit)
    changeAction('edit')
  }

  const editAuthor = (editedAuthor)=>{
    setAuthors(authors.map(
      author=>author.id === editedAuthor.id?editedAuthor:author
    ))
    changeAction('')
  }

  const deleteAuthor = (id)=>{
    if(window.confirm("Etes-vous sure de vouloir supprimer l'auteur?"))
      apiAuthors.deleteAuthor(id).then(
        ()=>setAuthors(authors.filter((author)=>author.id!== id))
      )
  }

  useEffect(
    ()=>{
        apiAuthors.getAuthors().then(
          authors => setAuthors(authors)
        )
    }
  , [])
  return <>
    <h2>Liste des auteurs</h2>
    <button onClick={()=>changeAction('add')} className="btn btn-success">Ajouter un nouvel auteur</button>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Editer</th>
      <th scope="col">Supprimer</th>
    </tr>
  </thead>
  <tbody>
    {
      authors.map(
        author => <tr key={author.id}>
          <th scope="row">{author.id}</th>
          <td>{author.firstname}</td>
          <td>{author.name}</td>
          <td><button onClick={()=>showEdit(author)} className="btn btn-primary">Editer</button></td>
          <td><button onClick={()=>deleteAuthor(author.id)} className="btn btn-danger">Supprimer</button></td>
        </tr>
      )
    }
  </tbody>
  </table>

  {action === 'add' && <AddAuthors
          addAuthorRef={addAuthor}
          />}
  {action === 'edit' && <EditAuthors
          currentAuthor={currentAuthor}
          editAuthorRef={editAuthor}
          />}

  </>
}

export default ListAuthors;
