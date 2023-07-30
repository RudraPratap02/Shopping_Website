import React from 'react'
import './payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Adress</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>Buddha City Phase - 1</p>
                    <p>Sarnath, Varanasi, U.P.</p>
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and history</h3>
                </div>
                <div className='payment_items'>
                    
                {basket.map(item => (
                    <CheckoutProduct
                    id = {item.id}
                    title={item.title}
                    image = {item.image}
                    rating={item.rating}
                    pricing={item.pricing}
                    />
                ))}
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment