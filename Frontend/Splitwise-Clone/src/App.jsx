import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  LoginSignup,
  Dashboard,
  // Checkout,
  // Homelayout,
  Landing,
  // Login,
  // OrderConfirmation,
  // OrderHistory,
  // Register,
  // Search,
  // Shop,
  // SingleOrderHistory,
  // SingleProduct,
  // Signup,
  // UserProfile,
} from './pages'
import './App.css'


const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Homelayout />,
  // },
  { path: '/login',element: <LoginSignup type="login"/>},
  { path: '/signup',element: <LoginSignup type="signup"/>},
  { path: '/dashboard',element: <Dashboard isLoggedin={true}/>},
  { path: '/',element: <Landing/>},

  // {
  //   path: '/register',
  //   element: <Signup />,
  // },
  // {
  //   path: '/cart',
  //   element: <Cart />,
  // },
]);









function App() {

  return <RouterProvider router={router} />;
}

export default App
