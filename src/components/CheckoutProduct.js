import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, image, title, rating, pricing}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove idea from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
        <img 
            className='checkoutProduct_image'
            src={image}
            alt=''
        />

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <div className='checkoutProduct_price'>
                <small>$</small>
                <strong>{pricing}</strong>
            </div>
            <div className='checkoutProduct_rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => {
                        <p>⭐</p>
                    })
                }
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct