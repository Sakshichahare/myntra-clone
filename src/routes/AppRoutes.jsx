import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Men from "../pages/Men"
import Women from "../pages/Women"
import Wishlist from "../pages/Wishlist"
import Bag from "../pages/Bag"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import HomeLiving from "../pages/HomeLiving"
import Kids from "../pages/Kids"
import Beauty from "../pages/Beauty"
import Offers from "../pages/Offers"
import SearchResults from "../pages/SearchResults"
import ProtectedRoute from "../components/ProtectedRoute"


function AppRoutes() {

  return (

    <Routes>

       <Route path="/" element={<Home />} />

      <Route path="/home" element={<Home />} />

      <Route path="/men" element={<Men />} />

      <Route path="/women" element={<Women />} />

      <Route
        path="/wishlist"
        element={
        <ProtectedRoute>
         <Wishlist />
        </ProtectedRoute>
         }
      />

      <Route
       path="/bag"
       element={
        <ProtectedRoute>
          <Bag />
       </ProtectedRoute>
       }
      />

      <Route path="/login" element={<Login />} />

      <Route path="/profile"  element={
        <ProtectedRoute>
         <Profile />
         </ProtectedRoute>}/>

      <Route path="/home-living" element={<HomeLiving />} />

      <Route path="/kids" element={<Kids />} />

       <Route path="/beauty" element={<Beauty />} />

       <Route path="/offers"  element={<Offers />} />

       <Route path="/search"  element={<SearchResults />} />
                                                   
 

      
    </Routes>

  )

}

export default AppRoutes