
import ProductListFav from "../components/ProductListFav"



function Favorites() {

  // const {favItems} = useContext(CartContext)


  return (
    <div>
        <h1 className='my-5'>Preferiti</h1>
        <ProductListFav />
    </div>
  )
}

export default Favorites


