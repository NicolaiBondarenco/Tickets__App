import { useState } from 'react'
import './App.css'
import Filter from './Components/Filter/Filter'
import Items from './Components/Items/Items'

const App = () => {
  const [dataCheckBox, setDataCheckBox] = useState([])

  const changeData = (e) => {
    if (e.target.checked) {
      setDataCheckBox((prev) => [...prev, e.target.value])
    } else if (e.target.checked === false) {
      let newArr = dataCheckBox.filter((el) => el !== e.target.value)
      setDataCheckBox(() => newArr)
    }
  }

  return (
    <div className="app">
      <Filter changeData={changeData} />
      <Items dataCheckBox={dataCheckBox} />
    </div>
  )
}

export default App
