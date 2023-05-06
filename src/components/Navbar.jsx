import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav className='bg-dark d-flex'>
      
    
      <Nav.Item className=''>
        <Nav.Link className='text-warning text-decoration-none' href="/home">Home <span className='icon-nav'>🏡</span></Nav.Link>
      </Nav.Item>
      <Nav.Item className=''>
        <Nav.Link className='text-warning text-decoration-none' href="/contacto">Contactos <span className='icon-nav'>📘</span> </Nav.Link>
      </Nav.Item>
      <Nav.Item className='ms-auto'>
        <Nav.Link className='text-warning text-decoration-none'>Happy Cake <span classnName="icon-nav">🧁</span></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;