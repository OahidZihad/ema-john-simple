import React from 'react';
import Product from '../Product/Product';
import './Cart.css';

const Cart = (props) => {
    // const totalPrice = props.cart.reduce((total, prd) => total + prd.price, 0);

    //////////////////////// or ////////////////////////////

    let totalPrice = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const prd = props.cart[i];
        totalPrice = totalPrice + prd.price;
    }

    let shipping = 0;
    if(totalPrice > 100){
        shipping = 0;
    }
    else if(totalPrice > 50){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }

    const tax = totalPrice / 15;
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div class="cart">
            <h3 className="order-summary">Order Summary</h3>
            <p className="items-ordered">Items ordered: {props.cart.length}</p>
            <table>
                <tbody>
                    <small>
                    <tr>
                        <td>Product price:</td>
                        <td>${formatNumber(totalPrice)}</td>
                    </tr>
                    <tr>
                        <td>Shipping cost:</td>
                        <td>${shipping}</td>
                    </tr>
                    <tr>
                        <td>Tax + Vat:</td>
                        <td>${formatNumber(tax)}</td>
                    </tr>
                    <tr class="total-row">
                        <td>Order Total:</td>
                        <td>${grandTotal}</td>
                    </tr>
                    </small>
                </tbody>
            </table>
            <a href="/review"><button className="review-button"><span>Review your order</span></button></a>
        </div>
    );
};

export default Cart;