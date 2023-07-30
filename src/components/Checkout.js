import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import CheckoutProduct from './CheckoutProduct.js'
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img 
          className='checkout_ad'
          src = "https://images-na.ssl-images-amazon.com/images/G/01/books/events/pd23/XCM_CUTTLE_1587411_3188662_1500x150_2X_en_US.jpg"
          alt=''
        />

        <div>
          
          <h2 className='checkout_title'>Hello {user?.email}, Your Shopping Cart</h2>
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
      <div className='checkout_right'>
        <Subtotal />
        
      </div>
    </div>
  )
}

export default Checkout