import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contacto() {
  return (
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="Ingresa email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      
      <Button variant="outline-dark">Enviar
      </Button>
    </Form>
  );
}

export default Contacto;
