import React, { useContext } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { BlogContext } from '../../contexts/BlogContext'

const BlogDetails = (props) => {
	const { getBlog } = useContext(BlogContext)

	const blog = getBlog(props.match.params.id)

	const goBack = () => {
		props.history.goBack()
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
				</div>
			</div>
		</div>
	)
}

export default BlogDetails
