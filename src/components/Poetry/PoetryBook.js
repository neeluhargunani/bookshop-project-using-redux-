import React from 'react'
import {useSelector} from 'react-redux';

import currencyFormatter from "currency-formatter";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PoetryBook = () => {
     const {products} = useSelector(state => state.ProductsPoetryReducer);
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12 text-center py-3 mt-3">
            <h3>Poetry Books</h3>
            <span className="brder"></span>
            </div>
   
        </div>
        <div className="row mt-3">
          
        {products.map(product=>(
          <div className="col-sm-12 col-lg-3 col-xl-3 col-md-6" key ={product.id}>
          <div className="product">
              <div className="product__img">
         <Link to={`/poetrydetails/${product.id}`}><img src={`/images/${product.image}`} alt="product_image"/>
      </Link>
        </div>
       <div className="product__name">
       {product.title}
        </div>
       <div className="row">
       <div className="col-6">
       <div className="product__price">
       <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span> <span classname="discount">{product.discount}%</span>
          
           </div>
           </div>
           <div className="col-6">
           <div className="product__discount__price">
        
           {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
          
           </div>
           </div>
       </div>
              </div>
             
          </div>
        ))}

        </div>
    </div>
    
    );
}

export default PoetryBook
