import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Cart from '../Pages/Cart'
import SingleProductPage from '../Pages/SingleProductPage'


export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/singleProduct/:id" element={<SingleProductPage  />} />
                <Route path="/cart" element={<Cart />} />




            </Routes>
        </div>
    )
}


