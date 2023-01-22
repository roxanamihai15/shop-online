import { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap"
import CartContext from '../context/CartContext';
import NavDropdown from 'react-bootstrap/NavDropdown';




function NavbarComponent() {

  const {cartItems} = useContext(CartContext)
  const {favItems} = useContext(CartContext)


  return (
    <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
        <Container>

          <Navbar.Brand to="/" as={NavLink} className='logo fs-2'>Shop Online</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='text-end me-3'>
            <Nav className="ms-auto">              
                <Nav.Link to="/" as={NavLink} eventKey="1" >Home</Nav.Link>
                <Nav.Link to="/preferiti"  as={NavLink} eventKey="2">Preferiti [{favItems.length}]</Nav.Link>
                <Nav.Link to="/carrello"  as={NavLink} eventKey="3">Carrello [{
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