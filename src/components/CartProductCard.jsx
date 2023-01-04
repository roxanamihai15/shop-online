import { Button, Col } from 'react-bootstrap'

import { useContext } from 'react'
import CartContext from '../context/CartContext'


function CartProductCard({item}) {

  const {updateQuantity} = useContext(CartContext)
  const {removeItemFromCart} = useContext(CartContext)

  return (
    <Col className='mb-5'>
        <div className='product-card-mini p-3 h-100 d-flex flex-column rounded border'>
            <h3>{item.title}</h3>
            <img src={item.image} alt="" className='d-block mx-auto mt-auto' />  
            <p className='text-center mt-3'>{item.price}€</p>

            <div className='d-flex justify-content-center align-items-center gap-2 '>
                <Button size='sm' onClick={() => updateQuantity(item.id, "-")}> - </Button> 
                <div><span className='fs-5'>{item.quantity}</span></div>
                <Button size='sm' onClick={() => updateQuantity(item.id, "+")}>+</Button>
                <Button variant='danger' size='sm' onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </div>
                    
        </div>
    </Col>

  )
}

export default CartProductCard