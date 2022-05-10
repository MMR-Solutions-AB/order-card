import React from 'react'
import CardImageBanner from './CardImageBanner'
import Plan from './Plan'

export default function Card() {
    return (
        <div className='card'>
            <CardImageBanner />
            <div className='card-content'>
                <h1 className='card-title'>Order Summary</h1>
                <p className='card-description'>
                    You can now listen to millions of songs, audiobooks, and
                    podcasts on any device anywhere you like!
                </p>

                <Plan />
                <button className='button-purple'>Proceed to Payment</button>
                <button className='button'>Cancel Order</button>
            </div>
        </div>
    )
}
