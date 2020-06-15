import React, { useContext } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from 'react-router-dom'
import { BlogContext } from '../../contexts/BlogContext'

const BlogList = () => {
	const { blogs } = useContext(BlogContext)

	return (
		<div className='container row'>
			{blogs.map((blog) => {
				const content = blog.content.slice(0, 200)
				const link = '/blogs/' + blog.id
				return (
					<div class='card col s12 m5 offset-m1 center-align indigo lighten-2 white-text'>
						<div class='card-title'>{blog.title}</div>
						<div class='card-content'>{content}...</div>
						<div className='card-action'>
							<Link to={link} class='btn teal darken-1'>
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
