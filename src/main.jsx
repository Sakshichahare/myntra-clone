//import { StrictMode } from 'react'


import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter} from "react-router-dom"
import App from './App'
import './index.css'
import { ProductProvider } from "./context/ProductContext"
import AuthProvider from "./context/AuthContext"
import { WishlistProvider} from "./context/WishlistContext"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

    

      <AuthProvider>

        <WishlistProvider >

          <ProductProvider>

         <App />

         </ProductProvider>

         </WishlistProvider>

    </AuthProvider>

    

    </BrowserRouter>

  </React.StrictMode>
)
