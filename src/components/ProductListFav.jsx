import { Row } from "react-bootstrap"
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import FavProductCard from "./FavProductCard"

function ProductListFav() {

   const {favItems} = useContext(CartContext)

  return (
    <div className='container-card'>
        <Row xs={1} md={2} lg={3} xxl={4}>
            {favItems.map((elemento, index) => (
                <FavProductCard
                    key={index}
                    item={elemento}
                />
            ))}
        </Row>  
    </div>
  )
}

export default ProductListFav