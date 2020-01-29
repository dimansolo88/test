import {
  GET_PRODUCTS_SUCCESS, SORT_PRICE_UP
  , SORT_PRICE_DOWN,
  setProductsSuccess, SET_SEARCH_FILTER_VALUE,
} from '../actions/products'

import { api } from '../../api'

const initiateState = {
  product: [],
  sortByPriceFilter: '',
  // price ascending
  // price descending
  searchProductsOnName: '',

}

export const product = (state = initiateState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state, product: action.payload,
      }
    case SORT_PRICE_UP:
    case SORT_PRICE_DOWN:
      return {
        ...state, sortByPriceFilter: action.payload,
      }
    case SET_SEARCH_FILTER_VALUE:
      return {
        ...state, searchProductsOnName: action.payload,
      }

    default:
      return state
  }
}

export const getProduct = () => async dispatch => {
  try {
    const res = await api.getProducts()
    dispatch(setProductsSuccess(res.data))
  } catch (e) {
    // console.log(e)
  }
}
