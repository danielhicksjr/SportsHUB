import React from 'react'
import { Link } from 'react-router-dom'
// import {
// 	Collapse,
// 	Navbar,
// 	NavbarToggler,
// 	NavbarBrand,
// 	Nav,
// 	NavItem,
// 	NavLink,
// 	UncontrolledDropdown,
// 	DropdownToggle,
// 	DropdownMenu,
// 	DropdownItem } from 'reactstrap';


const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<Link to="/">Home</Link>
			<Link to='/profile'>Profile</Link>
			
			
			{props.currentUser
				? (
					<span>
						<Link to="/questions/new">Ask Question</Link>
						<Link to="/logout">Log Out</Link>
						{/* <Link to=''>Favorite Team</Link>  */}
					</span>
				)
				: (
					<span>
						<Link to="/login">Log In</Link>
						<Link to="/signup">Sign Up</Link>
					</span>
				)
			}
		</div>
	)
}

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">SportsHUB</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/">Home</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href='/profile'>Profile</NavLink>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Option 1
//                   </DropdownItem>
//                   <DropdownItem>
//                     Option 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }



export default NavBar