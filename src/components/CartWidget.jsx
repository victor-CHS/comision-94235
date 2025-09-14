import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartWidget() {
  return (
    <Button variant="light">
      <img src="../src/imagenes/carrito.png" alt="" className='imgCarrito'/> <Badge bg="secondary">5</Badge>
    </Button>
  );
}

export default CartWidget;