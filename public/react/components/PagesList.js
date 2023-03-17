import React, {useEffect} from 'react';
import apiURL from '../api'

export const PagesList = ({ pages, setCurrentPage, setArticleData, setSelectedPage }) => {

  //GET fetch req
	const fetchPage = async() => {
		const res = await fetch(`${apiURL}/wiki/${(pages.slug)}`)
		const articleData = await res.json()
		setArticleData(articleData)
	}

	const handleClick = (e) => {
		setCurrentPage(pages)
		fetchPage()
		setSelectedPage("Single Page")
	}

	return (
		<>
			<p><button onClick={handleClick}>{pages.title}</button></p>
		</>
	)
} 
