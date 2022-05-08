import React from 'react'
import Icon from '../images/icon-music.svg'

export default function Plan() {
    return (
        <div className='card-plan'>
            <div className='card-plan-icon'>
                <img src={Icon} alt='' />
            </div>
            <div className='card-plan-text'>
                <h3>Annual Plan</h3>
                <p>$59.99/year</p>
            </div>
            <div className='card-plan-link'>Change</div>
        </div>
    )
}
