import React from 'react'
import { Carousel } from 'antd'
import baner from '../../Data/baner' // ← bu joyda baner.js faylni import qildik
import './Events.css'

const Events = () => {
  return (
      <div className="banners-div">
        <h1>Tadbirlar</h1>
        <Carousel autoplay >
          {baner.map((item, index) => (
            <div key={index} className='banner'>
              <img
                src={item.img}
                alt={item.type}
                className='banner-img'
                style={{ width: '1440px', height: '700px', objectFit: 'cover' }}
              />
              <div className='banner-overlay'>
                <div className='banner-content'>
                  <h2>{item.type}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
  )
}

export default Events
