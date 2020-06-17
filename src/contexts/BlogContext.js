import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid/dist/v1'

export const BlogContext = createContext()

const BlogContextProvider = (props) => {
	const init = JSON.parse(window.localStorage.getItem('blogs')) || []
	const [blogs, setBlogs] = useState(init)

	const addBlog = (blog) => {
		const createdBlog = { ...blog, id: uuid() }
		const newBlogs = [...blogs, createdBlog]
		setBlogs(newBlogs)
	}

	const getBlog = (id) => {
		const blog = blogs.filter((blog) => {
			return blog.id === id
		})

		return blog[0]
	}

	useEffect(() => {
		window.localStorage.setItem('blogs', JSON.stringify(blogs))
	}, [blogs])

	return (
		<BlogContext.Provider value={{ blogs, addBlog, getBlog }}>
			{props.children}
		</BlogContext.Provider>
	)
}

export default BlogContextProvider
