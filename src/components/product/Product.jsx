import React from 'react';
import './product.css';

const Product = ({ product }) => {
  const { thumbnail,title } = product;
  console.log(product);
  return (
    <div className='cart'>
      <img className='thumnail' src={thumbnail} alt="" />
      <h2> {title} </h2>
      <div className='cart-text'>
         <img className='profile-img' src={product?.authors[0]?.profile_picture} alt="" />
        <div>
          <h4> {product?.authors[0]?.profile_name} </h4>
      <p> Views : {product?.others?.views} </p>
      </div>
     </div>
    </div>
  );
};

export default Product;