import React, { useEffect } from "react"
import apiURL from "../api"

export const Article = ({ newPage, setNewPage, setSelectedArticle }) => {

//POST fetch req
async function addPage() {
  try {
    const details = {
    method: 'POST',
    headers: {'Content-Type': 'application/JSON'},
    body: JSON.stringify(newPage)
    }
    const response = await fetch(`${apiURL}/wiki`, details)
  } catch(error){
    console.log("error!", error)
  }
}

useEffect(() => {
  addPage();
}, [])

const handleChange = (ev) => {
  const value = ev.target.value
  setNewPage({
      ...newPage,
      [ev.target.name]: value
  })
}

const handleSubmit = async (ev) => {
  addPage()
  setNewPage({title: '', content: '', status: '', name: '', email: '' })
}

const backToWikiButton = async () => {
  setSelectedArticle("Page List")
}

return (
  <>
    <form onSubmit={handleSubmit}>
      <div>
        <input className="inputbox" type='text' name='title' placeholder="Title:" value={ newPage.title } onChange={handleChange}/>
      </div>
      <div>
        <input className="inputbox" type='text' name='content' placeholder="Content:" value={ newPage.content } onChange={handleChange}/>
      </div>
      <div>
        <input className="inputbox" type='text' name='status' placeholder="Status:" value={ newPage.status } onChange={handleChange}/>
      </div>
      <div>
        <input className="inputbox" type='text' name='name' placeholder="Author:" value={ newPage.name } onChange={handleChange}/>
      </div>
      <div>
        <input className="inputbox" type='text' name='email' placeholder="Author Email:" value={ newPage.email } onChange={handleChange}/>
      </div>
      <br></br>
      <div>
        <button type='submit'>Create Page</button>
      </div>
      <div>
        <button className='wiki' onClick={backToWikiButton}>Back to Wiki List</button>
      </div>
    </form>
  </>
)}
