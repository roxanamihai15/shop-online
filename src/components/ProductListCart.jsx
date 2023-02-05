import { Button, Row } from "react-bootstrap"
import { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import CartProductCard from "./CartProductCard"

function ProductsListCart() {

    const {cartItems} = useContext(CartContext)
    const {total} = useContext(CartContext)
    const {getTotal} = useContext(CartContext)
  
    useEffect(() => {
      getTotal();
    }, [cartItems]);

  return (
    <div className='container-card'>
      <Row xs={1} md={2} lg={3} xxl={4}>
        {cartItems.map((elemento, index) => (
              <CartProductCard
                  key={index}
                  item={elemento}
              />
          ))}
      </Row>
      <h4 className='text-end mt-5 fw-normal'>Totale:  {total}€ </h4>
      <Button className="d-block ms-auto mt-3 px-3">Conferma l'ordine</Button>        
    </div>
  )
}

export default ProductsListCart