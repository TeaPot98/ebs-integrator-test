export interface Category {
  id: string;
  name: string;
}

export interface Product {
  name: string;
  category: Category;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ProductContextType {
  products: Product[];
  cart: Cart;
  addToCart: (p: Product) => void;
  removeFromCart: (p: Product) => void;
  decreaseQuantity: (p: Product) => void;
}

export interface Cart {
  [key: string]: CartItem;
}