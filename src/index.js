import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
