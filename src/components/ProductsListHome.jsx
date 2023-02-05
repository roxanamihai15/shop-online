import { Row } from "react-bootstrap"
import HomeProductCard from './HomeProductCard'

function ProductsListHome( {products} ) {
  return (
    <div className='container-card'>
      <Row xs={1} md={2} lg={3} xxl={4}>
        {products.map((productItem) => {
            return(
                <HomeProductCard key={productItem.id} specificProductItem={productItem} />
            )
        })}
      </Row>  
    </div>
  )
}

export default ProductsListHome