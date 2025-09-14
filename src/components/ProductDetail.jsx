import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ItemCount from './ItemCount';

function ProductDetail ({ item }) {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Image src={item?.thumbnail} thumbnail/>
                </Col>
                <Col>
                    <h1>{item?.title}</h1>
                    <p>{item?.description}</p>
                    <h2>$ {item?.price}</h2>
                    <ItemCount/>
                    <button className="btnGray text-light rounded m-1">Agragar a carrito</button>
                </Col>
            </Row>
       </Container>
    )
}

export default ProductDetail