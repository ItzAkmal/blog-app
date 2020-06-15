import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

const NavBar = () => {
	return (
		<nav className='nav-wrapper indigo lighten-1'>
			<div className='container'>
				<div>
					<Link to='/' className='brand-logo left'>
						Blog-App
					</Link>
				</div>

				<ul className='right'>
					<li>
						<NavLink exact to='/'>
							Blogs
						</NavLink>
					</li>
					<li>
						<NavLink to='/addblog'>Add New Blog</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
