import React ,{useEffect, useState} from 'react'
import{ useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import currencyFormatter from "currency-formatter";
import { BsPlus, BsDash} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
const PoetryDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsPoetryReducer);
    console.log(product);
    useEffect(() => {
         dispatch({type:'PRODUCT', id})
        },[id])
      const decQuantity = () => {
          if(quantity > 1) {
               setQuantity(quantity-1)
          }
      }
    return (
      
        <div className="container mt-100">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6  ">
<div className="details__image">
<img src={`/images/${product.image}`} alt="" className="img-thumbnail "/>
</div>
 
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6 ">
            <div className="details__name">
            <b>Title : </b> {product.title}
            </div>
            <div className="details__authors">
<b>Authors : </b> {product.authors}
            </div>
            <div className="details__category">
<b>categories : </b> {product.authors}
            </div>
            <div className="details__publisher">
<b>Publisher : </b> {product. publisher}
            </div>
            <div className="details__pageCount">
<b>Page Count : </b> {product.pageCount }
            </div>
            <div className="details__prices">
                <span className="details__actual">
                {currencyFormatter.format(product.price, { code: 'USD' })}
                </span>
                <span className="details__discount">
                {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                </span>
            </div>
            <div className="details__info">
            <div className="incdec">
                <span className="dec" onClick={decQuantity}><BsDash/></span>
                <span className="quantity">{quantity}</span>
                <span className="inc" onClick={() => setQuantity(quantity+1)}><BsPlus/></span>
                <button className="btn-default" onClick={() => dispatch({type:'ADD_TO_CART', payload:{product,quantity}})}>add to cart</button>
                </div>

            </div>
            <div className="details__p">
            <h4>Details</h4>
                {product.desc}
             
            </div>
            <div className="details__p mb-2">
            <h4>preview by link</h4>
                {product.previewLink}
             
            </div>
            </div>
           
             
        </div>
        </div>
      
      
    );
}

export default PoetryDetails;