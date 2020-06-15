import React, { useContext } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { BlogContext } from '../../contexts/BlogContext'

const BlogDetails = () => {
	const { blogs } = useContext(BlogContext)

	return (
		<div className='container'>
			<h1>BlogDetails</h1>
		</div>
	)
}

export default BlogDetails
