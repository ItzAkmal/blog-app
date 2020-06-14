import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<nav className='navbar navbar-dark bg-dark'>
			<div className='container'>
				<div>
					<Link to='/' className='navbar-brand font-weight-bold'>
						Blog-App
					</Link>
				</div>
				<ul className='nav justify-content-center'>
					<li className='nav-item'>
						<NavLink exact to='/' className='nav-link text-light'>
							Blogs
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/addblog' className='nav-link text-light'>
							Add New Blog
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
