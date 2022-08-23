import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductsTable from './components/ProductsTable';
import CartTable from 'components/CartTable';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/cart">
          <CartTable />
        </Route>
        <Route path="/">
          <ProductsTable />
        </Route>
      </Switch>
    </>
  );
};

export default App;
