import React, { useContext } from 'react'
import './BlogList.css'
import { Link } from 'react-router-dom'
import { BlogContext } from '../../contexts/BlogContext'

const BlogList = () => {
	const { blogs } = useContext(BlogContext)

	return (
		<div className='container blogs'>
			{blogs.map((blog) => {
				const content = blog.content.slice(0, 200)
				const link = '/blogs/' + blog.id
				return (
					<div class='card text-center mt-3 bg-dark text-light'>
						<div class='card-body'>
							<h3 class='card-title'>{blog.title}</h3>
							<p class='card-text'>{content}...</p>
							<Link to={link} class='btn btn-primary'>
								Read more..
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default BlogList
