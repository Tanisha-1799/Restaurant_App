import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom';
import {Navbar,Nav, Image} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faList, faPlus, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';


export default class NavbarMenu extends Component {
  render() {
    return (
      <div>
         <Navbar bg="light" expand="lg">
    <Image className='logo-style' src="logo_image.png" alt='logo'></Image>
        <Navbar.Brand href="#home" className='brand'>
        Resto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/" className='link-style'> <FontAwesomeIcon icon={faHome} color="blueviolet"/> Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/list" className='link-style'> <FontAwesomeIcon icon={faList} color="blueviolet"/> List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/create" className='link-style'> <FontAwesomeIcon icon={faPlus} color="blueviolet"/> Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/search" className='link-style'> <FontAwesomeIcon icon={faSearch} color="blueviolet"/> Search</Link></Nav.Link>
            {
                localStorage.getItem("login")?
                <Nav.Link href="#link"><Link to="/" className='link-style'> <FontAwesomeIcon icon={faUser} color="blueviolet"/> Logout</Link></Nav.Link>
                :
                <Nav.Link href="#link"><Link to="/login" className='link-style'> <FontAwesomeIcon icon={faUser} color="blueviolet"/> Login</Link></Nav.Link>
          
            }
             </Nav>
        </Navbar.Collapse>
      
    </Navbar>
      </div>
    )
  }
}
