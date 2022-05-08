import React from 'react'
import Bg from '../images/illustration-hero.svg'

export default function CardImageBanner() {
    return (
        <div className='card-image-banner'>
            {/* <BackgroundImage /> */}
            <img src={Bg} alt='illustration hero' />
        </div>
    )
}
