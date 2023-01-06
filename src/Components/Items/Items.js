import React, { useState } from 'react'
import { sortOfPrice } from '../../Hoc/sortOfPrice'
import { getAllTickets } from '../../Service/getAllTickets'
import './Items.css'

const Items = ({ dataCheckBox }) => {
  const [date, setDate] = useState([])

  getAllTickets().then((res) => setDate(res))

  const getVisibleItems = () => {
    let visible = date.filter((el) => dataCheckBox.includes(el.transfer))
    return sortOfPrice(visible)
  }

  return (
    <div className="items">
      {dataCheckBox.length > 0 ? getVisibleItems() : sortOfPrice(date)}
    </div>
  )
}

export default Items
