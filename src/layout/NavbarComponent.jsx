import { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap"
import CartContext from '../context/CartContext';



function NavbarComponent() {

    const {cartItems} = useContext(CartContext)
    const {favItems} = useContext(CartContext)


  return (
    <Navbar bg='dark' variant='dark' expand="md" >
        <Container>

          <Navbar.Brand to="/" as={NavLink} className='logo fs-2'>Shop Online</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='text-end me-3'>
            <Nav className="ms-auto">              
                <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
                <Nav.Link to="/preferiti"  as={NavLink}>Preferiti [{favItems.length}]</Nav.Link>
                <Nav.Link to="/carrello"  as={NavLink}>Carrello [{
                    cartItems.reduce(
                    (partialSum, cartProduct) =>
                        partialSum + cartProduct.quantity,
                    0
                )
                }]</Nav.Link>  

            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavbarComponent





// import React, { useContext } from 'react'
// import { Link, NavLink } from "react-router-dom";
// import { Container, Nav, NavbarBrand, NavDropdown } from "react-bootstrap"
// import { Navbar as NavbarBs } from "react-bootstrap"
// import CartContext from '../context/CartContext';



// function Navbar() {

//     const {cartItems} = useContext(CartContext)
//     const {favItems} = useContext(CartContext)


//   return (
//     <>
//     <NavbarBs sticky="top"  bg='dark' variant='dark' >
//         <Container>
//           <NavbarBrand to="/" as={NavLink} className='logo fs-2 d-none d-md-block'>Shop Online</NavbarBrand>

//             <Nav>              
//                 <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
//                 <Nav.Link to="/preferiti"  as={NavLink}>Preferiti [{favItems.length}]</Nav.Link>
//                 <Nav.Link to="/carrello"  as={NavLink}>Carrello [{cartItems.length}]</Nav.Link>
//             </Nav>
//         </Container>
//     </NavbarBs>

// </>
//   )
// }

// export default Navbar