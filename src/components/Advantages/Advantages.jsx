import React from 'react'
import cardsData from '../Data/data'
import './Advantages.css'

const Advantages = () => {
  return (
    <div className='container'>
       <div className='advantages'>
        <h1 className='afzaliklar'>Afzalliklar</h1>
        <img className='star1' src="./src/assets/star1.svg" alt= "" />
        <img className='star2' src="./src/assets/star2.svg" alt="" />
        <div className="cards">
          {cardsData.map(card=>(
            <div className='card' key={card.id}>
              <img src={card.img} alt="" />
              <p className='type' >{card.type}</p>
              <p className='text'>{card.text}</p>
                </div>
          ))}
        </div>
       </div>
    </div>
  )
}

export default Advantages