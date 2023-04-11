import {useEffect, useState} from 'react'
import Nav from '../components/Nav';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
  return (
    <div>
        <Nav />
        <div class="page-banner">
                <div class="page-banner__details">
                    <div class="page-banner__details__title">
                        <h1>Our E-commerce Website</h1>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="container">
                    <div class="section__head">
                        <div class="product__details__title">
                            <h2>
                                All Products
                            </h2>
                        </div>
                    </div>
                    <div class="section__content">
                        <div class = "grid three">
                            {products?.map(product => (
                                <ProductCard key={product.id} product={product}/>
                                // <p key={product.id}>{product.title}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Home