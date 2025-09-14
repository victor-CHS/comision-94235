import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router';

function NavBar ({ categories }) {

  return (
   <>
     {[false].map((expand) => (
       <Navbar key={expand} expand={expand} className="bg-black mb-3">
         <Container fluid>
           <Navbar.Brand as={Link} to="/" className='text-light'>ChanXStore</Navbar.Brand>
           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-light'/>
           <Navbar.Offcanvas
             id={`offcanvasNavbar-expand-${expand}`}
             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
             placement="end"
           >
             <Offcanvas.Header closeButton>
               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 MENU
               </Offcanvas.Title>
             </Offcanvas.Header>
             <Offcanvas.Body className='bg-black'>
               <Nav className="justify-content-end flex-grow-1 pe-3 text-light">
                 <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                 <Nav.Link href="#action2">Nosotros</Nav.Link>
                 <NavDropdown
                   title="Categorias"
                   id={`offcanvasNavbarDropdown-expand-${expand}`}>
                  {categories.map (category => (
                    <NavDropdown.Item as={NavLink} to={`/category/${category}`} key={category}>{category}</NavDropdown.Item> 
                  ))} 
                 </NavDropdown>
               </Nav>
               <Form className="d-flex">
                 <Form.Control
                   type="search"
                   placeholder="Buscar"
                   className="me-2"
                   aria-label="Search"
                 />
                 <Button variant="outline-success">Buscar</Button>
               </Form>
             </Offcanvas.Body>
           </Navbar.Offcanvas>
           <CartWidget/>
         </Container>
       </Navbar>
     ))}    
   </>
 );
}


export default NavBar