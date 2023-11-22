const baseUrl = "http://localhost:3000/authors";

const apiAuthors = {
  getAuthors : async ()=>{
    const reponse = await fetch(baseUrl);
    const result = await reponse.json();
    console.log(result);
    return result;
  },
  addAuthor : async (author)=>{
    const requestOptions = {
      method : 'POST',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(author)
    }
    return fetch(baseUrl, requestOptions)
      .then(
        reponse => reponse.json()
      )
      .catch(
        error => console.log(error)
      )
  },
  editAuthor : async (author)=>{
    const requestOptions = {
      method : 'PATCH',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(author)
    }
    return fetch(`${baseUrl}/${author.id}`, requestOptions)
      .then(
        reponse => reponse.json()
      )
      .catch(
        error => console.log(error)
      )
  },
  deleteAuthor : async (id)=>{
    const requestOptions = {
      method : 'DELETE'
    }
    return fetch(`${baseUrl}/${id}`, requestOptions)
  }

}

export default apiAuthors;
