import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart, { loader as cartLoader } from './features/cart/Cart';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import { SearchProvider } from './contexts/SearchContext';
import { SortProvider } from './contexts/SortContext';
import { CartProvider } from './contexts/CartContext';
import Map from './features/Map/Map';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { element: <Home />, path: '/' },
      { element: <Menu />, path: '/menu', loader: menuLoader },
      { element: <Cart />, path: '/cart', loader: cartLoader },
      { element: <CreateOrder />, path: '/order/new' },
      { element: <Map />, path: '/cart/map' },
      { element: <Order />, path: '/order/order:id' },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <SortProvider>
          <RouterProvider router={router} />
        </SortProvider>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
