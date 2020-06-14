import React, { createContext, useState } from 'react'

const BlogContext = createContext()

const BlogContextProvider = ({ children }) => {
	const [blogs, setBlogs] = useState([])

	const addBlog = (blog) => {
		const newBlogs = [...blogs, blog]
		setBlogs(newBlogs)
	}

	return (
		<BlogContext.Provider value={{ blogs, addBlog }}>
			{children}
		</BlogContext.Provider>
	)
}

export default BlogContextProvider
