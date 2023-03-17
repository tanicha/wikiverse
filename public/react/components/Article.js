import React, { useEffect } from "react"
import apiURL from "../api"

export const Article = ({ newPage, setNewPage, setSelectedPage }) => {

//POST fetch req
async function uploadPage() {
  try {
    const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/JSON'},
    body: JSON.stringify(newPage)
    }
    const response = await fetch(`${apiURL}/wiki`, requestOptions)
  } catch(err){
    console.log("error!", err)
  }
}

useEffect(() => {
  uploadPage();
}, []);

const handleChange = (e) => {
  const value = e.target.value
  setNewPage({
      ...newPage,
      [e.target.name]: value
  })
}

const handleSubmit = async (e) => {
  uploadPage()
  setNewPage({title: '', content: '', status: '', name: '', email: '' })
}

const backToWikiButton = async () => {
  setSelectedPage("Page List")
}

return (
  <>
    <form onSubmit={handleSubmit}>
      <div><input type='text' name='title' placeholder="Title:" value={ newPage.title } onChange={handleChange}/></div>
      <div><input type='text' name='content' placeholder="Content:" value={ newPage.content } onChange={handleChange}/></div>
      <div><input type='text' name='status' placeholder="Status:" value={ newPage.status } onChange={handleChange}/></div>
      <div><input type='text' name='name' placeholder="Author:" value={ newPage.name } onChange={handleChange}/></div>
      <div><input type='text' name='email' placeholder="Email:" value={ newPage.email } onChange={handleChange}/></div>
      <div><button type='submit'>Create Page</button></div>
      <div><button onClick={backToWikiButton}>Back to Wiki List</button></div>
    </form>
  </>
)}
