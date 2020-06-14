import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import BlogList from './components/BlogList/BlogList'
import BlogForm from './components/BlogForm/BlogForm'
import BlogDetails from './components/BlogDetails/BlogDetails'
import BlogContextProvider from './contexts/BlogContext'

function App() {
	return (
		<div className='App bg-secondary'>
			<BlogContextProvider>
				<Router>
					<NavBar />
					<Switch>
						<Route exact path='/' component={BlogList} />
						<Route path='/addblog' component={BlogForm} />
						<Route path='/blogs/:id' component={BlogDetails} />
					</Switch>
				</Router>
			</BlogContextProvider>
		</div>
	)
}

export default App
