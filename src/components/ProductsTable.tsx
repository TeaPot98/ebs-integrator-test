import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Product } from 'types'
import AppContext from 'state/context'

const ProductsTable = () => {
  const { products, addToCart, removeFromCart } = useContext(AppContext)
  
  return (
    <>
      <Link to="/cart">Shopping Cart</Link> 
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p =>
            <tr key={p.name}>
              <td>{p.category.name}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td align='center'>
                <button onClick={() => addToCart(p)}>Add to cart</button>
                <button onClick={() => removeFromCart(p)}>Remove</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default ProductsTable