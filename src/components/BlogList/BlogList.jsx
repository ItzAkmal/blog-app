import React, { useContext } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from 'react-router-dom'
import { BlogContext } from '../../contexts/BlogContext'

const BlogList = () => {
	const { blogs } = useContext(BlogContext)

	if (blogs.length !== 0) {
		return (
			<div className='container row'>
				{blogs.map((blog) => {
					const content = blog.content.slice(0, 200)
					const link = '/blogs/' + blog.id
					return (
						<div
							className='card col s12 m5 offset-m1 center-align indigo lighten-2 white-text'
							key={blog.id}>
							<div className='card-title'>{blog.title}</div>
							<div className='card-content'>{content}...</div>
							<div className='card-action'>
								<Link to={link} className='btn teal darken-1'>
									Read more..
								</Link>
							</div>
						</div>
					)
				})}
			</div>
		)
	} else {
		return (
			<div className='container'>
				<h5 className='center-align'>No Available Blogs</h5>
				<br />
				<h5 className='center-align'>
					CLick "Add new blog" to create a blog post
				</h5>
			</div>
		)
	}
}

export default BlogList
