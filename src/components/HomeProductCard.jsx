import { Button, Card, Col } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../context/CartContext';


function HomeProductCard( {specificProductItem}) {

    const {addToCart} = useContext(CartContext)
    const {addToFav} = useContext(CartContext)

  return (
         <Col className="mb-4">
            <Card className="h-100">
                <Card.Img className="img-card" src={specificProductItem.image} alt={specificProductItem.title} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className="text-hidden fs-5">{specificProductItem.title}</Card.Title>
                    <Card.Text className='text-muted text-end'>{specificProductItem.price}€</Card.Text>
                    <div className="buttons d-flex gap-2 justify-content-end mt-auto" id={specificProductItem.id}>
                        <Button variant="outline-dark" className='px-4' onClick={() => addToFav(specificProductItem)} >add to fav</Button>
                        <Button variant="dark" className='px-4' onClick={() => addToCart(specificProductItem)} >add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
  )
}

export default HomeProductCard