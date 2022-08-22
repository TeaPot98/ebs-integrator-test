import React, { useEffect, useState } from 'react'

import { Product, Cart } from 'types'
import ProductContext from './context'

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Cart>({} as Cart)
  
  useEffect(() => {
    fetch('http://localhost:3001/api/products/')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error(error.message))
  }, [])

  const addToCart = (product: Product) => {
    setCart(prevState => ({
      ...prevState,
      [product.name]: {
        product: product,
        quantity: prevState.hasOwnProperty(product.name) ? prevState[product.name].quantity + 1 : 1
      }
    }))
  }

  const removeFromCart = (product: Product) => {
    if (cart.hasOwnProperty(product.name)) {
      setCart(prevState => {
        const {[product.name]: remove, ...rest} = prevState
        return rest
      })
    }
  }

  const decreaseQuantity = (product: Product) => {
    if (cart[product.name].quantity === 1) {
      removeFromCart(product)
      return
    }
    setCart(prevState => ({
      ...prevState,
      [product.name]: {
        product: prevState[product.name].product,
        quantity: prevState[product.name].quantity - 1
      }
    }))
  }

  return (
    <ProductContext.Provider value={{
      products: products,
      cart: cart,
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      decreaseQuantity: decreaseQuantity,
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider