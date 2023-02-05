import { useEffect, useState } from 'react'
import ProductsListHome from '../components/ProductsListHome'

function Home() {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
       getAllProducts()
    }, [])

    const getAllProducts = async() => {
        const api = await fetch('https://fakestoreapi.com/products')
        const data = await api.json()
        setAllProducts(data)
        console.log(data);
    }

  return (
    <div>
        <ProductsListHome products={allProducts} />
    </div>
  )
}

export default Home