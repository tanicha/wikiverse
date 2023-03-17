import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page'
import { Article } from './Article'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	//highest component states
	const [pages, setPages] = useState([]);
	const [selectedPage, setSelectedPage] = useState('Page List')
	const [newPage, setNewPage] = useState({title: '', content: '', status: '', name: ''})
	const [currentPage, setCurrentPage] = useState({})
	const [articleData, setArticleData] = useState({})

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	const addPageButton = () => {
		setSelectedPage("Add Page")
	}

	//conditional statement to render specific page
	if (selectedPage === "Page List"){
		return (
			<main>	
				<h1>WikiVerse</h1>
				<h2>An interesting 📚</h2>
				<div><button id='addpage' onClick={addPageButton}>Add Page</button></div>
				<div>
					{pages.map((pages, idx) => <PagesList 
					pages={pages} 
					key={idx} 
					setSelectedPage={setSelectedPage} 
					setCurrentPage={setCurrentPage} 
					setArticleData={setArticleData}/>)}
				</div>
			</main>
	)} else if (selectedPage === "Add Page") {
		return (
			<main>
			<h1>WikiVerse</h1>
			<h2>Add Page:</h2>
			<Article newPage={newPage} setNewPage={setNewPage} setSelectedPage={setSelectedPage}/>
			</main>
	)} else if (selectedPage === "Single Page") {
		return(
			<main>
			<h1>WikiVerse</h1>
			<Page setSelectedPage={setSelectedPage} currentPage={currentPage} fetchPages={fetchPages} articleData={articleData}/>
			</main>
	)}
}