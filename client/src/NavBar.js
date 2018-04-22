import React from 'react'
import { Link } from 'react-router-dom'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap'
	import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = (props) => {
	return (
		
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		
		<a className="navbar-brand" href="/">SportsHUB</a>
		
		
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		  <div className="navbar-nav">
			<a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
			<a class="nav-item nav-link" href="/questions/new">Ask Question</a>

			<a class="nav-item nav-link" href="/profile">Profile</a>
			
			{props.currentUser
					  ? (
						  <span class="navbar1">
		  
			<a class="nav-item nav-link" href="/logout">Log Out</a>
			</span>
					  )
					  : (
						  <span>
			<a class="nav-item nav-link" href="/login">Log In</a>
			
			</span>
					  )
				  }
		  </div>
		</div>
	  </nav>
	  
	)
}








export default NavBar