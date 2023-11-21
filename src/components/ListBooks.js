
const ListBooks = (props)=>{
  return (
    <>
      <h2>Liste des livres</h2>
      <button className="btn btn-success" onClick={()=>props.changeActionRef('add')}>Ajouter un livre</button>
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
          props.books.map(book => <tr key={book.id}>
            <th scope="row">{book.id}</th>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td><button className="btn btn-primary">Editer</button></td>
            <td><button className="btn btn-danger">Supprimer</button></td>
          </tr>)
        }

      </tbody>
      </table>
  </>
  )
}

export default ListBooks;
