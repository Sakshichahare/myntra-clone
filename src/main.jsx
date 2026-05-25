//import { StrictMode } from 'react'


import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter} from "react-router-dom"
import App from './App'
import './index.css'
import { Toaster } from "react-hot-toast"


import { ProductProvider } from "./context/ProductContext"
import AuthProvider from "./context/AuthContext"
import { WishlistProvider} from "./context/WishlistContext"
import { BagProvider } from "./context/BagContext"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

    

      <AuthProvider>

        <WishlistProvider >

          <BagProvider >
            
          <ProductProvider>

         <App />

         <Toaster />

         </ProductProvider>

           </BagProvider>


         </WishlistProvider>

    </AuthProvider>

    

    </BrowserRouter>

  </React.StrictMode>
)
