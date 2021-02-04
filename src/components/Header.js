import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar } from 'react-bootstrap';

import {BsFillBagFill } from "react-icons/bs";
import {useSelector} from 'react-redux';

const Header=()=> {
  const {totalQuantities} = useSelector(state => state.CartReducer);
    return (
        <div>
     
  <Navbar collapseOnSelect expand="lg" bg="white" variant="light" >
  <div className="container">
  <Navbar.Brand className="nav__left"><Link to='/'><img src="/images/bookstore-logo.png" className="img-fluid" alt="logo" /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto ">
      <Nav.Link><Link to="/actionbook">Action&Adventure</Link></Nav.Link>
      <Nav.Link><Link to="/comicbook">Comic</Link></Nav.Link>
      <Nav.Link><Link to="/horrorbook">Horrorstories</Link></Nav.Link>
      <Nav.Link><Link to="/educationalbook">Educational</Link></Nav.Link>
      <Nav.Link><Link to="/poetrybook">Poetry</Link></Nav.Link>
      <Nav.Link><Link to="/detectivebook">Detective&Mystry</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link> <Link to="/cart">
                        <div className="basket">
                      <BsFillBagFill className="cart-icon"/>
                       <span>{totalQuantities}</span>
                        </div>
                    </Link></Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
 
 
  </div>
);

}

export default Header
