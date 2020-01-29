import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../../../store/reducers/product'
import ProductCard from '../../ProductCard/componnets/productcard'
import { sortPriceUp, srtPriceDown, setSearchFilter } from '../../../store/actions/products'
import { getProductsSelector } from '../../ProductCard/selectors/getProductsSelector'
import Search from '../../home/Search/Search'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import ButtonSortPrice from '../../ProductCard/ButtonSort/ButtonSortPrice'

const Products = ({ products, getProduct, sortPriceUp, srtPriceDown, setSearchFilter, match }) => {
  const { id } = match.params
  // console.log(id)
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'red' }}>
      <ProductCard
        products={products}
        sortPriceUp={sortPriceUp}
        srtPriceDown={srtPriceDown} />
      <ButtonSortPrice
        srtPriceDown={srtPriceDown}
        sortPriceUp={sortPriceUp} />
    </div>
  )
}

const mapStateToProps = state => ({
  products: getProductsSelector(state),

})
export default compose(
  withRouter,
  connect(mapStateToProps, {
    getProduct,
    sortPriceUp,
    srtPriceDown,
    setSearchFilter,
  }))(Products)
