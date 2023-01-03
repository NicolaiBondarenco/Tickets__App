import React from 'react'
import './Item.css'

const Item = (props) => {
  const {
    price,
    departure,
    arrival,
    timeDeparture,
    timeArrival,
    transfer,
  } = props

  return (
    <div className="item">
      <div className="item__order">
        <h3 className="item__title">Turkish Airlines</h3>
        <button className="item__btn">Купить за {price} руб.</button>
      </div>
      <div className="item__from">
        <h2 className="item__from-time"> {departure} </h2>
        <p className="item__from-place">Владивосток</p>
        <p className="item__from-fullTime">{timeDeparture}</p>
      </div>
      <div className="item__change"> Пересадки: {transfer}</div>
      <div className="item__to">
        <h2 className="item__to-time">{arrival}</h2>
        <p className="item__to-place">Тель-Авив</p>
        <p className="item__to-fullTime"> {timeArrival} </p>
      </div>
    </div>
  )
}

export default Item
