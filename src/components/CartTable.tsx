import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from 'state/context'

const CartTable = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useContext(AppContext)
  
  return (
    <>
      <Link to="/">All Products</Link> 
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cart).map(p =>
            <tr key={p}>
              <td>{cart[p].product.category.name}</td>
              <td>{cart[p].product.name}</td>
              <td>{cart[p].quantity}</td>
              <td>${cart[p].product.price}</td>
              <td align='center'>
                <button onClick={() => decreaseQuantity(cart[p].product)}>-</button>
                <button onClick={() => addToCart(cart[p].product)}>+</button>
                <button onClick={() => removeFromCart(cart[p].product)}>Remove</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default CartTable