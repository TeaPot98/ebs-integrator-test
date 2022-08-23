import React, { useContext, useEffect } from 'react';

import ProductContext from 'state/ProductContext';

const CategorySelect = ({ onSelect }: { onSelect: (categoryId: string) => void }) => {
  const { categories } = useContext(ProductContext);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Show All</option>
      {categories.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
