import { useState } from 'react'
import { RouterProvider, createBrowserRouter,Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'
import './App.css'
import {
  LoginSignup,
  Dashboard,
  // Checkout,
  // Homelayout,
  Landing,
  PageNotFound
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


  const GoogleAuthWrapper = () => {
    return <GoogleOAuthProvider clientId='25419899596-8l27titrr3q4qne1l4ish6lluar305ag.apps.googleusercontent.com'>
      <LoginSignup type="signup"></LoginSignup>
    </GoogleOAuthProvider>
  } 

const router = createBrowserRouter([
  { path: '/login',element: <LoginSignup type="login"/>},
  { path: '/signup',element: <GoogleAuthWrapper type="signup"/>},
  { path: '/dashboard',element: <Dashboard isLoggedin={true}/>},
  { path: '/',element: <Landing/>},
  { path: '*',element: <PageNotFound/>},

]);





function App() {


  return <RouterProvider router={router} />;
}

export default App
