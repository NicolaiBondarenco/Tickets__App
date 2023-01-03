import './Filter.css'

const Filter = ({ changeData }) => {
  return (
    <div className="filter">
      <h3 className="filter__title">Колличетсво пересадок</h3>
      <div className="filter__withoutChange">
        <input
          type="checkbox"
          id="withoutChange"
          value="0"
          onChange={(e) => changeData(e)}
        />
        <label htmlFor="withoutChange">Без пересадок</label>
      </div>
      <div className="filter__oneChange">
        <input
          type="checkbox"
          id="oneChange"
          value="1"
          onChange={(e) => changeData(e)}
        />
        <label htmlFor="oneChange">Одна пересадка</label>
      </div>
      <div className="filter__twoChange">
        <input
          type="checkbox"
          id="twoChange"
          value="2"
          onChange={(e) => changeData(e)}
        />
        <label htmlFor="twoChange">Две пересадки</label>
      </div>
      <div className="filter__threeChange">
        <input
          type="checkbox"
          id="threeChange"
          value="3"
          onChange={(e) => changeData(e)}
        />
        <label htmlFor="threeChange">Три пересадки</label>
      </div>
    </div>
  )
}

export default Filter
