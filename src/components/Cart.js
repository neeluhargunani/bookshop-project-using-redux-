import React from 'react'
import {useSelector, useDispatch} from  'react-redux';
import currencyFormatter from "currency-formatter";
import { BsPlus, BsDash, BsBackspaceReverse} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
const Cart=()=> {
    const{products, totalQuantities, totalPrice} = useSelector(state => state.CartReducer )
   const dispatch = useDispatch();
    return (
        <div className="cart">
           <div  className="container">
          <h3>your cart</h3> 
          {products.length > 0 ? <>
              <div className="row">
                  <div className="col-md-6 col-sm-12 col-lg-9 col-xl-9">
                      <div className="cart__heading">
                      <div className="row">
                 <div className="col-2">
                     Picture
                 </div>
                  <div className="col-2">
                      title
                  </div>
                  <div className="col-2">
                      Price
                  </div>
                  <div className="col-2">
                     Inc/Dec
                  </div>
                  <div className="col-2">
                      Total Price
                  </div>
                  <div className="col-2">
                      Remove
                  </div>
               </div>
                      </div>
                      {products.map(product => (
                         <div className="row verticalAlign" key={product.id}>
                         <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12  tcen">
                             <div className="cart__image ">
                                 <img src={`/images/${product.image}`} alt="product_image" />
                             </div>
                         </div>
                         <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 tcen">
                               <div className="cart__name">
                                   {product.title}
                               </div>
                         </div>
                         <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 tcen">
                             <div className="cart__price">
                             {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                           
                             </div>
                         </div>
                         <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12">
                         <div className="details__info cart__incDec">
            <div className="incdec">
                <span className="dec" onClick={()=> dispatch({type: 'DEC', payload:product.id})}><BsDash/></span>
                <span className="quantity">{product.quantity}</span>
                <span className="inc" onClick={()=> dispatch({type:'INC', payload: product.id})}><BsPlus/></span>
                </div>

            </div>
                         </div>
                         <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12">
                         <div className="cart__total text-center">
                         {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'USD' })}
                             </div>

                         </div>
                         <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 tcen">
                             <div className="cart__remove" onClick={()=> dispatch({type: 'REMOVE', payload:product.id})}>
                                 <BsBackspaceReverse/>
                             </div>
                         </div>
                         </div>
                      ))}
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-3 col-xl-3 summary-col">
                      <div class="summary">
                      <div class="summary__heading">
                          Summary
                          </div>
                          <div class="summary__details">
                              <div className="row mb-10">
                                  <div className="col-6">
                                      Total Items:
                                  </div>
                                  <div className="col-6">
                                      {totalQuantities}
                                  </div>
                              </div>
                              <div className="row  mb-10">
                                  <div className="col-6">
                                      Total Price:
                                  </div>
                                  <div className="col-6">
                                  {currencyFormatter.format(totalPrice, { code: 'USD' })}
                           
                                  </div>
                                  </div>
                                  <button type="button" className="checkout"> Checkout</button>
                          </div>
                      </div>
                  </div>
              </div>
           
          </>: 'your cart is empty'}
        </div>
        </div>
    )
}

export default Cart
