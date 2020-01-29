import React, { useState } from 'react'
import { SORT_PRICE_DOWN, SORT_PRICE_UP } from '../../products/components/constanties/constanties'

const ButtonSortPrice = ({ srtPriceDown, sortPriceUp }) => {
  const [changeButtonSortPrice, setChangeButtonSortPrice] = useState(false)

  const sortByPriceDown = () => {
    setChangeButtonSortPrice(true)
    srtPriceDown(SORT_PRICE_DOWN)
  }

  const sortByPriceUp = () => {
    setChangeButtonSortPrice(false)
    sortPriceUp(SORT_PRICE_UP)
  }
  return (
    <div style={{ position: 'relative' }}>
      {changeButtonSortPrice ? <button onClick={sortByPriceUp}>price ascending </button>
        : <button onClick={sortByPriceDown}> price descending </button>}

    </div>
  )
}

export default ButtonSortPrice
