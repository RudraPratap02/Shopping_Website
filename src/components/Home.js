import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            <img
            className='home_image' 
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/October/GW/Unrec/D60755841_PC_3000x1200de._CB606447388_.jpg' alt='' />

            <div className='home_row'>
                <Product 
                    id = "12321341"
                    title = "The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                    image = "https://books.google.co.in/books/content?id=19forYX7NLQC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2tSLRMY_UIIcdx8YBezIlpoYgFBw&w=1280"
                    pricing = {29.99}
                    rating ={5}
                />
                <Product 
                    id = "49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Styling Kitchen Mixer with K-Baking, Dough hook and Whisk, 5 Litre Glass Bowl"
                    pricing={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/718Bxs69wUL._SX355_.jpg"
                />
            </div>
            <div className='home_row'>
            <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                pricing={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_5X466_.jpg"
            />
            <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                pricing={98.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX425_.jpg"
            />
            <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)-Silver (4th Generation)"
                pricing={598.99}
                rating={4}               
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            </div>
            <div className='home_row'>
                <Product 
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved
                    LED Gaming Monitor Super Ultra Wide Dual WQHD 5120 x 1440"
                    pricing={1094.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81eLDCu76cL._SX450_.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Home