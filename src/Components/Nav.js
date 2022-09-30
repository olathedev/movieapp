import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
function HomeNav({ title, toggle, toggledark }) {
  return (
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MOVIE <span style={{color: '#bb2d3b'}}>FLIX</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/tv" className="nav-link">Tv Series</Link>
            <Nav.Link href="#features">Popular</Nav.Link>
            <Nav.Link href="#pricing">Tv Series</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <Nav.Link href="#pricing">Comics</Nav.Link>
            <Nav.Link href="#features">Trending</Nav.Link>
            <Nav.Link href="#pricing">People</Nav.Link>
            <Nav.Link href="#features">Trailers</Nav.Link>
            <Nav.Link href="#pricing">Reviews</Nav.Link>
            {/* <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action Movies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Romantic Movies
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Adventure Movies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Horror Movies
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
           <button className="btn btn-light btn-sm" onClick={toggle}>light theme</button> &nbsp;
           <button className="btn btn-danger btn-sm" onClick={toggledark}>dark theme</button>
        </Nav>
        </Navbar.Collapse>
       
      </Container>
      
    </Navbar>
  );
}

export default HomeNav;
