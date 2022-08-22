import React from 'react'
import { ProductContextType, CartItem } from 'types'

const initialContext: ProductContextType = {
  products: [],
  cart: {} as { string: CartItem },
  addToCart: () => {},
  removeFromCart: () => {},
  decreaseQuantity: () => {},
}

const ProductContext = React.createContext(initialContext)

export default ProductContext