import React, { useContext } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './BlogDetails.css'
import { BlogContext } from '../../contexts/BlogContext'

const BlogDetails = (props) => {
	const { getBlog, deleteBlog } = useContext(BlogContext)

	const blog = getBlog(props.match.params.id)

	const goBack = () => {
		props.history.goBack()
	}

	const removeBlog = () => {
		deleteBlog(blog.id)

		props.history.push('/')
	}

	return (
		<div className='container'>
			<div className='card col s12 center-align indigo lighten-2 white-text'>
				<div className='card-title'>{blog.title}</div>
				<div className='card-content'>{blog.content}</div>
				<div className='card-action'>
					<button className='btn teal darken-1' onClick={goBack}>
						Go Back
					</button>
					<button className='btn teal darken-1' onClick={removeBlog}>
						Delete Blog
					</button>
				</div>
			</div>
		</div>
	)
}

export default BlogDetails
