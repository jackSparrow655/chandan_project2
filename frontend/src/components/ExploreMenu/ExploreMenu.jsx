import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>explore our menu</h1>
    <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi ipsum ipsam recusandae inventore minus nostrum quod vero vitae! Culpa quaerat sint quam dolorem soluta.</p>
    <div className="explore-menu-list">
      {
        menu_list.map((item, i) => {
          return (
            <div onClick={()=>setCategory(prev => prev === item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={i}>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })
      }
    </div>
      <hr />
      
    </div>
  )
}

export default ExploreMenu
