import React, {useEffect} from 'react';
import apiURL from '../api'

export const PagesList = ({ pages, setCurrentPage, setArticleData, setSelectedArticle }) => {

  //GET fetch req
	const getPage = async() => {
		const res = await fetch(`${apiURL}/wiki/${(pages.slug)}`)
		const articleData = await res.json()
		setArticleData(articleData)
	}

	const handleClick = (ev) => {
		setCurrentPage(pages)
		getPage()
		setSelectedArticle("Single Page")
	}

	return (
		<>
			<p><button onClick={handleClick}>{pages.title}</button></p>
		</>
	)
} 
