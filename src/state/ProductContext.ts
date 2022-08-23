import React from 'react';
import { ProductContextType, Cart } from 'types';

const initialContext: ProductContextType = {
  products: [],
  categories: [],
  cart: {} as Cart,
  addToCart: () => {},
  removeFromCart: () => {},
  decreaseQuantity: () => {},
};

const ProductContext = React.createContext(initialContext);

export default ProductContext;
