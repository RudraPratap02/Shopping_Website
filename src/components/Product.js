import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, pricing, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                pricing: pricing,
                rating: rating,
            }
        })
    }

  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{pricing}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                ))}
            </div>
        </div>
        <img 
            src={image}
            alt = ""
        />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product