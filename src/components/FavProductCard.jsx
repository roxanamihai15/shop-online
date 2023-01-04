import React from 'react'
import { Button, Col } from 'react-bootstrap'

import { useContext } from 'react'
import CartContext from '../context/CartContext'


function FavProductCard({item}) {

  const {removeItemFromFav} = useContext(CartContext)


  return (
    <Col className='mb-5'>
        <div className='product-card-mini p-3 h-100 d-flex flex-column rounded border'>
            <h3>{item.title}</h3>
            <img src={item.image} alt="" className='d-block mx-auto mt-auto' />  
            {/* <p>{item.description}</p> */}

            <div className='ms-auto gap-2 '>
                <Button variant='danger' size='sm' onClick={() => removeItemFromFav(item.id)}>Remove</Button>
            </div>
                    
        </div>
    </Col>

  )
}

export default FavProductCard