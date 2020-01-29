// ACTIONS
export const GET_PRODUCTS_SUCCESS = 'ONLINE_SHOP/PRODUCTS/GET_PRODUCTS'
export const SORT_PRICE_UP = 'ONLINE_SHOP/PRODUCTS/SORT_PRICE_UP'
export const SORT_PRICE_DOWN = 'ONLINE_SHOP/PRODUCTS/SORT_PRICE_DOWN'
export const SET_SEARCH_FILTER_VALUE = 'ONLINE_SHOP/PRODUCTS/SET_SEARCH_FILTER_VALUE'


// ACTIONS_CREATORS

export const setProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload:products
})

export const sortPriceUp = (property) => ({
    type: SORT_PRICE_UP,
    payload:property
})

export const srtPriceDown = (property) => ({
    type:SORT_PRICE_DOWN, payload: property
})

export const setSearchFilter = (title) => ({
    type:SET_SEARCH_FILTER_VALUE,
    payload:title
})
