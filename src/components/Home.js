import React from 'react';
import { removetocard } from '../services/Actions/actions';

function Home(props){
    console.warn('props',props)
    return(
        <>
            <h1 style={{color: 'blue' }}>SHOPPING CARD </h1>
            <div className='card-wrapper '>
                <div className='img-wrapper item'>
                    <img src='https://www.backmarket.se/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/15023_058cc2ff-d05c-4316-a88a-c7a62b5ed065.jpg'/>
                </div>
                <div className='text-wrapper item' style={{color:'orange'}}>
                    <span >
                        I-Phone
                        Price:$1000.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={() =>
                        props.addtocardHandler({price:1000, name:'I-phone'})
                        }>Add to card</button>
                    <button className= 'remove-cart-btn' onClick={() =>
                        props.removetocardHandler()
                        }>Remove to card</button>
                </div>
            </div>
        </>
    )
}
export default Home