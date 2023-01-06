import Item from '../Components/Item/Item'

export const sortOfPrice = (arr) => {
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
