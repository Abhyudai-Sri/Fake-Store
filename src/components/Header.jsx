import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

  const item = useSelector((state) => state.cart?.products)

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">FAKE-STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
            <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className='d-flex justify-content-end '>
            <h4 className='px-2'>
              <Link to="/cart">Cart - ({item.length})</Link>
            </h4>
            <IoMdCart className='me-4 mt-2 text-white'/>
        </div>
    </Navbar>
  );
}

export default Header;