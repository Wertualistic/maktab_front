import React from 'react'
import news from '../../Data/news'
import './News.css'

const News = () => {
  return (
      <div className='news'>
        <h1>News</h1>
        <div className='news-list'>
          {news.map((item, index) => (
            <div className='data-items' key={index}>
              <img src={item.img} alt="" />
              <h4 className={item.type.toLowerCase()}>{item.type}</h4>
              <p>{item.text}</p>
              <span>{item.data}</span>
            </div>
          ))}
        </div>
      </div>
  )
}

export default News
