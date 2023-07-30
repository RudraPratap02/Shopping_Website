import React from 'react'
import './Subtotal.css'
// import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useNavigate();
    var totalPrice = 0;
    
    for(var i = 0; i< basket?.length; i++) {
        totalPrice += basket[i].pricing;
    }
  return (
    <div className='subtotal'>
        {/* <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={totalPrice}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"$"}
        /> */}
        <p>
            Subtotal ({basket?.length} items): <strong>$ {totalPrice}</strong>
        </p>
        <small className='subtotal_gift'>
            <input type='checkbox' /> This order contains a gift
        </small>
        <button onClick={e => history("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal