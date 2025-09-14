import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function Item({ item }) {
  const Navigate = useNavigate()
  return (
     <Card style={{ width: '18rem' }} className='cardProducto'>
      <Card.Img variant="top" src={item.thumbnail} className='cardImg' />
       <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.category}</Card.Text>
        <Button variant="primary" onClick={() => Navigate(`/item/${item.id}`)}>
          ver mas
        </Button>
      </Card.Body>
     </Card>
  );
}

export default Item