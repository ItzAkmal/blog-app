import React, { useState, useContext } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { BlogContext } from '../../contexts/BlogContext'

const BlogForm = (props) => {
	const { addBlog } = useContext(BlogContext)
	const [title, setTitle] = useState('')
	const [blog, setBlog] = useState('')
	const [titleHelper, setTitleHelper] = useState('')
	const [blogHelper, setBlogHelper] = useState('')

	const submitBlog = (e) => {
		e.preventDefault()

		if (title === '') {
			setTitleHelper('Add a title!')
		} else {
			setTitleHelper('')
		}

		if (blog === '') {
			setBlogHelper('Add a blog!')
		} else {
			setBlogHelper('')
		}

		if (title !== '' && blog !== '') {
			const newBlog = { title: title, content: blog }
			addBlog(newBlog)
			setTitle('')
			setBlog('')
			props.history.push('/')
		}
	}

	return (
		<div className='container'>
			<div className='row'>
				<form className='col s12' onSubmit={submitBlog}>
					<div className='row'>
						<div className='input-field col s6'>
							<input
								id='input_text'
								type='text'
								data-length='10'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<label htmlFor='input_text'>Add Title</label>
							<span className='helper-text'>{titleHelper}</span>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s12'>
							<textarea
								id='textarea2'
								className='materialize-textarea'
								data-length='120'
								value={blog}
								onChange={(e) => setBlog(e.target.value)}></textarea>
							<label htmlFor='textarea2'>Blog</label>
							<span className='helper-text'>{blogHelper}</span>
						</div>
					</div>
					<button
						className='waves-effect waves-light btn teal darken-1'
						type='submit'
						value='Add Blog'>
						Add Blog
					</button>
				</form>
			</div>
		</div>
	)
}

export default BlogForm
