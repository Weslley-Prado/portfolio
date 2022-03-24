import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from '../components/home/Home'
import Product from "../components/products/Products";
import UserCrud from '../components/user/UserCrud'


export default props => (

    <Routes>
        <Route exact path='/' element={< Home />} />
        <Route path='/users' element={< UserCrud />} />
        <Route path="/products" element={<Product />} />
        <Route path="*" element = { < Home />} />
    </Routes>
);  