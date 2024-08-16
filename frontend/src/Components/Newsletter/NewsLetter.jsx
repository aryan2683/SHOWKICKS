import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Email ❤️</h1>
        <p>Suscribe to our Newsletter to stay updated !</p>
        <div>
            <input type="email" placeholder="Your Email Id"></input>
<button>Suscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter