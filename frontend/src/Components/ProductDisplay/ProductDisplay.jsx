import React from 'react'
import './ProductDisplay.css'
import { useContext } from 'react'

import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const { product } = props;
    const{addToCart}=useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""></img>
                    <img src={product.image} alt=""></img>
                    <img src={product.image} alt=""></img>
                    <img src={product.image} alt=""></img>
                </div>
                <div className="productdsiplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.new_price}
                    </div>

                </div>
                <div className="productdisplay-right-description">
                    The radiance lives on with the b-ball original. Crossing hardwood comfort with off-court flair, it puts a fresh spin on what you know best: '80s-inspired construction, bold details and nothin'-but-net style.

                    Colour Shown: Black/Black/White
                    Style: DV0788-001
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>UK 5</div>
                        <div>UK 6</div>
                        <div>UK 7</div>
                        <div>UK 8</div>
                        <div>UK 9</div>
                        <div>UK 10</div>

                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Tags:</span> Styling,Modern,Lifestyle</p>
                <p className="productdisplay-right-category"><span>Category:</span> Women,Sneakers,Dunks</p>


            </div>
        </div>
    )
}

export default ProductDisplay