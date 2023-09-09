import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/videos/category/1000')
      .then(res => res.json())
    .then(data=>setProducts(data.data))
  },[])
  return (
    <div>
      <h2>All products</h2>
      <div className='product-container'>
        {
          products.map(product => <Product product={product}  />)
}
      </div>
    </div>
  );
};

export default Products;