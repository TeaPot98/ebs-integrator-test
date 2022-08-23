import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppContext from 'state/ProductContext';
import { Order } from 'types';

import CategorySelect from './CategorySelect';

const ProductsTable = () => {
  const { products, addToCart, removeFromCart } = useContext(AppContext);
  const [productsToShow, setProductsToShow] = useState(products);
  const [orderByPrice, setOrderByPrice] = useState<Order>('asc');

  useEffect(() => {
    filterByCategory('');
  }, [products]);

  // useEffect(() => {
  //   sortByPrice(orderByPrice);
  // }, [orderByPrice]);

  const filterByCategory = (categoryId: string) => {
    setProductsToShow(categoryId !== '' ? products.filter((p) => p.category.id === categoryId) : products);
    sortByPrice(orderByPrice);
  };

  const sortByPrice = (order: Order) => {
    setProductsToShow((prevState) =>
      prevState.sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price)),
    );
    setOrderByPrice(prevState => prevState === 'asc' ? 'desc' : 'asc')
  };

  return (
    <>
      <Link to="/cart">Shopping Cart</Link>
      <CategorySelect onSelect={filterByCategory} />
      <button onClick={() => sortByPrice(orderByPrice)}>
        {orderByPrice === 'asc' ? 'price ascending' : 'price descending'}
      </button>
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
          {productsToShow.map((p) => (
            <tr key={p.name}>
              <td>{p.category.name}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td align="center">
                <button onClick={() => addToCart(p)}>Add to cart</button>
                <button onClick={() => removeFromCart(p)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductsTable;
