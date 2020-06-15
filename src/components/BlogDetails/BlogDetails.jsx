import React, { useContext } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { BlogContext } from '../../contexts/BlogContext'

const BlogDetails = (props) => {
	const { blogs } = useContext(BlogContext)

	const blog = blogs.filter((el) => {
		return el.id === parseInt(props.match.params.id)
	})

	const goBack = () => {
		props.history.goBack()
	}

	return (
		<div className='container'>
			<div className='card col s12 center-align indigo lighten-2 white-text'>
				<div className='card-title'>{blog[0].title}</div>
				<div className='card-content'>{blog[0].content}Hello...</div>
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
