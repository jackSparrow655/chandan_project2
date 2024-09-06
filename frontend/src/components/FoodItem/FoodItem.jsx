import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
  
  const {cartItem, addToCart, removeFromCart} = useContext(StoreContext)



  return (
    <div className='fooditem'>
      <div className="food-item-image-container">
        <img src={image} alt="" className='food-item-image' />
        {!cartItem[id]
              ? <img src={assets.add_icon_white} className='add' onClick={() => addToCart(id)}/>
              :<div className='food-item-counter'>
                <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)} />
                <p>{cartItem[id]}</p>
                <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} />
              </div>

          
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>

    </div>
  )
}

export default FoodItem
