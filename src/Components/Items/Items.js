import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './Items.css'

const Items = ({ dataCheckBox }) => {
  const [date, setDate] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tickets.json')
      .then((res) => res.json())
      .then((body) => setDate(body.tickets))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const getVisibleItems = () => {
    let visible = date.filter((el) => dataCheckBox.includes(el.transfer))
    return createTicketsArray(visible)
  }

  const createTicketsArray = (arr) => {
    let arrSum = []
    for (const iterator of arr) {
      arrSum.push(Number(iterator.price + ' '))
      arrSum.sort()
    }
    return arrSum.map((element) => {
      return arr.map((el) => {
        if (el.price === element) return <Item {...el} key={el.id} />
      })
    })
  }

  return (
    <div className="items">
      {dataCheckBox.length > 0 ? getVisibleItems() : createTicketsArray(date)}
    </div>
  )
}

export default Items
