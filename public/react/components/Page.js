import React, {useState} from 'react';
import apiURL from '../api'

export const Page = ({articleData, fetchPages, setSelectedArticle, currentPage}) => {

  //DELETE fetch req
  const fetchDelete = async() => {
    const res = await fetch(`${apiURL}/wiki/${(currentPage.slug)}`, {
      method: 'DELETE'
    })
    fetchPages()
    setSelectedArticle("Page List")
  }

  const handleDelete = (ev) => {
    fetchDelete()
  }
  
  const backToWikiButton = async () => {
    setSelectedArticle("Page List")
  }

  //testing console.logs
  console.log('article data', articleData)
  console.log('current page:', currentPage)
 
  //converting date data to readable date 
  let date = new Date(currentPage.createdAt).toLocaleDateString()
  console.log(date)

  //author & tags not working - unable to retrieve info from nested objects
  return (
    <>
      <h2>{currentPage.title}</h2>
      <p>Author: {articleData.name}</p>
      <p>Published: {date}</p>
      <p>Content: {currentPage.content}</p>
      <p>Tags: {articleData.tag}</p>
      <div>
        <br></br>
        <button id='delete' onClick={handleDelete}>Delete Article</button>
        <button className='wiki' onClick={backToWikiButton}>Back to Wiki List</button>
      </div>
    </>
  )
} 