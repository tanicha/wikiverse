import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page'
import { Article } from './Article'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

//highest component states
const [pages, setPages] = useState([]);
const [articleData, setArticleData] = useState({})
const [selectedArticle, setSelectedArticle] = useState('Page List')
const [currentPage, setCurrentPage] = useState({})
const [newPage, setNewPage] = useState({title: '', content: '', status: '', name: ''})

async function fetchPages(){
	try {
		const response = await fetch(`${apiURL}/wiki`)
		const pagesData = await response.json();
		setPages(pagesData);
	} catch (error) {
		console.log("Oh no an error! ", error)
	}
}

useEffect(() => {
	fetchPages();
}, []);

const addPageButton = () => {
	setSelectedArticle("Add Page")
}

//conditional statement to render specific page
if (selectedArticle === "Page List"){
	return (
		<main>	
			<h1 id='h1'>WikiVerse</h1>
			<h2 id='h2'>An interesting 📚</h2>
			<br></br>
			<div><button id='addpage' onClick={addPageButton}>Add Page</button></div>
			<br></br>
			<p id='text'>Published Articles:</p>
			<br></br>
			<div>
				{pages.map((pages, idx) => <PagesList 
				pages={pages} 
				key={idx} 
				setSelectedArticle={setSelectedArticle} 
				setCurrentPage={setCurrentPage} 
				setArticleData={setArticleData}/>)}
			</div>
		</main>
)} else if (selectedArticle === "Add Page") {
	return (
		<main>
		<h1>WikiVerse</h1>
		<h2>Add Page:</h2>
		<Article newPage={newPage} setNewPage={setNewPage} setSelectedArticle={setSelectedArticle}/>
		</main>
)} else if (selectedArticle === "Single Page") {
	return(
		<main>
		<h1>WikiVerse</h1>
		<Page setSelectedArticle={setSelectedArticle} currentPage={currentPage} fetchPages={fetchPages} articleData={articleData}/>
		</main>
	)}
}